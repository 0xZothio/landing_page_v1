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
        <div className="absolute sm:top-5 flex justify-center items-center z-0">
          {/* <video
            src="https://resources.zoth.in/landingpage/wave.mp4"
            autoPlay="{true}"
            loop
            muted
            className=""
          ></video> */}
          <img src="/wave.gif" alt="" />
        </div>

        {/* signup popup */}
        {isVisible && <Invite setIsVisible={setIsVisible} />}

        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          className="relative px-6 lg:px-8"
        >
          <div className="mx-auto pt-10 sm:pt-32 ">
            <div>
              <div>
                <h1 className="text-4xl font-codec sm:text-[80px] font-extrabold leading-8 text-center leading-snug tracking-wider">
                  <span className="text-4xl font-codec sm:text-[80px] font-extrabold leading-8 text-center leading-snug tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                    A Revolutionary New Age
                  </span>{" "}
                  Investment Platform
                </h1>
                {/* <p className="mt-6 leading-8 text-center text-2xl">
                  Join the{" "}
                  <span className="text-[#F3C74E] font-bold ">Zoth Club</span>{" "}
                  and let your investments work for you
                </p> */}
                <div className="flex gap-x-4 mt-8 justify-center flex-wrap items-center">
                  {/* <div className="flex gap-x-4 pointer-events-auto">
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
                  </div> */}
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
                <div class="relative flex justify-center my-2 mx-auto items-center z-50">
                  <div class="rounded-3xl shadow-lg bg-black border border-slate-500 w-1/2 flex justify-center items-center">
                    <div class=" marquee-container d-none d-sm-block z-0">
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
                      <div class="rounded-3xl shadow-lg bg-[#252525] w-full text-center p-8">
                        <h5 class="text-white text-2xl font-medium mb-4">
                          Invest in Real Estate Opportunity with just
                        </h5>
                        <h5 class="text-white text-3xl font-medium mb-2">
                          ₹ 1 Lakh !
                        </h5>
                      </div>
                      <div className="h-full">
                        <h5 class="text-white text-2xl font-medium mb-2 font-codec mt-12">
                          Investors in Line
                        </h5>
                        <p class="text-white text-6xl font-medium mb-2 mt-2">
                          0573
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setIsVisible(true)}
                        className="w-1/2 rounded-sm px-4 py-4 mt-8 z-100 text-[#007AFF] font-bold ring-[1px] focus:outline-none   text-lg text-center hover:bg-gray-200 ring-[#007AFF] mb-12"
                      >
                        Join Waitlist
                      </button>
                    </div>
                  </div>
                </div>
                {/* <p className="mt-6 text-lg text-slate-300 leading-8 text-center">
                  Accept your early invite to earn{" "}
                  <span className="text-[#F3C74E] font-medium ">
                    $100 worth Zoth coins
                  </span>
                </p> */}
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Hero;
