import { useLayoutEffect, useState } from "react";

export default function AbsolouteDiv() {
  useLayoutEffect(() => {
    const handleScroll = () => {
      const scrolltop = document.getElementById("section-1");
      console.log("scrollToTop", scrolltop.scrollTop);
      const viewportHeight = window.innerHeight;

      // if (scrolltop - 2200 > 1000) {
      //   setNum(2);
      // } else if (scrolltop - 2200 > 500) {
      //   setNum(1);
      // } else {
      //   setNum(0);
      // }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="absolute bg-white w-full h-screen overflow-y-scroll z-10"
      id="section-1"
    >
      <div className="h-screen w-full"></div>
      <div className="h-screen w-full"></div>
      <div className="h-screen w-full"></div>
    </div>
  );
}
