import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { Link } from "react-router-dom";

export const ExpOfferingsCard = () => {
  return (
    <div className="bg-black text-white w-full h-full sm:mt-14 min-h-screen">
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        className="text-[60px] sm:text-5xl text-center font-codec font-bold"
      >
        Our <span className="bg-clip-text text-white">Offerings</span>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 p-10 place-content-center place-items-center ">
        {/* Leasing */}
        <div className="bg-[#161616] rounded-lg">
          <div className="px-4 pt-4">
            <img src="/experimental/leasing.png" className="" alt="leasing" />
          </div>

          <div className="text-white text-3xl font-bold p-4">Asset Leasing</div>

          <div className="rounded-lg bg-[#272727]">
            <div className="grid grid-cols-2 gap-2">
              <div className="p-4">
                <div className="tracking-wide text-sm">Earn Upto</div>
                <div className="text-md p-1">
                  <span className="font-extrabold">16-20% </span> Pre-tax IRR
                </div>
              </div>
              <div className="p-4">
                <div className="tracking-wide text-sm">Tenure</div>
                <div className="text-md p-1">
                  <span className="font-extrabold">12-36</span> months
                </div>
              </div>
              <div className="p-4">
                <div className="tracking-wide text-sm">
                  Investments starting at
                </div>
                <div className="text-md p-1">
                  <span className="font-extrabold">₹10,000</span>
                </div>
              </div>
              <div className="p-4">
                <div className="tracking-wide text-sm">Non-Market Linked</div>
                <div className="text-md p-1">
                  <span className="font-extrabold">Return</span>
                </div>
              </div>
            </div>

            <div
              className="flex justify-center items-center w-full p-4"
            >
              <button onClick={() => {
                window.location.href = "/asset-leasing"
              }} class="w-3/4 bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-blue py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Explore
              </button>
            </div>
          </div>
        </div>

        {/* Invoice */}
        <div className="bg-[#161616] rounded-lg">
          <div className="px-4 pt-4">
            <img src="/experimental/invoice.png" className="" alt="invoice" />
          </div>

          <div className="text-white text-3xl font-bold p-4">
            Invoice Discounting
          </div>
          <div className="rounded-lg bg-[#272727]">
            <div className="grid grid-cols-2 gap-2">
              <div className="p-4">
                <div className="tracking-wide text-sm">Earn Upto</div>
                <div className="text-md p-1">
                  <span className="font-extrabold">16-20% </span> Pre-tax IRR
                </div>
              </div>
              <div className="p-4">
                <div className="tracking-wide text-sm">Tenure</div>
                <div className="text-md p-1">
                  <span className="font-extrabold">12-36</span> months
                </div>
              </div>
              <div className="p-4">
                <div className="tracking-wide text-sm">
                  Investments starting at
                </div>
                <div className="text-md p-1">
                  <span className="font-extrabold">₹10,000</span>
                </div>
              </div>
            </div>

            <div
              className="flex justify-center items-center w-full p-4"
            >
              <button onClick={() => {
                window.location.href = "/invoice-discounting";
              }} class="w-3/4 bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Explore
              </button>
            </div>
          </div>
        </div>

        {/* CRE */}
        <div className="bg-[#161616] rounded-lg  ">
          <div className="px-4 pt-4">
            <img src="/experimental/cre.png" className="" alt="cre" />
          </div>

          <div className="text-gray-500 text-3xl font-bold p-4">
            Commercial Real Estate
          </div>
          <div className="rounded-lg bg-[#272727]/30">
            <div className="grid grid-cols-2 gap-2">
              <div className="p-4 text-gray-500">
                <div className="tracking-wide capitalize text-sm">
                  targeted IRR
                </div>
                <div className="text-md p-1">
                  <span className="font-extrabold">8-12% </span>
                </div>
              </div>
              <div className="p-4 text-gray-500">
                <div className="tracking-wide text-sm">Rent Escalation</div>
                <div className="text-md p-1">
                  <span className="font-extrabold">15%</span>
                </div>
              </div>

              <div className="p-4 text-gray-500">
                <div className="tracking-wide text-sm">
                  Investments starting at
                </div>
                <div className="text-md p-1">
                  <span className="font-extrabold">₹50,000</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center w-full p-4">
              <button class="w-3/4 bg-transparent   font-semibold  py-2 px-4 border border-gray-500  rounded text-gray-500">
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
