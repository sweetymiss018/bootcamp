import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import CountdownTimer from "./TimmerComponents";

function AnimateWeek() {
  const blueBoxRef = useRef(null);
  const halfCircleRef = useRef(null);
  const parentRef = useRef(null);

  useEffect(() => {
    const parent = parentRef.current;
    const blueBox = blueBoxRef.current;
    const halfCircle = halfCircleRef.current;
    const pinkBox = parent.querySelector(".pink-box");

    gsap.set(blueBox, { width: 0 }); // Initially set width to 0
    gsap.set(halfCircle, { scale: 0 }); // Initially set scale to 0
    gsap.set(pinkBox, { x: "150%" });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate when the parent div is 80% visible
          gsap.to(blueBox, {
            width: "50%", // Target width
            duration: 1.5,
            ease: "elastic(linear)",
          });

          gsap.to(halfCircle, {
            scale: 1, // Target scale
            duration: 1.5,
            ease: "elastic(linear)",
            delay: 0.3, // Slight delay for better effect
          });

          gsap.to(pinkBox,{
            x:0,
            duration:1.5,
            ease:"elastic(1, 1.2)",
            delay:0.3
          })

          
        }
        
        
        
      },
      { threshold: 0.8 } // Trigger when 80% of the parent is visible
    );

    if (parent) observer.observe(parent);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={parentRef} className="h-[80vh] w-full flex flex-col">
      <div className="counter-info h-[50%] w-full flex">
        <div className="counter w-[50%] p-12">
          <CountdownTimer/>
        </div>
        <div className="info w-[50%] p-12">
          <h1 className="font-semibold text-5xl text-amber-950 ">
            To start a new career in Tech
          </h1>
          <p className="mt-2 text-[28px] text-zinc-500">
            to start a new career in Tech Unlock the door to the future with
            hands-on skills in Python, the most user-friendly and versatile
            programming language. Build projects in Data Analytics, Machine
            Learning, and Generative AI. Take your first step to make a change
            and apply today.
          </p>
        </div>
      </div>

      <div className="relative blue-div pl-10 pr-10 h-[50%] w-full flex overflow-hidden">
        <div
          ref={blueBoxRef}
          className="absolute blue-box h-[50%] w-[50%] bg-blue-500 bottom-0 flex justify-center"
        >
          <div
            ref={halfCircleRef}
            className="half-circle h-[700px] w-[700px] relative rounded-full bg-blue-700 -top-[150px] -left-[40px]"
          ></div>
        </div>
        <div
          className="absolute pink-box h-[95%] w-[50%] bg-pink-300 right-7 bottom-0 flex justify-center items-center p-[90px]"
          style={{ borderTopLeftRadius: "150px" }}
        >
          <h1 className="text-8xl font-semibold text-amber-950">
            The SOLP Coding Experience
          </h1>
        </div>
      </div>
    </div>
  );
}

export default AnimateWeek;
