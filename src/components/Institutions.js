import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import Navbar from "./Navbar";
function Institutions() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>

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
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            Zoth's{" "}
          </span>{" "}
          Offerings
        </motion.div>

        <div className="flex flex-col sm:flex-row">
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
                  Zoth Tokenization as a Service (TAAS) platform provides tokens
                  that are compliant across several jurisdictions globally.Zoth
                  has third party partners that audit the tokenization process
                  regularly.
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
          <div class="flex justify-center my-4 mx-4 hover:scale-105 transition duration-700 ease-in-out">
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
                  Zoth allows institutions and funds to invest in the tokenized
                  asset pools and liquidity pools. Zoth curates these assets
                  from quality locations that provide competitive yield.
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
        </div>
      </div>
    </>
  );
}

export default Institutions;
