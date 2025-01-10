import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [totalSeconds, setTotalSeconds] = useState(0);

  useEffect(() => {
    const targetDate = new Date('2025-01-24T17:00:00');
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;
      
      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
      setTotalSeconds(Math.floor(difference / 1000));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getTextColor = () => {
    if (timeLeft.days <= 1) return 'text-red-500';
    if (timeLeft.days <= 3) return 'text-amber-500';
    return 'text-blue-500';
  };

  const getAnimationClasses = () => {
    if (timeLeft.days === 0) {
      return 'animate-pulse';
    }
    return '';
  };

  const formatNumber = (num) => num.toString().padStart(2, '0');

  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="bg-gray-50 rounded-lg p-2 xs:p-3 sm:p-6 shadow-inner hover:shadow-lg transition-shadow duration-300">
        <span className={`text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-bold ${getTextColor()} 
          transform transition-transform hover:scale-110`}>
          {formatNumber(value)}
        </span>
      </div>
      <span className="text-[10px] xs:text-xs sm:text-sm mt-1 sm:mt-2 font-bold text-gray-600">{label}</span>
    </div>
  );

  const Colon = () => (
    <div className="flex items-center justify-center h-full">
      <span className={`text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-bold ${getTextColor()} animate-pulse opacity-75 -mt-4 xs:-mt-6 sm:-mt-8`}>
        :
      </span>
    </div>
  );

  return (
    <div className="min-h-[200px] w-full flex items-center justify-center p-0 sm:p-4">
      <div 
        className={`relative w-full max-w-[95vw] sm:max-w-2xl p-8 sm:p-8 md:p-12 rounded-3xl shadow-lg 
          transform hover:scale-105 transition-all duration-500 bg-gray-300 ${getAnimationClasses()}`}
      >
        {/* Floating background elements */}
        <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-12 h-12 sm:w-24 sm:h-24 
          bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-4 sm:-bottom-8 -right-2 sm:-right-4 w-12 h-12 sm:w-24 sm:h-24 
          bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-4 sm:-bottom-8 left-10 sm:left-20 w-12 h-12 sm:w-24 sm:h-24 
          bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        {/* Timer Grid with Colons */}
        <div className="grid grid-cols-7 gap-0 xs:gap-1 items-center justify-items-center relative">
          <TimeUnit value={timeLeft.days} label="Days" />
          <Colon />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <Colon />
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <Colon />
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>

        {/* Progress bar */}
        <div className="mt-4 sm:mt-6 md:mt-8 bg-gray-100 rounded-full h-1.5 sm:h-2">
          <div
            className={`rounded-full h-1.5 sm:h-2 transition-all duration-1000 ${getTextColor()}`}
            style={{
              width: `${(totalSeconds / (14 * 24 * 60 * 60)) * 100}%`
            }}
          />
        </div>

        {/* Status message */}
        <div className="mt-2 sm:mt-4 text-center">
          {timeLeft.days <= 1 && (
            <p className="text-xs sm:text-sm md:text-lg text-red-500 font-semibold animate-bounce">
              Final countdown! Less than a day remaining!
            </p>
          )}
          {timeLeft.days <= 3 && timeLeft.days > 1 && (
            <p className="text-xs sm:text-sm md:text-lg text-amber-500 font-semibold">
              Only a few days left!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;