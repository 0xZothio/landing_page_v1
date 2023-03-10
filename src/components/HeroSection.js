import Navbar from "./Navbar";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { useEffect, useState } from "react";
import Invite from "./Invite";
import "../styles/styles.css";
import axios from "axios";
import { ExpOfferingsCard } from "./ExpOfferingsCard";
// import ReactAnimationCarousel from "react-animation-carousel";
// const data = [img1, img2, img3, img4, img5, img6];

const Hero = ({ setScrollValue }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [waitlistUsers, setWaitlistUsers] = useState(0);
  useEffect(() => {
    (async () => {
      let res = await axios(
        "https://backend.zoth.io/waitlist/getSlotsAvailable",
        {
          headers: {
            authorization: "eogneqonre398432985823bn5kj32n5",
          },
        }
      );
      setWaitlistUsers(res.data.data.slotsLeft);
    })();
  }, []);
  return (
    <div
      className={
        " bg-transparent text-white w-full overflow-hidden min-h-screen "
      }
    >
      <div className="px-6 lg:px-8">
        <Navbar setIsVisible={setIsVisible} />
      </div>

      <main>
        <div className="absolute top-0 md:flex justify-center items-center hidden">
          <div>{/* <img src="/wave.gif" alt="" /> */}</div>
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
            <div className=" flex justify-center flex-col md:flex-row h-full pb-20">
              <div className="md:w-3/5 w-full md:ml-12">
                <h1 className="text-4xl font-codec sm:text-[60px] 2xl:text-[70px] font-extrabold leading-tight text-center md:text-left tracking-normal herotext">
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
              <div className="relative flex justify-center my-2 mx-auto items-center mt-12 md:w-2/5 md:mt-0 w-full h-full">
                <div className="rounded-xl shadow-md  bg-black border border-slate-500 flex justify-center items-center">
                
                  <div className="w-full text-center rounded-3xl bg-black">
                    <div className="rounded-xl shadow-lg bg-gradient-to-b from-[#1A88FF]/50 to-[#1A88FF]/10  w-full text-center p-2 px-4">
                      <h5 className="text-transparent bg-clip-text bg-gradient-to-r from-[#FB2EFF] to-[#4FDCFF] text-xl font-bold mb-4 p-2">
                        Invest In Real Estate Opportunity With Just
                      </h5>
                      <h5 className="text-[#FB2EFF] text-3xl font-medium mb-2">
                        ₹ 1 Lakh !
                      </h5>
                    </div>
                    <div className="h-full mb-6">
                      <h5 className="text-white text-xl tracking-wide  font-semibold mt-6">
                      Investors In Line
                      </h5>
                      <p className="text-white text-5xl font-bold">
                        {waitlistUsers ? waitlistUsers : 500}
                      </p>
                    </div>
                    <a
                      type="button"
                      href="#offerings"
                      // onClick={() => setIsVisible(true)}
                      className="w-2/3 rounded-full px-2 py-2 bg-gradient-to-r from-[#FB2EFF] to-[#1A88FF] text-white tracking-wider font-bold ring-[1px] focus:outline-none   text-lg text-center hover:bg-gray-200 hover:text-black bg-[#007AFF] mb-8 border"
                    >
                      Join Whitelist 
                    </a>
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
