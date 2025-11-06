import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import ServiceSlider from "./ServiceSlider";

const Service = () => {
  return (
    <section className="service">
      <div className="ser-head">
        <div className="text-box">
          <h4 className="subtitle">Our Best Services</h4>
          <h1>
            Innovative AI Solutions for Business
            <span className="highlight-icon">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="81"
                height="16"
                viewBox="0 0 51 16"
                fill="none"
              >
                <path
                  d="M50.7071 8.70711C51.0976 8.31658 51.0976 7.68342 50.7071 7.29289L44.3431 0.928932C43.9526 0.538408 43.3195 0.538408 42.9289 0.928932C42.5384 1.31946 42.5384 1.95262 42.9289 2.34315L48.5858 8L42.9289 13.6569C42.5384 14.0474 42.5384 14.6805 42.9289 15.0711C43.3195 15.4616 43.9526 15.4616 44.3431 15.0711L50.7071 8.70711ZM0 8V9H50V8V7H0V8Z"
                  fill="black"
                ></path>
              </svg>
            </span>
            Growth and Efficient.
          </h1>
        </div>
        <div className="btn-box">
          <Link
            to="/contact"
            className="btn btn__effect--2"
            data-text="Learn Services"
          >
            {"Learn Services".split(" ").map((word, i) => (
              <span key={i} className="word">
                {word.split("").map((char, j) => (
                  <span key={j} className="char">
                    {char}
                  </span>
                ))}
                {i < 1 && <span className="space">  </span>}
              </span>
            ))}
            <div className="sideArrow">
              <MdArrowOutward />
            </div>
          </Link>
        </div>
      </div>
      <div>
        <ServiceSlider/>
      </div>
    </section>
  );
};

export default Service;
