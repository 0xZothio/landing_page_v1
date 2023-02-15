import Navbar from "./Navbar";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { useState } from "react";
import Invite from "./Invite";
import "../styles/styles.css"
// import ReactAnimationCarousel from "react-animation-carousel";
// const data = [img1, img2, img3, img4, img5, img6];

const Hero = ({ setScrollValue }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={" bg-black text-white w-full overflow-hidden"}>
      <div className="px-6 lg:px-8">
        <Navbar setIsVisible={setIsVisible} />
      </div>

      <main>
        {/* <div className="absolute sm:top-5 flex justify-center items-center z-0">
          
          <img src="/wave.gif" alt="" />
        </div> */}

        {/* signup popup */}
        {isVisible && <Invite setIsVisible={setIsVisible} />}

        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          className="relative px-6 lg:px-8"
        >
          <div className="mx-auto pt-10 sm:pt-20">
            <div>
              <div className="flex justify-center flex-col md:flex-row">
                <div className="md:w-1/2 w-full">
                  <h1 className="text-4xl font-codec sm:text-[60px] font-extrabold leading-8 text-center md:text-left  leading-snug tracking-wider">
                    <span className="text-4xl font-codec sm:text-[60px] font-extrabold leading-8 text-center leading-snug tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                      A Revolutionary New Age
                    </span>{" "}
                    Investment Platform
                  </h1>
                  
                  <div className="flex mt-4 justify-center flex-wrap items-center">
                    <div>
                      <p className=" text-md mx-4 sm:text-center">
                        Join Our Community
                      </p>
                      <ul className="flex gap-6 mx-8 ">
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
                            href="https://twitter.com/zothdotio"
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
                </div>
                <div class="relative flex justify-center my-2 mx-auto items-center z-50 mt-8 md:w-1/2 md:mt-0 w-full">
                  <div class="rounded-3xl shadow-lg bg-black border border-slate-500 flex justify-center items-center">
                    <div class=" marquee-container d-none d-sm-block z-0 hidden">
                      <div class="marquee d-flex justify-content-around">
                        <span>Upcoming Launch !</span>
                        <span>200 slots left</span>
                        <span>Upcoming Launch !</span>
                        <span>200 slots left</span>
                        <span>Upcoming Launch !</span>
                        <span>200 slots left</span>
                        <span>Upcoming Launch !</span>
                        <span>200 slots left</span>
                        <span>Upcoming Launch !</span>
                        <span>200 slots left</span>
                        <span>Upcoming Launch !</span>
                      </div>
                      <div class="marquee marquee2 d-flex justify-content-around">
                        <span>200 slots left</span>
                        <span>Upcoming Launch !</span>
                        <span>200 slots left</span>
                        <span>Upcoming Launch !</span>
                        <span>200 slots left</span>
                        <span>Upcoming Launch !</span>
                        <span>200 slots left</span>
                        <span>Upcoming Launch !</span>
                        <span>200 slots left</span>
                        <span>Upcoming Launch !</span>
                        <span>200 slots left</span>
                      </div>
                    </div>
                    <div class="w-full text-center z-50 rounded-3xl bg-black">
                      <div class="rounded-3xl shadow-lg bg-[#252525] w-full text-center p-4">
                        <h5 class="text-white text-xl font-medium mb-4">
                          Invest in Real Estate Opportunity with just
                        </h5>
                        <h5 class="text-white text-3xl font-medium mb-2">
                          ₹ 1 Lakh !
                        </h5>
                      </div>
                      <div className="h-full">
                        <h5 class="text-white text-xl mb-2 font-semibold mt-6">
                          Investors in Line
                        </h5>
                        <p class="text-white text-2xl font-extrabold mb-2 mt-2">
                          0573
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setIsVisible(true)}
                        className="w-1/2 rounded-sm px-2 py-4 mt-2 z-100 text-[#007AFF] font-bold ring-[1px] focus:outline-none   text-lg text-center hover:bg-gray-200 ring-[#007AFF] mb-12"
                      >
                        Join Waitlist
                      </button>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Hero;
