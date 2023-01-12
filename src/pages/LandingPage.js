import React from "react";
import About from "../components/About";
import Hero from "../components/HeroSection";
function LandingPage() {
  return (
    <div>
      {/* <h1 className="text-3xl font-bold underline">Zoth Landing Page</h1> */}
      <Hero />
      <About/>
      </div>

  );
}

export default LandingPage;
