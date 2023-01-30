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
        variants={fadeIn("up", "tween", 0.3, 1)}
        initial="hidden"
        whileInView="show"
      >
        <div className="mt-12 font-codec">
          <h1 className="text-2xl font-codec sm:text-[60px] font-extrabold leading-8 text-center leading-snug tracking-wider">
            Interested in{" "}
            <span className="text-2xl font-codec sm:text-[60px] font-extrabold leading-8 text-center leading-snug tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
              Patterning
            </span>{" "}
            With Us?
          </h1>
        </div>
      </motion.div>
      <div className="justify-center flex items-center">
        <button
          className="inline-block rounded-sm px-12 py-4 text-base font-semibold shadow-sm bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 my-12"
          onClick={() => setIsVisible(true)}
        >
          Contact Us{" "}
        </button>
      </div>
    </div>
  );
};

export default Contact_institutions;
