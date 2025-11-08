import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img1 from "../assets/images/pro1.webp";
import img2 from "../assets/images/pro2.webp";
import img3 from "../assets/images/pro3.webp";
import img4 from "../assets/images/pro4.webp";
import img5 from "../assets/images/pro5.webp";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Case = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const leftTextRef = useRef<HTMLSpanElement | null>(null);
  const rightTextRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(leftTextRef.current, {
        x: "-25vw",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1.3,
        },
      });

      gsap.to(rightTextRef.current, {
        x: "25vw",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1.3,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="case">
        <div className="case-content">
          <h4 className="subtitle">Case Studies</h4>
          <h2>Transforming Ideas into Intelligent Tech Solutions</h2>
        </div>
      </section>
      <section className="work" ref={sectionRef}>
        <h1 className="work-title">
          <span ref={leftTextRef} className="left-part">
            WO
          </span>
          <span className="space"></span>
          <span ref={rightTextRef} className="right-part">
            RK
          </span>
        </h1>
        <div className="work-gallery">
          <div className="top-row">
            <div className="img-box big-left">
              <img src={img1} alt="AI 1" />
              <div className="overlay">
                <span className="tag">AI Agency</span>
                <Link to={"/"}>AI-powered projects for scalable success.</Link>
                <div className="arrow">↗</div>
              </div>
            </div>
            <div className="img-box big-right">
              <img src={img2} alt="AI 2" />
              <div className="overlay">
                <span className="tag">AI Agency</span>
                <Link to={"/"}>AI-powered projects for scalable success.</Link>
                <div className="arrow">↗</div>
              </div>
            </div>
          </div>

          <div className="bottom-row">
            <div className="img-box small-left">
              <img src={img3} alt="AI 3" />
              <div className="overlay">
                <span className="tag">AI Agency</span>
                <Link to={"/"}>AI-powered projects for scalable success.</Link>
                <div className="arrow">↗</div>
              </div>
            </div>
            <div className="img-box small-center">
              <img src={img4} alt="AI 4" />
              <div className="overlay">
                <span className="tag">AI Agency</span>
                <Link to={"/"}>AI-powered projects for scalable success.</Link>
                <div className="arrow">↗</div>
              </div>
            </div>
            <div className="img-box small-right">
              <img src={img5} alt="AI 5" />
              <div className="overlay">
                <span className="tag">AI Agency</span>
                <Link to={"/"}>AI-powered projects for scalable success.</Link>
                <div className="arrow">↗</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Case;
