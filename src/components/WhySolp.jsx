import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TechStackSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 716 627" width={716} height={627}>
    <g>
      <g transform="matrix(1,0,0,1,365.3553771972656,399)">
        <g><path fill="rgb(236,82,18)" d="M0,-37 C20.420299530029297,-37 37,-20.420299530029297 37,0 C37,20.420299530029297 20.420299530029297,37 0,37 C-20.420299530029297,37 -37,20.420299530029297 -37,0 C-37,-20.420299530029297 -20.420299530029297,-37 0,-37z"></path></g>
      </g>
      <g transform="matrix(0.9943835139274597,0.1058078333735466,-0.10580804198980331,0.9943855404853821,339.1097717285156,336.9398193359375)">
        <g><path fill="rgb(112,162,225)" d="M71.0530014038086,-21.5 L71.0530014038086,21.5 L-71.0530014038086,21.5 L-71.0530014038086,-21.5 L71.0530014038086,-21.5z"></path></g>
      </g>
      <g transform="matrix(0.9943835139274597,0.1058078333735466,-0.10580804198980331,0.9943855404853821,397.9715576171875,300.2802734375)">
        <g><path fill="rgb(118,197,178)" d="M66.79850006103516,-21.5 L66.79850006103516,21.5 L-66.79850006103516,21.5 L-66.79850006103516,-21.5 L66.79850006103516,-21.5z"></path></g>
      </g>
      <g transform="matrix(0.9943835139274597,0.1058078333735466,-0.10580804198980331,0.9943855404853821,366.13299560546875,253.33425903320312)">
        <g><path fill="rgb(255,185,185)" d="M89,-21.5 L89,21.5 L-89,21.5 L-89,-21.5 L89,-21.5z"></path></g>
      </g>
      <g transform="matrix(0.9943835139274597,0.1058078333735466,-0.10580804198980331,0.9943855404853821,408.177001953125,214.57554626464844)">
        <g><path fill="rgb(56,48,48)" d="M89,-21.5 L89,21.5 L-89,21.5 L-89,-21.5 L89,-21.5z"></path></g>
      </g>
      <g transform="matrix(0.9943835139274597,0.1058078333735466,-0.10580804198980331,0.9943855404853821,407.4430236816406,214.28123474121094)">
        <g><path fill="rgb(255,255,255)" d="M0.0010000000474974513,14.347000122070312 C17.73900032043457,14.347000122070312 32.11800003051758,0 32.11800003051758,0 L32.117000579833984,0 C32.117000579833984,0 17.73699951171875,-14.347000122070312 -0.0010000000474974513,-14.347000122070312 C-17.73900032043457,-14.347000122070312 -32.11800003051758,0 -32.11800003051758,0 C-32.11800003051758,0 -17.73699951171875,14.347000122070312 0.0010000000474974513,14.347000122070312z"></path></g>
      </g>
    </g>
  </svg>
);

const WhyNodSection = () => {

  
    const containerRef = useRef(null);
    const headingRef = useRef(null);
  
    useEffect(() => {
      const container = containerRef.current;
      const heading = headingRef.current;
  
      gsap.fromTo(
        heading,
        { opacity: 0, y: 50 }, // Initial state
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 80%", // 20% into the viewport
            end: "top 50%",
            toggleActions: "play none none none",
          },
        }
      );
    }, []);


  return (
    <div  ref={containerRef} className="relative h-[250vh] w-full overflow-hidden  flex  justify-center lg:h-[200vh] md:h-[320vh] sm:h-[380vh] xs-lg:h-[280vh]   flex-col ">
      {/* Background Text */}

      <h1 ref={headingRef} className='text-center text-9xl font-semibold text-amber-950 mb-9 lg:text-9xl md:text-8xl sm:text-8xl xs-lg:text-8xl'>WHY SOLP?</h1>
      

      {/* Cards Grid */}
      <div className="  w-[100vw]">
        <div className="flex flex-col w-full">

          <div className="first-stack flex justify-center w-full  h-fit lg:flex-row  md:flex-col sm:flex-col xs-lg:flex-col ">
               {/* State-of-the-art Tech Stack */}

          <div className=" bg-[#FFE5B4] p-9  h-[550px] w-[750px] lg:w-[800px] lg:h-[700px] md:w-full sm:w-full xs-lg:w-full flex flex-col justify-between">
          <h3 className="mb-4 text-7xl font-semibold text-amber-950  xs-lg:text-5xl">State-of-the-art Tech Stack</h3>
            <div className="mb-6   mx-auto h-[250px] w-full flex items-center justify-center">
              <TechStackSvg />
            </div>

            <p className="text-amber-950 text-xl">
              We constantly curate our curriculum to ensure that you focus on learning the most relevant technical skills.
            </p>
          </div>

          {/* Project Based Learning */}

          <div className=" bg-[#FFB6C1] p-9  h-[550px] w-[750px] flex flex-col lg:w-[800px] lg:h-[700px]  md:w-full sm:w-full xs-lg:w-full justify-between">
            <h3 className="mb-4 text-7xl font-semibold text-amber-950 xs-lg:text-5xl">Project Based Learning</h3>
              <div className="mb-6   mx-auto h-[250px] w-[250px] xs-lg:h-[150px] xs-lg:w-[150px] flex items-center justify-center bg-blue-400 ">
                <svg className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <p className="text-amber-950 text-xl">
              Coding is a craft and you need to get your hands dirty to succeed. You will get hands-on training solving real-world problems and build a portfolio of projects.
            </p>
            </div>
            
            
          
          </div>

          <div className="relative second-stack flex justify-center w-full lg:left-[40px]  h-fit lg:flex-row md:flex-col sm:flex-col xs-lg:flex-col ">
              {/* Accelerated Onsite Learning */}
          <div className=" ml-[90px]  bg-[#87CEEB] p-9  h-[600px] w-[750px]  flex flex-col lg:w-[800px] lg:h-[700px]   md:w-full sm:w-full xs-lg:w-full md:ml-0 sm:ml-0 xs-lg:ml-0 justify-between">
           
            <h3 className=" mb-4 text-7xl font-semibold text-amber-950 xs-lg:text-5xl">Accelerated Onsite Learning</h3>
              <div className="flex mx-auto mb-6 h-[250px] w-[250px] xs-lg:h-[150px] xs-lg:w-[150px] items-center justify-center  bg-orange-400 p-4">
                <svg className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
           
            </div>
         
            <p className="text-amber-950 text-xl">
              Learning to code in a small group of like-minded people with interactive lessons and supportive teachers available at all times will set you up for success.
            </p>
          </div>

          {/* Get hired */}
          <div className=" bg-[#98D8C8] p-8 h-[600px] w-[860px] lg:w-[800px] lg:h-[700px]  md:w-full sm:w-full xs-lg:w-full flex flex-col justify-between">
            
            <h3 className="mb-4 text-7xl font-semibold text-amber-950 xs-lg:text-5xl">Get hired</h3>
              <div className="flex mx-auto mb-10 h-[250px] w-[250px] xs-lg:h-[150px] xs-lg:w-[150px] items-center justify-center  bg-green-400 p-4 ">
                <svg className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
        
            </div>
            
            <p className="text-amber-950 text-xl">
              Be like our graduates – change careers and make a difference, become a digital nomad, or build an AI startup.
            </p>
          </div>
          </div>
       
          

        
        </div>

 
      </div>
    </div>
  );
};

export default WhyNodSection;