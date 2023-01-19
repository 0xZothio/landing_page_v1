import React, {useState, useEffect} from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import asset_trust from "../assets/images/Asset_trust.png"
import premium_asset from "../assets/images/Quality_premium_asset.png"
import tokenisation from "../assets/images/Tokenization.png"
import marketplace from "../assets/images/zoth_marketplace.png"
import "../styles/styles.css";
const crouselData = [
  {
    image: asset_trust,
    title: "Quality Premium Assets",
    description: "Zoth curates real world assets with high net worth and yield",
  },
  {
    image: premium_asset,
    title: "Asset Trust",
    description: "The asset is transferred to a Trust or LLC",
  },
  {
    image: tokenisation,
    title: "Tokenisation as a Service (TaaS)",
    description: "Trust shares are tokenized using Zoth TaaS module",
  },
  {
    image: marketplace,
    title: "Zoth Marketplace",
    description:
      "Provides investors access to aggregated tokenized assets",
  },
];

function HowToInvest() {
    let slides = crouselData;
    const [current, setCurrent] = useState(3);

    const [scrollvalue, setScrollValue] = useState(10);
    useEffect(() => {
      const element = document.querySelector("#section-3");
      const handleScroll = () => {
        console.log("scrollToTop", element.scrollTop);
        setScrollValue(element.scrollTop);

        if (scrollvalue > 900) {
          setCurrent(3);
        } else if (scrollvalue > 600) {
          setCurrent(2);
        } else if (scrollvalue > 300) {
          setCurrent(1);
        } else {
          setCurrent(0);
        }
      };

      element.addEventListener("scroll", handleScroll);
      handleScroll();

      return () => element.removeEventListener("scroll", handleScroll);
    }, [scrollvalue]);


  return (
    <div className="bg-black text-white w-full h-full mt-[80px] pb-10">
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        className="text-[55px] text-center sm:text-[80px] font-codec font-extrabold"
      >
        How To Invest
      </motion.div>

      <div
        className="absolute bg-transparent w-full overflow-y-scroll scrollbar-hide z-10 h-3/4"
        id="section-3"
      >
        <div className="h-screen w-full"></div>
        <div className="h-screen w-full"></div>
        <div className="h-screen w-full"></div>
      </div>
      <div className="Carousel">
        <section className="slider">
          {slides.map((img, indx) => {
            return (
              <div
                className={`slide ${indx === current ? "active " : ""}${
                  (indx < current && `prevImg${current - indx}`) ||
                  (indx > current && `nextImg${indx - current}`) ||
                  (indx === current && "currentImg")
                }`}
                key={indx}
              >
                <img src={img.image} alt="travel" className={`Img`} />
                <div className="text-[30px] text-center font-codec mt-8 mb-2">
                  {img.title}
                </div>
                {current === 0 && (
                  <motion.div
                    initial={{ y: 200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -200, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className={
                      current === indx
                        ? "text-center font-codec w-2/3 mx-auto"
                        : "text-center font-codec w-2/3 mx-auto hidden"
                    }
                  >
                    {img.description}
                  </motion.div>
                )}
                {current === 1 && (
                  <motion.div
                    initial={{ y: 200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -200, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className={
                      current === indx
                        ? "text-center font-codec w-1/2 mx-auto"
                        : "text-center font-codec w-1/2 mx-auto hidden"
                    }
                  >
                    {img.description}
                  </motion.div>
                )}
                {current === 2 && (
                  <motion.div
                    initial={{ y: 200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -200, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className={
                      current === indx
                        ? "text-center font-codec w-1/2 mx-auto"
                        : "text-center font-codec w-1/2 mx-auto hidden"
                    }
                  >
                    {img.description}
                  </motion.div>
                )}
                {current === 3 && (
                  <motion.div
                    initial={{ y: 200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -200, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className={
                      current === indx
                        ? "text-center font-codec w-1/2 mx-auto text-sm"
                        : "text-center font-codec w-1/2 mx-auto hidden"
                    }
                  >
                    {img.description}
                  </motion.div>
                )}
              </div>
            );
          })}
          
        </section>
      </div>

      
    </div>
  );
}

export default HowToInvest;
