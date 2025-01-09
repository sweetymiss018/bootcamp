import React, { useEffect, useState } from 'react';

const TechStackSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 716 627" className="w-full h-full">
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
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Background Text */}
      <h1 
        className="absolute left-1/2 -translate-x-1/2 text-[120px] font-bold text-[#000] select-none pointer-events-none z-0 whitespace-nowrap sm:text-[150px] lg:text-[200px]"
        style={{
          top: '50%',
          transform: `translate(-50%, ${-50 + scrollY * 0.1}px)`,
          opacity: 0.2
        }}
      >
        Why Nod?
      </h1>

      {/* Cards Grid */}
      <div className="relative z-10 mx-auto max-w-7xl pt-20">
        <div className="grid md:grid-cols-2">
          {/* State-of-the-art Tech Stack */}
          <div className="rounded-lg bg-[#FFE5B4] p-8 transition-transform hover:-translate-y-1">
            <div className="mb-6 h-32 w-32 mx-auto">
              <TechStackSvg />
            </div>
            <h3 className="mb-4 text-2xl font-semibold">State-of-the-art Tech Stack</h3>
            <p className="text-gray-700">
              We constantly curate our curriculum to ensure that you focus on learning the most relevant technical skills.
            </p>
          </div>

          {/* Project Based Learning */}
          <div className="rounded-lg bg-[#FFB6C1] p-8 transition-transform hover:-translate-y-1">
            <div className="mb-6 h-32 w-32 mx-auto">
              <div className="flex h-full w-full items-center justify-center rounded-xl bg-blue-400 p-4">
                <svg className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
            </div>
            <h3 className="mb-4 text-2xl font-semibold">Project Based Learning</h3>
            <p className="text-gray-700">
              Coding is a craft and you need to get your hands dirty to succeed. You will get hands-on training solving real-world problems and build a portfolio of projects.
            </p>
          </div>

          {/* Accelerated Onsite Learning */}
          <div className="rounded-lg bg-[#87CEEB] p-8 transition-transform hover:-translate-y-1">
            <div className="mb-6 h-32 w-32 mx-auto">
              <div className="flex h-full w-full items-center justify-center rounded-xl bg-orange-400 p-4">
                <svg className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="mb-4 text-2xl font-semibold">Accelerated Onsite Learning</h3>
            <p className="text-gray-700">
              Learning to code in a small group of like-minded people with interactive lessons and supportive teachers available at all times will set you up for success.
            </p>
          </div>

          {/* Get hired */}
          <div className="rounded-lg bg-[#98D8C8] p-8 transition-transform hover:-translate-y-1">
            <div className="mb-6 h-32 w-32 mx-auto">
              <div className="flex h-full w-full items-center justify-center rounded-xl bg-green-400 p-4">
                <svg className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <h3 className="mb-4 text-2xl font-semibold">Get hired</h3>
            <p className="text-gray-700">
              Be like our graduates – change careers and make a difference, become a digital nomad, or build an AI startup.
            </p>
          </div>
        </div>

        {/* Apply Now Button */}
        <div className="mt-12 text-center">
          <button className="rounded-full bg-[#FFB6C1] px-8 py-3 text-lg font-semibold text-gray-800 hover:bg-[#FFA6B1] transition-colors">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyNodSection;