import React from "react";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedWeekCounter from "./AnimateWeek";

const SOLPCodingExperience = () => {
  return (
    <div className="w-full min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
         <AnimatedWeekCounter/>

          <motion.p
            className="text-lg text-gray-600 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            To start a new career in Tech
            <br />
            <br />
            Unlock the door to the future with hands-on skills in Python, the
            most user-friendly and versatile programming language. Build
            projects in Data Analytics, Machine Learning, and Generative AI.
            Take your first step to make a change and apply today.
          </motion.p>
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column with Eye and Image */}
          <div className="relative">
            {/* Blue semicircle with eye */}
            <div className="relative bg-blue-600 rounded-t-full aspect-[2/1] w-full overflow-hidden">
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-24 h-12 bg-white rounded-full">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-yellow-300 rounded-full" />
              </div>
            </div>

            {/* Image Container */}
            <div className="relative bg-yellow-400 rounded-lg p-4 aspect-square overflow-hidden">
              {/* Placeholder image */}
              <div className="w-full h-full relative">
                <video
                  src="https://videos.pexels.com/video-files/1350205/1350205-sd_640_360_30fps.mp4"
                  autoPlay="true"
                  className="w-full h-full object-cover rounded"
                />

                {/* Play button overlay */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20"
                  whileHover={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                >
                  <motion.div
                    className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-8 h-8 text-white ml-1" />
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Decorative star */}
            <div className="absolute -bottom-3 -right-16 w-28 h-14 text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <path
                  d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z"
                  fill="currentColor"
                >
                  <animate
                    attributeName="opacity"
                    values="0.7;1;0.7"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 50 50"
                    to="360 50 50"
                    dur="20s"
                    repeatCount="indefinite"
                  />
                </path>
              </svg>
            </div>
          </div>

          {/* Right Column with Text */}
          <div className="space-y-6">
            <div className="bg-pink-200 p-6 rounded-lg">
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                The Nod Coding Experience
              </motion.h2>
            </div>

            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 rounded-full bg-pink-400 mt-2" />
                <p className="text-xl text-gray-700">
                  Watch how this transformative learning experience will set you
                  on a new path.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SOLPCodingExperience;
