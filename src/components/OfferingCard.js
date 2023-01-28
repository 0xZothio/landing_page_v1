import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../utils/motion";

const OfferingCard = ({ topic, description }) => {
  return (
    <motion.div
      variants={fadeIn("up", "tween", 0.3, 1)}
      initial="hidden"
      whileInView="show"
      class="flex justify-center my-2 mx-4"
    >
      <div class="rounded-3xl shadow-lg bg-[#171717] ">
        <div className="p-6 pt-20">
          <h5 class="text-3xl font-codec font-medium mb-2  text-[#F3C74E]">
            {topic}
          </h5>
          <p class="text-white text-base mb-8 font-roobert">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default OfferingCard;
