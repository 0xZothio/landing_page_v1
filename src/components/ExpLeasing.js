import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../utils/motion";
import Footer from "./Footer";
import Invite from "./Invite";

function ExpLeasing() {
  const [isVisible, setIsVisible] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if(searchParams.get("openForm") === "true") {
      setIsVisible(true);
    }
  }, [])

  return (
    <div>
      {/* banner */}
      <div className="fixed top-0 left-0 shadow-lg bg-gradient-to-r from-[#D44FE9] to-[#3B84D2]  w-full text-center px-4">
        <h5
          className="text-white text-xs sm:text-[1rem] font-semibold cursor-pointer p-2"
          onClick={() => setIsVisible(true)}
        >
          Launching soon! An Alternative Investment Opportunity with just ₹1
          Lakh. <span className="font-semibold"> Join the Waitlist! </span>
        </h5>
      </div>

      {/* invite popup */}
      {isVisible && <Invite setIsVisible={setIsVisible} />}

      <div className="bg-black text-white w-full h-full ">
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
                <span className="text-[#1A88FF]">Assest leasing?</span>
              </div>
              <div className="tracking-wide leading-relaxed">
                Leasing is a simple contractual arrangement calling for the
                lessee (user) to pay the lessor (owner) regular payments in
                exchange for use of an asset over an agreed period of time.
                Furniture, vehicles and equipment are among the most common
                assets that are leased investment in leases allows you to invest
                in an asset (like vehicles, furniture, electronics) and lease it
                to a company against fixed monthly returns Companies are able to
                use leased assets to scale faster, while the investors are able
                to enjoy fixed, non-market linked, monthly returns.
              </div>

              {/* why invest */}
              <div>
                <div className="text-4xl font-codec mb-4 flex flex-col justify-center mt-60">
                  Why invest in an <br />
                  <span className="text-[#1A88FF] mt-1">
                    Asset Leasing opportunity?
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="  bg-[#111111] rounded-lg p-4">
                    <div className="text-xl text-[#1A88FF] font-semibold text-left p-2">
                      Steady income stream:
                    </div>
                    <div className="text-sm p-2">
                      Asset leasing offers a low-risk, high-return investment
                      option.
                    </div>
                  </div>

                  <div className="  bg-[#111111] rounded-lg p-4">
                    <div className="text-xl text-[#1A88FF] font-semibold text-left p-2">
                      Diversification:
                    </div>
                    <div className="text-sm p-2">
                      By leasing out assets to companies, investors can earn
                      fixed, non-market linked monthly returns.
                    </div>
                  </div>

                  <div className="  bg-[#111111] rounded-lg p-4">
                    <div className="text-xl text-[#1A88FF] font-semibold text-left p-2">
                      Limited liability:
                    </div>
                    <div className="text-sm p-2">
                      Companies benefit from leased assets to scale their
                      business faster
                    </div>
                  </div>

                  <div className="  bg-[#111111] rounded-lg p-4">
                    <div className="text-xl text-[#1A88FF] font-semibold text-left p-2">
                      Potential tax benefits:
                    </div>
                    <div className="text-sm p-2">
                      Investments start at just ₹10,000 and offer the potential
                      to earn up to 16-20% Pre-Tax IRR.
                    </div>
                  </div>

                  <div className="  bg-[#111111] rounded-lg p-4">
                    <div className="text-xl text-[#1A88FF] font-semibold text-left p-2">
                      Lower capital requirements:
                    </div>
                    <div className="text-sm p-2">
                      Leasing agreements typically have a tenure of 12-36
                      months, providing a reliable source of passive income for
                      investors.
                    </div>
                  </div>

                  <div className="  bg-[#111111] rounded-lg p-4">
                    <div className="text-sm text-[#1A88FF] font-semibold text-left p-2">
                      TIP :
                    </div>
                    <div className="text-xs text-gray-500 p-2">
                      Overall, investing in asset leasing can be a smart
                      financial decision for investors looking to diversify
                      their portfolios, generate steady income, and potentially
                      benefit from tax advantages. However, as with any
                      investment opportunity, it's important to carefully
                      evaluate the risks and potential returns before committing
                      capital.
                    </div>
                  </div>
                </div>
              </div>

              {/* why zoth */}
              <div>
                <div className="text-4xl font-codec mb-2 flex flex-col justify-center mt-60">
                  <div className="text-3xl sm:text-4xl">Why ZOTH</div>
                  <span className="text-[#1A88FF] text-3xl sm:text-4xl mt-1">
                    for Asset Leasing?
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="  bg-[#111111] rounded-lg p-4">
                    <div className="text-xl text-[#1A88FF] font-semibold text-left p-2">
                      Due diligence:
                    </div>
                    <div className="text-sm p-2">
                      Zoth conducts thorough due diligence on all leasing
                      opportunities to ensure that investors are presented with
                      high-quality investment options.
                    </div>
                  </div>

                  <div className="  bg-[#111111] rounded-lg p-4">
                    <div className="text-xl text-[#1A88FF] font-semibold text-left p-2">
                      Risk assessment:
                    </div>
                    <div className="text-sm p-2">
                      Zoth evaluates the risk profile of each leasing
                      opportunity and presents it to investors in a clear and
                      transparent manner.
                    </div>
                  </div>

                  <div className="  bg-[#111111] rounded-lg p-4">
                    <div className="text-xl text-[#1A88FF] font-semibold text-left p-2">
                      Asset quality:
                    </div>
                    <div className="text-sm p-2">
                      Zoth ensures that the assets being leased out are of high
                      quality and have been verified to be mission-critical or
                      core to the business.
                    </div>
                  </div>

                  <div className="  bg-[#111111] rounded-lg p-4">
                    <div className="text-xl text-[#1A88FF] font-semibold text-left p-2">
                      Financial analysis:
                    </div>
                    <div className="text-sm p-2">
                      Zoth conducts a comprehensive financial analysis of
                      leasing opportunities, including an analysis of annual
                      reports, key contracts, and regulatory concerns.
                    </div>
                  </div>

                  <div className="  bg-[#111111] rounded-lg p-4">
                    <div className="text-xl text-[#1A88FF] font-semibold text-left p-2">
                      Diversification:
                    </div>
                    <div className="text-sm p-2">
                      Zoth offers a range of asset leasing opportunities,
                      providing investors with the ability to diversify their
                      portfolios and spread their risk.
                    </div>
                  </div>

                  <div className="  bg-[#111111] rounded-lg p-4">
                    <div className="text-xl text-[#1A88FF] font-semibold text-left p-2">
                      Low investment threshold:
                    </div>
                    <div className="text-sm p-2">
                      With investment opportunities starting at just ₹10,000,
                      Zoth makes it easy for investors of all levels to
                      participate in asset leasing.
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-2 text-xs text-center">
                  Overall, Zoth is a trusted platform that provides investors
                  with access to high-quality leasing opportunities and a
                  reliable source of passive income.
                </div>
              </div>
            </div>

            {/* waitlist */}
            <div className="relative col-span-4 flex justify-center items-start z-10  w-full h-full">
              <div className="sm:sticky sm:top-10 rounded-xl shadow-md bg-gradient-to-b from-[#1A88FF]/30 to-[#1A88FF]/10  flex justify-center items-center">
                <div className="w-full text-center rounded-3xl p-4">
                  <div className="w-full text-center px-14">
                    <h5 className="text-transparent bg-clip-text bg-gradient-to-r from-[#FB2EFF] to-[#4FDCFF] text-3xl font-bold mb-4 p-4">
                      Asset Leasing
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
                    className="w-2/3 rounded-full px-2 py-2 mt-2 bg-gradient-to-r from-[#FB2EFF] to-[#1A88FF] text-white tracking-wider font-bold ring-[1px] focus:outline-none   text-lg text-center hover:bg-gray-200 hover:text-black bg-[#007AFF] mb-8"
                  >
                    Join Waitlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ExpLeasing;
