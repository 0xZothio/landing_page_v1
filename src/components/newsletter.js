import React from "react";
import Mynews from "./mynews";
const NewsLetter = () => {
  return (
    <div className="bg-black">
      <div className="sm:text-center ">
          <Mynews/>
        <p className="text-lg leading-8 min-w-full max-w-none w-atuo">
          <video
            className="w-100 min-h-8 "
            src="https://resources.zoth.in/landingpage/footer_video.mp4"
            autoPlay="{true}"
            loop
            muted
          ></video>
        </p>
      </div>
    </div>
  );
};

export default NewsLetter;
