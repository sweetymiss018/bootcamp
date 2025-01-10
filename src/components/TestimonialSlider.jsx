import React, { useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { testimonials } from '../constants/testimonials';

const TestimonialSlider = () => {
  const controls = useAnimationControls();
  
  // Calculate total width of all testimonials (96 units = w-96)
  const totalWidth = testimonials.length * 384; // 384px = w-96 + space-x-48
  
  useEffect(() => {
    const startAnimation = async () => {
      while (true) {
        await controls.start({
          x: -totalWidth,
          transition: {
            duration: testimonials.length * 5, // 5 seconds per testimonial
            ease: "linear",
            repeat: Infinity
          }
        });
      }
    };
    
    startAnimation();
  }, [controls, totalWidth]);

  return (
    <div className="relative overflow-hidden w-full">
      <motion.div 
        className="flex items-center space-x-48 px-8"
        animate={controls}
        initial={{ x: 0 }}
      >
        {/* Original testimonials */}
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={`original-${index}`}
            className={`${testimonial.bgColor} relative flex-shrink-0 w-96 p-6 rounded-3xl shadow-lg`}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            {/* Connecting Circle */}
            <motion.div 
              className="absolute left-[-10px] top-1/2 transform -translate-y-1/2 w-5 h-5 bg-black border-2 border-gray-800 rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 }}
            />
            <div className="absolute top-1/2 transform -left-1/2 -translate-y-1/2 w-1/2 border-t border-black" />

            {/* Testimonial Content */}
            <motion.p 
              className="text-gray-800 text-lg leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              &quot;{testimonial.text}&quot;
            </motion.p>

            {/* User Info */}
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.3 }}
            >
              <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0" />
              <div className="ml-4">
                <p className="font-medium text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.batch}</p>
                {/* <p className="text-sm text-gray-500">{testimonial.role}</p> */}
              </div>
            </motion.div>
            <motion.div 
              className="absolute right-[-10px] top-1/2 transform -translate-y-1/2 w-5 h-5 bg-black border-2 border-gray-800 rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 }}
            />
          </motion.div>
        ))}

        {/* Duplicated testimonials for seamless loop */}
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={`duplicate-${index}`}
            className={`${testimonial.bgColor} relative flex-shrink-0 w-96 p-6 rounded-3xl shadow-lg`}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            {/* Connecting Circle */}
            <motion.div 
              className="absolute left-[-10px] top-1/2 transform -translate-y-1/2 w-5 h-5 bg-black border-2 border-gray-800 rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 }}
            />
            <div className="absolute top-1/2 transform -left-1/2 -translate-y-1/2 w-1/2 border-t border-black" />

            {/* Testimonial Content */}
            <motion.p 
              className="text-gray-800 text-lg leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              &quot;{testimonial.text}&quot;
            </motion.p>

            {/* User Info */}
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.3 }}
            >
              <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0" />
              <div className="ml-4">
                <p className="font-medium text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.batch}</p>
                {/* <p className="text-sm text-gray-500">{testimonial.role}</p> */}
              </div>
            </motion.div>
            <motion.div 
              className="absolute right-[-10px] top-1/2 transform -translate-y-1/2 w-5 h-5 bg-black border-2 border-gray-800 rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TestimonialSlider;