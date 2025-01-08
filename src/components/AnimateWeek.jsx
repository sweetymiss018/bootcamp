import React, { useState, useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

const AnimatedWeekCounter = () => {
  const [count, setCount] = useState(0);
  const controls = useAnimationControls();

  useEffect(() => {
    const duration = 2000; // 2 seconds for the count animation
    const steps = 60; // Number of steps for smoother animation
    const increment = 10 / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      if (currentStep < steps) {
        setCount(prev => Math.min(10, prev + increment));
        currentStep++;
      } else {
        clearInterval(timer);
      }
    }, duration / steps);

    // Start the fade-in animation after the count is complete
    setTimeout(() => {
      controls.start({ opacity: 1, y: 0 });
    }, duration);

    return () => clearInterval(timer);
  }, [controls]);

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-6xl md:text-8xl font-bold text-gray-900">
        {Math.round(count * 10) / 10} weeks
      </h1>
      
      {/* Gradient overlay for dynamic effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-wave" />
      
      {/* Animated underline */}
      <motion.div
        className="h-1 bg-blue-600 mt-2"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1.5, delay: 2 }}
      />
      
      {/* Decorative dots */}
      <motion.div
        className="absolute -right-4 -top-4 flex space-x-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-blue-600"
            style={{
              animation: `bounce 1s ${i * 0.2}s infinite`
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

// Add required keyframes for the wave animation
const style = document.createElement('style');
style.textContent = `
  @keyframes wave {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }
  .animate-wave {
    animation: wave 2s infinite linear;
  }
`;
document.head.appendChild(style);

export default AnimatedWeekCounter;