import { motion } from "framer-motion";
import { fadeIn, slideIn, featureIn, staggerContainer } from "../utils/motion";
export default function MyPara(props) {
  return (
    <motion.div
      variants={slideIn("up", "tween", 0.3, 1)}
      initial="hidden"
      whileInView="show"
      className="col-span-2 self-center mt-2 p-8"
    >
      <div className="sm:text-6xl text-4xl font-extrabold font-codec mb-4">
        {props.topic}
      </div>
      <div className="text-lg leading-loose ">
        {props.description}
        <br />
      </div>
    </motion.div>
  );
}
