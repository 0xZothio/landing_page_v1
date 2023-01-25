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
        Zoth for <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
        Institutions
        </span>
      </motion.div>
        <div class="paragraph--type--card-row">

        <div class="card">
            <img src="/institution/tokenization.png" alt="Card image" class="card-image p-4"></img>
            <div class="card-content">
                <h3 class="card-title">Tokenization</h3>
                <p class="card-text">Tokenize commodities, securities and other real world assets via the Rooba tokenization engine ensuring unbroken chain of custody from off-chain to on-chain</p>
                <a href="#" class="btns">Coming soon</a>
            </div>
        </div>
        <div class="card">
            <img src="/institution/custody.png" alt="Card image" class="card-image p-4"></img>
            <div class="card-content">
                <h3 class="card-title">Custody</h3>
                <p class="card-text">Tokenize commodities, securities and other real world assets via the Rooba tokenization engine ensuring unbroken chain of custody from off-chain to on-chain</p>
                <a href="#" class="btns">Coming soon</a>
            </div>
        </div>
        <div class="card">
            <img src="/institution/xchange.png" alt="Card image" class="card-image p-4"></img>
            <div class="card-content">
                <h3 class="card-title">Exchange</h3>
                <p class="card-text">Tokenize commodities, securities and other real world assets via the Rooba tokenization engine ensuring unbroken chain of custody from off-chain to on-chain</p>
                <a href="#" class="btns">Coming soon</a>
            </div>
        </div>



</div>
       
      </div>
    );
  }
  
  export default Institutions;
  