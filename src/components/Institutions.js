import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../utils/motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NewsLetter from "./newsletter";
import Offerings from "./Offerings";
import { Link } from "react-router-dom";
import Contact_institutions from "./Contactus_institutions";
function Institutions() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <div
        id="institutions"
        className="bg-black text-white w-full h-full  py-10"
      >
        {/* heading */}
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          className="flex flex-col justify-center items-center mb-4 p-4 sm:p-10"
        >
          {/* <div className="text-4xl sm:text-5xl font-codec text-center">
            Unlocking the potential of private
          </div>
          <div className="text-4xl sm:text-5xl font-codec text-center">
            & conventionally illiquid assets
          </div> */}
          <Link to="/">
            <img
              src="/institution/zoth.png"
              className="w-[200px] h-[200px] mb-10"
              alt="logo"
            />
          </Link>

          <h1 className="text-4xl font-codec sm:text-[70px] font-extrabold leading-8 text-center leading-snug tracking-wider">
            {/* <span className="text-4xl font-codec sm:text-[80px] font-extrabold leading-8 text-center leading-snug tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"> */}
            Unlocking the potential of conventionally illiquid assets
          </h1>

          {/*  <div className="text-2xl sm:text-4xl font-roobert text-center mb-5">
            Financial Markets
          </div> */}

          <div class="flex space-x-2">
            <button
              type="button"
              class="inline-block px-10 py-4 mb-6 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold text-lg leading-tight  rounded shadow-md focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out mx-auto mt-6"
            >
              Learn more
            </button>
          </div>

          <div className="sm:w-1/2 font-roobert text-center mx-auto mt-6 leading-8 text-2xl">
            Join the revolution to bring liquidity to illiquid markets
          </div>
        </motion.div>

        {/* offers */}
        <div className="flex flex-col mt-52  mb-10 px-4 sm:px-24">
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1)}
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
            variants={fadeIn("up", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            className="flex flex-col justify-between  sm:flex-row mb-10"
          >
            {/* cards 1 */}
            <div class="flex justify-center my-2 mx-4 hover:scale-105 transition duration-700 ease-in-out ">
              <div class="rounded-3xl shadow-lg bg-black border border-slate-500	 max-w-sm">
                <div>
                  <img
                    class="rounded-t-lg px-4 py-8"
                    src="institution/tokenization.png"
                    alt=""
                  />
                </div>
                <div class="p-6">
                  <h5 class="text-white text-3xl font-medium mb-2 font-codec">
                    Zoth TaaS
                  </h5>
                  <div className="sm:h-[230px]">
                    <p class="text-gray-500 text-base mb-8 font-roobert h-4/5">
                      By utilizing the cutting-edge blockchain technology,
                      Zoth's TaaS (Tokenization-as-a-Service)platform allows for
                      a secure and transparent way to invest in tokenized
                      assets. With its commitment to compliance and its ability
                      to offer high-yielding investment opportunities, Zoth is
                      transforming the field of tokenization and asset
                      management.
                    </p>
                  </div>
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
              <div class="rounded-3xl shadow-lg bg-black border border-slate-500	 max-w-sm">
                <div>
                  <img
                    class="rounded-t-lg px-4 py-8"
                    src="institution/xchange.png"
                    alt=""
                  />
                </div>
                <div class="p-6">
                  <h5 class="text-white text-3xl font-medium mb-2 font-codec">
                    Zoth FaaS
                  </h5>
                  <div className="sm:h-[230px]">
                    <p class="text-gray-500 text-base mb-8 font-roobert">
                      Zoth through FaaS (Fund-as-a-Service) it’s enables
                      institutions and funds to invest in pre-vetted pools of
                      tokenized assets and liquidity pools. These pools consist
                      of high-quality digital assets that have been sourced from
                      reputable locations and have been carefully selected to
                      provide competitive returns.
                    </p>
                  </div>
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
              <div class="rounded-3xl shadow-lg bg-black border border-slate-500	 max-w-sm">
                <div>
                  <img
                    class="rounded-t-lg px-4 py-8"
                    src="institution/custody.png"
                    alt=""
                  />
                </div>
                <div class="p-6">
                  <h5 class="text-white text-3xl font-medium mb-2 font-codec">
                    Zoth DeFi
                  </h5>
                  <div className="sm:h-[230px]">
                    <p class="text-gray-500 text-base mb-8 font-roobert">
                      Zoth DeFi enables institutions and individuals to invest
                      in exclusive and proprietary liquidity pools, which are
                      focused on creating liquidity for on-chain real-world
                      assets. Our pools are designed to provide a stable and
                      secure investment opportunity for our clients.
                    </p>
                  </div>
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
        <div className="sm:flex flex-col items-center justify-center mt-32 mb-10 hidden">
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            className="text-[50px] text-center sm:text-6xl font-codec font-extrabold mb-10"
          >
            Bridging the gap between{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
              CeFi and DeFi{" "}
            </span>{" "}
          </motion.div>

          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            initial="hidden"
            whileInView="show"
            className="w-1/2 mb-4 leading-8 text-center font-roobert text-2xl"
          >
            Zoth unlocks the institutional potential of digital assets through
            our full stack blockchain based asset tokenization infrastructure
            combined with FaaS (Fund-as-a-Service) and DeFi platforms.
          </motion.div>

          {/* first */}

          <div className="grid grid-row-4 sm:grid-cols-4 gap-60 justify-between p-8 sm:my-40 ">
            <motion.div
              variants={slideIn("up", "tween", 0.2, 1)}
              initial="hidden"
              whileInView="show"
              className="col-span-2 self-center mt-2 p-8 w-[400px]"
            >
              {/* <div className="w-[300px] left-0"> */}
              <div className="sm:text-5xl text-4xl font-extrabold font-codec mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                Raise Capital
              </div>
              <div className="text-lg leading-loose">
                Zoth allows institutions and asset owners to raise capital from
                investors across different regions in a secure and compliant
                manner through its proprietary TaaS (Tokenization-as-a-Service)
                platform and marketplace. It provides a seamless and efficient
                solution for raising capital.
              </div>
              {/* </div> */}
            </motion.div>

            <div className="relative col-span-2 w-[300px]">
              <div className="w-[300px]">
                <img src="/frame.png" alt="frame" />
              </div>

              <motion.div
                variants={fadeIn("left", "tween", 0.8, 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.8 }}
                className="absolute top-5 object-cover "
              >
                <img
                  src="/institution/Tokenization.gif"
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
                variants={fadeIn("left", "tween", 0.8, 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.8 }}
                className="absolute top-5 object-cover "
              >
                <img
                  src="/institution/plugin.gif"
                  alt="tokenization"
                  className="w-[300px] h-[530px] rounded-[55px] opacity-80"
                />
              </motion.div>
            </div>

            <motion.div
              variants={slideIn("up", "tween", 0.2, 1)}
              initial="hidden"
              whileInView="show"
              className="col-span-2 self-center mt-2 p-8 w-[400px]"
            >
              <div className="sm:text-5xl text-4xl font-extrabold font-codec mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                Tokenize your assets
              </div>
              <div className="text-lg leading-loose sm:w-3/4">
                Zoth helps you tokenize an asset with ease and in a fully
                compliant way. Zoth is blockchain agnostic and is compatible
                with public, private, and permissioned blockchains, such as
                Ethereum, Polygon, Solana, etc
              </div>
            </motion.div>
          </div>

          {/* third */}
          <div className="grid grid-row-4 sm:grid-cols-4 gap-60 justify-items-center content-center p-8 sm:my-40">
            <motion.div
              variants={slideIn("up", "tween", 0.2, 1)}
              initial="hidden"
              whileInView="show"
              className="col-span-2 self-center mt-2 p-8 w-[400px]"
            >
              <div className="sm:text-5xl text-4xl font-extrabold font-codec mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                Create liquidity for your assets
              </div>
              <div className="text-lg leading-loose">
                Zoth offers a solution for investors and institutions to invest
                in liquidity pools through its proprietary technology providing
                liquidity to your assets
              </div>
            </motion.div>

            <div className="relative col-span-2 w-[300px]">
              <div className="w-[300px]">
                <img src="/frame.png" alt="frame" />
              </div>

              <motion.div
                variants={fadeIn("left", "tween", 0.8, 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.8 }}
                className="absolute top-5 object-cover "
              >
                <img
                  src="/institution/liquidity.gif"
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
                variants={fadeIn("left", "tween", 0.8, 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.8 }}
                className="absolute top-5 object-cover "
              >
                <img
                  src="/institution/fund.gif"
                  alt="tokenization"
                  className="w-[300px] h-[530px] rounded-[55px] opacity-80"
                />
              </motion.div>
            </div>

            <motion.div
              variants={slideIn("up", "tween", 0.2, 1)}
              initial="hidden"
              whileInView="show"
              className="col-span-2 self-center mt-2 p-8 w-[400px]"
            >
              <div className="sm:text-5xl text-4xl font-extrabold font-codec mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                Diversify your asset portfolio
              </div>
              <div className="text-lg leading-loose sm:w-3/4">
                Zoth FaaS (Fund-as-a-Service) model allows institutions to
                invest in diversified and exclusive baskets of assets, providing
                stable returns. All transactions are recorded on the blockchain
                for complete transparency.
              </div>
            </motion.div>
          </div>

          {/* fifth */}
          <div className="grid grid-row-4 sm:grid-cols-4 gap-60 justify-items-center content-center p-8 sm:my-40">
            <motion.div
              variants={slideIn("up", "tween", 0.2, 1)}
              initial="hidden"
              whileInView="show"
              className="col-span-2 self-center mt-2 p-8 w-[400px]"
            >
              <div className="sm:text-5xl text-4xl font-extrabold font-codec mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                Compliance
              </div>
              <div className="text-lg leading-loose">
                Zoth partners with third-party auditors to ensure tokenization
                process adheres to global regulations. This includes compliance
                with laws and regulations related to AML, KYC, securities laws
                and regulations. Zoth ensures compliance and legal requirements
                are met through smart contracts and jurisdictional restrictions.
              </div>
            </motion.div>

            <div className="relative col-span-2 w-[300px]">
              <div className="w-[300px]">
                <img src="/frame.png" alt="frame" />
              </div>

              <motion.div
                variants={fadeIn("left", "tween", 0.8, 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.8 }}
                className="absolute top-5 object-cover "
              >
                <img
                  src="/institution/compliant.gif"
                  alt="tokenization"
                  className="w-[300px] h-[530px] rounded-[55px] opacity-80"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* market for mobile */}
        <div className="flex flex-col items-center justify-center my-16 sm:hidden">
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            className="text-4xl p-4 text-center sm:text-6xl font-codec font-extrabold mb-10"
          >
            Bridging the gap between{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
              CeFi and DeFi
            </span>{" "}
          </motion.div>

          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            initial="hidden"
            whileInView="show"
            className="sm:w-1/2 mb-4 leading-8 text-center font-roobert text-2xl"
          >
            Zoth unlocks the institutional potential of digital assets through
            our full stack blockchain based asset tokenization infrastructure
            combined with FaaS (Fund-as-a-Service) and DeFi platforms.
          </motion.div>

          {/* first */}

          <div className="grid grid-row-4 sm:grid-cols-4 gap-2 justify-items-center content-center p-8 my-20">
            <div className="relative col-span-2 w-[300px]">
              <div className="w-[300px]">
                <img src="/frame.png" alt="frame" />
              </div>

              <motion.div
                variants={fadeIn("left", "tween", 0.8, 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.8 }}
                className="absolute top-5 object-cover "
              >
                <img
                  src="/institution/Tokenization.gif"
                  alt="tokenization"
                  className="w-[300px] h-[530px] rounded-[55px] opacity-80"
                />
              </motion.div>
            </div>
            <motion.div
              variants={slideIn("up", "tween", 0.2, 0.8)}
              initial="hidden"
              whileInView="show"
              className="col-span-2 self-center mt-2 p-8 "
            >
              <div className="sm:text-6xl text-4xl font-extrabold font-codec mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                Raise Capital
              </div>
              <div className="text-lg leading-loose">
                Zoth allows institutions and asset owners to raise capital from
                investors across different regions in a secure and compliant
                manner through its proprietary TaaS (Tokenization-as-a-Service)
                platform and marketplace. It provides a seamless and efficient
                solution for raising capital.
              </div>
            </motion.div>
          </div>

          {/* Second */}
          <div className="grid grid-row-4 sm:grid-cols-4 gap-2 justify-items-center content-center p-8 my-20">
            <div className="relative col-span-2 w-[300px]">
              <div className="w-[300px]">
                <img src="/frame.png" alt="frame" />
              </div>

              <motion.div
                variants={fadeIn("left", "tween", 0.8, 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.8 }}
                className="absolute top-5 object-cover "
              >
                <img
                  src="/institution/plugin.gif"
                  alt="tokenization"
                  className="w-[300px] h-[530px] rounded-[55px] opacity-80"
                />
              </motion.div>
            </div>

            <motion.div
              variants={slideIn("up", "tween", 0.2, 0.8)}
              initial="hidden"
              whileInView="show"
              className="col-span-2 self-center mt-2 p-8 "
            >
              <div className="sm:text-6xl text-4xl font-extrabold font-codec mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                Tokenize your assets
              </div>
              <div className="text-lg leading-loose sm:w-3/4">
                Zoth helps you tokenize an asset with ease and in a fully
                compliant way. Zoth is blockchain agnostic and is compatible
                with public, private, and permissioned blockchains, such as
                Ethereum, Polygon, Solana, etc
              </div>
            </motion.div>
          </div>

          {/* third */}
          <div className="grid grid-row-4 sm:grid-cols-4 gap-2 justify-items-center content-center p-8 my-20">
            <div className="relative col-span-2 w-[300px]">
              <div className="w-[300px]">
                <img src="/frame.png" alt="frame" />
              </div>

              <motion.div
                variants={fadeIn("left", "tween", 0.8, 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.8 }}
                className="absolute top-5 object-cover "
              >
                <img
                  src="/institution/liquidity.gif"
                  alt="tokenization"
                  className="w-[300px] h-[530px] rounded-[55px] opacity-80"
                />
              </motion.div>
            </div>

            <motion.div
              variants={slideIn("up", "tween", 0.2, 0.8)}
              initial="hidden"
              whileInView="show"
              className="col-span-2 self-center mt-2 p-8 "
            >
              <div className="sm:text-6xl text-4xl font-extrabold font-codec mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                Create liquidity for your assets
              </div>
              <div className="text-lg leading-loose">
                Zoth offers a solution for investors and institutions to invest
                in liquidity pools through its proprietary technology providing
                liquidity to your assets
              </div>
            </motion.div>
          </div>

          {/* fourth */}
          <div className="grid grid-row-4 sm:grid-cols-4 gap-2 justify-items-center content-center p-8 my-20">
            <div className="relative col-span-2 w-[300px]">
              <div className="w-[300px]">
                <img src="/frame.png" alt="frame" />
              </div>

              <motion.div
                variants={fadeIn("left", "tween", 0.8, 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.8 }}
                className="absolute top-5 object-cover "
              >
                <img
                  src="/institution/fund.gif"
                  alt="tokenization"
                  className="w-[300px] h-[530px] rounded-[55px] opacity-80"
                />
              </motion.div>
            </div>

            <motion.div
              variants={slideIn("up", "tween", 0.2, 0.8)}
              initial="hidden"
              whileInView="show"
              className="col-span-2 self-center mt-2 p-8 "
            >
              <div className="sm:text-6xl text-4xl font-extrabold font-codec mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                Diversify your asset portfolio
              </div>
              <div className="text-lg leading-loose">
                Zoth FaaS (Fund-as-a-Service) model allows institutions to
                invest in diversified and exclusive baskets of assets, providing
                stable returns. All transactions are recorded on the blockchain
                for complete transparency.
              </div>
            </motion.div>
          </div>

          {/* fifth */}
          <div className="grid grid-row-4 sm:grid-cols-4 gap-2 justify-items-center content-center p-8 my-20">
            <div className="relative col-span-2 w-[300px]">
              <div className="w-[300px]">
                <img src="/frame.png" alt="frame" />
              </div>

              <motion.div
                variants={fadeIn("left", "tween", 0.8, 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.8 }}
                className="absolute top-5 object-cover "
              >
                <img
                  src="/institution/compliant.gif"
                  alt="tokenization"
                  className="w-[300px] h-[530px] rounded-[55px] opacity-80"
                />
              </motion.div>
            </div>
            <motion.div
              variants={slideIn("up", "tween", 0.2, 0.8)}
              initial="hidden"
              whileInView="show"
              className="col-span-2 self-center mt-2 p-8 "
            >
              <div className="sm:text-6xl text-4xl font-extrabold font-codec mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                Compliance
              </div>
              <div className="text-lg leading-loose">
                Zoth partners with third-party auditors to ensure tokenization
                process adheres to global regulations. This includes compliance
                with laws and regulations related to AML, KYC, securities laws
                and regulations. Zoth ensures compliance and legal requirements
                are met through smart contracts and jurisdictional restrictions.
              </div>
            </motion.div>
          </div>
        </div>

        {/* offerings */}
        <Offerings />

        {/*footer */}

        {/* contact */}
        <Contact_institutions />

        {/* footer */}
        <Footer />
      </div>
    </>
  );
}

export default Institutions;
