import Navbar from "./Navbar";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { useEffect, useState } from "react";
import Invite from "./Invite";
import "../styles/styles.css";
import axios from "axios";
import { ExpOfferingsCard } from "./ExpOfferingsCard";
import { IoIosWarning } from "react-icons/io";
// import ReactAnimationCarousel from "react-animation-carousel";
// const data = [img1, img2, img3, img4, img5, img6];

const Hero = ({ setScrollValue }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [waitlistUsers, setWaitlistUsers] = useState(0);
  const [amount, setAmount] = useState(10000);

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

  const onChangeData = (e) => {
    console.log("amount", e.target.value);
    setAmount(e.target.value);
  };

  const calculateInterest = () => {
    console.log("calculateInterest amount", amount);
  };

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
            <div className=" flex justify-center items-center flex-col md:flex-row h-full pb-20">
              <div className="w-full md:ml-14">
                <div className="text-xl md:text-2xl text-center md:text-left font-semibold mb-2">
                  Gateway to Alternate Assets:
                </div>
                <div className="text-2xl font-codec sm:text-[50px] 2xl:text-[60px] font-extrabold capitalize text-center md:text-left tracking-normal leading-tight">
                  Invest into generating{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A88FF] to-[#1A88FF]  ">
                    Sustainable passive income
                  </span>
                </div>
                <p className=" leading-8 text-center md:text-left  md:text-xl text-[#C1C1C1] ">
                  Join the Zoth waitlist and earn money while you sleep
                </p>

                <div className="grid sm:grid-cols-8 border mt-6 rounded-lg">
                  {/* Calculate */}
                  <div className="col-span-3 p-4">
                    <div className="text-sm">
                      Calculate Your Expected Returns
                    </div>
                    <input
                      type="number"
                      name="amount"
                      id="amount"
                      className=" border text-sm font-bold block rounded w-full my-2 p-1.5 bg-[#202020] border-gray-700 placeholder-gray-400 text-white"
                      placeholder=""
                      required={true}
                      // value={amount}
                      onChange={(e) => onChangeData(e)}
                    />
                    <button
                      type="button"
                      onClick={calculateInterest}
                      className="w-1/2 mt-4 bg-[#007AFF] rounded-lg px-2 py-1.5 my-2 text-white font-semibold  focus:outline-none   text-base text-center "
                    >
                      Calculate
                    </button>
                  </div>

                  <div className="col-span-1 hidden sm:block border-r-2 border-gray-500"></div>

                  {/* other section */}
                  <div className="col-span-3 p-4">
                    <div className="flex flex-row justify-around">
                      <div className="">
                        <div className="text-sm">Expected Returns*</div>
                        <div className="font-bold text-3xl text-center">
                          ₹12,000
                        </div>
                      </div>
                      <div className="">
                        <div className="text-sm">IRR</div>
                        <div className="font-bold text-3xl text-center">
                          18.8%
                        </div>
                      </div>
                    </div>

                    <a
                      type="button"
                      href="#offerings"
                      // onClick={() => setIsVisible(true)}
                      className="w-2/3 rounded-full px-2 py-1.5 mt-6 bg-gradient-to-r from-[#FB2EFF] to-[#1A88FF] text-white tracking-wider font-semibold ring-[1px] focus:outline-none   text-base text-center hover:bg-gray-200 hover:text-black bg-[#007AFF]  border"
                    >
                      Join Waitlist
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative flex justify-center my-4 mx-auto items-center md:mt-0 w-full h-full">
                <div className="rounded-xl shadow-md  bg-[#192A3B]/20  flex justify-center items-center">
                  <div className="w-full text-center rounded-3xl bg-[#192A3B]/20">
                    <div className="rounded-xl shadow-lg bg-gradient-to-b from-[#1A88FF]/50 to-[#1A88FF]/10  w-full text-center p-2 px-4">
                      <h5 className="capitalize text-white  text-xl font-bold mb-4 p-2">
                        exclusive access to our upcoming deals
                      </h5>
                      <h5 className="text-white capitalize text-3xl font-medium mb-2">
                        Start investing With ₹9,999!
                      </h5>
                    </div>

                
                    <div className="slot flex flex-col justify-center items-center border-2 m-5 p-4">
                      <div className="text-6xl font-bold p-2">200</div>
                      <div className="text-base capitalize">
                        Investors have shown interest
                      </div>
                    </div>

                    <div className="m-4 text-lg">
                      Only 100 Slots Available !
                    </div>

                    {/* <div className="flex flex-row justify-center items-center">
                      <div>
                        <IoIosWarning className="text-[#f44336] mt-2 text-8xl sm:text-8xl" />
                      </div>

                      <div className="h-full mb-6">
                        <h5 className="text-white text-xl tracking-wide  font-semibold mt-6">
                          Slots Available
                        </h5>
                        <p className="text-white text-5xl font-bold">
                          {waitlistUsers ? waitlistUsers : 200}
                        </p>
                      </div>
                    </div> */}

                    <a
                      type="button"
                      href="#offerings"
                      // onClick={() => setIsVisible(true)}
                      className="w-2/3 rounded-full px-2 py-2 bg-gradient-to-r from-[#FB2EFF] to-[#1A88FF] text-white tracking-wider font-bold ring-[1px] focus:outline-none   text-lg text-center hover:bg-gray-200 hover:text-black bg-[#007AFF] mb-8 border"
                    >
                      Join Waitlist
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
