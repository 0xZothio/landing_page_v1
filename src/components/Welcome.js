import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import "../styles/styles.css";

function Welcome() {
  return (
    <>
      {/* welcome */}
      <div className="mt-24 sm:mt-32 overflow-x-hidden">
        <div className="flex flex-col justify-center items-center">
          <motion.div
            variants={fadeIn("up", "tween",0.2, 1)}
            initial="hidden"
            whileInView="show"
            className="text-[55px] text-center sm:text-[80px] font-codec font-bold"
          >
            Welcome to the
          </motion.div>

          <motion.div
            variants={fadeIn("down", "tween", 0.3, 1)}
            initial="hidden"
            whileInView="show"
          >
            <img src="/club.png" alt="Zoth Club" />
          </motion.div>
        </div>

       
      </div>
    </>
  );
}

export default Welcome;
