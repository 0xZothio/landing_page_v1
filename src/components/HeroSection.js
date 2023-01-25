import Navbar from "./Navbar";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { useState } from "react";
import Invite from "./Invite";
const Hero = ({isHidden}) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className={isHidden ? " bg-black text-white collapse" : " bg-black text-white w-full"}>
      <div className="px-6 pt-6 lg:px-8">
        <Navbar setIsVisible={setIsVisible} />
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
        {isVisible && <Invite setIsVisible={setIsVisible} />}

        {/* signup popup */}
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          className="relative px-6 lg:px-8"
        >
          <div className="mx-auto pt-10 sm:pt-20 ">
            <div>
              <div>
                <h1 className="text-4xl font-codec sm:text-[80px] font-extrabold leading-8 text-center leading-snug tracking-wider">
                  <span className="text-4xl font-codec sm:text-[80px] font-extrabold leading-8 text-center leading-snug tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                    A Revolutionary New Age
                  </span>{" "}
                  Investment Platform
                </h1>
                <p className="mt-6 leading-8 text-center text-2xl">
                  Join the{" "}
                  <span className="text-[#F3C74E] font-bold ">Zoth Club</span>{" "}
                  and let your investments work for you
                </p>
                <div className="flex gap-x-4 mt-8 justify-center flex-wrap items-center">
                  <div className="flex gap-x-4 pointer-events-auto">
                    <div className="inline-block rounded-full py-2 text-base font-semibold leading-7 text-black shadow-sm bg-transparent h-8/12">
                      <button
                        className="bg-white rounded-full px-8 sm:px-4 py-2 mt-2 z-100"
                        type="button"
                        onClick={() => setIsVisible(true)}
                      >
                        Get Exclusive Invite
                      </button>
                    </div>
                    <p className="hidden sm:flex bg-black left-1/2 -ml-0.5 w-0.5 h-100 sm:bg-gray-600 "></p>
                  </div>
                  <div>
                    <p className=" text-md mx-4 sm:text-center mt-10">
                      Join Our Community
                    </p>
                    <ul className="flex gap-6 mx-8 mt-2">
                      <li>
                        <a
                          href="https://t.me/+nFUrC_I1hA1iNWU9"
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
                          href="https://twitter.com/zothio"
                          rel="noreferrer"
                          target="_blank"
                          className="text-gray-700 transition hover:opacity-75"
                        >
                          <span className="sr-only">Twitter</span>
                          <FaTwitter size={40} color="white" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="mt-6 text-lg text-slate-300 leading-8 text-center">
                  Accept your early invite to earn <span className="text-[#F3C74E] font-medium ">$100 worth Zoth coins</span> 
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
