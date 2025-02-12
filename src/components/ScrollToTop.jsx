import React, { useState, useEffect, useRef } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    // Import GSAP dynamically to avoid SSR issues
    const loadGSAP = async () => {
      const { gsap, Elastic } = await import('gsap');
      
      const animateClick = () => {
        // Animate the button
        gsap.to(buttonRef.current, {
          scale: 1.2,
          y: -20,
          duration: 0.5,
          ease: Elastic.easeOut.config(1, 0.3),
          onComplete: () => {
            gsap.to(buttonRef.current, {
              scale: 1,
              y: 0,
              duration: 0.5,
              ease: Elastic.easeOut.config(1, 0.3)
            });
          }
        });

        // Animate the arrow
        gsap.to(arrowRef.current, {
          scale: 1.5,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => {
            gsap.set(arrowRef.current, {
              scale: 1,
              opacity: 1
            });
          }
        });
      };

      if (buttonRef.current) {
        buttonRef.current.addEventListener('click', animateClick);
      }

      return () => {
        if (buttonRef.current) {
          buttonRef.current.removeEventListener('click', animateClick);
        }
      };
    };

    loadGSAP();
  }, [isVisible]);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          ref={buttonRef}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-blue-500 hover:bg-blue-600 
            text-white rounded-full shadow-lg transition-colors duration-300 
            focus:outline-none z-[9999999]"
          aria-label="Scroll to top"
        >
          <div ref={arrowRef}>
            <ArrowUp size={24} />
          </div>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;