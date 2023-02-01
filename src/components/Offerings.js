import OfferingCard from "./OfferingCard";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../utils/motion";
const data = [
  {
    id: 1,
    topic: "De-Fi Pools",
    description:
      "Invest in Zoth's DeFi Pools for access to a curated portfolio of secure and stable assets, offering high fixed returns on your investments",
  },
  {
    id: 2,
    topic: "Crypto Funds",
    description:
      "Experience steady yield with Zoth's FaaS (Fund-as-a-Service) platform. Our innovative solution offers crypto funds the unique opportunity to invest in tokenized real-world assets, providing a new level of stability to your portfolio.",
  },
  {
    id: 3,
    topic: "Institutions",
    description:
      "Unlock the full potential of your real-world assets with Zoth's innovative tokenization solution. Our platform allows institutions to customize the tokenization process to their specific needs, ensuring full compliance with regulatory requirements. The resulting tokens are chain agnostic offering unparalleled versatility and flexibility.",
  },
  {
    id: 4,
    topic: "Exchanges and Traders",
    description:
      "Maximize your trading potential with Zoth's secure liquidity pools across multiple exchanges. Our platform provides a seamless way for traders to earn weekly rewards by staking in secure liquidity pools.",
  },
];
const Offerings = () => {
  return (
    <div className="mx-auto pt-10 sm:pt-32 w-5/6 mb-10">
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        initial="hidden"
        whileInView="show"
      >
        <div>
          <p className="mt-6 leading-8 text-center font-roobert text-2xl">
            We offer our solutions to diversified sectors
          </p>
        </div>
        <div className="mt-12 font-codec">
          <h1 className="text-2xl font-codec sm:text-[60px] font-extrabold leading-8 text-center leading-snug tracking-wider">
          Empowering{" "}
            <span className="text-2xl font-codec sm:text-[60px] font-extrabold leading-8 text-center leading-snug tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            Institutions
            </span>{" "}
            to capitalize on the growth real world {" "} 
            <span className="text-2xl font-codec sm:text-[60px] font-extrabold leading-8 text-center leading-snug tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            on-chain assets 
            </span>{" "}
          </h1>
        </div>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 pt-12">
        {data.map((item) => {
          return (
            <OfferingCard
              topic={item.topic}
              description={item.description}
              key={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Offerings;
