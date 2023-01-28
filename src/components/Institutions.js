import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import Navbar from "./Navbar";
function Institutions() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      {/* <div className="px-6 pt-6 lg:px-8"> */}
        <Navbar setIsVisible={setIsVisible} />
      {/* </div> */}
      <div
        id="institutions"
        className="bg-black text-white w-full flex flex-col items-center justify-center h-full mt-[80px] py-10"
      >
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          className="text-[55px] text-center sm:text-[80px] font-codec font-extrabold"
        >
          Zoth for{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            Institutions
          </span>
        </motion.div>
        <div class="paragraph--type--card-row mt-10">
          <div class="card">
            <img
              src="/institution/tokenization.png"
              alt="Card image"
              class="card-image p-6"
            ></img>
            <div class="card-content">
              <h3 class="card-title">TAAS</h3>
              <p class="card-text">
                Zoth Tokenization as a Service (TAAS) platform provides tokens
                that are compliant across several jurisdictions globally.Zoth
                has third party partners that audit the tokenization process
                regularly.
              </p>
              <a href="#" class="btns font-semibold">
                Coming Soon
              </a>
            </div>
          </div>
          <div class="card">
            <img
              src="/institution/custody.png"
              alt="Card image"
              class="card-image p-6"
            ></img>
            <div class="card-content">
              <h3 class="card-title">Compliant</h3>
              <p class="card-text">
                Zoth TAAS platform provides tokens that are compliant across
                several jurisdictions globally.Zoth has third party partners
                that audit the tokenization process regularly.
              </p>
              <a href="#" class="btns font-semibold">
                Coming Soon
              </a>
            </div>
          </div>
          <div class="card">
            <img
              src="/institution/xchange.png"
              alt="Card image"
              class="card-image p-6"
            ></img>
            <div class="card-content">
              <h3 class="card-title">Fund as a Service</h3>
              <p class="card-text">
                Zoth allows institutions and funds to invest in the tokenized
                asset pools and liquidity pools. Zoth curates these assets from
                quality locations that provide competitive yield.
              </p>
              <a href="#" class="btns font-semibold">
                Coming Soon
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Institutions;
