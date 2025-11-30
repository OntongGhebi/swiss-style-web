import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font1] flex items-center justify-center gap-6">
      <div className="leading-[9vh] h-21 flex uppercase border-3 border-white hover:border-[#D3FD50] hover:text-[#D3FD50] rounded-full px-10 ">
        <Link className="text-[12vh] mt-3" to="/projects">
          Projects
        </Link>
      </div>

      <div className="leading-[9vh] h-21 flex uppercase border-3 border-white hover:border-[#D3FD50] hover:text-[#D3FD50] rounded-full px-10 ">
        <Link className="text-[12vh] mt-3" to="/agence">
          Agence
        </Link>
      </div>
    </div>
  );
};

export default HomeBottomText;
