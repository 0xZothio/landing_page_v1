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
import CurrencyInput from "react-currency-input-field";
// import ReactAnimationCarousel from "react-animation-carousel";
// const data = [img1, img2, img3, img4, img5, img6];

const Hero = ({ setScrollValue }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [slotsLeft, setSlotsLeft] = useState(0);
  const [amount, setAmount] = useState(10000);
  const [expReturn, setExpReturn] = useState("12,000");

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
      setSlotsLeft(res.data.data.slotsLeft);
    })();
  }, []);

  const commaSeparators = (num) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const calculateInterest = () => {
    let interest = amount * 0.2;
    let profit = parseInt(amount) + parseInt(interest);
    let returnAmount = commaSeparators(Math.round(profit));
    setExpReturn(returnAmount);
  };

  console.log("expReturn", expReturn);

  // ------

  const prefix = "₹ ";
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    e.preventDefault();
    const { value = "" } = e.target;
    const parsedValue = value.replace(/[^\d.]/gi, "");
    setAmount(parsedValue);
  };
  console.log("valuevaluevalue", amount);
  // const handleOnBlur = () => setValue(Number(value).toFixed(2));

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
            <div className=" flex justify-center items-center flex-col md:flex-row h-full pb-20 mt-10 sm:mt-0">
              <div className="w-full md:ml-14">
                <div className="text-xl md:text-2xl text-center md:text-left font-semibold mb-2">
                  Gateway to Alternate Assets:
                </div>
                <div className="text-2xl font-codec sm:text-5xl font-extrabold capitalize text-center md:text-left tracking-normal leading-loose">
                  Invest into sustainable {/* Invest into generating {" "} */}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A88FF] to-[#1A88FF]  ">
                    passive income generating assets
                  </span>
                </div>
                <p className=" leading-8 capitalize text-center md:text-left  md:text-xl text-[#C1C1C1] ">
                  Join the Zoth waitlist and earn money while you sleep!
                </p>

                <div className="grid sm:grid-cols-4 gap-4  sm:w-3/4 border mt-6 rounded-lg">
                  {/* Calculate */}
                  <div className="col-span-2 p-2 border-r-2 border-gray-500">
                    <div className="flex flex-col justify-center sm:justify-start sm:items-start items-center p-4">
                      <div className="text-sm font-semibold ">
                        Calculate Your Expected Returns
                      </div>
                      <CurrencyInput
                        prefix={prefix}
                        name="currencyInput"
                        id="currencyInput"
                        data-number-to-fixed="2"
                        data-number-stepfactor="100"
                        value={amount}
                        placeholder=""
                        onChange={handleChange}
                        // onBlur={handleOnBlur}
                        allowDecimals
                        decimalsLimit="2"
                        disableAbbreviations
                        className=" border text-sm font-bold block rounded w-full my-4 p-2 bg-[#202020] border-gray-700 placeholder-gray-400 text-white"
                      />
                      {/* <input
                        type="number"
                        name="amount"
                        id="amount"
                        className=" border text-sm font-bold block rounded w-full my-4 p-2 bg-[#202020] border-gray-700 placeholder-gray-400 text-white"
                        placeholder=""
                        required={true}
                        value={amount}
                        onChange={(e) => onChangeData(e)}
                      /> */}
                      <div className="flex justify-center items-center w-full">
                        <button
                          type="button"
                          onClick={calculateInterest}
                          className="w-1/2 mt-4 bg-[#007AFF] rounded-lg p-2 py-1.5 my-1 text-white font-semibold  focus:outline-none   text-base text-center "
                        >
                          Calculate
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* <div className="col-span-1 hidden sm:block border-r-2 border-gray-500"></div> */}

                  {/* other section */}
                  <div className="col-span-2 p-2">
                    <div className="flex flex-row sm:flex-col justify-center p-4">
                      <div className="flex flex-col justify-center items-center">
                        <div className="text-base text-left font-semibold">
                          Expected Returns*
                        </div>
                        <div className="font-bold text-3xl text-[#1A88FF] text-left my-2">
                          ₹{expReturn || 12000}
                        </div>
                      </div>
                      <div className="flex flex-col justify-center items-center ml-16 sm:ml-0">
                        <div className="text-base text-left font-semibold">
                          IRR
                        </div>
                        <div className="font-bold text-3xl text-[#1A88FF] text-left my-2">
                          18.8%
                        </div>
                      </div>
                    </div>
                    {/* 
                    <div className="flex justify-center items-center">
                      <a
                        type="button"
                        href="#offerings"
                        // onClick={() => setIsVisible(true)}
                        className="w-2/3 rounded-full px-2 py-1.5 mt-6 bg-gradient-to-r from-[#FB2EFF] to-[#1A88FF] text-white tracking-wider font-semibold ring-[1px] focus:outline-none   text-base text-center hover:bg-gray-200 hover:text-black bg-[#007AFF]  border"
                      >
                        Join Waitlist
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>

              <div className="relative flex justify-center my-4 mx-auto items-center md:mt-0 w-full h-full">
                <div className="rounded-xl shadow-md  bg-[#192A3B]/20  flex justify-center items-center">
                  <div className="w-full text-center rounded-3xl bg-[#192A3B]/20 ">
                    <div className="rounded-xl shadow-lg bg-gradient-to-b from-[#1A88FF]/50 to-[#1A88FF]/10  w-full text-center p-2 px-4">
                      <h5 className="capitalize text-white  text-xl font-bold mb-4 p-2">
                        exclusive access to our upcoming deals
                      </h5>
                      <h5 className="text-white capitalize text-3xl font-medium mb-2">
                        Start investing With ₹9,999!
                      </h5>
                    </div>

                    <div className="slot flex flex-col justify-center items-center border-2 m-5 p-4">
                      <div className="text-6xl font-bold p-2">
                        {90 + 500 - slotsLeft}
                      </div>
                      <div className="text-base capitalize">
                        Investors have shown interest
                      </div>
                    </div>

                    <div className="m-4 text-lg">
                      Only {slotsLeft} Slots Available !
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
