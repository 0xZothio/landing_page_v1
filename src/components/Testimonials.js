import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

function Testimonials() {
  return (
    <div className="bg-black text-white w-full flex flex-col items-center justify-center h-full py-10 mt-28">
      
      <div className="absolute left-0 ">
        <img src="/bg-quote.png" alt="quote" />
      </div>

      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        className="text-[55px] text-center sm:text-[80px] font-codec font-extrabold"
      >
        Testimonials
      </motion.div>

      <motion.div
        variants={fadeIn("up", "tween", 0.4, 1)}
        initial="hidden"
        whileInView="show"
        className="flex flex-col sm:flex-row max-w-6xl mx-auto gap-10 group sm:mt-10"
      >
        <div className="bg-white/10 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 cursor-pointer p-8 rounded-xl ">
          <img src="/quote.svg" alt="" />

          <p className="text-sm leading-7 my-3 font-light opacity-50">
            Zoth is a trustworthy option with both liquidity and
            diversification. Zoth’s team is knowledgeable and helpful and the
            options provided are both reliable and affordable. Along with being
            completely diversified, the investments also have excellent
            liquidity options. Glad knowing that users money is being handled by
            Zoth's dependable team. Highly recommend them for anyone looking for
            reliable investment options!
          </p>

          <div className="border-t-2 border-gray-500 m-4"></div>

          <div class="inline-flex items-center mt-2">
            <img
              alt="testimonial"
              src="/testimonial/suresh.png"
              class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
            />
            <span class="flex-grow flex flex-col pl-4">
              <span class="title-font font-medium text-white">
                Suresh Kumar
              </span>
              <span class="text-gray-500 text-sm">
                Real Estate, start-up, stocks
              </span>
            </span>
          </div>
        </div>

        <div className="bg-white/10 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 cursor-pointer p-8 rounded-xl ">
          <img src="/quote.svg" alt="" />

          <p className="text-sm leading-7 my-3 font-light opacity-50">
            Zoth allows users to access capital quickly and efficiently at an
            18% interest rate, which is much more attractive than most other
            options out there. They have 3x faster liquidity that helps users
            get their money back in a fraction of the time than it would take
            for any other company. Zoth is highly recommended to anyone looking
            for a reliable platform to invest in the real estate industry!
          </p>

          <div className="border-t-2 border-gray-500 m-4"></div>

          <div class="inline-flex items-center mt-2">
            <img
              alt="testimonial"
              src="/testimonial/ali.png"
              class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
            />
            <span class="flex-grow flex flex-col pl-4">
              <span class="title-font font-medium text-white">Naresh Rati</span>
              <span class="text-gray-500 text-sm">
                Top property developer in dubai
              </span>
            </span>
          </div>
        </div>

        <div className="bg-white/10 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 cursor-pointer p-8 rounded-xl ">
          <img src="/quote.svg" alt="" />

          <p className="text-sm leading-7 my-3 font-light opacity-50">
            Zoth is the ideal platform for CRE investments because of its
            substantial CAPEX and high entry barrier. The team is very helpful
            in answering all the questions. Zoth has been extremely helpful in
            addressing concerns like liquidity options, processes and
            timelines,etc. The platform is simple to use and makes investing in
            CRE simple. Zoth is a great choice for CRE investments.
          </p>

          <div className="border-t-2 border-gray-500 m-4"></div>

          <div class="inline-flex items-center mt-2">
            <img
              alt="testimonial"
              src="/testimonial/namrata.png"
              class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
            />
            <span class="flex-grow flex flex-col pl-4">
              <span class="title-font font-medium text-white">
                Namrata Rajesh
              </span>
              <span class="text-gray-500 text-sm">
                FD, RD, Stocks, MF and crypto.
              </span>
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Testimonials;
