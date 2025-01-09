import React from "react";
import { testimonials } from "../constants/testimonials";

const ReviewHorizontalScroll = () => {
 

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      {/* Header */}
      <h2 className="text-center text-3xl font-bold mb-8">Graduate Success Stories</h2>

      {/* Horizontal Scroll Container */}
      <div className="relative flex items-center overflow-x-auto space-x-48 px-8 scrollbar-hide">

        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`${testimonial.bgColor} relative flex-shrink-0 w-96 p-6 rounded-3xl shadow-lg`}
          >
            {/* Connecting Circle */}
            <div className="absolute left-[-10px] top-1/2 transform -translate-y-1/2 w-5 h-5 bg-black border-2 border-gray-800 rounded-full"></div>
        <div className="absolute top-1/2 transform -left-1/2 -translate-y-1/2 w-1/2 border-t border-black"></div>


            {/* Testimonial Content */}
            <p className="text-gray-800 text-lg leading-relaxed mb-6">
              &quot;{testimonial.text}&quot;
            </p>

            {/* User Info */}
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0"></div>
              <div className="ml-4">
                <p className="font-medium text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.batch}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
            <div className="absolute right-[-10px] top-1/2 transform -translate-y-1/2 w-5 h-5 bg-black border-2 border-gray-800 rounded-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewHorizontalScroll;
