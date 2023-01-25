import React, {useState, useEffect} from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import asset_trust from "../assets/images/Asset_trust.png"
import premium_asset from "../assets/images/Quality_premium_asset.png"
import tokenisation from "../assets/images/Tokenization.png"
import marketplace from "../assets/images/zoth_marketplace.png"
import "../styles/styles.css";
const crouselData = [
  {
    image: asset_trust,
    title: "Quality Premium Assets",
    description: "Zoth curates real world assets with high net worth and yield",
  },
  {
    image: premium_asset,
    title: "Asset Trust",
    description: "The asset is transferred to a Trust or LLC",
  },
  {
    image: tokenisation,
    title: "Tokenisation as a Service (TaaS)",
    description: "Trust shares are tokenized using Zoth TaaS module",
  },
  {
    image: marketplace,
    title: "Zoth Marketplace",
    description:
      "Provides investors access to aggregated tokenized assets",
  },
];

function HowToInvest() {
    let slides = crouselData;
    const [current, setCurrent] = useState(0);

    const [scrollvalue, setScrollValue] = useState(10);
    // useEffect(() => {
    //   const element = document.querySelector("#section-3");
    //   const handleScroll = () => {
    //     console.log("scrollToTop", element.scrollTop);
    //     setScrollValue(element.scrollTop);

    //     if (scrollvalue > 1500) {
    //       setCurrent(3);
    //     } else if (scrollvalue > 1000) {
    //       setCurrent(2);
    //     } else if (scrollvalue > 500) {
    //       setCurrent(1);
    //     } else {
    //       setCurrent(0);
    //     }
    //   };

    //   element.addEventListener("scroll", handleScroll);
    //   handleScroll();

    //   return () => element.removeEventListener("scroll", handleScroll);
    // }, [scrollvalue]);
    const windowheight = 1.5*window.innerHeight;
  useEffect(() => {
    const element = document.documentElement;
    // const element = document.querySelector("#section-3");
    const handleScroll = () => {
      // console.log("windowscrollToTop", element.scrollTop);
      setScrollValue(element.scrollTop);

      if (scrollvalue > 17 * windowheight) {
        setCurrent(3);
      } else if (scrollvalue > 16 * windowheight) {
        setCurrent(2);
      } else if (scrollvalue > 15 * windowheight) {
        setCurrent(1);
      } else if (scrollvalue > 14 * windowheight) {
        setCurrent(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    // return () => element.removeEventListener("scroll", handleScroll);
  }, [scrollvalue]);


  return (
    <div
      id="howItWorks"
      className="bg-black text-white w-full h-full sm:pb-10"
    >
      <motion.div
        variants={fadeIn("up", "tween", 0, 0.1)}
        initial="hidden"
        whileInView="show"
        className="text-[40px] text-center sm:text-[80px] font-codec font-extrabold"
      >
        How It{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
          Works?
        </span>
      </motion.div>

      {/* <div
        className="absolute bg-transparent w-full overflow-y-scroll scrollbar-hide z-10 h-3/4"
        id="section-3"
      >
        <div className="h-screen w-full"></div>
        <div className="h-screen w-full"></div>
        <div className="h-screen w-full"></div>
        <div className="h-screen w-full"></div>
      </div> */}
      <div className="Carousel">
        <section className="slider">
          {slides.map((img, indx) => {
            return (
              <div
                className={`slide ${indx === current ? "active " : ""}${
                  (indx < current && `prevImg${current - indx}`) ||
                  (indx > current && `nextImg${indx - current}`) ||
                  (indx === current && "currentImg")
                }`}
                key={indx}
              >
                <img src={img.image} alt="travel" className={`Img`} />
                <div className="text-[30px] text-center font-roobert mt-8 mb-2">
                  {img.title}
                </div>
                {current === 0 && (
                  <motion.div
                    initial={{ y: 200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -200, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className={
                      current === indx
                        ? "text-center font-roobert w-2/3 mx-auto"
                        : "text-center font-roobert w-2/3 mx-auto hidden"
                    }
                  >
                    {img.description}
                  </motion.div>
                )}
                {current === 1 && (
                  <motion.div
                    initial={{ y: 200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -200, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className={
                      current === indx
                        ? "text-center font-roobert w-1/2 mx-auto"
                        : "text-center font-roobert w-1/2 mx-auto hidden"
                    }
                  >
                    {img.description}
                  </motion.div>
                )}
                {current === 2 && (
                  <motion.div
                    initial={{ y: 200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -200, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className={
                      current === indx
                        ? "text-center font-roobert w-1/2 mx-auto"
                        : "text-center font-roobert w-1/2 mx-auto hidden"
                    }
                  >
                    {img.description}
                  </motion.div>
                )}
                {current === 3 && (
                  <motion.div
                    initial={{ y: 200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -200, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className={
                      current === indx
                        ? "text-center font-roobert w-1/2 mx-auto text-sm"
                        : "text-center font-roobert w-1/2 mx-auto hidden"
                    }
                  >
                    {img.description}
                  </motion.div>
                )}
              </div>
            );
          })}
        </section>
      </div>

      <ol className="items-center sm:flex mx-auto justify-center w-4/6 hidden">
        <li className="relative mb-6 sm:mb-0">
          <div className="mt-3 sm:pr-8 w-40" />
          <div className="flex items-center">
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
          </div>
        </li>
        <li className="relative mb-6 sm:mb-0">
          <div className="mt-3 sm:pr-8 w-60" />
          <div className="flex items-center">
            <div
              className={
                current === 0
                  ? "z-10 flex items-center justify-center w-6 h-6 bg-white-200 rounded-full ring-0 ring-white dark:bg-white-900 sm:ring-8 dark:ring-white-100 shrink-0"
                  : "z-10 flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full ring-0 ring-gray dark:bg-white-900 sm:ring-8 dark:ring-gray-900 shrink-0"
              }
            ></div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
          </div>
        </li>
        <li className="relative mb-6 sm:mb-0">
          <div className="mt-3 sm:pr-8 w-60" />
          <div className="flex items-center">
            <div
              className={
                current === 1
                  ? "z-10 flex items-center justify-center w-6 h-6 bg-white-200 rounded-full ring-0 ring-white dark:bg-white-900 sm:ring-8 dark:ring-white-100 shrink-0"
                  : "z-10 flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full ring-0 ring-gray dark:bg-white-900 sm:ring-8 dark:ring-gray-900 shrink-0"
              }
            ></div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
          </div>
        </li>
        <li className="relative mb-6 sm:mb-0">
          <div className="mt-3 sm:pr-8 w-60" />
          <div className="flex items-center">
            <div
              className={
                current === 2
                  ? "z-10 flex items-center justify-center w-6 h-6 bg-white-200 rounded-full ring-0 ring-white dark:bg-white-900 sm:ring-8 dark:ring-white-100 shrink-0"
                  : "z-10 flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full ring-0 ring-gray dark:bg-white-900 sm:ring-8 dark:ring-gray-900 shrink-0"
              }
            ></div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
          </div>
        </li>
        <li className="relative mb-6 sm:mb-0">
          <div className="mt-3 sm:pr-8 w-40" />
          <div className="flex items-center">
            <div
              className={
                current === 3
                  ? "z-10 flex items-center justify-center w-6 h-6 bg-white-200 rounded-full ring-0 ring-white dark:bg-white-900 sm:ring-8 dark:ring-white-100 shrink-0"
                  : "z-10 flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full ring-0 ring-gray dark:bg-white-900 sm:ring-8 dark:ring-gray-900 shrink-0"
              }
            ></div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
          </div>
        </li>
      </ol>
    </div>
  );
}

export default HowToInvest;
