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

function LandingPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [current, setCurrent] = useState(0);
  const [scrollvalue, setScrollValue] = useState(0);
  // const [initialScrollvalue, setInitialScrollValue] = useState(0);
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    },3500)
  }, [])
  
  const windowheight = 2*window.innerHeight;
  // console.log(window.innerHeight, "window.innerHeight");
  useEffect(() => {
    const element = document.documentElement;
    // const element = document.querySelector("#section-3");
    const handleScroll = () => {
      console.log("windowscrollToTop", element.scrollTop);
      setScrollValue(element.scrollTop);

      
      if (scrollvalue < windowheight) {
        setCurrent(0);
      } else if (scrollvalue < 6 * windowheight) {
        setCurrent(1);
      } else if (scrollvalue < 13 * windowheight) {
        setCurrent(2);
      } else if (scrollvalue < 18 * windowheight) {
        setCurrent(3);
      } else if (scrollvalue < 19 * windowheight) {
        setCurrent(4);
      } else if (scrollvalue < 20 * windowheight) {
        setCurrent(5);
      } else if (scrollvalue < 21 * windowheight) {
        setCurrent(6);
      } else if (scrollvalue < 22 * windowheight) {
        setCurrent(7);
      } else {
        setCurrent(8);
      }
        // else if (scrollvalue > 1000) {
        //   setCurrent(2);
        // } else if (scrollvalue > 500) {
        //   setCurrent(1);
        // } else {
        //   setCurrent(0);
        // }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    // return () => element.removeEventListener("scroll", handleScroll);
  }, [scrollvalue]);
  // window.addEventListener('scroll', (event) => {
  //     let scrollTop = event.srcElement.body.scrollTop,
  //         itemTranslate = Math.min(0, scrollTop/3 - 60);

  //     style.transform = 'translateY(' + itemTranslate + 'px)');
  //   });
  return (
    <div className="z-10 bg-black">
      {isLoading ? <div id="loading"></div> : null}
      <div className="fixed bg-black w-full h-screen z-100 left-0">
        {current === 0 && <Hero isHidden={false} />}
        {current === 1 && <Assets isHidden={false} />}
        {current === 2 && <Welcome />}
        {current === 3 && <Features />}
        {current === 4 && <HowToInvest />}
        {current === 5 && <About />}
        {current === 6 && <Testimonials />}
        {current === 7 && <NewsLetter />}
        {current === 8 && <Footer />}
      </div>
      {/* <div className="snap-current">
        <Hero isHidden={current !== 0} />
      </div> */}

      {/* Assets */}
      {/* <div className="snap-current"> */}
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
