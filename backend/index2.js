const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDb = require('./db/connectDb.js');
const router = require('./routes/student.route.js');
dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// app.use("/", (req, res) => {
//     return res.send("<h1>Hello, World!</h1>");
//   });

app.use("/api",router)

connectDb()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDb connection failed!!!", error);
  });