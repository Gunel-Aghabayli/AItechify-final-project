import Header from "./Header";
import { Link } from "react-router-dom";
import HeroComponent from "./HeroComponent";
import { MdArrowOutward } from "react-icons/md";
import HeroCards from "./HeroCards";
import HomeAb from "./HomeAb";
import Logos from "./Logos";

const Hero = () => {
  return (
    <div className="home">
      <Header />
      <section className="hero">
        <div className="hero-content">
          <div className="container">
            <div className="heading">
              <h1>Smart AI Solutions for Future Growth.</h1>
              <p>
                Empower your business with intelligent AI-driven technologies
                designed to streamline operations, boost efficiency, and drive
                innovation.
              </p>
              <Link
                to="/contact"
                className="btn btn__effect--2"
                data-text="Discover More"
              >
                {"Discover More".split("").map((char, i) => (
                  <span key={i}>{char}</span>
                ))}
                <div className="sideArrow">
                  <MdArrowOutward />
                </div>
              </Link>
            </div>
            <div className="hero-component">
              <HeroComponent />
            </div>
          </div>
          <div className="hero-images">
            <HeroCards />
          </div>
        </div>
      </section>
      <div>
        <HomeAb />
      </div>
      <div>
        <Logos />
      </div>
    </div>
  );
};

export default Hero;
