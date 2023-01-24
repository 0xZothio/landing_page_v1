import React from "react";
import { backersData } from "../data/teamData";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

function Backers() {
  return (
    <>
      <div className="bg-black text-white w-full flex flex-col items-center justify-center h-full">
        <div className="border-t-2 border-gray-500 w-1/2 my-24"></div>
        <div className="mx-auto mb-4 lg:max-w-xl sm:text-center">
          <p className=" text-3xl tracking-tight sm:text-4xl tect-indigo-300">
            Backed by
          </p>
        </div>
        <div className="text-[50px] sm:text-[55px] text-center">
          <p className=" text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            The World's Best
          </p>
        </div>

        {/* Backed By */}
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          className="w-3/3 mx-auto my-24"
        >
          {/*  <h5 className="text-2xl text-gray-100 text-center mb-2">Backed By</h5>
          <h1 className="text-4xl font-semibold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            The World's Best
          </h1> */}
          <div className=" grid grid-cols-4 gap-10 bg-[#D9D9D9]/10 ring-[#D9D9D9] backdrop-blur-sm p-8 rounded-[30px]">
            <a href="https://www.beondeck.com/" target="_blank" rel="noreferrer">
              <img
                src="/backers/on.png"
                alt="backer"
                className="w-[125px] h-[125px] rounded-full"
              />
            </a>

            <a href="https://foundershiphq.com/" target="_blank" rel="noreferrer">
            <img
              src="/backers/foundership.png"
              alt="backer"
              className="w-[125px] h-[125px] rounded-full"
            />
            </a>
            <a href="https://reflexical.com/" target="_blank" rel="noreferrer">

            <img
              src="/backers/reflexical.jpg"
              alt="backer"
              className="w-[125px] h-[125px] rounded-full"
            />
            </a>

            <a href="https://sosv.com/" target="_blank" rel="noreferrer">
            <img
              src="/backers/sosv.jpg"
              alt="backer"
              className="w-[125px] h-[125px] rounded-full"
            />
            </a>
          </div>
        </motion.div>

        {/* Backers */}
        <div className="w-2/3 flex flex-wrap justify-center items-center mt-6">
          {backersData.map((member, index) => (
            <motion.div
              variants={fadeIn("up", "tween", 0.5, 1)}
              initial="hidden"
              whileInView="show"
              className="flex flex-col justify-center m-6"
            >
              <a href={member.linkedIn} target="_blank" rel="noreferrer">
                <img
                  class="max-w-lg rounded-full w-30 h-30 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                  src={member.photo}
                  alt="member"
                />
              </a>
              <div className="w-[200px] break-words">
                <p className="text-lg text-center">{member.name}</p>
                <p className="text-sm text-center">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Backers;
