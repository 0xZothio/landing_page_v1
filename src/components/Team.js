import React from "react";
import { teamsData } from "../data/teamData";

function Team() {
  console.log("teamsData", teamsData);
  return (
    <>
      <div className="bg-black text-white w-full flex flex-col items-center justify-center h-full my-24">
        <div className="text-[50px] sm:text-[55px] text-center">Meet Our Team</div>

        <div className="w-3/3 flex flex-wrap justify-center items-center mt-6">
          {teamsData.map((member) => (
            <div className="flex flex-col justify-center m-6">
              <a href={member.linkedIn} target="_blank" rel="noreferrer">
              <img
                class="max-w-lg rounded-full w-30 h-30 object-cover transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                src={member.photo}
                alt="member"
              />
              </a>

              <div className="w-[270px] break-words">
                <p className="text-2xl text-center uppercase">{member.name}</p>
                <p className="text-sm text-center">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Team;
