import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import "../styles/styles.css";

function Welcome() {
  return (
    <>
      {/* welcome */}
      <div className="mt-20 sm:mt-20">
        <div className="flex flex-col justify-center items-center">
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 0.3)}
            initial="hidden"
            whileInView="show"
            className="text-[55px] text-center sm:text-[80px] font-codec font-bold"
          >
            Welcome to the
          </motion.div>

          <motion.div
            variants={fadeIn("down", "tween", 0.2, 0.3)}
            initial="hidden"
            whileInView="show"
          >
            <img src="/club.png" alt="Zoth Club" />
          </motion.div>
        </div>

        <div className="sm:ml-12 ml-4">
          <h3 id="resizing-h3">
            <span>
              <div className="h-100 mt-4">
                <div className="cubespinner text-center ">
                  <div className="face1">
                    <div className="text-[35px] sm:text-[55px] text-center">
                      Democratising{" "}
                      <span className="text-[#F3C74E]">Investment</span>
                    </div>
                  </div>
                  <div className="face2">
                    <div className="text-[35px] sm:text-[55px] text-center">
                      Democratising{" "}
                      <span className="text-[#F3C74E]">Wealth Creation</span>
                    </div>
                  </div>
                  <div className="face3">
                    <div className="text-[35px] sm:text-[55px] text-center">
                      Democratising{" "}
                      <span className="text-[#F3C74E]">Future of Finance</span>
                    </div>
                  </div>
                  {/* <div className="face4">
                    <div className="text-[35px] sm:text-[55px] text-center">
                      Democratising{" "}
                      <span className="text-[#F3C74E]">
                        Access to Top Assets
                      </span>
                    </div>
                  </div> */}
                </div>
              </div>
            </span>
          </h3>
        </div>
      </div>
    </>
  );
}

export default Welcome;
