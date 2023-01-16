import React from "react";
import Backers from "./Backers";
import Team from "./Team";

function About() {
  return (
    <>
      <div className="bg-black text-white w-full h-full mt-[80px]">
        {/* About US */}
        <div className="text-[60px] sm:text-[100px] text-center font-codec font-bold">
          About Us
        </div>
        <div className="mt-6">
          <p className="sm:w-2/3 h-full text-[24px] text-center p-4 sm:p-2 mx-auto ">
            Zoth is a B2B2C marketplace for tokenized assets that helps retail
            investors diversify their portfolios through investing in
            high-quality alternative assets such as Real Estate, Art, and
            Private Equity, just like Stocks. Zoth offers comprehensively vetted
            properties for fractional ownership, provides asset owners with
            quick capital and has global investor reach. Investors can Buy,
            Sell, and Earn a rental yield on Zoth.
          </p>
        </div>

        {/* Our Teams */}
        <div className="">
          <Team />
        </div>

        {/* Our Backers */}
        <div className="">
          <Backers />
        </div>
      </div>
    </>
  );
}

export default About;
