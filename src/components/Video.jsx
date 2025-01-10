import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Video() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      // Elastic appearance animation
      gsap.fromTo(
        video,
        {
          scale: 0.5, // Start smaller
          opacity: 0, // Start invisible
        },
        {
          scale: 1, // Full size
          opacity: 1, // Fully visible
          duration: 1.5, // Animation duration
          ease: "elastic.out(1, 0.5)", // Elastic easing
          scrollTrigger: {
            trigger: video, // Trigger animation when the video enters the viewport
            start: "top 40%", // Animation starts when the video is at 40% of the viewport height
          },
        }
      );

      // Hover animations
      const handleMouseEnter = () => {
        gsap.to(video, {
          scale: 0.8, // Reduce to 80% of parent
          duration: 0.5, // Animation duration
          ease: "power4.out", // Easing function
        });
      };

      const handleMouseLeave = () => {
        gsap.to(video, {
          scale: 1, // Restore to original size
          duration: 0.5,
          ease: "power4.out", // Easing function
        });
      };

      video.addEventListener("mouseenter", handleMouseEnter);
      video.addEventListener("mouseleave", handleMouseLeave);

      // Clean up event listeners
      return () => {
        video.removeEventListener("mouseenter", handleMouseEnter);
        video.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className=" relative h-[100vh] xs-lg:h-[80vh] w-full flex lg:flex lg:flex-row md:flex-col sm:flex-col xs-lg:flex-col md:justify-center lg:justify-center sm:justify-center xs-lg:justify-center">
      <div className=" video-box w-[50%] lg:w-[50%] lg:h-full   md:h-full sm:h-full xs-lg:h-[50%] sm:w-full xs-lg:w-full lg:pr-4 lg:pl-5 md:pr-0 md:pl-0 sm:pr-0 sm:pl-0 xs-lg:pr-0 xs-lg:pl-0">
        <div className="box w-full h-[90%] md:h-[90%] sm:h-[60%] xs-lg:h-[100%] bg-[#FFD37D] flex justify-center items-center">
          <div
            ref={videoRef}
            className="video-container w-[75%] h-[75%] relative border border-black rounded-lg overflow-hidden"
          >
            <video
              src="#"
              className="video h-[100%] w-full"
            ></video>
            <button
              onClick={togglePlayPause}
              className="bg-blue-600 hover:bg-blue-700 font-bold h-[100px] w-[100px] rounded-full absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-white text-2xl"
            >
              {isPlaying ? "Pause" : "Play"}
            </button>
          </div>
        </div>
      </div>
      <div className="video-info flex items-center justify-center w-[50%] lg:w-[50%] sm:w-full xs-lg:w-full lg:h-full  sm:h-[40%] xs-lg:h-[20%] text-6xl lg:text-6xl md:text-4xl sm:text-3xl xs-lg:text-2xl">
        <p className="w-[80%] text-amber-950 font-semibold md:w-[80%] sm:w-[100%] xs-lg:w-[100%] pl-9 pr-9">
          Watch how this transformative learning experience will set you on a
          new path.
        </p>
      </div>
      <div className="star-svg absolute lg:left-[41.4%] lg:top-[72%] sm:top-[80%]">
      <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="100%"
    viewBox="0 0 384 400"
    xmlSpace="preserve"
  >
    <path
      fill="#3658D3"
      opacity="1.0"
      stroke="none"
      d="
        M168.349365,168.347870 
        C178.524155,152.402161 182.701477,134.828476 185.665695,116.832581 
        C187.849640,103.573830 188.424515,90.138153 190.857452,76.736137 
        C191.333664,81.792427 191.951675,86.840088 192.259689,91.906601 
        C193.210159,107.541443 195.648605,122.922493 199.400284,138.133057 
        C208.673294,175.729095 233.237823,196.810745 270.387756,204.772049 
        C288.017731,208.550186 305.877289,210.151062 323.776825,211.630676 
        C324.709839,211.707809 325.632080,211.915268 326.518433,212.983658 
        C320.508179,213.429901 314.492279,213.811005 308.488739,214.334412 
        C289.224121,216.013901 270.149597,218.707764 251.879379,225.446564 
        C224.331131,235.607483 208.067413,255.778519 200.288940,283.537140 
        C195.737305,299.780365 193.374832,316.354095 192.276428,333.148560 
        C191.943283,338.242279 191.392700,343.321838 190.605652,348.410645 
        C188.239685,340.419678 188.669388,332.127991 187.745529,324.004059 
        C185.692184,305.948303 182.928116,288.072144 176.152328,271.073242 
        C165.223495,243.655273 143.916473,228.664703 116.263329,221.462173 
        C97.035179,216.453995 77.383453,214.325790 57.585167,213.339478 
        C56.626457,213.291687 55.672657,213.145309 54.689114,212.616364 
        C59.020180,211.299347 63.455090,211.018341 67.918503,210.668671 
        C88.353325,209.067780 108.657562,206.567215 128.033234,199.412643 
        C144.534027,193.319641 158.518784,183.782364 168.349365,168.347870 
        z"
    />
  </svg>
      </div>
    </div>
  );
}

export default Video;
