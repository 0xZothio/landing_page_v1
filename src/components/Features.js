import React from "react";
import { motion, Variants } from "framer-motion";

const imageAnimate = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    // rotate:[0,10,0],
    // transition: {type:"spring",
    // bounce:0.4,
    // duration:1}
  },
};

const textAnimate = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    // transition: {type:"spring",
    // bounce:0.4,
    // duration:1}
  },
};

function Features() {
  return (
    <div className="mt-[80px]">
      <div className="flex flex-col justify-center items-center">
        <div className="text-[60px] text-center sm:text-[80px] font-codec font-bold">
          Welcome to the
        </div>
        <img src="/club.png" alt="Zoth Club" />
      </div>


      {/* feature 1*/}
      <div className=" bg-white/10 grid grid-row-4 sm:grid-cols-4 gap-2 justify-items-center content-center p-8">
        <div className="relative col-span-2 w-[300px]">
          <div className="w-[300px]">
            <img src="/frame.png" alt="frame" />
          </div>

          <div className="absolute top-5 object-cover ">
            {/* <img src="eth.png" alt="feature" className="w-full h-full" /> */}
            <video
              src="/features/eth.mp4"
              autoplay="{true}"
              loop
              muted
              className="w-[300px] h-[530px] rounded-[65px] opacity-80"
            ></video>
          </div>
        </div>

        <div className="col-span-2 self-center mt-2 p-8 ">
          <div className="sm:text-6xl text-4xl font-extrabold font-codec mb-4">
            Guarantee transparency and Easy exit mechanism
          </div>
          <div className="text-lg leading-loose ">
            On the blockchain, transactions are transparent and verifiable.
            Users can monitor real-time market conditions for simple exit
            mechanisms.
            <br />
            Simple Liquidity using deFi pools On our 24/7 open market, you can
            buy and sell at any time.
          </div>
        </div>
      </div>

      {/* feature 2*/}
      <div className=" bg-white/10 grid grid-row-4 sm:grid-cols-4 gap-2 justify-items-center content-center p-8">
        <div className="relative col-span-2 w-[300px]">
          <div className="w-[300px]">
            <img src="/frame.png" alt="frame" />
          </div>

          <div className="absolute top-5 object-cover ">
            {/* <img src="eth.png" alt="feature" className="w-full h-full" /> */}
            <video
              src="/features/reward.mp4"
              autoplay="{true}"
              loop
              muted
              className="w-[300px] h-[530px] rounded-[55px] opacity-80"
            ></video>
          </div>
        </div>

        <div className="col-span-2 self-center mt-2 p-8 ">
          <div className="sm:text-6xl text-4xl font-extrabold font-codec mb-4">
            Exclusive rewards for investing in your assets
          </div>
          <div className="text-lg leading-loose">
            every time you invest on ZOTH, you receive ZOTH coins. you can use
            these to win exclusive rewards or get special access to curated
            products and experiences.
          </div>
        </div>
      </div>

      {/* feature 3*/}
      <div className=" bg-white/10 grid grid-row-4 sm:grid-cols-4 gap-2 justify-items-center content-center p-8">
        <div className="relative col-span-2 w-[300px]">
          <div className="w-[300px]">
            <img src="/frame.png" alt="frame" />
          </div>

          <div className="absolute top-5 object-cover ">
            {/* <img src="eth.png" alt="feature" className="w-full h-full" /> */}
            <video
              src="/features/loyalty.mp4"
              autoplay="{true}"
              loop
              muted
              className="w-[300px] h-[530px] rounded-[55px] opacity-80"
            ></video>
          </div>
        </div>

        <div className="col-span-2 self-center mt-2 p-8 ">
          <div className="sm:text-6xl text-4xl font-extrabold font-codec mb-4">
            Loyalty Program
          </div>
          <div className="text-lg leading-loose">
            Get exclusive access to premium asset classes only available to you,
            special offers on upcoming launches, stay-cations in opulent villas,
            and more.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
