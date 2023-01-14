import React from "react";
import About from "../components/About";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";

function LandingPage() {
  return (
    <>
      {/* Features */}
      <Features />

      {/* About Us */}
      <About />

      {/* Testimonials */}
      <Testimonials />
    </>
  );
}

export default LandingPage;
