import React, { useState, useEffect } from "react";
import { assetsData } from "../data/assetsData";
import AssetCard from "./AssetCard";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import "../styles/styles.css";

function Assets({ isHidden }) {
  const [active, setActive] = useState("1");

  const [scrollvalue, setScrollValue] = useState(0);
  const windowheight = 2*window.innerHeight;
  useEffect(() => {
    const element = document.documentElement;
    // const element = document.querySelector("#section-3");
    const handleScroll = () => {
      // console.log("windowscrollToTop", element.scrollTop);
      setScrollValue(element.scrollTop);

          if (scrollvalue > 5*windowheight) {
            setActive("5");
          } else if (scrollvalue > 4*windowheight) {
            setActive("4");
          } else if (scrollvalue > 3*windowheight) {
            setActive("3");
          } else if (scrollvalue > 2 * windowheight) {
            setActive("2");
          } else if (scrollvalue > windowheight) {
            setActive("1");
          }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    // return () => element.removeEventListener("scroll", handleScroll);
  }, [scrollvalue]);
  // useEffect(() => {
  //   const element = document.querySelector("#section-2");
  //   const handleScroll = () => {
  //     console.log("scrollToTop", element.scrollTop);
  //     setScrollValue(element.scrollTop);

  //     if (scrollvalue > 2000) {
  //       setActive("5");
  //     } else if (scrollvalue > 1500) {
  //       setActive("4");
  //     } else if (scrollvalue > 1000) {
  //       setActive("3");
  //     } else if (scrollvalue > 500) {
  //       setActive("2");
  //     } else {
  //       setActive("1");
  //     }
  //   };

  //   element.addEventListener("scroll", handleScroll);
  //   handleScroll();

  //   return () => element.removeEventListener("scroll", handleScroll);
  // }, [scrollvalue]);

  return (
    <div
      className={
        isHidden
          ? "bg-black text-white w-full h-full px-8 pb-14 collapse"
          : "bg-black text-white w-full h-full px-8 pb-14"
      }
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        className="text-[40px] sm:text-[80px] text-center font-roobert font-bold"
      >
        World Class{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
          Assets
        </span>
      </motion.div>

        {/* <div className="flex justify-center items-center">
        <img src="/assets/cre.png" alt="asset" className="" />
      </div> */}

      {/* <div
        className="absolute bg-transparent w-full h-screen overflow-y-scroll scrollbar-hide z-10 left-0"
        id="section-2"
      >
        <div className="h-screen w-full"></div>
        <div className="h-screen w-full"></div>
        <div className="h-screen w-full"></div>
        <div className="h-screen w-full"></div>
        <div className="h-screen w-full"></div>
      </div> */}
      <div className="mt-[10px] flex sm:flex-row flex-col min-h-[70vh] gap-5">
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

        
    </div>
  );
}

export default Assets;
