import React from "react";
import { motion } from "framer-motion";
import leftImg from "../assets/images/hero3.webp";
import centerImg from "../assets/images/hero2.webp";
import rightImg from "../assets/images/hero4.webp";

const HeroCards: React.FC = () => {
  return (
    <div className="card-container">
      <motion.div
        className="card left"
        initial={{ opacity: 0, x: 0, rotate: 0 }}
        animate={{ opacity: 1, x: -250, rotate: -15 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <img className="sideImg" src={leftImg} alt="Left" />
      </motion.div>
      <motion.div
        className="card center"
        initial={{ opacity: 0, y: -300, scale: 0.8 }}
        animate={{ opacity: 1, y: -130, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img className="centerImg" src={centerImg} alt="Center" />
      </motion.div>
      <motion.div
        className="card right"
        initial={{ opacity: 0, x: 0, rotate: 0 }}
        animate={{ opacity: 1, x: 260, rotate: 15 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <img className="sideImg" src={rightImg} alt="Right" />
      </motion.div>
    </div>
  );
};

export default HeroCards;
