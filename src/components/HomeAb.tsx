import { Link } from "react-router-dom";
import img from "../assets/images/ab2.webp";
import videoFile from "../assets/videos/01.mp4";
import { MdArrowOutward } from "react-icons/md";
import Stats from "./Stats";

const HomeAb = () => {
  return (
    <section className="home-ab">
      <div className="first-part">
        <div className="ab-img">
          <img src={img} alt="ab2" />
        </div>
        <div className="img-info">
          <div className="abt">
            <h4 className="subtitle">About Us</h4>
            <h1>
              Empowering Businesses with Smart AI Solutions and Cutting-Edge
              Technology for Future Growth.
            </h1>
          </div>
          <div className="experience-section">
            <div className="left-box">
              <div className="years-box">
                <span className="number">15</span>
                <span className="vertical-text">
                  YEARS OF WORK
                  <br />
                  EXPERIENCE
                </span>
              </div>
              <Link
                to="/contact"
                className="btn btn__effect--2"
                data-text="Know About Us"
              >
                {"Know About Us".split(" ").map((word, i) => (
                  <span key={i} className="word">
                    {word.split("").map((char, j) => (
                      <span key={j} className="char">
                        {char}
                      </span>
                    ))}
                    {i < 2 && <span className="space"> </span>}
                  </span>
                ))}
                <div className="sideArrow">
                  <MdArrowOutward />
                </div>
              </Link>
            </div>
            <div className="right-box">
              <p>
                We specialize in delivering innovative AI solutions & advanced
                technologies tailored to your business needs. Our team helps
                automate processes, boost efficiency, and drive smarter
                decisions. Partner with us to future-proof.
              </p>
              <div className="vid-wrap">
                <video autoPlay loop muted playsInline>
                  <source src={videoFile} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="second-part">
        <Stats/>
      </div>
    </section>
  );
};

export default HomeAb;
