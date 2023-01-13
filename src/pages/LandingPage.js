import React from "react";
import About from "../components/About";
import Hero from "../components/HeroSection";
import Backers from "../components/Backers";
import Footer from "../components/Footer";
import Backedby from "../components/Backedby";
import NewsLetter from "../components/newsletter";
function LandingPage() {
  return (
    <div>
      <Hero />
      <About />
      <Backers />
      <Backedby />
      <NewsLetter/>
      <Footer />
    </div>
  );
}

export default LandingPage;
