import React from "react";
import Backers from "./Backers";
import Team from "./Team";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

function About() {
  return (
    <>
      <div id="about" className="bg-black text-white w-full h-full sm:mt-14">
        {/* About US */}
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          className="text-[60px] sm:text-[80px] text-center font-codec font-bold"
        >
          About <span className="bg-clip-text text-[#1A88FF]">Us</span>
        </motion.div>
       {/*  <div className="mt-6">
          <motion.p
            variants={fadeIn("up", "tween", 0.5, 1)}
            initial="hidden"
            whileInView="show"
            className="sm:w-2/3 h-full text-[24px] text-center p-4 sm:p-2 mx-auto "
          >
            
          </motion.p>
        </div> */}

        {/* Our Teams */}
        <div className="">
          <Team />
        </div>

        {/* Our Backers */}
        <div className="">
          <Backers />
        </div>
      </div>
    </>
  );
}

export default About;
