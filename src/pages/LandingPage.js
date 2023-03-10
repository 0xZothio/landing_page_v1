import React, { useEffect, useState } from "react";
import About from "../components/About";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Hero from "../components/HeroSection";
import NewsLetter from "../components/newsletter";
import Footer from "../components/Footer";
import Assets from "../components/Assets";
import HowToInvest from "../components/HowToInvest";
import Welcome from "../components/Welcome";
import "../styles/styles.css";
import Institutions from "../components/Institutions";
import Carousel from "../components/Carousel";
import MobileScroll from "../components/MobileScroll/index";
import { FaInstagramSquare, FaLinkedin, FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { AssetsCard, ExpOfferingsCard } from "../components/ExpOfferingsCard";

function LandingPage() {
  const [isLoading, setIsLoading] = useState(true);
  // const [current, setCurrent] = useState(0);
  // const [scrollvalue, setScrollValue] = useState(0);
  // const [initialScrollvalue, setInitialScrollValue] = useState(0);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3500);
  // }, []);

  // const windowheight = 1 * window.innerHeight;
  // console.log(window.innerHeight, "window.innerHeight");
  // useEffect(() => {
  //   const element = document.documentElement;
  //   // const element = document.querySelector("#section-3");
  //   const handleScroll = () => {
  //     console.log("windowscrollToTop", element.scrollTop);
  //     setScrollValue(element.scrollTop);

  //     if (scrollvalue < windowheight) {
  //       setCurrent(0);
  //     } else if (scrollvalue < 6 * windowheight) {
  //       setCurrent(1);
  //     } else if (scrollvalue < 7 * windowheight) {
  //       setCurrent(2);
  //     } else if (scrollvalue < 13 * windowheight) {
  //       setCurrent(3);
  //     } else if (scrollvalue < 18 * windowheight) {
  //       setCurrent(4);
  //     } else {
  //       setCurrent(5);
  //     }
  //     // else if (scrollvalue < 21 * windowheight) {
  //     //   setCurrent(6);
  //     // } else if (scrollvalue < 22 * windowheight) {
  //     //   setCurrent(7);
  //     // } else {
  //     //   setCurrent(8);
  //     // }
  //     // else if (scrollvalue > 1000) {
  //     //   setCurrent(2);
  //     // } else if (scrollvalue > 500) {
  //     //   setCurrent(1);
  //     // } else {
  //     //   setCurrent(0);
  //     // }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   handleScroll();

  //   // return () => element.removeEventListener("scroll", handleScroll);
  // }, [scrollvalue]);
  // window.addEventListener('scroll', (event) => {
  //     let scrollTop = event.srcElement.body.scrollTop,
  //         itemTranslate = Math.min(0, scrollTop/3 - 60);

  //     style.transform = 'translateY(' + itemTranslate + 'px)');
  //   });
  return (
    <div className="bg-black relative h-full">
      {/* {isLoading ? <div id="loading"></div> : null} */}

      {/* <div> */}
      <div className="hidden sm:block fixed z-50 bottom-20 right-10 icon-bar  bg-gray-900 rounded-3xl text-black">
        <ul className="flex gap-6 my-2 py-2 mx-auto lg:mx-0 justify-center items-center lg:justify-start px-8">
          <li>
            <a
              href="https://twitter.com/zothdotio"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75 rounded-full"
            >
              <span className="sr-only">Twitter</span>
              <AiFillTwitterCircle size={30} className="icon" color="white" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/zothio"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75 rounded-full"
            >
              <span className="sr-only">Instagram</span>
              <FaInstagramSquare size={30} className="icon" color="white" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/zoth-io/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75 rounded-full"
            >
              <span className="sr-only">LinkeldIn</span>
              <FaLinkedin size={30} className="icon" color="white" />
            </a>
          </li>
          <li>
            <a
              href="https://t.me/+nFUrC_I1hA1iNWU9"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75"
            >
              <span className="sr-only">Telegram</span>
              <FaTelegramPlane size={30} className="icon" color="white" />
            </a>
          </li>
          {/* <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75 rounded-full"
                >
                  <span className="sr-only">Facebook</span>
                  <FaFacebook size={20} color="white" />
                </a>
              </li> */}
        </ul>
      </div>
      <div>
        <Hero />
        <ExpOfferingsCard/>
        <Welcome />
        <Assets />
        <MobileScroll />
        <Features />
        <About />
        <Carousel />
        <Testimonials />
        <NewsLetter />
        <Footer />
      </div>
      {/* </div> */}
      {/* {scrollvalue > 20 * windowheight && (
        <>
          <About />
          <Testimonials />
          <NewsLetter />
          <Footer />
        </>
      )} */}
      {/* <div className="snap-current">
        <Hero isHidden={current !== 0} />
      </div> */}

      {/* Assets */}
      {/* <div className="snap-current"> */}
      {/* {current === 5 && (
        <>
          <About />
          <Testimonials />
          <NewsLetter />
          <Footer />
        </>
      )} */}

      {/* <div className="hidden sm:block">
        <div className="h-screen w-screen"></div>
        <div className="h-screen w-screen"></div>
        <div className="h-screen w-screen"></div>
        <div className="h-screen w-screen"></div>
        <div className="h-screen w-screen"></div>
        <div className="h-screen w-screen"></div>
        <div className="h-screen w-screen"></div>
        <div className="h-screen w-screen"></div>
        <div className="h-screen w-screen"></div>
        <div className="h-screen w-screen"></div>
        <div className="h-screen w-screen"></div>
        <div className="h-screen w-screen"></div>
        <div className="h-screen w-screen"></div>
        <div className="h-screen w-screen"></div>
        <div className="h-screen w-screen"></div>
        <div className="h-screen w-screen"></div>
        <div className="h-screen w-screen"></div>
        <div className="h-screen w-screen"></div>
        <div className="h-screen w-screen"></div>
        
        
      </div>
      {<div className="hidden sm:block">
        <About />
        <Institutions />
        <Testimonials />
        <NewsLetter />
        <Footer />
      </div>} */}
      {/* <Assets isHidden={true} />
      <Assets isHidden={true} />
      <Assets isHidden={true} />
      <Assets isHidden={true} />
      <Assets isHidden={true} />
      <Assets isHidden={true} />
      <Assets isHidden={true} />
      <Assets isHidden={true} />
      <Assets isHidden={true} />
      <Assets isHidden={true} />
      <Assets isHidden={true} />
      <Assets isHidden={true} />
      <Assets isHidden={true} />
      <Assets isHidden={true} />
      <Assets isHidden={true} />
      <Assets isHidden={true} />
      <Assets isHidden={true} />
      <Assets isHidden={true} />
      <Assets isHidden={true} />
      <Assets isHidden={true} />
      <Assets isHidden={true} />
      <Assets isHidden={true} />
      <Assets isHidden={true} />
      <Assets isHidden={true} />
      <Assets isHidden={true} />
      <Assets isHidden={true} />
      <Assets isHidden={true} />
      <Assets isHidden={true} />
      <Assets isHidden={true} />
      <Assets isHidden={true} />
      <Assets isHidden={true} />
      <Assets isHidden={true} />
      <Assets isHidden={true} />
      <Assets isHidden={true} />


      
      
      
      {/* </div> */}

      {/* <Temp/> */}
      {/* Features */}
      {/* <Features isHidden={true} /> */}

      {/* <HowToInvest /> */}

      {/* About Us */}
      {/* <About /> */}

      {/* institutions */}
      {/* <Institutions/> */}

      {/* Testimonials */}
      {/* <Testimonials /> */}

      {/* News letter */}
      {/* <NewsLetter /> */}

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
}

export default LandingPage;
