import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 3,
    minutes: 30,
    seconds: 0,
  });

  const [totalSeconds, setTotalSeconds] = useState(0);

  useEffect(() => {
    // Convert current time to total seconds
    const total = timeLeft.hours * 3600 + timeLeft.minutes * 60 + timeLeft.seconds;
    setTotalSeconds(total);


    // Update main timer every second
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) {
          clearInterval(timer);
          return prev;
        }

        let newSeconds = prev.seconds - 1;
        let newMinutes = prev.minutes;
        let newHours = prev.hours;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }

        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }

        return {
          ...prev,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds
        };
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // Get text color based on time left
  const getTextColor = () => {
    if (timeLeft.hours <= 1) return 'text-red-500';
    if (timeLeft.hours <= 3) return 'text-amber-500';
    return 'text-blue-500';
  };

  // Get animation classes based on time left
  const getAnimationClasses = () => {
    if (timeLeft.hours === 0 && timeLeft.minutes <= 30) {
      return 'animate-pulse';
    }
    return '';
  };

  // Format number to always show two digits
  const formatNumber = (num) => num.toString().padStart(2, '0');


  return (
    <div className="min-h-screen bg-yellow-100 flex items-center justify-center">
      <div className={`relative p-12 rounded-3xl shadow-lg transform hover:scale-105 transition-all duration-500 bg-gray-300 ${getAnimationClasses()}`}>
        {/* Floating background elements */}
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-8 -right-4 w-24 h-24 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-24 h-24 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        <div className="flex items-center space-x-4 relative">
          {/* Hours */}
          <div className="flex flex-col items-center">
            <div className="bg-gray-50 rounded-lg p-6 shadow-inner hover:shadow-lg transition-shadow duration-300">
              <span className={`text-6xl font-bold ${getTextColor()} transform transition-transform hover:scale-110`}>
                {formatNumber(timeLeft.hours)}
              </span>
            </div>
            {/* <span className="text-gray-600 mt-2 text-lg font-medium">Hours</span> */}
          </div>

          <span className={`text-6xl font-bold ${getTextColor()} animate-pulse opacity-75`}>:</span>

          {/* Minutes */}
          <div className="flex flex-col items-center">
            <div className="bg-gray-50 rounded-lg p-6 shadow-inner hover:shadow-lg transition-shadow duration-300">
              <span className={`text-6xl font-bold ${getTextColor()} transform transition-transform hover:scale-110`}>
                {formatNumber(timeLeft.minutes)}
              </span>
            </div>
            {/* <span className="text-gray-600 mt-2 text-lg font-medium">Minutes</span> */}
          </div>

          <span className={`text-6xl font-bold ${getTextColor()} animate-pulse opacity-75`}>:</span>

          {/* Seconds */}
          <div className="flex flex-col items-center">
            <div className="bg-gray-50 rounded-lg p-6 shadow-inner hover:shadow-lg transition-shadow duration-300">
              <span className={`text-6xl font-bold ${getTextColor()} transform transition-transform hover:scale-110`}>
                {formatNumber(timeLeft.seconds)}
              </span>
            </div>
            {/* <span className="text-gray-600 mt-2 text-lg font-medium">Seconds</span> */}
          </div>



        </div>

        {/* Progress bar */}
        <div className="mt-8 bg-gray-100 rounded-full h-2">
          <div 
            className={`rounded-full h-2 transition-all duration-1000 ${getTextColor()}`}
            style={{ 
              width: `${(totalSeconds / (5 * 3600 + 30 * 60)) * 100}%`,
            }}
          />
        </div>

        {/* Status message */}
        <div className="mt-4 text-center">
          {timeLeft.hours <= 1 && (
            <p className="text-red-500 text-lg font-semibold animate-bounce">
              Hurry up! Time is running out!
            </p>
          )}
          {timeLeft.hours <= 3 && timeLeft.hours > 1 && (
            <p className="text-amber-500 text-lg font-semibold">
              You're in the final stretch!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;