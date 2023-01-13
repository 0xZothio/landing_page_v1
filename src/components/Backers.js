import React from "react";
import { backersData } from "../data/teamData";

function Backers() {
  return (
    <>
      <div className="bg-black text-white w-full flex flex-col items-center justify-center h-full">
        <div className="border-t-2 border-gray-500 w-1/2 my-24"></div>

        <div className="text-[55px] text-center">Meet Our Backers</div>

        <div className="w-2/3 flex flex-wrap justify-center items-center mt-6">
          {backersData.map((member) => (
            <div className="flex flex-col justify-center m-6">
              <a href={member.linkedIn} target="_blank" rel="noreferrer">
                <img
                  class="max-w-lg rounded-full w-30 h-30 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                  src={member.photo}
                  alt="member"
                />
              </a>
              <div className="w-[200px] break-words">
                <p className="text-lg text-center uppercase">{member.name}</p>
                <p className="text-sm text-center">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Backers;
