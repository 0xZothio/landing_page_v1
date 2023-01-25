import React, { useEffect, useRef } from "react";
import { useLayoutEffect, useState } from "react";
import { render } from "react-dom";
import { motion } from "framer-motion";
import { fadeIn, slideIn, featureIn, staggerContainer } from "../utils/motion";
import "../styles/styles.css";
import { featureData } from "../data/featuresData";
function Features() {
  const ref = useRef(null);

  const [data, setData] = useState([
    {
      video: "https://resources.zoth.in/landingpage/reward.mp4",
      topic: "Earn Zoth Coins for investing in your assets",
      description:
        "Every time you invest on Zoth, you receive Zoth coins. You can use these to win exclusive rewards or get special access to curated products and experiences.",
    },

    {
      video: "https://resources.zoth.in/landingpage/eth.mp4",
      topic: "Guaranteed transparency and Easy exit mechanism",
      description:
        "On the blockchain, transactions are transparent and verifiable. Zoth provides liquidity for on chain assets through its unique real-time market based exit mechanism.",
    },

    {
      video: "https://resources.zoth.in/landingpage/loyalty.mp4",
      topic: "Governance model for, of and by the users ",
      description:
        "Zoth Governance and Loyalty program gives you exclusive access to premium asset classes, special offers on upcoming launches, stay-cations in opulent villas, and more.",
    },
    {
      video: "https://resources.zoth.in/landingpage/yield.mp4",
      topic: "High Yield, Returns and Portfolio Diversification",
      description:
        "Data-driven insights to diversify your portfolio and invest in stable asset classes accessible only to the top 0.1%, to earn lifetime passive income.",
    },
    {
      video: "https://resources.zoth.in/landingpage/sebi.mp4",
      topic: "Compliant and Strict Due Diligence",
      description:
        "All our assets are listed after a strict process of due diligence and are compliant with local and other global regulatory bodies.",
    },
  ]);

  const [num, setNum] = useState(0);

  const [scrollvalue, setScrollValue] = useState(0);

  const variants = {
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
      },
    },
    hidden: { opacity: 0 },
  };
  // useEffect(() => {
  //   const element = document.querySelector("#section-1");
  //   const handleScroll = () => {
  //     console.log("scrollToTop", element.scrollTop);
  //     setScrollValue(element.scrollTop);
  //     const viewportHeight = window.innerHeight;

  //     if (scrollvalue > 2000) {
  //       setNum(4);
  //     } else if (scrollvalue > 1400) {
  //       setNum(3);
  //     } else if (scrollvalue > 800) {
  //       setNum(2);
  //     } else if (scrollvalue > 200) {
  //       setNum(1);
  //     } else {
  //       setNum(0);
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

      if (scrollvalue > 12 * windowheight) {
        setNum(4);
      } else if (scrollvalue > 11 * windowheight) {
        setNum(3);
      } else if (scrollvalue > 10 * windowheight) {
        setNum(2);
      } else if (scrollvalue > 9 * windowheight) {
        setNum(1);
      } else if (scrollvalue > 8*windowheight) {
        setNum(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    // return () => element.removeEventListener("scroll", handleScroll);
  }, [scrollvalue]);
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        {/* <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          className="text-[55px] text-center sm:text-[80px] font-codec font-bold"
        >
          Welcome to the
        </motion.div> */}

        {/* <motion.div
          variants={fadeIn("down", "tween", 0.5, 1)}
          initial="hidden"
          whileInView="show"
        >
          <img src="/club.png" alt="Zoth Club" />
        </motion.div> */}
      </div>

      {/* feature 1*/}

      {/* <div
        className="absolute bg-transparent w-full h-screen overflow-y-scroll z-10 scrollbar-hide mt-40"
        ref={ref}
        id="section-1"
      >
        <div className="h-screen w-full"></div>
        <div className="h-screen w-full"></div>
        <div className="h-screen w-full"></div>
        <div className="h-screen w-full"></div>
      </div> */}

      <div className="sm:grid grid-row-4 sm:grid-cols-4 gap-2 justify-items-center content-center px-8 sm:mt-20 hidden">
        <div className="relative col-span-2 w-[300px]">
          <div className="w-[300px]">
            <img src="/frame.png" alt="frame" />
          </div>

          {num===0 && (
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 1 }}
              // variants={featureIn("right", "tween", 0.3, 1)}
              // initial="hidden"
              // whileInView="show"
              // initial="hidden"
              // animate="visible"
              // variants={variants}
              // viewport={{amount: 1 }}
              className="absolute top-5 object-cover z-100"
            >
              {/* <img src="eth.png" alt="feature" className="w-full h-full" /> */}
              <video
                src={data[num].video}
                autoplay="{true}"
                loop
                muted
                className="w-[300px] h-[530px] rounded-[65px] opacity-80"
              ></video>
            </motion.div>
          )}
          {num===1 && (
              <motion.div
                initial={{ x: 0, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.3 }}
                // variants={featureIn("left", "tween", 0.3, 1)}
                // initial="hidden"
                // whileInView="show"
                // initial="hidden"
                // animate="visible"
                // variants={variants}
                // viewport={{ once: false, amount: 0.8 }}
                className="absolute top-5 object-cover z-100"
              >
                {/* <img src="eth.png" alt="feature" className="w-full h-full" /> */}
                <video
                  src={data[num].video}
                  autoplay="{true}"
                  loop
                  muted
                  className="w-[300px] h-[530px] rounded-[65px] opacity-80"
                ></video>
              </motion.div>
            )}
          {num===2 && (
              <motion.div
                initial={{ x: 0, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.3 }}
                // variants={featureIn("left", "tween", 0.3, 1)}
                // initial="hidden"
                // whileInView="show"
                // viewport={{ once: false, amount: 0.8 }}
                className="absolute top-5 object-cover z-100"
              >
                {/* <img src="eth.png" alt="feature" className="w-full h-full" /> */}
                <video
                  src={data[num].video}
                  autoplay="{true}"
                  loop
                  muted
                  className="w-[300px] h-[530px] rounded-[65px] opacity-80"
                ></video>
              </motion.div>
            )}
          {num===3 && (
              <motion.div
                initial={{ x: 0, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.3 }}
                // variants={featureIn("left", "tween", 0.3, 1)}
                // initial="hidden"
                // whileInView="show"
                // viewport={{ once: false, amount: 0.8 }}
                className="absolute top-5 object-cover z-100"
              >
                {/* <img src="eth.png" alt="feature" className="w-full h-full" /> */}
                <video
                  src={data[num].video}
                  autoplay="{true}"
                  loop
                  muted
                  className="w-[300px] h-[530px] rounded-[65px] opacity-80"
                ></video>
              </motion.div>
            )}
          {num===4 && (
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.3 }}
              // variants={featureIn("left", "tween", 0.3, 1)}
              // initial="hidden"
              // whileInView="show"
              // viewport={{ once: false, amount: 0.8 }}
              className="absolute top-5 object-cover z-100"
            >
              {/* <img src="eth.png" alt="feature" className="w-full h-full" /> */}
              <video
                src={data[num].video}
                autoplay="{true}"
                loop
                muted
                className="w-[300px] h-[530px] rounded-[65px] opacity-80"
              ></video>
            </motion.div>
          )}
        </div>

        {/* <MyPara topic={data[num].topic } description={data[num].description} /> */}
        {num===0 && (
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            transition={{ duration: 0.3 }}
            // variants={slideIn("up", "tween", 0.3, 1)}
            // initial="hidden"
            // whileInView="show"
            className="col-span-2 self-center mt-2 p-4 "
          >
            <div className="sm:text-6xl text-4xl font-extrabold font-codec mb-4">
              {data[num].topic}
            </div>
            <div className="text-lg leading-loose ">
              {data[num].description}
              <br />
            </div>
          </motion.div>
        )}
        {num===1 && (
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            transition={{ duration: 0.3 }}
            // variants={slideIn("up", "tween", 0.3, 1)}
            // initial="hidden"
            // whileInView="show"
            className="col-span-2 self-center mt-2 p-4 "
          >
            <div className="sm:text-6xl text-4xl font-extrabold font-codec mb-4">
              {data[num].topic}
            </div>
            <div className="text-lg leading-loose ">
              {data[num].description}
              <br />
            </div>
          </motion.div>
        )}
        {num===2 && (
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            transition={{ duration: 0.3 }}
            // variants={slideIn("up", "tween", 0.3, 1)}
            // initial="hidden"
            // whileInView="show"
            className="col-span-2 self-center mt-2 p-4 "
          >
            <div className="sm:text-6xl text-4xl font-extrabold font-codec mb-4">
              {data[num].topic}
            </div>
            <div className="text-lg leading-loose ">
              {data[num].description}
              <br />
            </div>
          </motion.div>
        )}
        {num===3 && (
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            transition={{ duration: 0.3 }}
            // variants={slideIn("up", "tween", 0.3, 1)}
            // initial="hidden"
            // whileInView="show"
            className="col-span-2 self-center mt-2 p-4 "
          >
            <div className="sm:text-6xl text-4xl font-extrabold font-codec mb-4">
              {data[num].topic}
            </div>
            <div className="text-lg leading-loose ">
              {data[num].description}
              <br />
            </div>
          </motion.div>
        )}
        {num===4 && (
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            transition={{ duration: 0.3 }}
            // variants={slideIn("up", "tween", 0.3, 1)}
            // initial="hidden"
            // whileInView="show"
            className="col-span-2 self-center mt-2 p-4 "
          >
            <div className="sm:text-6xl text-4xl font-extrabold font-codec mb-4">
              {data[num].topic}
            </div>
            <div className="text-lg leading-loose ">
              {data[num].description}
              <br />
            </div>
          </motion.div>
        )}
      </div>

      {/* mobile */}
      {/* feature 2*/}
      {featureData.map((feature) => (
        <div className="grid grid-row-4 sm:grid-cols-4 gap-2 justify-items-center content-center p-8 sm:mt-[500px] sm:hidden">
          <div className="relative col-span-2 w-[300px]">
            <div className="w-[300px]">
              <img src="/frame.png" alt="frame" />
            </div>

            <div className="absolute top-5 object-cover ">
              {/* <img src="eth.png" alt="feature" className="w-full h-full" /> */}
              <video
                src={feature.video}
                autoplay="{true}"
                loop
                muted
                className="w-[300px] h-[530px] rounded-[55px] opacity-80"
              ></video>
            </div>
          </div>

          <div className="col-span-2 self-center mt-2 p-8 ">
            <div className="sm:text-6xl text-3xl font-extrabold font-roobert mb-4">
              {feature.topic}
            </div>
            <div className="text-lg leading-loose">
              {feature.description}
            </div>
          </div>
        </div>
      ))}

      {/* feature 3*/}
      {/* <div className="grid grid-row-4 sm:grid-cols-4 gap-2 justify-items-center content-center p-8 sm:mt-[500px]">
        <div className="relative col-span-2 w-[300px]">
          <div className="w-[300px]">
            <img src="/frame.png" alt="frame" />
          </div>

          <motion.div
            variants={featureIn("left", "tween", 0.8, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.8 }}
            className="absolute top-5 object-cover "
          > */}
      {/* <img src="eth.png" alt="feature" className="w-full h-full" /> */}
      {/* <video
              src="/features/loyalty.mp4"
              autoplay="{true}"
              loop
              muted
              className="w-[300px] h-[530px] rounded-[55px] opacity-80"
            ></video>
          </motion.div>
        </div>

        <motion.div
          variants={slideIn("up", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          className="col-span-2 self-center mt-2 p-8 "
        >
          <div className="sm:text-6xl text-4xl font-extrabold font-roobert mb-4">
            Loyalty Program
          </div>
          <div className="text-lg leading-loose">
            Get exclusive access to premium asset classes only available to you,
            special offers on upcoming launches, stay-cations in opulent villas,
            and more.
          </div>
        </motion.div>
      </div> */}
    </div>
  );
}

export default Features;
