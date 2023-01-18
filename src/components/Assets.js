import React, { useState } from "react";
import { assetsData } from "../data/assetsData";
import AssetCard from "./AssetCard";
import { motion } from "framer-motion";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";
import "../styles/styles.css";

function Assets() {
  const [active, setActive] = useState("1");

  return (
    <div className="bg-black text-white w-full h-full mt-[60px] sm:p-20 xs:p-8 px-8 py-14 ">
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        className="text-[40px] sm:text-[80px] text-center font-codec font-bold"
      >
        World Class Assets
      </motion.div>

      {/* <div className="flex justify-center items-center">
        <img src="/assets/cre.png" alt="asset" className="" />
      </div> */}

      <div className="mt-[50px] flex sm:flex-row flex-col min-h-[70vh] gap-5">
        {assetsData.map((asset, index) => (
          <AssetCard
            key={index}
            {...asset}
            index={index}
            active={active}
            handleClick={setActive}
          />
        ))}
      </div>

      {/* Text */}


      <div>
        <h3 id="resizing-h3" className="">
          <span>
            <div className="stage">
              <div className="cubespinner text-center">
                <div className="face1">
                  <div className="text-[50px] sm:text-[65px] text-center italic">
                    become a{" "}
                    <span className="text-[#F3C74E]">partial owner</span>.
                  </div>
                </div>
                <div className="face2">
                  <div className="text-[50px] sm:text-[65px] text-center italic">
                    become a <span className="text-[#F3C74E]">investor</span>.
                  </div>
                </div>
                <div className="face3">
                  <div className="text-[50px] sm:text-[65px] text-center italic">
                    become a <span className="text-[#F3C74E]">rich</span>.
                  </div>
                </div>
                <div className="face4"><div className="text-[50px] sm:text-[65px] text-center italic">
                become a <span className="text-[#F3C74E]">zoth investor</span>.
              </div></div>
              </div>
            </div>
          </span>
        </h3>
      </div>

    </div>
  );
}

export default Assets;
