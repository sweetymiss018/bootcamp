import React, { useEffect, useRef } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { gsap } from 'gsap';
import { BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs';

function Footer() {
    const textRef = useRef(null);
    const arrowRef = useRef(null);
   
    useEffect(() => {
      const textEl = textRef.current;
      const arrowEl = arrowRef.current;
      
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
        gsap.to(arrowEl, { x: 15, duration: 0.3, ease: 'power2.out' });
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
    <div className='min-h-[60vh] w-full flex justify-center relative overflow-hidden'>
        <div className="o-letter-flower w-full md:w-[70%] absolute bottom-0 flex rotate-[160deg]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 350" className="w-full h-full relative -top-[250px] opacity-50">
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
            className="top-content min-h-[85%] w-full flex flex-col lg:flex-row"
            style={{ borderBottom: '1px solid #3a1502' }}
          >
            <div className="left w-full lg:w-[45%] h-full flex justify-center flex-col p-4 lg:p-0">
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-semibold text-amber-950 relative lg:-top-10 lg:left-6">
                Questions?
              </h1>
              <p className="font-semibold text-xl md:text-2xl lg:text-4xl relative lg:left-6 lg:-top-4 text-amber-950 mt-4 lg:mt-0">
                Do you love what we do and want to help us revolutionize teaching and
                change how people learn to code?
              </p>
            </div>
            
            <div className="right w-full lg:w-[55%] h-full flex justify-center items-center lg:relative lg:left-[90px] py-8 lg:py-0">
              <h1
                ref={textRef}
                className="h-fit text-4xl md:text-6xl lg:text-8xl font-semibold text-amber-950 flex items-center gap-3 cursor-pointer"
              >
                Get in touch
                <FaArrowRight ref={arrowRef} className="relative top-1 lg:top-3" />
              </h1>
            </div>
          </div>
          
          <div className="bottom-content text-2xl text-amber-950  h-[15%] flex justify-between   gap-3 w-full relative z-[30] p-4">
           <div className='flex gap-3'> <BsYoutube/>
            <BsInstagram/>
            <BsLinkedin/></div>
            <div className='h-full flex items-center'>
            <p className="sm:mt-0  text-center sm:text-right text-sm font-semibold">
          © {new Date().getFullYear()} SOLP All rights reserved.
        </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer