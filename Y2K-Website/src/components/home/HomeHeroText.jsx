import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] lg:mt-0 mt-70 pt-5 text-center">
      <div className="lg:text-[20vh] text-[7vh] flex justify-center items-center uppercase lg:leading-[18.5vh] leading-[7vh]">
        L'étincelle
      </div>
      <div className="lg:text-[20vh] text-[7vh] flex justify-center items-start uppercase lg:leading-[18.5vh] leading-[7vh]">
        qui
        <div className="lg:h-[16vh] h-[7vh] lg:w-[35vh] w-[15vh] rounded-full overflow-hidden ">
          <Video />
        </div>
        génère
      </div>
      <div className="lg:text-[20vh] text-[7vh] flex justify-center items-center uppercase lg:leading-[18.5vh] leading-[7vh]">
        la créativité
      </div>
    </div>
  );
};

export default HomeHeroText;
