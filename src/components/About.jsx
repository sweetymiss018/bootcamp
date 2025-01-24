import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const ConnectedCards = () => {
  const [paths, setPaths] = useState([]);
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  const calculatePaths = () => {
    const newPaths = [];
    const containerRect = containerRef.current?.getBoundingClientRect();

    if (!containerRect) return;

    for (let i = 0; i < cardRefs.current.length - 1; i++) {
      const start = cardRefs.current[i];
      const end = cardRefs.current[i + 1];

      if (start && end) {
        const startRect = start.getBoundingClientRect();
        const endRect = end.getBoundingClientRect();

        // Calculate positions relative to container
        const startX = startRect.right - containerRect.left;
        const startY = startRect.top - containerRect.top + startRect.height / 2;
        const endX = endRect.left - containerRect.left;
        const endY = endRect.top - containerRect.top + endRect.height / 2;

        newPaths.push({ startX, startY, endX, endY });
      }
    }
    setPaths(newPaths);
  };

  useEffect(() => {
    // Initial calculation after a short delay to ensure DOM is ready
    const timer = setTimeout(calculatePaths, 100);
    window.addEventListener('resize', calculatePaths);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calculatePaths);
    };
  }, []);

  const cards = [
    {
      title: "Start",
      description: "Begin your tech journey",
      color: "bg-blue-500",
      backCard: {
        title: "Program Overview",
        description: "Comprehensive bootcamp designed to transform your career in tech with hands-on learning and industry-relevant skills."
      }
    },
    {
      title: "MERN Stack",
      description: "Full-stack web development",
      color: "bg-purple-500", 
      backCard: {
        title: "MERN Mastery",
        description: "Learn MongoDB, Express.js, React, and Node.js to build scalable, modern web applications with end-to-end JavaScript development."
      }
    },
    {
      title: "Animation",
      description: "Creative motion design",
      color: "bg-pink-500",
      backCard: {
        title: "Animation Techniques",
        description: "Master 2D/3D animation, motion graphics, and industry-standard tools like After Effects, Blender, and Adobe Animate."
      }
    },
    {
      title: "Career",
      description: "Launch your dream role",
      color: "bg-green-500",
      backCard: {
        title: "Career Support",
        description: "Personalized job placement assistance, portfolio development, interview preparation, and connections with tech industry partners."
      }
    }
  ];

  return (
    <div ref={containerRef} className="relative h-[200vh] xs-lg:h-[130vh] w-full p-8 ">
      <div className="relative lg:left-1 md:left-3 sm:left-0">
        {cards.map((card, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className={`absolute left-[${index * 100}px] top-[${index * 100}px] h-[400px] w-[600px] md:h-[280px] md:w-[350px] sm:h-[200px] sm:w-[400px] xs-lg:h-[180px] xs-lg:w-full  rounded-lg ${card.color} p-6 md:p-6 sm:p-3 xs-lg:p-2 text-white shadow-lg transition-transform hover:scale-105`}
            style={{
              transform: `translate(${
                window.innerWidth >= 300 && window.innerWidth <= 548
                  ? 0
                  : index * (window.innerWidth < 640 ? 100 : window.innerWidth < 768 ? 150 : 350)
              }px, ${
                window.innerWidth < 640
                  ? index * 250 // Create gap between cards in column layout for small screens
                  : index * (window.innerWidth < 768 ? 280 : 410)
              }px)`,
              zIndex: cards.length - index, // Ensures top cards appear above others
            }}
          >
            {/* Back card (hidden initially) */}
            <div className="absolute inset-0 bg-gray-600 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col justify-between p-5">
              <h3 className="text-[3vw] font-semibold">{card.backCard.title}</h3>
              <p className="text-[1.5vw]">{card.backCard.description}</p>
            </div>

            {/* Front card */}
            <h3 className="text-[3.5vw] font-semibold">{card.title}</h3>
            <p className="text-[2vw]">{card.description}</p>
            <ArrowRight className="h-6 w-6 md:h-6 md:w-6 sm:h-3 sm:w-3 xs-lg:h-4 xs-lg:w-4 absolute bottom-[5%] hover:hidden" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConnectedCards;
