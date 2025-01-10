import React, { useEffect, useRef } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { gsap } from 'gsap';

function Footer() {
    const textRef = useRef(null);
    const arrowRef = useRef(null);
   
    useEffect(() => {
      const textEl = textRef.current;
      const arrowEl = arrowRef.current;
      
      // Create a timeline for the bobble animation
      const tl = gsap.timeline({ paused: true });
      
      tl.to(textEl, {
        y: -10,
        duration: 0.2,
        ease: 'power2.out'
      }).to(textEl, {
        y: 0,
        duration: 0.4,
        ease: 'elastic.out(1, 0.3)'
      });

      const handleMouseEnter = () => {
        // Animate the arrow
        gsap.to(arrowEl, { x: 15, duration: 0.3, ease: 'power2.out' });
        // Play the bobble animation
        tl.restart();
      };

      const handleMouseLeave = () => {
        gsap.to(arrowEl, { x: 0, duration: 0.3, ease: 'power2.out' });
      };

      textEl.addEventListener('mouseenter', handleMouseEnter);
      textEl.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        textEl.removeEventListener('mouseenter', handleMouseEnter);
        textEl.removeEventListener('mouseleave', handleMouseLeave);
      };
    }, []);
  return (
    <div className='h-[60vh] w-full flex justify-center relative overflow-hidden' >
        
        <div className="o-letter-flower w-[70%] absolute bottom-0 flex rotate-[160deg]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 350" className="w-full h-full relative  -top-[250px] opacity-50 ">
            <defs>
              <clipPath id="__lottie_element_55">
                <rect width="500" height="330" x="0" y="0" />
              </clipPath>
            </defs>
            <g clipPath="url(#__lottie_element_55)">
              <g id="bluish-green2" transform="matrix(-0.8203372630882263,0.6883609294891357,-0.6813609294891,-0.820357263088,-166.809326171875,268.1751403808594)">
                <g transform="matrix(1,0,0,1,-297,-98)">
                  <path fill="rgb(119,198,179)" d="M0,-134C74.006,-134,134,-74.006,134,0C45.99,0.233,-85.909,-0.233,-134,0C-134,-74.006,-74.006,-134,0,-134z" />
                </g>
              </g>
              <g id="red" transform="matrix(0.8203568458557129,-0.6883613467216492,0.6883613467216492,0.8203568458557129,455.55926513671875,19.96869659423828)">
                <g transform="matrix(1,0,0,1,-285,-98)">
                  <path fill="rgb(236,82,18)" d="M0,-134C74.006,-134,134,-74.006,134,0C45.99,0.233,-85.909,-0.233,-134,0C-134,-74.006,-74.006,-134,0,-134z" />
                </g>
              </g>
            </g>
          </svg>
     
        </div>
        <div
      className="footer-box w-[95%] h-full flex flex-col bg-transparent absolute"
      style={{ borderTop: '12px solid #3a1502' }}
    >
      <div
        className="top-content h-[90%] w-full flex"
        style={{ borderBottom: '1px solid #3a1502' }}
      >
        <div className="left w-[45%] h-[100%] flex justify-center flex-col">
          <h1 className="text-8xl font-semibold text-amber-950 relative -top-10 left-6">
            Questions?
          </h1>
          <p className="font-semibold text-4xl relative left-6 -top-4 text-amber-950">
            Do you love what we do and want to help us revolutionize teaching and
            change how people learn to code?
          </p>
        </div>
        <div className="right w-[55%] h-[100%] flex justify-center items-center relative left-[90px]">
          <h1
            ref={textRef}
            className="h-fit text-8xl font-semibold text-amber-950 flex items-center gap-3 cursor-pointer"
          >
            Get in touch
            <FaArrowRight ref={arrowRef} className="relative top-3" />
          </h1>
        </div>
      </div>
      <div className="bottom-content h-[10%] w-full relative z-[30]">youtube</div>
    </div>
    </div>
      
    
  )
}

export default Footer
