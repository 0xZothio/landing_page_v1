import React, {useState, useEffect} from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import asset_trust from "../assets/images/Asset_trust.png"
import premium_asset from "../assets/images/Quality_premium_asset.png"
import tokenisation from "../assets/images/Tokenization.png"
import marketplace from "../assets/images/zoth_marketplace.png"
function HowToInvest() {
    const [num, setNum] = useState(1);

    const [scrollvalue, setScrollValue] = useState(0);
    useEffect(() => {
      const element = document.querySelector("#section-3");
      const handleScroll = () => {
        console.log("scrollToTop", element.scrollTop);
        setScrollValue(element.scrollTop);

        if (scrollvalue > 900) {
          setNum(4);
        } else if (scrollvalue > 600) {
          setNum(3);
        } else if (scrollvalue > 300) {
          setNum(2);
        } else {
          setNum(1);
        }
      };

      element.addEventListener("scroll", handleScroll);
      handleScroll();

      return () => element.removeEventListener("scroll", handleScroll);
    }, [scrollvalue]);


  return (
    <div className="bg-black text-white w-full flex flex-col items-center justify-center h-full mt-[80px] pb-10">
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        className="text-[55px] text-center sm:text-[80px] font-codec font-extrabold"
      >
        How To Invest
      </motion.div>

      <div
        className="absolute bg-transparent w-11/12 overflow-y-scroll scrollbar-hide z-10 h-3/4 mt-40"
        id="section-3"
      >
        <div className="h-screen w-full"></div>
        <div className="h-screen w-full"></div>
        <div className="h-screen w-full"></div>
      </div>
      <motion.div
        variants={fadeIn("up", "tween", 0.4, 1)}
        initial="hidden"
        whileInView="show"
        className="flex flex-col sm:flex-row max-w-6xl mx-auto gap-8 group my-10"
      >
        <div
          className={
            num === 1
              ? "scale-100 duration-500 cursor-pointer h-10/12"
              : "blur scale-[0.85] duration-500 cursor-pointer"
          }
        >
          <img src={asset_trust} alt="" className="w-full h-10/12" />
          {num === 1 && (
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -200, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[30px] text-center font-codec mt-4"
            >
              Join the Zoth Club
            </motion.div>
          )}
        </div>
        <div
          className={
            num === 2
              ? "scale-100 duration-500 cursor-pointer h-10/12"
              : "blur scale-[0.85] duration-500 cursor-pointer"
          }
        >
          <img src={premium_asset} alt="" className="w-full h-10/12" />
          {num === 2 && (
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -200, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[30px] text-center font-codec mt-4"
            >
              Join the Zoth Club
            </motion.div>
          )}
        </div>
        <div
          className={
            num === 3
              ? "scale-100 duration-500 cursor-pointer h-10/12"
              : "blur scale-[0.85] duration-500 cursor-pointer"
          }
        >
          <img src={tokenisation} alt="" className="w-full h-10/12" />
          {num === 3 && (
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -200, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[30px] text-center font-codec mt-4"
            >
              Join the Zoth Club
            </motion.div>
          )}
        </div>
        <div
          className={
            num === 4
              ? "scale-100 duration-500 cursor-pointer h-10/12"
              : "blur scale-[0.85] duration-500 cursor-pointer"
          }
        >
          <img src={marketplace} alt="" className="w-full h-10/12" />
          {num === 4 && (
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -200, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[30px] text-center font-codec mt-4"
            >
              Join the Zoth Club
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default HowToInvest;
