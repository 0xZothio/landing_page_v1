import React, { useState, useEffect } from "react";
import { assetsData } from "../data/assetsData";
import AssetCard from "./AssetCard";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import "../styles/styles.css";

function Assets() {
  const [active, setActive] = useState("1");

  const [scrollvalue, setScrollValue] = useState(0);
  useEffect(() => {
    const element = document.querySelector("#section-2");
    const handleScroll = () => {
      console.log("scrollToTop", element.scrollTop);
      setScrollValue(element.scrollTop);

      if (scrollvalue > 2000) {
        setActive("5");
      } else if (scrollvalue > 1500) {
        setActive("4");
      } else if (scrollvalue > 1000) {
        setActive("3");
      } else if (scrollvalue > 500) {
        setActive("2");
      } else {
        setActive("1");
      }
    };

    element.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => element.removeEventListener("scroll", handleScroll);
  }, [scrollvalue]);

  return (
    <div className="bg-black text-white w-full h-full sm:mt-[60px] sm:p-20 xs:p-8 px-8 pb-14">
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          className="text-[40px] sm:text-[80px] text-center font-codec font-bold"
        >
          World Class{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            Assets
          </span>
        </motion.div>

        {/* <div className="flex justify-center items-center">
        <img src="/assets/cre.png" alt="asset" className="" />
      </div> */}

        <div
          className="sm:block absolute bg-transparent w-full h-screen overflow-y-scroll scrollbar-hide z-10 left-0 hidden"
          id="section-2"
        >
          <div className="h-screen w-full"></div>
          <div className="h-screen w-full"></div>
          <div className="h-screen w-full"></div>
          <div className="h-screen w-full"></div>
          <div className="h-screen w-full"></div>
          <div className="h-screen w-full"></div>
        </div>
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

        <div className="mt-20 sm:mt-4">
          <h3 id="resizing-h3">
            <span>
              <div className="stage">
                <div className="cubespinner text-center">
                  <div className="face1">
                    <div className="text-[40px] sm:text-[55px] text-center">
                      Democratising{" "}
                      <span className="text-[#F3C74E]">Investment</span>
                    </div>
                  </div>
                  <div className="face2">
                    <div className="text-[40px] sm:text-[55px] text-center">
                      Democratising{" "}
                      <span className="text-[#F3C74E]">Wealth Creation</span>
                    </div>
                  </div>
                  <div className="face3">
                    <div className="text-[40px] sm:text-[55px] text-center">
                      Democratising{" "}
                      <span className="text-[#F3C74E]">Future of Finance</span>
                    </div>
                  </div>
                  <div className="face4">
                    <div className="text-[40px] sm:text-[55px] text-center">
                      Democratising{" "}
                      <span className="text-[#F3C74E]">
                        Access to Top Assets
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </span>
          </h3>
        </div>
    </div>
  );
}

export default Assets;
