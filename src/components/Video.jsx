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
    <div className="h-[100vh] w-full flex">
      <div className="video-box w-[50%] h-full pr-7 pl-10">
        <div className="box w-full h-[90%] bg-[#FFD37D] flex justify-center items-center">
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
      <div className="video-info flex items-center justify-center w-[50%] text-6xl">
        <p className="w-[80%] text-amber-950 font-semibold">
          Watch how this transformative learning experience will set you on a
          new path.
        </p>
      </div>
    </div>
  );
}

export default Video;
