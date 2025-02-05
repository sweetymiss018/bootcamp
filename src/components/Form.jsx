import React, { useEffect, useRef } from "react";
import {gsap} from "gsap";
import BootcampForm from "./BootcampForm";
function Form() {
  const whitePathRef = useRef(null);

  const svgDivRef = useRef(null);
  const parentDivRef = useRef(null);
  useEffect(() => {
    // GSAP animation with ScrollTrigger
    gsap.fromTo(
      svgDivRef.current,
      { scale: 0 }, // Start at scale 0
      {
        scale: 1, // End at scale 1
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: parentDivRef.current, // Trigger animation when parent div is in view
          start: "center center", 
          toggleActions: "play none none none", // Play animation once
        },
      }
    );
  }, []);

  useEffect(() => {

    // GSAP animation

    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.from(whitePathRef.current, { scale: 1.1, duration: 1, ease: 'linear'})

      .to(whitePathRef.current, { scale: 0.9, duration: 1, ease: 'linear' });




      

  }, []);
  
  return (
    <div   ref={parentDivRef}  className="h-[150vh] w-full flex  items-center justify-end sm:h-[150vh] xs-lg:h-[190vh] md:h-[150vh] lg:h-[150vh]">
      <div
        className="yellow-div w-[89%] h-[98%] bg-[#FFD37D] flex lg:w-[89%] lg:h-[80%] md:w-[89%] md:h-[80%] xs-lg:h-[100%] sm:flex-col xs-lg:flex-col md:flex-row lg:flex-row sm:w-full xs-lg:w-full "
        style={{ borderBottomLeftRadius: "178px" }}
      >
       
        <div className="form relative h-full w-[55%]  flex justify-center items-center sm:h-[50%] xs-lg:h-[60%] sm:w-full xs-lg:w-full md:h-full lg:h-full md:top-[30px] sm:top-[30px] xs-lg:top-[140px] lg:top-[180px]">
          <BootcampForm/>
        </div>
        <div  ref={svgDivRef} className="svg h-full w-[45%] flex justify-end  lg:w-[45%]  sm:h-[50%] xs-lg:h-[40%] sm:w-full xs-lg:w-full md:h-full lg:h-full sm:mb-4 xs-lg:mb-1 relative xs-lg:-bottom-20 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 644 644"
            width="644"
            height="644"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <clipPath id="__lottie_element_129">
                <rect width="644" height="644" x="0" y="0"></rect>
              </clipPath>
              <clipPath id="__lottie_element_131">
                <path d="M0,0 L1920,0 L1920,1080 L0,1080z"></path>
              </clipPath>
              <clipPath id="__lottie_element_132">
                <path
                  fill="#ffffff"
                  clipRule="nonzero"
                  d="M960.625,538.875 C960.625,538.875 579.625,538.875 579.625,538.875 C579.625,538.875 579.625,903.875 579.625,903.875 C579.625,903.875 960.625,903.875 960.625,903.875 C960.625,903.875 960.625,538.875 960.625,538.875"
                  fillOpacity="1"
                ></path>
              </clipPath>
              <clipPath id="__lottie_element_165">
                <path d="M0,0 L322,0 L322,322 L0,322z"></path>
              </clipPath>
              <clipPath id="__lottie_element_175">
                <path d="M0,0 L1920,0 L1920,1080 L0,1080z"></path>
              </clipPath>
              <clipPath id="__lottie_element_176">
                <path
                  fill="#ffffff"
                  clipRule="nonzero"
                  d="M1282,218 C1282,218 960,218 960,218 C960,218 960,540.25 960,540.25 C960,540.25 1282,540.25 1282,540.25 C1282,540.25 1282,218 1282,218"
                  fillOpacity="1"
                ></path>
              </clipPath>
            </defs>
            <g clipPath="url(#__lottie_element_129)">
              <g
                transform="matrix(1,0,0,1,483,161)"
                opacity="1"
                style={{ display: "block" }}
              >
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    fill="rgb(255,211,125)"
                    fillOpacity="1"
                    d="M-161,-161 C-161,-161 161,-161 161,-161 C161,-161 161,161 161,161 C161,161 -161,161 -161,161 C-161,161 -161,-161 -161,-161z"
                  ></path>
                </g>
              </g>
              <g
                clipPath="url(#__lottie_element_175)"
                transform="matrix(1,0,0,1,-638,-218)"
                opacity="1"
                style={{ display: "block" }}
              >
                <g clipPath="url(#__lottie_element_176)">
                  <g
                    transform="matrix(1,0,0,1,1121,460)"
                    opacity="1"
                    style={{ display: "block" }}
                  >
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        fill="rgb(56,48,48)"
                        fillOpacity="1"
                        d="M0,-80 C0,-80 -161,80 -161,80 C-161,80 161,80 161,80 C161,80 0,-80 0,-80z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(0,1.0044100284576416,-1.003119945526123,0,959.99853515625,217.58880615234375)"
                    opacity="1"
                    style={{ display: "block" }}
                  >
                    <g opacity="1" transform="matrix(1,0,0,1,433.5,-161)">
                      <path
                        fill="rgb(56,48,48)"
                        fillOpacity="1"
                        d="M113.5,-160 C113.5,-160 113.5,160 113.5,160 C113.5,160 -113.5,160 -113.5,160 C-113.5,160 -113.5,-160 -113.5,-160 C-113.5,-160 113.5,-160 113.5,-160z"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
              <g
                clipPath="url(#__lottie_element_165)"
                transform="matrix(1,0,0,1,322,322)"
                opacity="1"
                style={{ display: "block" }}
              >
                <g
                  transform="matrix(1,0,0,1,161,161)"
                  opacity="1"
                  style={{ display: "block" }}
                >
                  <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                    <path
                      fill="rgb(112,162,225)"
                      fillOpacity="1"
                      d="M161,-161 C161,-161 -161,-161 -161,-161 C-161,-161 -161,161 -161,161 C-161,161 161,161 161,161 C161,161 161,-161 161,-161z"
                    ></path>
                  </g>
                </g>
                <g
                  transform="matrix(0.7672399878501892,0,0,0.7672399878501892,161,161)"
                  opacity="1"
                  style={{ display: "block" }}
                >
                  <g ref={whitePathRef} opacity="1" transform="matrix(1,0,0,1,0,0)">
                    <path
                      fill="rgb(255,255,255)"
                      fillOpacity="1"
                      d="M0,116 C0,51.93000030517578 -51.93000030517578,0 -116,0 C-51.93000030517578,0 0,-51.93000030517578 0,-116 C0,-51.93000030517578 51.93000030517578,0 116,0 C51.93000030517578,0 0,51.93000030517578 0,116z"
                    ></path>
                  </g>
                </g>
              </g>
              <g
                transform="matrix(1,0,0,1,161,161)"
                opacity="1"
                style={{ display: "block" }}
              >
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    fill="rgb(54,88,211)"
                    fillOpacity="1"
                    d="M161,-161 C161,-161 -161,-161 -161,-161 C-161,-161 -161,161 -161,161 C-161,161 161,161 161,161 C161,161 161,-161 161,-161z"
                  ></path>
                </g>
              </g>
              <g style={{ display: "none" }}>
                <g>
                  <path></path>
                </g>
              </g>
              <g
                transform="matrix(1,0,0,1,322,322)"
                opacity="1"
                style={{ display: "block" }}
              >
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    fill="rgb(255,135,135)"
                    fillOpacity="1"
                    d="M-161,-215.11599731445312 C-156.96600341796875,-215.11599731445312 -152.9510040283203,-213.5800018310547 -149.8780059814453,-210.50799560546875 C-149.8780059814453,-210.50799560546875 -111.47799682617188,-172.11900329589844 -111.47799682617188,-172.11900329589844 C-105.33100128173828,-165.9739990234375 -105.33100128173828,-156.0260009765625 -111.47799682617188,-149.88099670410156 C-111.47799682617188,-149.88099670410156 -149.8780059814453,-111.49299621582031 -149.8780059814453,-111.49299621582031 C-152.9510040283203,-108.41999816894531 -156. 98500061035156,-106.88400268554688 -161,-106.88400268554688 C-165.01499938964844,-106.88400268554688 -169.0489959716797,-108.41999816894531 -172.1219940185547,-111.49299621582031 C-172.1219940185547,-111.49299621582031 -210.52200317382812,-149.88099670410156 -210.52200317382812,-149.88099670410156 C-216.66900634765625,-156.0260009765625 -216.66900634765625,-165.9739990234375 -210.52200317382812,-172.11900329589844 C-210.52200317382812,-172.11900329589844 -172.1219940185547,-210.50799560546875 -172.1219940185547,-210.50799560546875 C-169.0489959716797,-213.5800018310547 -165.01499938964844,-215.11599731445312 -161,-215.11599731445312z M-161,-257 C-176.38699340820312,-257 -190.87100219726562,-251.00900268554688 -201.74400329589844,-240.1199951171875 C-201.74400329589844,-240.1199951171875 -240.1439971923828,-201.7310028076172 -240.1439971923828,-201.7310028076172 C-262.6189880371094,-179.26300048828125 -262.6189880371094,-142.71800231933594 -240.1439971923828,-120.26899719238281 C-240.1439971923828,-120.26899719238281 -201.74400329589844,-81.87999725341797 -201.74400329589844,-81.87999725341797 C-190.8520050048828,-70.99199676513672 -176.38699340820312,-65 -161,-65 C-145.61300659179688,-65 -131.1479949951172,-70.99199676513672 -120.25599670410156,-81.86100006103516 C-120.25599670410156,-81.86100006103516 -81.85600280761719,-120.2490005493164 -81.85600280761719,-120.2490005493164 C-59.38100051879883,-142.71800231933594 -59.38100051879883,-179.26300048828125 -81.85600280761719,-201.71200561523438 C-81.85600280761719,-201.71200561523438 -120.25599670410156,-240.1009979248047 -120.25599670410156,-240.1009979248047 C-131.1479949951172,-250.99000549316406 -145.61300659179688,-256.9809875488281 -161,-256.9809875488281 C-161,-256.9809875488281 -161,-257 -161,-257z"
                  ></path>
                </g>
              </g>
              <g
                clipPath="url(#__lottie_element_131)"
                transform="matrix(1,0,0,1,-639,-217)"
                opacity="1"
                style={{ display: "block" }}
              >
                <g clipPath="url(#__lottie_element_132)">
                  <g
                    transform="matrix(1,0,0,1,812,541)"
                    opacity="1"
                    style={{ display: "block" }}
                  >
                    <g opacity="1" transform="matrix(1,0,0,1,148,-1)">
                      <path
                        fill="rgb(255,255,255)"
                        fillOpacity="1"
                        d="M0,-321 C177.15989685058594,-321 321,-177.15989685058594 321,0 C321,177.15989685058594 177.15989685058594,321 0,321 C-177.15989685058594,321 -321,177.15989685058594 -321,0 C-321,-177.15989685058594 -177.15989685058594,-321 0,-321z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(0.75,0,0,0.75,849,540.75)"
                    opacity="1"
                    style={{ display: "block" }}
                  >
                    <g opacity="1" transform="matrix(1,0,0,1,148,-1)">
                      <path
                        fill="rgb(236,82,18)"
                        fillOpacity="1"
                        d="M0,-321 C177.15989685058594,-321 321,-177.15989685058594 321,0 C321,177.15989685058594 177.15989685058594,321 0,321 C-177.15989685058594,321 -321,177.15989685058594 -321,0 C-321,-177.15989685058594 -177.15989685058594,-321 0,-321z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(0.5,0,0,0.5,886,540.5)"
                    opacity="1"
                    style={{ display: "block" }}
                  >
                    <g opacity="1" transform="matrix(1,0,0,1,148,-1)">
                      <path
                        fill="rgb(255,135,135)"
                        fillOpacity="1"
                        d="M0,-321 C177.15989685058594,-321 321,-177.15989685058594 321,0 C321,177.15989685058594 177.15989685058594,321 0,321 C-177.15989685058594,321 -321,177.15989685058594 -321,0 C-321,-177.15989685058594 -177.15989685058594,-321 0,-321z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(0.25,0,0,0.25,923,540.25)"
                    opacity="1"
                    style={{ display: "block" }}
                  >
                    <g opacity="1" transform="matrix(1,0,0,1,148,-1)">
                      <path
                        fill="rgb(255,255,255)"
                        fillOpacity="1"
                        d="M0,-321 C177.15989685058594,-321 321,-177.15989685058594 321,0 C321,177.15989685058594 177.15989685058594,321 0,321 C-177.15989685058594,321 -321,177.15989685058594 -321,0 C-321,-177.15989685058594 -177.15989685058594,-321 0,-321z"
                      ></path>
                    </g>
                  </g>
                  <g
                    transform="matrix(0,0,0,0,960,540)"
                    opacity="1"
                    style={{ display: "block" }}
                  >
                    <g opacity="1" transform="matrix(1,0,0,1,148,-1)">
                      <path
                        fill="rgb(236,82,18)"
                        fillOpacity="1"
                        d="M0,-321 C177.15989685058594,-321 321,-177.15989685058594 321,0 C321,177.15989685058594 177.15989685058594,321 0,321 C-177.15989685058594,321 -321,177.15989685058594 -321,0 C-321,-177.15989685058594 -177.15989685058594,-321 0,-321z"
                      ></path>
                    </g>
                  </g>
                  <g style={{ display: "none" }}>
                    <g>
                      <path></path>
                    </g>
                  </g>
                  <g style={{ display: "none" }}>
                    <g>
                      <path></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
        
      </div>
    </div>
  );
}

export default Form;
