import React, { useEffect, useState } from "react";
import About from "../components/About";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Hero from "../components/HeroSection";
import NewsLetter from "../components/newsletter";
import Footer from "../components/Footer";
import Assets from "../components/Assets";
import HowToInvest from "../components/HowToInvest";

function LandingPage() {
  const [isLoading,setIsLoading]=useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    },4000)
  })
  return (
    <>
    {isLoading?<div id="loading"></div>:null}
      {/* Hero */}
      <Hero />

      <HowToInvest />
      {/* Assets */}
      <Assets />

      {/* <Temp/> */}
      {/* Features */}
      <Features />

      {/* About Us */}
      <About />

      {/* Testimonials */}
      <Testimonials />

      {/* News letter */}
      <NewsLetter />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default LandingPage;
