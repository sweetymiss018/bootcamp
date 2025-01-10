import React, { useEffect } from 'react';

export default function CodingAnimation() {
  useEffect(() => {
    // Import GSAP from CDN
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    script.async = true;
    
    script.onload = () => {
      const gsap = window.gsap;
      const flowers = document.querySelector(".flowers");

      gsap.fromTo(flowers, {
        y: 400,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 4,
        ease: "elastic.out(1, 0.3)"
      });

      const tl = gsap.timeline();

      // C-flower Animation
      const pinkGroup = document.getElementById("pink-group");
      const yellowGroup = document.getElementById("yellow-group");
      const c_flower = document.querySelector('.c-letter-flower');

      gsap.set(yellowGroup, { x: 0 });
      
      gsap.fromTo([pinkGroup], {
        rotation: 0,
        transformOrigin: "center center",
      }, {
        duration: 4,
        rotation: -360,
        ease: "elastic(linear, 0.6)",
      });

      gsap.fromTo([yellowGroup], {
        rotation: 0,
        transformOrigin: "center center",
      }, {
        duration: 4,
        rotation: 360,
        ease: "elastic(linear, 0.6)",
      });

      tl.to(yellowGroup, {
        duration: 1,
        x: 150,
        ease: "power2.out",
      });

      // Pendulum animations
      const pendulumSwing = (element, duration) => {
        gsap.to(element, {
          x: 15.453212,
          y: 0.74546,
          z: 0,
          rotation: 5.34798,
          duration,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
          onStart: () => {
            gsap.to(element, {
              x: -11.034527,
              y: 0.384732,
              rotation: -1.48798,
              duration,
              ease: "power1.inOut",
              yoyo: true,
              repeat: -1,
            });
          }
        });
      };

      pendulumSwing(c_flower, 1.5);
      pendulumSwing(document.querySelector('.o-letter-flower'), 1.7);
      pendulumSwing(document.querySelector('.d-letter-flower'), 1);
      pendulumSwing(document.querySelector('.i-letter-flower'), 1.5);
      pendulumSwing(document.querySelector('.n-letter-flower'), 2);
      pendulumSwing(document.querySelector('.g-letter-flower'), 1.3);

      // O Letter
      const bluishGreen2 = document.getElementById("bluish-green2");
      const red = document.getElementById("red");
      
      gsap.fromTo(bluishGreen2, {
        rotation: 0,
        transformOrigin: "center center",
      }, {
        duration: 2,
        rotation: -210,
        ease: "elastic(linear,1.5)",
      });

      gsap.fromTo(red, {
        rotation: 0,
        transformOrigin: "center center",
      }, {
        duration: 2,
        rotation: 330,
        ease: "elastic(linear,1.5)",
      });

      // D Letter
      const firstBluePath = document.getElementById("first-blue-path");
      const secondBluePath = document.getElementById("second-blue-path");
      const darkBluePath = document.querySelector(".dark-blue-path");

      tl.from(firstBluePath, { x: -100 })
        .to(firstBluePath, {
          duration: 0.5,
          x: 160,
          ease: "power2.inOut",
        })
        .from(secondBluePath, {
          duration: 0.2,
          scale: 1.05,
          ease: "power2.out",
        }, 1)
        .fromTo(darkBluePath, {
          scaleX: 0,
          opacity: 0,
          transformOrigin: "left",
        }, {
          duration: 0.2,
          scaleX: 1,
          opacity: 1,
          transformOrigin: "left",
          ease: "power2.out",
        }, 1.5);

      // I Letter animations
      const lightPath = document.getElementById("light-path");
      const darkPath = document.getElementById("dark-path");

      gsap.fromTo([darkPath, lightPath], {
        scale: 0,
        opacity: 0,
      }, {
        duration: 1.5,
        scale: (index) => index === 0 ? 2 : 1.2,
        opacity: 1,
        ease: "elastic.out(1, 0.3)",
        transformOrigin: "center center",
        stagger: 0.5
      });

      // N Letter animations
      const yellowPath = document.getElementById("yellow-path");
      const bluePath = document.getElementById("blue-path");

      gsap.fromTo([yellowPath, bluePath], {
        scale: 0,
        opacity: 0,
      }, {
        duration: 1.5,
        scale: 1,
        opacity: 1,
        ease: "elastic.out(1, 0.3)",
      });

      // G Letter animations
      const bluishGreen = document.getElementById("bluish-green");
      const yellowish = document.getElementById("yellowish");
      const redBall = document.getElementById("red-ball");

      gsap.fromTo(bluishGreen, {
        rotation: 90,
        transformOrigin: "right center",
      }, {
        duration: 1.2,
        rotation: 0,
        ease: "elastic(linear)",
      });

      gsap.fromTo(yellowish, {
        rotation: -180,
        transformOrigin: "center center",
      }, {
        duration: 1.2,
        rotation: 0,
        ease: "elastic(linear)",
      });

      tl.fromTo(redBall, {
        scale: 0,
        transformOrigin: "center center",
      }, {
        duration: 0.5,
        scale: 1,
        rotation: 0,
        ease: "elastic.out(1, 0.3)",
      }).to(redBall, {
        duration: 0.7,
        x: 180,
        rotation: -10,
        ease: "elastic(linear, 0.5)",
      });
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
     <div className="h-[100vh] w-screen flex items-center justify-center bg-cyan-50 gap-16 overflow-hidden">
      <div className="flowers relative w-full  flex justify-center items-center ">
        {/* C Letter */}
        <div className="c-letter-flower absolute top-1/2 left-[20%] lg:left-[20%]  md:left-[12%] sm:left-[18%] -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[300px] lg:h-[300px]  md:w-[200px] sm:w-[150px]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 299 285" className="w-full h-full">
            <defs>
              <clipPath id="__lottie_element_45">
                <rect width="299" height="285" x="0" y="0" />
              </clipPath>
            </defs>
            <g clipPath="url(#__lottie_element_45)">
              <g id="pink-group" transform="matrix(1,-0.00000355556289832748,0.00000355556289832748,1,84.47600555419922,142.54161071777344)">
                <g transform="matrix(1,0,0,1,0,0)">
                  <path fill="rgb(255,186,186)" d="M70.866 141.734C-7.408 141.734 -70.866 78.277 -70.866 0.003C-70.866 -78.272 -7.408 -141.734 70.866 -141.734L70.866 141.729L70.866 141.734z" />
                </g>
              </g>
              <g id="yellow-group" transform="matrix(1,0,0,1,130,142.54100036621094)">
                <g transform="matrix(1,0,0,1,0,0)">
                  <path fill="rgb(255,211,125)" d="M70.866 141.734C-7.408 141.734 -70.866 78.277 -70.866 0.003C-70.866 -78.272 -7.408 -141.734 70.866 -141.734L70.866 141.729L70.866 141.734z" />
                </g>
              </g>
            </g>
          </svg>
        </div>

        {/* O Letter */}
        <div className="o-letter-flower absolute top-1/2 left-[35%] lg:left-[35%]  md:left-[30%] sm:left-[35%] -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[300px] lg:h-[300px] md:w-[200px] sm:w-[150px]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 288" className="w-full h-full">
            <defs>
              <clipPath id="__lottie_element_55">
                <rect width="330" height="288" x="0" y="0" />
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

        {/* D Letter */}
        <div className="d-letter-flower absolute top-1/2 left-[47%] lg:left[47%]  md:left-[45%] sm:left-[50%] -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[300px] lg:h-[300px] md:w-[200px] sm:w-[150px]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 288" className="w-full h-full">
            <defs>
              <clipPath id="__lottie_element_11">
                <rect width="288" height="288" x="0" y="0" />
              </clipPath>
            </defs>
            <g clipPath="url(#__lottie_element_11)">
              <g id="first-blue-path" className="light-blue-path" transform="matrix(0,1.0708999633789062,-1.0708999633789062,0,39.373558044433594,462.1292724609375)" style={{display: "block"}}>
                <g transform="matrix(1,0,0,1,-297,-98)">
                  <path fill="rgb(255, 177, 0)" d="M0,-134C74.006,-134,134,-74.006,134,0C45.99,0.233,-85.909,-0.233,-134,0C-134,-74.006,-74.006,-134,0,-134z" />
                </g>
              </g>
              <g id="second-blue-path" className="light-blue-path" transform="matrix(0,1.0708999633789062,-1.0708999633789062,0,39.37355041503906,462.1292724609375)" style={{display: "block"}}>
                <g transform="matrix(1,0,0,1,-297,-98)">
                  <path fill="rgb(112,162,225)" d="M0,-134C74.006,-134,134,-74.006,134,0C45.99,0.233,-85.909,-0.233,-134,0C-134,-74.006,-74.006,-134,0,-134z" />
                </g>
              </g>
              <g className="dark-blue-path" transform="matrix(1,0,0,1,208.5,280.5769958496094)" style={{display: "block"}}>
                <g transform="matrix(1,0,0,1,-108,-136.5)">
                  <path fill="rgb(54,88,211)" d="M44,-143.5C44,-143.5,44,143.5,44,143.5C44,143.5,-44,143.5,-44,143.5C-44,143.5,-44,-143.5,-44,-143.5C-44,-143.5,44,-143.5,44,-143.5z" />
                </g>
              </g>
            </g>
          </svg>
        </div>

        {/* I Letter */}
        <div className="i-letter-flower absolute top-1/2 left-[60%] lg:left-[55%]  md:left-[58%] sm:left-[62%] -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[300px] lg:h-[300px] md:w-[200px] md:h-[200px] sm:w-[150px] sm:h-[150px]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 83 284" className="w-full h-full">
            <defs>
              <clipPath id="__lottie_element_21">
                <rect width="83" height="284" x="0" y="0" />
              </clipPath>
            </defs>
            <g clipPath="url(#__lottie_element_21)">
              <g id="dark-path" style={{display: "block"}} transform="matrix(1,0,0,1,41.60300064086914,141.8679962158203)">
                <g transform="matrix(1,0,0,1,0,0)">
                  <path fill="rgb(236,82,18)" d="M40.932,-141.732L-40.932,-141.732L-40.932,141.732L40.932,141.732L40.932,-141.732z" />
                </g>
              </g>
              <g id="light-path" style={{display: "block"}} transform="matrix(1,0,0,1,69.28099822998047,13.855987548828125)">
                <g transform="matrix(1,0,0,1,0,0)">
                  <path fill="rgb(255,163,124)" d="M13.297,-13.829L-13.297,-13.829L-13.297,13.829L13.297,13.829L13.297,-13.829z" />
                </g>
              </g>
            </g>
          </svg>
        </div>

        {/* N Letter */}
        <div className="n-letter-flower absolute top-[53%] left-[70%] lg:left-[70%]  md:left-[72%] sm:left-[75%] -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[300px] lg:h-[300px] md:w-[200px] sm:w-[150px]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 288" className="w-full h-full">
            <defs>
              <clipPath id="__lottie_element_28">
                <rect width="288" height="288" x="0" y="0" />
              </clipPath>
            </defs>
            <g clipPath="url(#__lottie_element_28)">
              <g id="blue-path" style={{display: "block"}} transform="matrix(1,0,0,1,125.59300231933594,142.39199829101562)">
                <g transform="matrix(1,0,0,1,0,0)">
                  <path fill="rgb(54,88,211)" d="M0,-142.32C64.411,-142.32,116.701,-90.027,116.701,-25.62L116.701,142.32L-116.701,142.32L-116.701,-25.62C-116.701,-90.027,-64.414,-142.32,0,-142.32z" />
                </g>
              </g>
              <g id="yellow-path" style={{display: "block"}} transform="matrix(1,0,0,1,95.5790023803711,198.07899475097656)">
                <g transform="matrix(1,0,0,1,0,0)">
                  <path fill="rgb(255,211,125)" d="M87,87L-87,-87L-87,87L87,87z" />
                </g>
              </g>
            </g>
          </svg>
        </div>

        {/* G Letter */}
        <div className="g-letter-flower absolute top-[40%] left-[85%] lg:left-[85%]  md:left-[90%] sm:left-[90%] -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] lg:w-[400px] lg:h-[400px] md:w-[200px] sm:w-[150px]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 295 355" className="w-full h-full">
            <defs>
              <clipPath id="__lottie_element_35">
                <rect width="295" height="355" x="0" y="0" />
              </clipPath>
            </defs>
            <g clipPath="url(#__lottie_element_35)">
              <g id="red-ball" style={{display: "block"}} transform="matrix(0.9999999403953552,0,0,0.9999999403953552,237.19500732421875,166.24400329589844)">
                <g transform="matrix(1,0,0,1,0,0)">
                  <path style={{transform: "translate3d(10.6563px, 0px, 0px)"}} fill="rgb(236,82,18)" d="M45.685,0C45.685,-25.23,25.225,-45.684,-0.005,-45.684C-25.235,-45.684,-45.685,-25.23,-45.685,0C-45.685,25.23,-25.235,45.684,-0.005,45.684C25.225,45.684,45.685,25.23,45.685,0z" />
                </g>
              </g>
              <g id="yellowish" style={{display: "block"}} transform="matrix(1,0,0,1,141.77000427246094,283.2749938964844)">
                <g transform="matrix(1,0,0,1,0,0)">
                  <path fill="rgb(255,211,125)" d="M141.73,-70.866C141.73,7.409,78.27,70.866,0,70.866C-78.28,70.866,-141.73,7.409,-141.73,-70.866L141.73,-70.866z" />
                </g>
              </g>
              <g id="bluish-green" style={{display: "block"}} transform="matrix(1,0,0,1,70.96500396728516,212.40699768066406)">
                <g transform="matrix(1,0,0,1,0,0)">
                  <path fill="rgb(119,198,179)" d="M70.865,141.734C-7.405,141.734,-70.865,78.277,-70.865,0.003C-70.865,-78.272,-7.415,-141.734,70.865,-141.734L70.865,141.729L70.865,141.734z" />
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}