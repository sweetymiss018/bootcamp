import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";


const BootcampForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    profession: ''
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    institution: false,
    profession: false
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    profession: ''
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validate form data
  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      institution: '',
      profession: ''
    };

    // Only validate touched mandatory fields
    if (touched.name && formData.name.length < 3) {
      newErrors.name = 'Name must be at least 3 characters long';
    }

    if (touched.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    setErrors(newErrors);

    // Form is valid if mandatory fields are filled and valid
    const isValid = formData.name.length >= 3 && 
                   /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    setIsFormValid(isValid);
    
    return isValid;
  };

  useEffect(() => {
    validateForm();
  }, [formData, touched]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleBlur = (field) => {
    setTouched(prev => ({
      ...prev,
      [field]: true
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Registration submitted successfully!');
      setIsSubmitting(false);
    }
  };

  const getInputClasses = (fieldName) => {
    const baseClasses = "w-full p-3 border rounded-md transition-all duration-300";
    const validClasses = "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
    const errorClasses = "border-red-500 focus:ring-red-500";
    const successClasses = "border-green-500 focus:ring-green-500";
    
    if (touched[fieldName] && errors[fieldName]) {
      return `${baseClasses} ${errorClasses}`;
    }
    if (touched[fieldName] && formData[fieldName].length > 0) {
      return `${baseClasses} ${successClasses}`;
    }
    return `${baseClasses} ${validClasses}`;
  };

  return (
    <div className=" bg-gradient-to-br w-[800px] h-[1200px]  p-8 ">
      <div className="w-full h-full max-w-6xl mx-auto b rounded-xl  overflow-hidden relative">
        <div className="flex flex-col md:flex-row ">
        

          {/* Right side form */}
          <div className="md:w-full p-6 ">
          <div className="text-center mb-2">
      {/* Animated Main Title */}
    <h1 className='text-7xl font-semibold text-amber-950'>Step of Learning Process</h1>

      {/* Animated Subtext */}
      <motion.p
        className="text-amber-950 mt-2 font-mono"
      >
        Bootcamp Registration
      </motion.p>
    </div>
  <form onSubmit={handleSubmit} className="  h-[600px] ">
    {/* Name Field */}
    <div className="transform transition-all duration-300 hover:-translate-y-1">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Full Name <span className="text-red-500">*</span>
      </label>
      <input 
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        onBlur={() => handleBlur('name')}
        className={getInputClasses('name')}
        style={{height: '60px', background:"transparent", border:"1px solid black", outline:"none"}}
        
        required
      />
      {touched.name && errors.name && (
        <p className="text-red-500 text-sm mt-1 animate-shake">{errors.name}</p>
      )}
    </div>

    {/* Email Field */}
    <div className="transform transition-all duration-300 hover:-translate-y-1">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Email Address <span className="text-red-500">*</span>
      </label>
      <input 
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        onBlur={() => handleBlur('email')}
        className={getInputClasses('email')}
        style={{height: '60px', background:"transparent", border:"1px solid black", outline:"none"}}

       
        required
      />
      {touched.email && errors.email && (
        <p className="text-red-500 text-sm mt-1 animate-shake">{errors.email}</p>
      )}
    </div>

    {/* Optional Fields */}
    <div className="space-y-4 pt-2">
      <p className="text-md  italic">Optional Information</p>

      {/* Phone Field */}
      <div className="transform transition-all duration-300 hover:-translate-y-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number
        </label>
        <input 
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md "
          style={{height: '60px', background:"transparent", border:"1px solid black", outline:"none"}}

          
        />
      </div>

      {/* Institution Field */}
      <div className="transform transition-all duration-300 hover:-translate-y-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          University/College
        </label>
        <input 
          type="text"
          name="institution"
          value={formData.institution}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          style={{height: '60px', background:"transparent", border:"1px solid black", outline:"none"}}
        />
      </div>

      {/* Profession Field */}
      <div className="transform transition-all duration-300 hover:-translate-y-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Profession
        </label>
        <input 
          type="text"
          name="profession"
          value={formData.profession}
          onChange={handleChange}
          className="w-full  p-2 border border-gray-300 rounded-md "
          style={{height: '60px', background:"transparent", border:"1px solid black", outline:"none"}}
        />
      </div>
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      disabled={!isFormValid}
      className={`absolute mt-7 w-[50%] h-[55px] p-2.5 rounded-xl transition-all duration-300 transform
        bg-blue-600 text-white
        ${!isFormValid ? 'opacity-50 cursor-not-allowed' : 'hover:bg-amber-950 hover:-translate-y-1 animate-bounce'}
        ${isSubmitting ? 'animate-pulse' : ''}
        focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 `}
    >
      {isSubmitting ? 'Submitting...' : 'Submit Registration'}
    </button>
  </form>
</div>

        </div>
      </div>
    </div>
  );
};

export default BootcampForm;

