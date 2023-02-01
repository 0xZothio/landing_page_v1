import React, { useEffect, useRef } from "react";
import { useLayoutEffect, useState } from "react";
import { render } from "react-dom";
import { motion } from "framer-motion";
import { fadeIn, slideIn, featureIn, staggerContainer } from "../utils/motion";
import "../styles/styles.css";
import { featureData } from "../data/featuresData";
import reward from "../assets/features-gif/reward.gif";
import etherium from "../assets/features-gif/etherium.gif";
function Features() {
  const ref = useRef(null);

  const [data, setData] = useState([
    {
      video: "https://resources.zoth.in/landingpage/reward.gif",
      topic: "Earn Zoth Coins for investing in your assets",
      description:
        "Every time you invest on Zoth, you receive Zoth coins. You can use these to win exclusive rewards or get special access to curated products and experiences.",
    },

    {
      video: "https://resources.zoth.in/landingpage/etherium.gif",
      topic: "Guaranteed transparency and Easy exit mechanism",
      description:
        "On the blockchain, transactions are transparent and verifiable. Zoth provides liquidity for on chain assets through its unique real-time market based exit mechanism.",
    },

    {
      video: "https://resources.zoth.in/landingpage/loyalty.gif",
      topic: "Governance model for, of and by the users ",
      description:
        "Zoth Governance and Loyalty program gives you exclusive access to premium asset classes, special offers on upcoming launches, stay-cations in opulent villas, and more.",
    },
    {
      video: "https://resources.zoth.in/landingpage/high.gif",
      topic: "High Yield, Returns and Portfolio Diversification",
      description:
        "Data-driven insights to diversify your portfolio and invest in stable asset classes accessible only to the top 0.1%, to earn lifetime passive income.",
    },
    {
      video: "https://resources.zoth.in/landingpage/return.gif",
      topic: "Compliant and Strict Due Diligence",
      description:
        "All our assets are listed after a strict process of due diligence and are compliant with local and other global regulatory bodies.",
    },
  ]);

  return (
    <div>
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        className="text-[60px] sm:text-[80px] text-center font-codec font-bold sm:mt-20"
      >
        Member{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
          Benefits
        </span>
      </motion.div>

      {/* feature */}
      <div className="sm:flex flex-col items-center justify-center mt-32 mb-10 hidden">
        {/* first */}

        <div className="grid grid-row-4 sm:grid-cols-4 gap-60 justify-between p-8 sm:my-40 ">
          <motion.div
            variants={slideIn("up", "tween", 0, 1)}
            initial="hidden"
            whileInView="show"
            className="col-span-2 self-center mt-2 p-8 w-[400px]"
          >
            {/* <div className="w-[300px] left-0"> */}
            <div className="sm:text-5xl text-4xl font-extrabold font-codec mb-4">
              Earn Zoth Coins for investing in your assets
            </div>
            <div className="text-lg leading-loose">
              Every time you invest on Zoth, you receive Zoth coins. You can use
              these to win exclusive rewards or get special access to curated
              products and experiences.
            </div>
            {/* </div> */}
          </motion.div>

          <div className="relative col-span-2 w-[300px]">
            <div className="w-[300px]">
              <img src="/frame.png" alt="frame" />
            </div>

            <motion.div
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.3 }}
              // variants={fadeIn("left", "tween", 0.8, 0.2)}
              // initial="hidden"
              // whileInView="show"
              // viewport={{ once: false, amount: 0.8 }}
              className="absolute top-5 object-cover "
            >
              <img
                src="https://resources.zoth.in/landingpage/reward.gif"
                alt="tokenization"
                className="w-[300px] h-[530px] rounded-[55px] opacity-80"
              />
            </motion.div>
          </div>
        </div>

        {/* Second */}
        <div className="grid grid-row-4 sm:grid-cols-4 gap-60 justify-items-center content-center p-8 sm:my-40">
          <div className="relative col-span-2 w-[300px]">
            <div className="w-[300px]">
              <img src="/frame.png" alt="frame" />
            </div>

            <motion.div
              // variants={fadeIn("left", "tween", 0.8, 0.2)}
              // initial="hidden"
              // whileInView="show"
              // viewport={{ once: false, amount: 0.8 }}
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-5 object-cover "
            >
              <img
                src="https://resources.zoth.in/landingpage/etherium.gif"
                alt="tokenization"
                className="w-[300px] h-[530px] rounded-[55px] opacity-80"
              />
            </motion.div>
          </div>

          <motion.div
            variants={slideIn("up", "tween", 0, 1)}
            initial="hidden"
            whileInView="show"
            className="col-span-2 self-center mt-2 p-8 w-[400px]"
          >
            <div className="sm:text-5xl text-4xl font-extrabold font-codec mb-4 ">
              Guaranteed transparency and Easy exit mechanism
            </div>
            <div className="text-lg leading-loose sm:w-3/4">
              On the blockchain, transactions are transparent and verifiable.
              Zoth provides liquidity for on chain assets through its unique
              real-time market based exit mechanism.
            </div>
          </motion.div>
        </div>

        {/* third */}
        <div className="grid grid-row-4 sm:grid-cols-4 gap-60 justify-items-center content-center p-8 sm:my-40">
          <motion.div
            variants={slideIn("up", "tween", 0, 1)}
            initial="hidden"
            whileInView="show"
            className="col-span-2 self-center mt-2 p-8 w-[400px]"
          >
            <div className="sm:text-5xl text-4xl font-extrabold font-codec mb-4">
              Governance model for, of and by the users
            </div>
            <div className="text-lg leading-loose">
              Zoth Governance and Loyalty program gives you exclusive access to
              premium asset classes, special offers on upcoming launches,
              stay-cations in opulent villas, and more.
            </div>
          </motion.div>

          <div className="relative col-span-2 w-[300px]">
            <div className="w-[300px]">
              <img src="/frame.png" alt="frame" />
            </div>

            <motion.div
              // variants={fadeIn("left", "tween", 0.8, 0.2)}
              // initial="hidden"
              // whileInView="show"
              // viewport={{ once: false, amount: 0.8 }}
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-5 object-cover "
            >
              <img
                src="https://resources.zoth.in/landingpage/loyalty.gif"
                alt="tokenization"
                className="w-[300px] h-[530px] rounded-[55px] opacity-80"
              />
            </motion.div>
          </div>
        </div>

        {/* fourth */}
        <div className="grid grid-row-4 sm:grid-cols-4 gap-60 justify-items-center content-center p-8 sm:my-40">
          <div className="relative col-span-2 w-[300px]">
            <div className="w-[300px]">
              <img src="/frame.png" alt="frame" />
            </div>

            <motion.div
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.3 }}
              // variants={fadeIn("left", "tween", 0.8, 0.2)}
              // initial="hidden"
              // whileInView="show"
              // viewport={{ once: false, amount: 0.8 }}
              className="absolute top-5 object-cover "
            >
              <img
                src="https://resources.zoth.in/landingpage/high.gif"
                alt="tokenization"
                className="w-[300px] h-[530px] rounded-[55px] opacity-80"
              />
            </motion.div>
          </div>

          <motion.div
            variants={slideIn("up", "tween", 0, 1)}
            initial="hidden"
            whileInView="show"
            className="col-span-2 self-center mt-2 p-8 w-[400px]"
          >
            <div className="sm:text-5xl text-4xl font-extrabold font-codec mb-4">
              High Yield, Returns and Portfolio Diversification
            </div>
            <div className="text-lg leading-loose sm:w-3/4">
              Data-driven insights to diversify your portfolio and invest in
              stable asset classes accessible only to the top 0.1%, to earn
              lifetime passive income.
            </div>
          </motion.div>
        </div>

        {/* fifth */}
        <div className="grid grid-row-4 sm:grid-cols-4 gap-60 justify-items-center content-center p-8 sm:my-40">
          <motion.div
            variants={slideIn("up", "tween", 0, 1)}
            initial="hidden"
            whileInView="show"
            className="col-span-2 self-center mt-2 p-8 w-[400px]"
          >
            <div className="sm:text-5xl text-4xl font-extrabold font-codec mb-4">
              Compliant and Strict Due Diligence
            </div>
            <div className="text-lg leading-loose">
              All our assets are listed after a strict process of due diligence
              and are compliant with local and other global regulatory bodies.
            </div>
          </motion.div>

          <div className="relative col-span-2 w-[300px]">
            <div className="w-[300px]">
              <img src="/frame.png" alt="frame" />
            </div>

            <motion.div
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.3 }}
              // variants={fadeIn("left", "tween", 0.8, 0.2)}
              // initial="hidden"
              // whileInView="show"
              // viewport={{ once: false, amount: 0.8 }}
              className="absolute top-5 object-cover "
            >
              <img
                src="https://resources.zoth.in/landingpage/return.gif"
                alt="tokenization"
                className="w-[300px] h-[530px] rounded-[55px] opacity-80"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* mobile */}
      {/* feature 2*/}
      <div className="mt-32">
        {data.map((feature) => (
          <div className="grid grid-row-4 sm:grid-cols-4 gap-2 justify-items-center content-center p-8 sm:mt-[500px] sm:hidden">
            <div className="relative col-span-2 w-[300px]">
              <div className="w-[300px]">
                <img src="/frame.png" alt="frame" />
              </div>

              <div className="absolute top-5 object-cover ">
                {/* <img src="eth.png" alt="feature" className="w-full h-full" /> */}
                {/* <video
                src={feature.video}
                autoplay="{true}"
                loop
                muted
                className="w-[300px] h-[530px] rounded-[55px] opacity-80"
              ></video> */}

                <img
                  src={feature.video}
                  className="w-[300px] h-[530px] rounded-[65px] opacity-80"
                  alt=""
                />
              </div>
            </div>

            <div className="col-span-2 self-center mt-2 p-8 ">
              <div className="sm:text-6xl text-3xl font-extrabold font-roobert mb-4 text-[#F3C74E]">
                {feature.topic}
              </div>
              <div className="text-lg leading-loose">{feature.description}</div>
            </div>
          </div>
        ))}
      </div>

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
