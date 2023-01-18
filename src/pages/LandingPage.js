import React from "react";
import About from "../components/About";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Hero from "../components/HeroSection";
import NewsLetter from "../components/newsletter";
import Footer from "../components/Footer";
import Assets from "../components/Assets";
import HowToInvest from "../components/HowToInvest";
import Crousel from "../components/Carousel";
function LandingPage() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* <Crousel/> */}
      <HowToInvest/>
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
