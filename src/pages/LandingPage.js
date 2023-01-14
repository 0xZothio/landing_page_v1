import React from "react";
import About from "../components/About";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Hero from "../components/HeroSection";
import NewsLetter from "../components/newsletter";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <>
      {/* Hero */}
      <Hero />

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
