import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../utils/motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NewsLetter from "./newsletter";
import Offerings from "./Offerings";
function Institutions() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <div
        id="institutions"
        className="bg-black text-white w-full h-full mt-[70px] py-10"
      >
        {/* heading */}
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          className="sm:ml-14 mb-10 p-4 sm:p-10"
        >
          <div className="text-4xl sm:text-8xl font-codec text-left">
            Redesigning
          </div>

          <div className="text-2xl sm:text-4xl font-roobert text-left mb-5">
            Financial Markets
          </div>

          <div class="flex space-x-2">
            <button
              type="button"
              class="inline-block px-6 py-2.5 mb-6 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-medium text-xs leading-tight  rounded shadow-md focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
            >
              Join The Revolution
            </button>
          </div>

          <div className="sm:w-1/4 font-roobert">
            Tokenize, Self-Custody and Trade digital assets on our full stack
            blockchain financial infrastructure.
          </div>
        </motion.div>

        {/* offers */}
        <div className="flex flex-col items-center justify-center mb-10">
          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            initial="hidden"
            whileInView="show"
            className="text-[50px] text-center sm:text-6xl font-codec font-extrabold mb-10"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
              Zoth's{" "}
            </span>{" "}
            Offerings
          </motion.div>

          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            initial="hidden"
            whileInView="show"
            className="flex flex-col sm:flex-row mb-10"
          >
            {/* cards 1 */}
            <div class="flex justify-center my-2 mx-4 hover:scale-105 transition duration-700 ease-in-out ">
              <div class="rounded-lg shadow-lg bg-black border border-slate-500	 max-w-sm">
                <div>
                  <img
                    class="rounded-t-lg px-4 py-8"
                    src="institution/tokenization.png"
                    alt=""
                  />
                </div>
                <div class="p-6">
                  <h5 class="text-white text-3xl font-medium mb-2 font-codec">
                    Tokenization
                  </h5>
                  <p class="text-gray-500 text-base mb-8 font-roobert">
                    Zoth Tokenization as a Service (TAAS) platform provides
                    tokens that are compliant across several jurisdictions
                    globally.Zoth has third party partners that audit the
                    tokenization process regularly.
                  </p>
                  <button
                    type="button"
                    class="w-full inline-block px-6 py-2.5 bg-black text-[#F3C74E] font-semibold text-sm font-roobert leading-tight rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out border-t-2 border-slate-700	"
                  >
                    Know More
                  </button>
                </div>
              </div>
            </div>

            {/* cards 2 */}
            <div class="flex justify-center my-2 mx-4 hover:scale-105 transition duration-700 ease-in-out">
              <div class="rounded-lg shadow-lg bg-black border border-slate-500	 max-w-sm">
                <div>
                  <img
                    class="rounded-t-lg px-4 py-8"
                    src="institution/custody.png"
                    alt=""
                  />
                </div>
                <div class="p-6">
                  <h5 class="text-white text-3xl font-medium mb-2 font-codec">
                    Custody
                  </h5>
                  <p class="text-gray-500 text-base mb-8 font-roobert">
                    Zoth TAAS platform provides tokens that are compliant across
                    several jurisdictions globally.Zoth has third party partners
                    that audit the tokenization process regularly.
                  </p>
                  <button
                    type="button"
                    class="w-full inline-block px-6 py-2.5 bg-black text-[#F3C74E] font-semibold text-sm font-roobert leading-tight rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out border-t-2 border-slate-700	"
                  >
                    Know More
                  </button>
                </div>
              </div>
            </div>

            {/* cards 3 */}
            <div class="flex justify-center my-2 mx-4 hover:scale-105 transition duration-700 ease-in-out">
              <div class="rounded-lg shadow-lg bg-black border border-slate-500	 max-w-sm">
                <div>
                  <img
                    class="rounded-t-lg px-4 py-8"
                    src="institution/xchange.png"
                    alt=""
                  />
                </div>
                <div class="p-6">
                  <h5 class="text-white text-3xl font-medium mb-2 font-codec">
                    Exchange
                  </h5>
                  <p class="text-gray-500 text-base mb-8 font-roobert">
                    Zoth allows institutions and funds to invest in the
                    tokenized asset pools and liquidity pools. Zoth curates
                    these assets from quality locations that provide competitive
                    yield.
                  </p>
                  <button
                    type="button"
                    class="w-full inline-block px-6 py-2.5 bg-black text-[#F3C74E] font-semibold text-sm font-roobert leading-tight rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out border-t-2 border-slate-700	"
                  >
                    Know More
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* market */}
        <div className="sm:flex flex-col items-center justify-center mb-10 hidden">
          {/* first */}

          <div className="grid grid-row-4 sm:grid-cols-4 gap-2 justify-items-center content-center p-8 ">
            <motion.div
              variants={slideIn("up", "tween", 0.3, 1)}
              initial="hidden"
              whileInView="show"
              className="col-span-2 self-center mt-2 p-8 "
            >
              <div className="sm:text-6xl text-4xl font-extrabold font-codec mb-4">
                Pre-Trade
              </div>
              <div className="text-lg leading-loose">
                Counterparties, regulators and market researchers are assured
                complete transparency through verification of holdings. Our
                robust pre-trade processes ensure transparency through
                verification of holdings. Our automated KYC/KYB and AML checks
                make for zero counterparty risks and quick onboarding.
              </div>
            </motion.div>

            <div className="relative col-span-2 w-[300px]">
              <div className="w-[300px]">
                <img src="/frame.png" alt="frame" />
              </div>

              {/* <motion.div
                variants={fadeIn("left", "tween", 0.8, 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.8 }}
                className="absolute top-5 object-cover "
              >
                <video
                  src="/features/loyalty.mp4"
                  autoplay="{true}"
                  loop
                  muted
                  className="w-[300px] h-[530px] rounded-[55px] opacity-80"
                ></video>
              </motion.div> */}
            </div>
          </div>

          {/* Second */}
          <div className="grid grid-row-4 sm:grid-cols-4 gap-2 justify-items-center content-center p-8 ">
            <div className="relative col-span-2 w-[300px]">
              <div className="w-[300px]">
                <img src="/frame.png" alt="frame" />
              </div>

              {/* animation */}
              {/* <motion.div
              variants={fadeIn("up", "tween", 0.2, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.8 }}
              className="absolute top-5 object-cover "
            >
              <video
                src="/features/reward.mp4"
                autoplay="{true}"
                loop
                muted
                className="w-[300px] h-[530px] rounded-[55px] opacity-80"
              ></video>
            </motion.div> */}
            </div>

            <motion.div
              variants={slideIn("up", "tween", 0.2, 1)}
              initial="hidden"
              whileInView="show"
              className="col-span-2 self-center mt-2 p-8 "
            >
              <div className="sm:text-6xl text-4xl font-extrabold font-codec mb-4">
                Trade
              </div>
              <div className="text-lg leading-loose sm:w-3/4">
                Secure transaction mapping accomplished in real-time provides
                for immediate settlement and irrefutable data.
              </div>
            </motion.div>
          </div>

          {/* third */}
          <div className="grid grid-row-4 sm:grid-cols-4 gap-2 justify-items-center content-center p-8 ">
            <motion.div
              variants={slideIn("up", "tween", 0.3, 1)}
              initial="hidden"
              whileInView="show"
              className="col-span-2 self-center mt-2 p-8 "
            >
              <div className="sm:text-6xl text-4xl font-extrabold font-codec mb-4">
                Post-Trade
              </div>
              <div className="text-lg leading-loose">
                Regular reporting and supervision of the entire market is made
                redundant due to the presence of an immutable transaction
                database. Multiple rounds of cross-system reconciliation are
                obviated.
              </div>
            </motion.div>

            <div className="relative col-span-2 w-[300px]">
              <div className="w-[300px]">
                <img src="/frame.png" alt="frame" />
              </div>

              {/* <motion.div
                variants={fadeIn("left", "tween", 0.8, 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.8 }}
                className="absolute top-5 object-cover "
              >
                <video
                  src="/features/loyalty.mp4"
                  autoplay="{true}"
                  loop
                  muted
                  className="w-[300px] h-[530px] rounded-[55px] opacity-80"
                ></video>
              </motion.div> */}
            </div>
          </div>

          {/* fourth */}
          <div className="grid grid-row-4 sm:grid-cols-4 gap-2 justify-items-center content-center p-8 ">
            <div className="relative col-span-2 w-[300px]">
              <div className="w-[300px]">
                <img src="/frame.png" alt="frame" />
              </div>

              {/* animation */}
              {/* <motion.div
              variants={fadeIn("up", "tween", 0.2, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.8 }}
              className="absolute top-5 object-cover "
            >
              <video
                src="/features/reward.mp4"
                autoplay="{true}"
                loop
                muted
                className="w-[300px] h-[530px] rounded-[55px] opacity-80"
              ></video>
            </motion.div> */}
            </div>

            <motion.div
              variants={slideIn("up", "tween", 0.2, 1)}
              initial="hidden"
              whileInView="show"
              className="col-span-2 self-center mt-2 p-8 "
            >
              <div className="sm:text-6xl text-4xl font-extrabold font-codec mb-4">
                Custody/Security Services
              </div>
              <div className="text-lg leading-loose sm:w-3/4">
                Regular reporting and supervision of the entire market is made
                redundant due to the presence of an immutable transaction
                database. Multiple rounds of cross-system reconciliation are
                obviated.
              </div>
            </motion.div>
          </div>
        </div>

        {/* market for mobile */}
        <div className="flex flex-col items-center justify-center mb-10 sm:hidden">
          {/* first */}

          <div className="grid grid-row-4 sm:grid-cols-4 gap-2 justify-items-center content-center p-8 ">
            <div className="relative col-span-2 w-[300px]">
              <div className="w-[300px]">
                <img src="/frame.png" alt="frame" />
              </div>

              {/* <motion.div
                variants={fadeIn("left", "tween", 0.8, 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.8 }}
                className="absolute top-5 object-cover "
              >
                <video
                  src="/features/loyalty.mp4"
                  autoplay="{true}"
                  loop
                  muted
                  className="w-[300px] h-[530px] rounded-[55px] opacity-80"
                ></video>
              </motion.div> */}
            </div>
            <motion.div
              variants={slideIn("up", "tween", 0.3, 1)}
              initial="hidden"
              whileInView="show"
              className="col-span-2 self-center mt-2 p-8 "
            >
              <div className="sm:text-6xl text-4xl font-extrabold font-codec mb-4">
                Pre-Trade
              </div>
              <div className="text-lg leading-loose">
                Counterparties, regulators and market researchers are assured
                complete transparency through verification of holdings. Our
                robust pre-trade processes ensure transparency through
                verification of holdings. Our automated KYC/KYB and AML checks
                make for zero counterparty risks and quick onboarding.
              </div>
            </motion.div>
          </div>

          {/* Second */}
          <div className="grid grid-row-4 sm:grid-cols-4 gap-2 justify-items-center content-center p-8 ">
            <div className="relative col-span-2 w-[300px]">
              <div className="w-[300px]">
                <img src="/frame.png" alt="frame" />
              </div>

              {/* animation */}
              {/* <motion.div
              variants={fadeIn("up", "tween", 0.2, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.8 }}
              className="absolute top-5 object-cover "
            >
              <video
                src="/features/reward.mp4"
                autoplay="{true}"
                loop
                muted
                className="w-[300px] h-[530px] rounded-[55px] opacity-80"
              ></video>
            </motion.div> */}
            </div>

            <motion.div
              variants={slideIn("up", "tween", 0.2, 1)}
              initial="hidden"
              whileInView="show"
              className="col-span-2 self-center mt-2 p-8 "
            >
              <div className="sm:text-6xl text-4xl font-extrabold font-codec mb-4">
                Trade
              </div>
              <div className="text-lg leading-loose sm:w-3/4">
                Secure transaction mapping accomplished in real-time provides
                for immediate settlement and irrefutable data.
              </div>
            </motion.div>
          </div>

          {/* third */}
          <div className="grid grid-row-4 sm:grid-cols-4 gap-2 justify-items-center content-center p-8 ">
            <div className="relative col-span-2 w-[300px]">
              <div className="w-[300px]">
                <img src="/frame.png" alt="frame" />
              </div>

              {/* <motion.div
                variants={fadeIn("left", "tween", 0.8, 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.8 }}
                className="absolute top-5 object-cover "
              >
                <video
                  src="/features/loyalty.mp4"
                  autoplay="{true}"
                  loop
                  muted
                  className="w-[300px] h-[530px] rounded-[55px] opacity-80"
                ></video>
              </motion.div> */}
            </div>

            <motion.div
              variants={slideIn("up", "tween", 0.3, 1)}
              initial="hidden"
              whileInView="show"
              className="col-span-2 self-center mt-2 p-8 "
            >
              <div className="sm:text-6xl text-4xl font-extrabold font-codec mb-4">
                Post-Trade
              </div>
              <div className="text-lg leading-loose">
                Regular reporting and supervision of the entire market is made
                redundant due to the presence of an immutable transaction
                database. Multiple rounds of cross-system reconciliation are
                obviated.
              </div>
            </motion.div>
          </div>

          {/* fourth */}
          <div className="grid grid-row-4 sm:grid-cols-4 gap-2 justify-items-center content-center p-8 ">
            <div className="relative col-span-2 w-[300px]">
              <div className="w-[300px]">
                <img src="/frame.png" alt="frame" />
              </div>

              {/* animation */}
              {/* <motion.div
              variants={fadeIn("up", "tween", 0.2, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.8 }}
              className="absolute top-5 object-cover "
            >
              <video
                src="/features/reward.mp4"
                autoplay="{true}"
                loop
                muted
                className="w-[300px] h-[530px] rounded-[55px] opacity-80"
              ></video>
            </motion.div> */}
            </div>

            <motion.div
              variants={slideIn("up", "tween", 0.2, 1)}
              initial="hidden"
              whileInView="show"
              className="col-span-2 self-center mt-2 p-8 "
            >
              <div className="sm:text-6xl text-4xl font-extrabold font-codec mb-4">
                Custody/Security Services
              </div>
              <div className="text-lg leading-loose sm:w-3/4">
                Regular reporting and supervision of the entire market is made
                redundant due to the presence of an immutable transaction
                database. Multiple rounds of cross-system reconciliation are
                obviated.
              </div>
            </motion.div>
          </div>
        </div>

        {/* offerings */}
        <Offerings />
        {/* Newsletter and footer */}
        <NewsLetter />
        <Footer />
      </div>
    </>
  );
}

export default Institutions;
