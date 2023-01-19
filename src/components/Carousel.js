//*************Created By Rahul Modi*************
import React, { useState, useEffect, useCallback } from "react";
import asset_trust from "../assets/images/Asset_trust.png";
import premium_asset from "../assets/images/Quality_premium_asset.png";
import tokenisation from "../assets/images/Tokenization.png";
import marketplace from "../assets/images/zoth_marketplace.png";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
// import { slides } from "./AcadCarouselData";
import "../styles/styles.css"
const crouselData = [
  {
    image: asset_trust,
  },
  {
    image: premium_asset,
  },
  {
    image: tokenisation,
  },
  {
    image: marketplace,
  },
];
const Crousel = (props) => {
  let slides = crouselData;
  const length = 4;
  const [current, setCurrent] = useState(0);
  // const [showCaption, setShowCaption] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }, [current, length]);

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

//   useEffect(() => {
//     const length = slides.length;
//     setCurrent(Math.floor(length / 2));
//   }, [slides]);

//   useEffect(() => {
//     const timer = setTimeout(() => nextSlide(), 3000);
//     return () => {
//       clearTimeout(timer);
//     };
//   }, [current, nextSlide]);

  

  // const onHoverHandler = () => {
  //   setShowCaption((prevstate) => {
  //     setShowCaption(!prevstate);
  //   });
  // };

    return (
      <>
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          className="text-[55px] text-center sm:text-[80px] font-codec font-extrabold"
        >
          How To Invest
        </motion.div>
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
                </div>
              );
            })}
          </section>
        </div>
      </>
    );
};

export default Crousel;
