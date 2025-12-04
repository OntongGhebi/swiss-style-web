import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center lg:gap-2 gap-4">
      <div className="leading-[9vh] lg:h-21 h-14 lg:mt-20 mt-45 flex items-center uppercase border-3 border-white hover:border-[#D3FD50] hover:text-[#D3FD50] rounded-full lg:px-6 px-4">
        <Link
          className="lg:text-[12vh] text-[9vh] lg:mt-3 mt-1.5"
          to="/projects"
        >
          Projects
        </Link>
      </div>
      <div className="leading-[9vh] lg:h-21 h-14 lg:mt-20 mt-45 flex items-center uppercase border-3 border-white hover:border-[#D3FD50] hover:text-[#D3FD50] rounded-full lg:px-6 px-4">
        <Link className="lg:text-[12vh] text-[9vh] lg:mt-3 mt-1.5" to="/agence">
          Agence
        </Link>
      </div>
    </div>
  );
};

export default HomeBottomText;
