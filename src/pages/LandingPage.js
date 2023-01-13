import React from "react";
import About from "../components/About";
import Hero from "../components/HeroSection";
import Backers from "../components/Backers";
import Footer from "../components/Footer";
import Backedby from "../components/Backedby";
function LandingPage() {
  return (
    <div>
      <Hero />
      <About />
      <Backers />
      <Footer />
      <Backedby/>
      </div>
  );
}

export default LandingPage;
