// middleware/validation.js
const validateRegistration = (req, res, next) => {
    const { name, email, phone, university, profession } = req.body;
  
    // Validation rules
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
  
    const errors = [];
  
    if (!name || name.length < 2) {
      errors.push('Name must be at least 2 characters long');
    }
  
    if (!email || !emailRegex.test(email)) {
      errors.push('Please provide a valid email address');
    }
  
    if (!phone || !phoneRegex.test(phone)) {
      errors.push('Please provide a valid phone number');
    }
  
    if (!university || university.length < 2) {
      errors.push('University name must be at least 2 characters long');
    }
  
    if (!profession || profession.length < 2) {
      errors.push('Profession must be at least 2 characters long');
    }
  
    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors
      });
    }
  
    next();
  };
  
  module.exports = validateRegistration;