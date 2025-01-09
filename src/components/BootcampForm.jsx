import React, { useState, useEffect } from 'react';

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <div className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left side illustration */}
          <div className="md:w-1/2 bg-blue-50 p-8 flex flex-col justify-center items-center">
            <div className="relative w-full h-96">
              {/* Abstract shapes with animations */}
              <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-50 animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 bg-blue-300 rounded-full opacity-50 animate-bounce"></div>
              
              {/* Main illustration with animations */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64">
                <div className="absolute bottom-0 w-48 h-32 bg-blue-600 rounded-t-lg transform hover:scale-105 transition-transform"></div>
                <div className="absolute bottom-0 w-64 h-2 bg-blue-800 rounded-full"></div>
                
                <div className="absolute top-0 left-4 w-16 h-16 bg-blue-400 rounded-full animate-bounce">
                  <div className="absolute -top-8 w-8 h-8 bg-blue-400 rounded-full"></div>
                </div>
                <div className="absolute top-8 right-4 w-16 h-16 bg-blue-500 rounded-full animate-bounce delay-100">
                  <div className="absolute -top-8 w-8 h-8 bg-blue-500 rounded-full"></div>
                </div>
                
                <div className="absolute top-4 left-20 text-4xl text-blue-600 animate-pulse">{`{ }`}</div>
                <div className="absolute bottom-40 right-4 text-3xl text-blue-500 animate-pulse delay-150">{`</>`}</div>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-blue-800 mt-4">Join Our Bootcamp</h2>
            <p className="text-blue-600 mt-2 text-center">Learn, Code, Build, Succeed!</p>
          </div>

          {/* Right side form */}
          <div className="md:w-1/2 p-12 bg-white">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-800">Step of Learning Process</h1>
              <p className="text-gray-600">Bootcamp Registration</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="transform transition-all duration-300 hover:-translate-y-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={() => handleBlur('name')}
                  className={getInputClasses('name')}
                  placeholder="Enter your full name"
                  required
                />
                {touched.name && errors.name && (
                  <p className="text-red-500 text-sm mt-1 animate-shake">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="transform transition-all duration-300 hover:-translate-y-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={() => handleBlur('email')}
                  className={getInputClasses('email')}
                  placeholder="Enter your email"
                  required
                />
                {touched.email && errors.email && (
                  <p className="text-red-500 text-sm mt-1 animate-shake">{errors.email}</p>
                )}
              </div>

              {/* Optional Fields */}
              <div className="space-y-6 pt-4">
                <p className="text-sm text-gray-500 italic">Optional Information</p>
                
                {/* Phone Field */}
                <div className="transform transition-all duration-300 hover:-translate-y-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Institution Field */}
                <div className="transform transition-all duration-300 hover:-translate-y-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    University/College
                  </label>
                  <input
                    type="text"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your institution name"
                  />
                </div>

                {/* Profession Field */}
                <div className="transform transition-all duration-300 hover:-translate-y-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Profession
                  </label>
                  <input
                    type="text"
                    name="profession"
                    value={formData.profession}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your profession"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full p-3 rounded-md transition-all duration-300 transform
                  bg-blue-500 text-white
                  ${!isFormValid ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600 hover:-translate-y-1 animate-bounce'}
                  ${isSubmitting ? 'animate-pulse' : ''}
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
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