import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../App.css"; // Import custom CSS for the polygon

const BootcampLogo = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = containerRef.current.children;

    gsap.fromTo(
      elements,
      { opacity: 0, y: 20 }, // Initial state
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.2, // Delay between each element
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex relative items-center space-x-1 text-4xl font-semibold xs-lg:text-xl sm:text-2xl md:text-3xl lg:text-7xl lg:right-14"
    >
      {/* "b" */}
      <span className="text-black">b</span>

      {/* Two Blue Circles ("o") */}
      <span className="w-8 h-8 xs-lg:w-4 xs-lg:h-4 sm:w-5 sm:h-5 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-blue-500"></span>
      <span className="w-8 h-8 xs-lg:w-4 xs-lg:h-4 sm:w-5 sm:h-5 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-blue-500"></span>

      {/* "t" */}
      <span className="text-black">t</span>

      {/* "c", "a", "m", "p" */}
      <span className="text-black">c</span>

      {/* Orange Triangle ("A") */}
      <div className="w-8 h-8 xs-lg:w-4 xs-lg:h-4 sm:w-5 sm:h-5 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-orange-500 clip-triangle"></div>
      <span className="text-black">m</span>
      <span className="text-black">p</span>
    </div>
  );
};

export default BootcampLogo;
