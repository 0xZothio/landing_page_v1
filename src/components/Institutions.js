import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
function Institutions() {
  return (
    <div className="bg-black text-white w-full flex flex-col items-center justify-center h-full mt-[80px] py-10">
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
            <h3 class="card-title">TAS</h3>
            <p class="card-text">
              ZOTH TAAS Platform helps global funds to Tokenize their assets, which also can be listed on ZOTH marketplace. Zoth TAAS platform is highly customizable and chain agnostic.
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
            <h3 class="card-title">Complian</h3>
            <p class="card-text">
              Zoth TAAS platform provides tokens that are compliant across several jurisdictions globally.Zoth has third party partners that audit the tokenization process regularly.
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
              Zoth allows institutions and funds to invest in the tokenized asset pools and liquidity pools. Zoth curates these assets from quality locations that provide competitive yield.
            </p>
            <a href="#" class="btns font-semibold">
              Coming Soon
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Institutions;
