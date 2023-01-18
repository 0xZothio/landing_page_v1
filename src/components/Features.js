import React, { useEffect, useRef } from "react";
import { useLayoutEffect, useState } from "react";
import { render } from "react-dom";
import { motion } from "framer-motion";
import { fadeIn, slideIn, featureIn, staggerContainer } from "../utils/motion";
import "../styles/styles.css";
function Features() {
  const ref = useRef(null);

  const [data, setData] = useState([
    {
      video: "/features/eth.mp4",
      topic: "Guarantee transparency and Easy exit mechanism",
      description:
        "On the blockchain, transactions are transparent and verifiable.Users can monitor real-time market conditions for simple exitmechanisms.\n Simple Liquidity using deFi pools On our 24/7 open market, you can buy and sell at any time.",
    },
    {
      video: "/features/reward.mp4",
      topic: "Exclusive rewards for investing in your assets",
      description:
        "every time you invest on ZOTH, you receive ZOTH coins. you can use these to win exclusive rewards or get special access to curated products and experiences.",
    },
    {
      video: "/features/loyalty.mp4",
      topic: "Loyalty Program",
      description:
        "Get exclusive access to premium asset classes only available to you, special offers on upcoming launches, stay-cations in opulent villas, and more.",
    },
    {
      video: "/features/yield.mp4",
      topic: "High Yield and Returns and Portfolio Diversification",
      description:
        "Data driven insights to diversify your portfolio and invest in Stable asset classes accessible only to the top 1%, to earn lifetime passive income.",
    },
    {
      video: "/features/sebi.mp4",
      topic: "Compliant and Strict Due Diligence (Stamp of SEBI)",
      description:
        "All our assets are listed after a strict process of due diligence and are compliant with SEC and other regulatory bodies.",
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
  useEffect(() => {
    const element = document.querySelector("#section-1");
    const handleScroll = () => {
      console.log("scrollToTop", element.scrollTop);
      setScrollValue(element.scrollTop);
      const viewportHeight = window.innerHeight;

      if (scrollvalue > 1200) {
        setNum(4);
      } else if (scrollvalue > 900) {
        setNum(3);
      } else if (scrollvalue > 600) {
        setNum(2);
      } else if (scrollvalue > 300) {
        setNum(1);
      } else {
        setNum(0);
      }
    };

    element.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => element.removeEventListener("scroll", handleScroll);
  }, [scrollvalue]);

  return (
    <div className="mt-[80px]">
      <div className="flex flex-col justify-center items-center">
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          className="text-[60px] text-center sm:text-[80px] font-codec font-bold"
        >
          Welcome to the
        </motion.div>

        <motion.div
          variants={fadeIn("down", "tween", 0.5, 1)}
          initial="hidden"
          whileInView="show"
        >
          <img src="/club.png" alt="Zoth Club" />
        </motion.div>
      </div>

      {/* feature 1*/}

      <div
        className="absolute bg-transparent w-full h-screen overflow-y-scroll z-10 scrollbar-hide mt-40"
        ref={ref}
        id="section-1"
      >
        <div className="h-screen w-full"></div>
        <div className="h-screen w-full"></div>
        <div className="h-screen w-full"></div>
        <div className="h-screen w-full"></div>
      </div>

      <div className="grid grid-row-4 sm:grid-cols-4 gap-2 justify-items-center content-center p-8">
        <div className="relative col-span-2 w-[300px]">
          <div className="w-[300px]">
            <img src="/frame.png" alt="frame" />
          </div>

          {scrollvalue <= 300 && (
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
          {scrollvalue > 300 && scrollvalue <= 600 && (
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 1 }}
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
          {scrollvalue > 600 && scrollvalue <= 900 && (
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 1 }}
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
          {scrollvalue > 900 && scrollvalue <= 1200 && (
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 1 }}
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
          {scrollvalue > 1200 && (
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 1 }}
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
        {scrollvalue <= 300 && (
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
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
        {scrollvalue > 300 && scrollvalue <= 600 && (
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
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
        {scrollvalue > 600 && scrollvalue <= 900 && (
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
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
        {scrollvalue > 900 && scrollvalue <= 1200 && (
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
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
        {scrollvalue > 1200 && (
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
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

      {/* feature 2*/}
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
              src="/features/reward.mp4"
              autoplay="{true}"
              loop
              muted
              className="w-[300px] h-[530px] rounded-[55px] opacity-80"
            ></video>
          </motion.div>
        </div> */}

      {/* <motion.div
          variants={slideIn("up", "tween", 0.5, 1)}
          initial="hidden"
          whileInView="show"
          className="col-span-2 self-center mt-2 p-8 "
        >
          <div className="sm:text-6xl text-4xl font-extrabold font-codec mb-4">
            Exclusive rewards for investing in your assets
          </div>
          <div className="text-lg leading-loose">
            every time you invest on ZOTH, you receive ZOTH coins. you can use
            these to win exclusive rewards or get special access to curated
            products and experiences.
          </div>
        </motion.div>
      </div> */}

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
          <div className="sm:text-6xl text-4xl font-extrabold font-codec mb-4">
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
