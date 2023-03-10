import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../utils/motion";
import Footer from "./Footer";

function ExpLeasing() {
  return (
    <>
      <div id="" className="bg-black text-white w-full h-full ">
        {/* heading */}
        <div className="flex flex-col justify-center items-center mb-4 p-4 sm:p-10 z-50">
          <Link to="/" className="z-50">
            <img
              src="/institution/zoth.png"
              className="w-[250px] h-[250px] z-50"
              alt="logo"
            />
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-8 mb-10 sm:ml-24 p-4 place-content-center place-items-center">
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
                  <span className="text-[#1A88FF]">
                    Asset Leasing opportunity?
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="  bg-[#111111] rounded-lg p-6">
                    <div className="text-xl text-[#1A88FF] font-semibold text-left">
                      Steady income stream:
                    </div>
                    <div className="text-sm">
                      Asset leasing offers a low-risk, high-return investment
                      option.
                    </div>
                  </div>

                  <div className="  bg-[#111111] rounded-lg p-6">
                    <div className="text-xl text-[#1A88FF] font-semibold text-left">
                      Diversification:
                    </div>
                    <div className="text-sm">
                      By leasing out assets to companies, investors can earn
                      fixed, non-market linked monthly returns.
                    </div>
                  </div>

                  <div className="  bg-[#111111] rounded-lg p-6">
                    <div className="text-xl text-[#1A88FF] font-semibold text-left">
                      Limited liability:
                    </div>
                    <div className="text-sm">
                      Companies benefit from leased assets to scale their
                      business faster
                    </div>
                  </div>

                  <div className="  bg-[#111111] rounded-lg p-6">
                    <div className="text-xl text-[#1A88FF] font-semibold text-left">
                      Potential tax benefits:
                    </div>
                    <div className="text-sm">
                      Investments start at just ₹10,000 and offer the potential
                      to earn up to 16-20% Pre-Tax IRR.
                    </div>
                  </div>

                  <div className="  bg-[#111111] rounded-lg p-6">
                    <div className="text-xl text-[#1A88FF] font-semibold text-left">
                      Lower capital requirements:
                    </div>
                    <div className="text-sm">
                      Leasing agreements typically have a tenure of 12-36
                      months, providing a reliable source of passive income for
                      investors.
                    </div>
                  </div>

                  <div className="  bg-[#111111] rounded-lg p-6">
                    <div className="text-sm text-[#1A88FF] font-semibold text-left">
                      TIP :
                    </div>
                    <div className="text-xs text-gray-500">
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
                  <span className="text-[#1A88FF] text-3xl sm:text-4xl">
                    for Asset Leasing?
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="  bg-[#111111] rounded-lg p-6">
                    <div className="text-xl text-[#1A88FF] font-semibold text-left">
                      Due diligence:
                    </div>
                    <div className="text-sm">
                      Zoth conducts thorough due diligence on all leasing
                      opportunities to ensure that investors are presented with
                      high-quality investment options.
                    </div>
                  </div>

                  <div className="  bg-[#111111] rounded-lg p-6">
                    <div className="text-xl text-[#1A88FF] font-semibold text-left">
                      Risk assessment:
                    </div>
                    <div className="text-sm">
                      Zoth evaluates the risk profile of each leasing
                      opportunity and presents it to investors in a clear and
                      transparent manner.
                    </div>
                  </div>

                  <div className="  bg-[#111111] rounded-lg p-6">
                    <div className="text-xl text-[#1A88FF] font-semibold text-left">
                      Asset quality:
                    </div>
                    <div className="text-sm">
                      Zoth ensures that the assets being leased out are of high
                      quality and have been verified to be mission-critical or
                      core to the business.
                    </div>
                  </div>

                  <div className="  bg-[#111111] rounded-lg p-6">
                    <div className="text-xl text-[#1A88FF] font-semibold text-left">
                      Financial analysis:
                    </div>
                    <div className="text-sm">
                      Zoth conducts a comprehensive financial analysis of
                      leasing opportunities, including an analysis of annual
                      reports, key contracts, and regulatory concerns.
                    </div>
                  </div>

                  <div className="  bg-[#111111] rounded-lg p-6">
                    <div className="text-xl text-[#1A88FF] font-semibold text-left">
                      Diversification:
                    </div>
                    <div className="text-sm">
                      Zoth offers a range of asset leasing opportunities,
                      providing investors with the ability to diversify their
                      portfolios and spread their risk.
                    </div>
                  </div>

                  <div className="  bg-[#111111] rounded-lg p-6">
                    <div className="text-xl text-[#1A88FF] font-semibold text-left">
                      Low investment threshold:
                    </div>
                    <div className="text-sm">
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
            <div className="relative col-span-4 flex justify-center items-center z-50  w-full h-full">
              <div className="sm:fixed sm:top-80 rounded-xl shadow-md bg-gradient-to-b from-[#1A88FF]/30 to-[#1A88FF]/10  flex justify-center items-center">
                <div className="w-full text-center z-50 rounded-3xl p-4">
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
                    className="w-2/3 rounded-full px-2 py-2 mt-2 z-100 bg-gradient-to-r from-[#FB2EFF] to-[#1A88FF] text-white tracking-wider font-bold ring-[1px] focus:outline-none   text-lg text-center hover:bg-gray-200 hover:text-black bg-[#007AFF] mb-8"
                  >
                    Join Waitlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExpLeasing;
