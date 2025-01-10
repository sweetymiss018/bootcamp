// server.js
const express = require('express');
const cors = require('cors');
const { google } = require('googleapis');
const dotenv = require('dotenv');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const validateRegistration = require('./middlewares/validation');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Google Sheets setup
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets']
});

// Initialize Google Sheets API
const sheets = google.sheets({ version: 'v4', auth });

// Routes
app.post('/api/register', validateRegistration, async (req, res) => {
  try {
    const { name, email, phone, university, profession } = req.body;
    console.log(req.body)
    // Append data to Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Students!A:G', // A to G columns
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          name,
          email,
          phone,
          university,
          profession,
          new Date().toISOString(),
          req.ip // Store IP for audit
        ]]
      }
    });

    res.status(201).json({
      success: true,
      message: 'Registration successful'
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({
      success: false,
      message: 'Registration failed',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// Add this route to test the connection
app.get('/api/test-connection', async (req, res) => {
    try {
      // Try to read the spreadsheet
      const test = await sheets.spreadsheets.get({
        spreadsheetId: process.env.GOOGLE_SHEET_ID
      });
      
      res.json({
        success: true,
        message: 'Connection successful',
        sheetTitle: test.data.properties.title
      });
    } catch (error) {
      console.error('Connection test error:', error);
      res.status(500).json({
        success: false,
        message: 'Connection failed',
        error: error.message
      });
    }
  });

// Get all registrations (protected route)
app.get('/api/registrations', async (req, res) => {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Students!A:G',
    });

    const rows = response.data.values;
    
    if (!rows || rows.length === 0) {
      return res.status(200).json({ registrations: [] });
    }

    // Convert rows to objects
    const headers = rows[0];
    const registrations = rows.slice(1).map(row => {
      const registration = {};
      row.forEach((value, index) => {
        registration[headers[index].toLowerCase()] = value;
      });
      return registration;
    });

    res.status(200).json({ registrations });
  } catch (error) {
    console.error('Fetch error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch registrations'
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something broke!'
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});