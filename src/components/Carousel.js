import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import asset_trust from "../assets/images/Asset_trust.png";
import premium_asset from "../assets/images/Quality_premium_asset.png";
import tokenisation from "../assets/images/Tokenization.png";
import marketplace from "../assets/images/zoth_marketplace.png";
import "../styles/styles.css";

const crouselData = [
  {
    image: "/howtoinvest_asset.png",
    title: "Quality Premium Assets",
    description: "Zoth curates real world assets with high net worth and yield",
  },
  {
    image: premium_asset,
    title: "Asset Trust",
    description: "The asset is transferred to a Trust or LLC",
  },
  {
    image: "/howtoinvest_tokenization.png",
    title: "Tokenisation as a Service (TaaS)",
    description: "Trust shares are tokenized using Zoth TaaS module",
  },
  {
    image: "/howtoinvest_marketplace.png",
    title: "Zoth Marketplace",
    description: "Provides investors access to aggregated tokenized assets",
  },
];

function Carousel() {
  let slides = crouselData;
  const [current, setCurrent] = useState(0);

  // const [scrollvalue, setScrollValue] = useState(10);

  // const handleCick = (num) => {
  //   setCurrent(0);
  // }

  // const func = () => {
  //   let temp = current + 1;
  //   if (temp > 3) {
  //     temp = 0;
  //   }
  //   setCurrent(temp);
  //   setTimeout(func, 5000);
  // }
  // func();
  // useEffect(() => {
  //   func();
  // }, [])

  // setInterval(function () {
  //   let temp = current + 1;
  //   if (temp > 3) {
  //     temp = 0;
  //   }
  //   setCurrent(temp);
  // }, 70000);
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
  // const windowheight = 1 * window.innerHeight;
  // useEffect(() => {
  //   const element = document.documentElement;
  //   // const element = document.querySelector("#section-3");
  //   const handleScroll = () => {
  //     // console.log("windowscrollToTop", element.scrollTop);
  //     setScrollValue(element.scrollTop);

  //     if (scrollvalue > 16 * windowheight) {
  //       setCurrent(3);
  //     } else if (scrollvalue > 15 * windowheight) {
  //       setCurrent(2);
  //     } else if (scrollvalue > 14 * windowheight) {
  //       setCurrent(1);
  //     } else if (scrollvalue > 13 * windowheight) {
  //       setCurrent(0);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   handleScroll();

  //   // return () => element.removeEventListener("scroll", handleScroll);
  // }, [scrollvalue]);

  const prevSlide = () => {
    if (current == 0) {
      console.log("already at first");
    } else {
      setCurrent(current - 1);
    }
  }

  const nextSlide = () => {
    if (current == 3) {
      console.log("already at last");
    } else {
      setCurrent(current + 1);
    }
  };


  return (
    <div
      id="howItWorks"
      className="bg-black text-white w-screen h-full sm:pb-10 hidden sm:block sm:mt-20"
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        className="text-[40px] text-center sm:text-[80px] font-codec font-extrabold "
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
      <div className="hidden sm:flex">
        <div className="Carousel mt-6 hidden flex flex-col align-items justify-center">
          <section className="slider_main">
            <img
              className="left-arrow"
              src="/LeftArrow.svg"
              alt="left control"
              onClick={prevSlide}
            />
            {slides.map((img, indx) => {
              return (
                <div
                  className={`slide_main ${
                    indx === current ? "active_main " : ""
                  }${
                    (indx < current && `prevImg${current - indx}_main`) ||
                    (indx > current && `nextImg${indx - current}_main`) ||
                    (indx === current && "currentImg_main")
                  } cursor-pointer`}
                  key={indx}
                  onClick={() => setCurrent(indx)}
                >
                  {current === 0 && (
                    <img
                      src="/tokenization.gif"
                      alt="travel"
                      className={`Img_main`}
                    />
                  )}
                  {current === 1 && (
                    <img
                      src="/howtoinvest_marketplace.gif"
                      alt="travel"
                      className={`Img_main`}
                    />
                  )}
                  {current === 2 && (
                    <img
                      src="/tokenization.gif"
                      alt="travel"
                      className={`Img_main`}
                    />
                  )}
                  {current === 3 && (
                    <img
                      src="/howtoinvest_marketplace.gif"
                      alt="travel"
                      className={`Img_main`}
                    />
                  )}
                  <div className="text-[50px] text-white font-semibold text-center font-roobert mb-2">
                    {/* {img.title} */}
                  </div>
                  {current === 0 && (
                    <motion.div
                      initial={{ y: 200, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -200, opacity: 0 }}
                      transition={{ duration: 0.3 }}
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
                      transition={{ duration: 0.3 }}
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
                      transition={{ duration: 0.3 }}
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
                      transition={{ duration: 0.3 }}
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
            <img
              className="right-arrow"
              src="/RightArrow.svg"
              alt="right control"
              onClick={nextSlide}
            />
          </section>
          <section className="slider">
            {slides.map((img, indx) => {
              return (
                <div
                  className={`mt-12 py-8 slide ${
                    indx === current ? "active " : ""
                  }${
                    (indx < current && `prevImg${current - indx}`) ||
                    (indx > current && `nextImg${indx - current}`) ||
                    (indx === current && "currentImg")
                  } cursor-pointer `}
                  key={indx}
                  onClick={() => setCurrent(indx)}
                >
                  <img
                    src={img.image}
                    alt="travel"
                    className={`Img rounded-full ring-white ring-1 mx-auto my-auto`}
                  />
                </div>
              );
            })}
          </section>
        </div>
      </div>

      {/* <ol className="items-center sm:flex mx-auto justify-center w-4/6 hidden">
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
              onClick={() => {
                setCurrent(0);
              }}
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
              onClick={() => {
                setCurrent(1);
              }}
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
              onClick={() => {
                setCurrent(2);
              }}
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
              onClick={() => {
                setCurrent(3);
              }}
            ></div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
          </div>
        </li>
      </ol> */}

      {/* text */}
      {/* <div className="sm:ml-12 ml-4 mt-20">
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
              </div>
            </div>
          </span>
        </h3>
      </div> */}

      {/* mobile */}
      {/* <Swiper
        spaceBetween={0}
        slidesPerView={1}
        speed={500}
        loop={true}
        touchRatio={1.5}
        navigation={true}
        effect={"flip"}
        pagination={{ clickable: true }}
        className="mySwiper sm:hidden flex"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper> */}
    </div>
  );
}

export default Carousel;
