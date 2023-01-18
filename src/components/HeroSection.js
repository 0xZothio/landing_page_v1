import Navbar from "./Navbar";
import { FaTelegramPlane, FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { useState } from "react";
import Invite from "./Invite";
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className=" bg-black text-white">
      <div className="px-6 pt-6 lg:px-8">
        <Navbar setIsVisible={setIsVisible}  />
      </div>

      <main>
        <div className="absolute flex justify-center items-center z-0">
          <video
            src="/wave.mp4"
            autoPlay="{true}"
            loop
            muted
            className=""
          ></video>
        </div>

        {/* signup popup */}
        {isVisible && (
          <Invite setIsVisible={setIsVisible}/>
        )}

        {/* signup popup */}
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          className="relative px-6 lg:px-8"
        >
          <div className="mx-auto pt-10 sm:pt-40 ">
            <div>
              <div>
                <h1 className="text-4xl font-codec sm:text-[80px] font-extrabold leading-8 text-center leading-snug tracking-wider">
                  A Revolutionary New Age Investment Platform
                </h1>
                <p className="mt-6 leading-8 text-center text-2xl">
                  Join the Zoth Club and let your investments work for you
                </p>
                <div className="flex gap-x-4 mt-8 justify-center flex-wrap items-center">
                  <div className="flex gap-x-4 pointer-events-auto">
                    <p
                      className="inline-block rounded-full px-4 py-2 text-base font-semibold leading-7 text-black shadow-sm bg-black h-8/12"
                      onClick={() => setIsVisible(true)}
                    >
                      <button
                        className="bg-white rounded-full px-4 py-2 mt-2"
                        onClick={() => console.log("clicked")}
                      >
                        Get Exclusive Invite{" "}
                      </button>
                    </p>
                    <p className="bg-black eft-1/2 -ml-0.5 w-0.5 h-100 sm:bg-gray-600"></p>
                  </div>
                  <div>
                    <p className=" text-md mx-4 sm:text-center">
                      Join Our Community
                    </p>
                    <ul className="flex gap-6 mx-8 mt-2">
                      <li>
                        <a
                          href="/"
                          rel="noreferrer"
                          target="_blank"
                          className="text-gray-700 transition hover:opacity-75"
                        >
                          <span className="sr-only">Telegram</span>
                          <FaTelegramPlane size={40} color="white" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://discord.gg/d7b6BcxB"
                          rel="noreferrer"
                          target="_blank"
                          className="text-gray-700 transition hover:opacity-75"
                        >
                          <span className="sr-only">Discord</span>
                          <FaDiscord size={40} color="white" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-8 text-center">
                  Accept your invite to earn exclusive Zoth Coins
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Hero;
