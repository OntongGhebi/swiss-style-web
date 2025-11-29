import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] pt-5 text-center">
      <div className="text-[20vh] flex justify-center items-center uppercase leading-[18.5vh]">
        L'étincelle
      </div>
      <div className="text-[20vh] flex justify-center items-start uppercase leading-[18.5vh]">
        qui
        <div className="h-[16vh] w-[35vh] rounded-full overflow-hidden ">
          <Video />
        </div>
        génère
      </div>
      <div className="text-[20vh] flex justify-center items-center uppercase leading-[18.5vh]">
        la créativité
      </div>
    </div>
  );
};

export default HomeHeroText;
