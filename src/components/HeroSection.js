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
    <div className={" bg-black text-white w-full overflow-hidden min-h-screen"}>
      <div className="px-6 lg:px-8">
        <Navbar setIsVisible={setIsVisible} />
      </div>

      <main>
        <div className="absolute top-0 md:flex justify-center items-center z-0 h-1/2 hidden">
          <img src="/wave.gif" alt="" />
        </div>

        {/* signup popup */}
        {isVisible && <Invite setIsVisible={setIsVisible} />}

        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          className="relative px-6 lg:px-8 h-full"
        >
          <div className="mx-auto min-h-screen flex justify-center items-center">
            <div className=" flex justify-center flex-col md:flex-row z-50 h-full">
              <div className="md:w-3/5 w-full md:ml-12">
                <h1 className="text-4xl font-codec sm:text-[60px] font-extrabold leading-tight text-center md:text-left tracking-normal mt-2 herotext">
                  A Revolutionary New Age Investment Platform
                </h1>
                <p className="md:mt-6 leading-8 text-center md:text-left text-2xl mt-8">
                  Join the Zoth Club and let your investments work for you
                </p>
                {/* <div className="flex mt-4 justify-center flex-wrap items-center">
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
                  </div> */}
              </div>
              <div class="relative flex justify-center my-2 mx-auto items-center z-50 mt-12 md:w-2/5 md:mt-0 w-full">
                <div class="rounded-xl shadow-lg shadow-[#007AFF] bg-black border border-slate-500 flex justify-center items-center">
                  {/* <div class=" marquee-container d-none d-sm-block z-0 hidden">
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
                    </div> */}
                  <div class="w-full text-center z-50 rounded-3xl bg-black">
                    <div class="rounded-xl shadow-lg bg-[#252525] w-full text-center p-2 px-4">
                      <h5 class="text-white text-md font-normal mb-4">
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
                      <p class="text-white text-4xl font-extrabold mb-6 mt-2">
                        0573
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsVisible(true)}
                      className="w-2/3 rounded-sm px-2 py-2 mt-2 z-100 text-black font-bold ring-[1px] focus:outline-none   text-lg text-center hover:bg-gray-200 bg-[#007AFF] mb-8"
                    >
                      Join Waitlist
                    </button>
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
