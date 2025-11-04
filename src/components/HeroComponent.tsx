import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import shape1 from "../assets/images/shape1.svg";
import cl1 from "../assets/images/cl1.webp";
import cl2 from "../assets/images/cl2.webp";
import cl3 from "../assets/images/cl3.webp";
import cl4 from "../assets/images/cl4.webp";

const HeroComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 20;
    const duration = 2000;
    const step = 1;
    const interval = duration / (end / step);
    const timer = setInterval(() => {
      start += step;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-stats">
      <motion.img
        src={shape1}
        alt="arrow"
        className="arrow"
        initial={{ y: -100, rotate: -60, opacity: 0 }}
        animate={{ y: 0, rotate: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <motion.div
        className="client-card"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="client-info">
         <h2>{count}K</h2>
          <ul className="avatars">
            <li><img src={cl1} alt="client1" /></li>
            <li><img src={cl2} alt="client2" /></li>
            <li><img src={cl3} alt="client3" /></li>
            <li><img src={cl4} alt="client4" /></li>
          </ul>
          <p>Happy clients and successful transactions</p>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroComponent;
