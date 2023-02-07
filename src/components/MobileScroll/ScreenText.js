import React, { useRef, useEffect, useState } from "react";

const ScreenText = ({ screen, setCurrentImg, i }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const setItemVisible = (e) => {
    if (e[0]?.isIntersecting) {
      setIsVisible(!isVisible);
      setCurrentImg(i);
    }
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(setItemVisible, options);
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      className={`screen-text_mobilescroll ${
        isVisible ? "text-visible_mobilescroll" : ""
      }`}
      ref={ref}
    >
      <div className="sm:text-5xl text-4xl font-extrabold font-codec mb-4">
        {screen.heading}
      </div>
      <div className="w-1/2 only-mobile">
        <div className="mobile-mockup ">
          <div className="mobile-mockup-screen flex absolute-center">
            <img
              src={screen.mobile_img}
              className="mobile-screen-img slide-in-right "
              key={screen.mobile_img}
            />
          </div>
        </div>
      </div>
      <div className="text-lg leading-loose">{screen.description}</div>
    </div>
  );
};

export default ScreenText;
