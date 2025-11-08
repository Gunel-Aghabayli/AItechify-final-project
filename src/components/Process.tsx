import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img1 from "../assets/images/ser2.webp";
import img2 from "../assets/images/ser3.webp";
import img3 from "../assets/images/ser4.webp";

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const leftBoxRef = useRef<HTMLDivElement | null>(null);
  const rightBoxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // left image animation
      gsap.from(leftBoxRef.current, {
        x: -200,
        opacity: 0,
        duration: 1.3,
        scrollTrigger: {
          trigger: leftBoxRef.current,
          start: "top 85%",
          end: "bottom 60%",
          scrub: 1,
        },
      });

      // right image animation
      gsap.from(rightBoxRef.current, {
        x: 200,
        opacity: 0,
        duration: 1.3,
        scrollTrigger: {
          trigger: rightBoxRef.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="process" ref={sectionRef}>
      {/* Top scrolling ticker */}
      <div className="ticker">
        <div className="track">
          <p>
            Artificial Intelligence // The impact of AI on the evolution of
            technology // Artificial Intelligence in shaping the future of
            innovation //
          </p>
        </div>
      </div>

      {/* Work Process Text */}
      <div className="process-title">
        <span className="tag">Work Process</span>
        <h2>
          Streamlined AI Development Process for Reliable and Smart Businesses
        </h2>
      </div>

      {/* Process Boxes */}
      <div className="process-boxes">
        <div className="box left" ref={leftBoxRef}>
          <img src={img1} alt="step1" />
          <h3>Step 1: Research & Strategy</h3>
        </div>
        <div className="box right" ref={rightBoxRef}>
          <img src={img2} alt="step2" />
          <h3>Step 2: Design & Develop</h3>
        </div>
        <div className="box center">
          <img src={img3} alt="step3" />
          <h3>Step 3: Deploy & Optimize</h3>
        </div>
      </div>
    </section>
  );
};

export default Process;
