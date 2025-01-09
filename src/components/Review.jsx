import React from 'react';
import { motion } from 'framer-motion';

const Review = () => {
  const testimonials = [
    {
      text: "The bootcamp and the hands-on projects gave me the skills and confidence to make the leap into Data Science. I appreciated the structured course content, the expert instructors, and the collaborative learning environment. Highly recommend this bootcamp to anyone looking to pivot into tech!",
      name: "Eugene Moreshow",
      batch: "Nov Coding SCAD 2023",
      role: "Data Scientist @Gig",
      bgColor: "bg-blue-100",
      imageSrc: "/api/placeholder/40/40"
    },
    {
      text: "The bootcamp was very high-paced, and I liked how the teachers kept on challenging me to deepen my understanding of technical concepts. The bootcamp allowed me pivot to a highly technical and analytical role, exactly what I wanted.",
      name: "Susan Wilson",
      batch: "Nov Coding BCAD 2023",
      role: "Data Analyst @ PageName",
      bgColor: "bg-amber-100",
      imageSrc: "/api/placeholder/40/40"
    },
    {
      text: "Besides all the good moments with teachers and students, the bootcamp equipped me with practical skills that helped me start a new career in tech where I'm now working in a development team building an AI product for my company. I continue to use what I learnt in the bootcamp on an everyday basis.",
      name: "Nicole Evans",
      batch: "Nov End 2023",
      role: "Developer @ TechFirm",
      bgColor: "bg-emerald-100",
      imageSrc: "/api/placeholder/40/40"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Animated Header */}
      <div className="relative overflow-hidden mb-12">
        <div className="flex whitespace-nowrap">
          <motion.div
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            className="flex items-center gap-2 text-4xl md:text-5xl font-bold"
          >
            <span>Graduate Success Stories</span>
            <span className="text-emerald-400">*</span>
            <span>Graduate Success Stories</span>
            <span className="text-emerald-400">*</span>
            <span>Graduate Success Stories</span>
            <span className="text-emerald-400">*</span>
            <span>Graduate Success Stories</span>
            <span className="text-emerald-400">*</span>
            <span>Graduate Success Stories</span>
            <span className="text-emerald-400">*</span>
          </motion.div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`${testimonial.bgColor} rounded-3xl p-8 relative`}
          >
            <div className="mb-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
            <div className="flex items-center">
              <img
                src={testimonial.imageSrc}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="ml-4">
                <p className="font-medium text-gray-800">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.batch}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;