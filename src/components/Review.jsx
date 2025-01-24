import React, { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { testimonials } from "../constants/testimonials";

const ReviewHorizontalScroll = () => {
  const controls = useAnimationControls();

  // Calculate total width of all testimonials (96 units = w-96)
  const totalWidth = testimonials.length * 384; // 384px = w-96 + space-x-48

  useEffect(() => {
    const startAnimation = async () => {
      while (true) {
        await controls.start({
          x: -totalWidth,
          transition: {
            duration: testimonials.length * 4, // 5 seconds per testimonial
            ease: "linear",
            repeat: Infinity,
          },
        });
      }
    };

    startAnimation();
  }, [controls, totalWidth]);

  return (
    <div className="bg-[#FFFFFF] lg:min-h-screen md:min-h-[90vh] sm:min-h-[60vh] xs-lg:h-[90vh] min-h-[50h] py-12 px-4">
      {/* Header */}
      {/* Animated Header */}
      <div className="relative overflow-hidden mb-20">
        <div className="flex whitespace-nowrap">
          <motion.div
            animate={{
              x: [0, -2000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 6,
                ease: "linear",
              },
            }}
            className="flex items-center gap-7 font-bold"
          >
            {/* Responsive Text Sizes */}
            <span className="text-[2rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem]">
              Graduate Success Stories
            </span>
            <span className="text-emerald-400 text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem]">
              *
            </span>
            <span className="text-[2rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem]">
              Graduate Success Stories
            </span>
            <span className="text-emerald-400 text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem]">
              *
            </span>
            <span className="text-[2rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem]">
              Graduate Success Stories
            </span>
            <span className="text-emerald-400 text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem]">
              *
            </span>
            <span className="text-[2rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem]">
              Graduate Success Stories
            </span>
            <span className="text-emerald-400 text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem]">
              *
            </span>
            <span className="text-[2rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem]">
              Graduate Success Stories
            </span>
            <span className="text-emerald-400 text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem]">
              *
            </span>
          </motion.div>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
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
            >
              {/* Connecting Circle */}
              <motion.div
                className="absolute left-[-10px] z-10 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white border-4 border-gray-800 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
              />
              <div className="absolute top-[52%] z-0 transform -left-1/2 -translate-y-1/2  w-1/2 border-t border-black border-2" />

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
                  <p className="font-medium text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.batch}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
              <motion.div
                className="absolute right-[-10px] z-10 top-[50%] transform -translate-y-1/2 w-4 h-4 bg-white border-4 border-gray-800 rounded-full"
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
            >
              {/* Connecting Circle */}
              <motion.div
                className="absolute left-[-10px] z-50 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white border-4 border-gray-800 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
              />
              <div className="absolute z-0 top-1/2 transform -left-1/2 -translate-y-1/2 w-1/2 border-t border-black" />

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
                  <p className="font-medium text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.batch}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
              <motion.div
                className="absolute left-[-10px] z-50 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white border-4 border-gray-800 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ReviewHorizontalScroll;
