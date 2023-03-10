import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../utils/motion";
import Footer from "./Footer";
import Invite from "./Invite";

function ExpInvoice() {
  const [isVisible, setIsVisible] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if(searchParams.get("openForm") === "true") {
      setIsVisible(true);
    }
  }, [])

  return (
    <>
      <div className="fixed top-0 left-0 shadow-lg bg-gradient-to-r from-[#D44FE9] to-[#3B84D2] w-full text-center px-4 z-50">
        <h5
          className="text-white text-xs sm:text-[1rem] font-semibold cursor-pointer p-2"
          onClick={() => setIsVisible(true)}
        >
          Launching soon! An Alternative Investment Opportunity with just ₹1
          Lakh. <span className="font-semibold"> Join the Whitelist! </span>
        </h5>
      </div>

      {/* invite popup */}
      {isVisible && <Invite setIsVisible={setIsVisible} />}

      <div  className="bg-black text-white w-full h-full ">
        {/* heading */}
        <div className="flex flex-col justify-center items-center mb-4 p-4 sm:p-10">
          <Link to="/" className="">
            <img
              src="/institution/zoth.png"
              className="w-[250px] h-[250px]"
              alt="logo"
            />
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-8 mb-10 sm:ml-24 p-4 ">
            <div className="col-span-4">
              <div className="text-4xl sm:text-6xl font-codec mb-4">
                What is <br />
                <span className="text-[#1A88FF]">Invoice Discounting?</span>
              </div>
              <div className="tracking-wide leading-relaxed">
                It is a form of financing chosen by businesses to tap into their
                unpaid invoices so that they can meet their working capital
                requirements. Essentially, it is post-sales funding. Businesses
                avail financing towards unpaid invoices for the goods already
                delivered at a pre-determined cost.
              </div>

              {/* why invest */}
              <div>
                <div className="text-4xl font-codec mb-4 flex flex-col justify-center mt-60">
                  Why invest in an <br />
                  <span className="text-[#1A88FF] mt-1">
                    Invoice Discounting Opportunity?
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="  bg-[#111111] rounded-lg p-4">
                    <div className="text-xl text-[#1A88FF] font-semibold text-left p-2 capitalize">
                      High returns & low risk
                    </div>
                    <div className="text-sm p-2">
                      Invest in invoice discounting for attractive returns.
                    </div>
                  </div>

                  <div className="  bg-[#111111] rounded-lg p-4">
                    <div className="text-xl text-[#1A88FF] font-semibold text-left p-2 capitalize">
                      Diversify your portfolio
                    </div>
                    <div className="text-sm p-2">
                      Add invoice discounting as a separate asset class for
                      better returns.
                    </div>
                  </div>

                  <div className="  bg-[#111111] rounded-lg p-4">
                    <div className="text-xl text-[#1A88FF] font-semibold text-left p-2 capitalize">
                      Short investment horizon
                    </div>
                    <div className="text-sm p-2">
                      Invest in invoice discounting for attractive returns.
                    </div>
                  </div>

                  <div className="  bg-[#111111] rounded-lg p-4">
                    <div className="text-xl text-[#1A88FF] font-semibold text-left p-2 capitalize">
                      Lower default risk
                    </div>
                    <div className="text-sm p-2">
                      Invest in creditworthy companies to minimize default
                      risks.
                    </div>
                  </div>

                  <div className="  bg-[#111111] rounded-lg p-4">
                    <div className="text-xl text-[#1A88FF] font-semibold text-left p-2 capitalize">
                      Control your investments
                    </div>
                    <div className="text-sm p-2">
                      Choose which invoices to invest in based on
                      creditworthiness and other factors.
                    </div>
                  </div>

                  <div className="  bg-[#111111] rounded-lg p-4">
                    {/* <div className="text-xl text-[#1A88FF] font-semibold text-left">High returns & low risk</div> */}
                    <div className="text-xs text-gray-500 p-2">
                      Overall, investing in invoice discounting can be a smart
                      financial decision for investors looking to diversify
                      their portfolios, generate steady income, and potentially
                      benefit from lower default risk. However, as with any
                      investment opportunity, it's important to carefully
                      evaluate the risks and potential returns before committing
                      capital.
                    </div>
                  </div>
                </div>
              </div>

              {/* why zoth */}
              <div>
                <div className="text-4xl font-codec mb-4 flex flex-col justify-center mt-60">
                  Why ZOTH <br />
                  <span className="text-[#1A88FF]">
                    for Invoice Discounting?
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="  bg-[#111111] rounded-lg p-4">
                    <div className="text-xl text-[#1A88FF] font-semibold text-left p-2 capitalize">
                      Minimal Risk
                    </div>
                    <div className="text-sm p-2">
                      Every invoice is verified before getting listed on the
                      Zoth platform.
                    </div>
                  </div>

                  <div className="  bg-[#111111] rounded-lg p-4">
                    <div className="text-xl text-[#1A88FF] font-semibold text-left p-2 capitalize">
                      Short-term Maturity
                    </div>
                    <div className="text-sm p-2">
                      Earn quick returns within a short time frame of 30-90 days
                    </div>
                  </div>

                  <div className="  bg-[#111111] rounded-lg p-4">
                    <div className="text-xl text-[#1A88FF] font-semibold text-left p-2 capitalize">
                      Pay Partial or Full
                    </div>
                    <div className="text-sm p-2">
                      You decide your invested amount. No need to pay the
                      invoice in full.
                    </div>
                  </div>

                  <div className="  bg-[#111111] rounded-lg p-4">
                    <div className="text-xl text-[#1A88FF] font-semibold text-left p-2 capitalize">
                      High Returns
                    </div>
                    <div className="text-sm p-2">
                      On our platform, get returns as high as 15% at low-risk.
                    </div>
                  </div>

                  <div className="  bg-[#111111] rounded-lg p-4">
                    <div className="text-xl text-[#1A88FF] font-semibold text-left p-2 capitalize">
                      Risk Analysis
                    </div>
                    <div className="text-sm p-2">
                      We arrive at a Zoth score for every enrolled borrower
                      after analyzing multiple stages.
                    </div>
                  </div>

                  <div className="  bg-[#111111] rounded-lg p-4">
                    <div className="text-xl text-[#1A88FF] font-semibold text-left p-2 capitalize">
                      Quick and Easy Process
                    </div>
                    <div className="text-sm p-2">
                      Easy onboarding and the quick paperless process will save
                      your time and effort.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Whitelist */}
            <div className="relative col-span-4 flex justify-center items-start w-full">
              <div className="sm:sticky sm:top-10 rounded-xl shadow-md bg-gradient-to-b from-[#1A88FF]/30 to-[#1A88FF]/10  flex justify-center items-center">
                <div className="w-full text-center rounded-3xl p-4">
                  <div className="w-full text-center p-4">
                    <h5 className="text-transparent bg-clip-text bg-gradient-to-r from-[#FB2EFF] to-[#4FDCFF] text-3xl font-bold mb-4 p-4">
                      Invoice Discounting
                    </h5>
                  </div>

                  <div className="flex justify-around bg-[#ffffff]/10 rounded-lg mx-6 p-6">
                    <div>
                      <div>IRR</div>
                      <div>10%-14%</div>
                    </div>

                    <div className="border-r-2 border-gray-500"></div>

                    <div>
                      <div>Tenure</div>
                      <div>1-6 Months</div>
                    </div>
                  </div>

                  <div className="mt-2">Ready To Grow Your Investments?</div>

                  <button
                    type="button"
                    onClick={() => setIsVisible(true)}
                    className="w-2/3 rounded-full px-2 py-2 mt-2  bg-gradient-to-r from-[#FB2EFF] to-[#1A88FF] text-white tracking-wider font-bold ring-[1px] focus:outline-none   text-lg text-center hover:bg-gray-200 hover:text-black bg-[#007AFF] mb-8"
                  >
                    Join Whitelist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ExpInvoice;
