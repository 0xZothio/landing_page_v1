import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../utils/motion";
import { useState } from "react";
import Contact_popup from "./Contact_popup";
const Contact_institutions = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="my-20">
      {/* signup popup */}
      {isVisible && <Contact_popup setIsVisible={setIsVisible} />}

      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        className="text-[50px] text-center sm:text-6xl font-codec font-extrabold mt-32 mb-10"
      >
        Invest with{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
          Zoth
        </span>{" "}
        today
      </motion.div>

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        initial="hidden"
        whileInView="show"
        className="mx-auto sm:w-3/4 mb-4 leading-8 text-center font-roobert text-2xl"
      >
        Zoth enables investors and institutions to tap into previously untapped
        markets, giving them access to a wider range of investment opportunities
        and the ability to drive liquidity in those markets. Don't miss out on
        the chance to capitalize on these markets.
      </motion.div>
      {/* button */}
      <div class="flex justify-center items-center space-x-2">
        <button
          type="button"
          class="font-roobert inline-block px-6 py-2.5 m-6 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold text-lg leading-tight  rounded shadow-md focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
          onClick={() => setIsVisible(!isVisible)}
        >
          Contact Us
        </button>
      </div>
      {/* </motion.div> */}
    </div>
  );
};

export default Contact_institutions;
