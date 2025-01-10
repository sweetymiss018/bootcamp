import React from "react";
import "../App.css"; // Import custom CSS for the polygon

const BootcampLogo = () => {
  return (
    <div className="flex items-center space-x-1 text-4xl font-bold">
      {/* "b" */}
      <span className="text-black">b</span>

      {/* Two Blue Circles ("o") */}
      <span className="w-6 h-6 rounded-full bg-blue-500"></span>
      <span className="w-6 h-6 rounded-full bg-blue-500"></span>

      {/* "t" */}
      <span className="text-black">t</span>

      

      {/* "c", "a", "m", "p" */}
      <span className="text-black">c</span>
      {/* Orange Triangle ("A") */}
      <div className="w-6 h-6 bg-orange-500 clip-triangle"></div>
      <span className="text-black">m</span>
      <span className="text-black">p</span>
    </div>
  );
};

export default BootcampLogo;
