import React from "react";
import { teamsData } from "../data/teamData";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

function Team() {
  return (
    <>
      <div className="text-[20px] bg-black text-white w-full flex flex-col items-center justify-center h-full my-14">
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          className="text-3xl font-bold tracking-tight sm:text-4xl text-center"
        >
          Meet Our{" "}
          <span className="bg-clip-text text-[#1A88FF]">
            Team
          </span>
        </motion.div>

        <div className="w-3/3 flex flex-wrap justify-center items-center mt-6">
          {teamsData.map((member, index) => (
            <motion.div
              variants={fadeIn("up", "tween", 0.5, 1)}
              initial="hidden"
              whileInView="show"
              className="flex flex-col justify-center m-6"
              key={index}
            >
              <a href={member.linkedIn} target="_blank" rel="noreferrer">
                <img
                  className="max-w-lg rounded-full w-30 h-30 object-cover transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                  src={member.photo}
                  alt="member"
                />
              </a>

              <div className="w-[270px] break-words">
                <p className="text-2xl text-center">{member.name}</p>
                <p className="text-sm text-center">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Team;
