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
      <Backedby />
      <Footer />
    </div>
  );
}

export default LandingPage;
