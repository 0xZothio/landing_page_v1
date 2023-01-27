import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

function AssetCard({ id, imgUrl, title, desc, index, active, handleClick }) {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.3, 1)}
      initial="hidden"
      whileInView="show"
      className={`relative ${
        active === id ? "sm:flex-[3.5] flex-[10]" : "sm:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[170px] h-[400px] transition-[flex] duration-[0.75s] ease-out-flex cursor-pointer`}
      onHoverStart={() => handleClick(id)}
   >
      <img
        src={imgUrl}
        alt={title}
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      {active !== id ? (
        <h3 className="font-bold sm:text-[28px] text-[18px] text-white absolute z-0 sm:bottom-20 sm:rotate-[-90deg] sm:origin-[0,0]">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
          <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
            {title}
          </h2>
          <p className="font-normal text-[16px] leading-[20px] text-white">
            {desc}
          </p>
        </div>
      )}
    </motion.div>
  );
}

export default AssetCard;
