import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font1] flex items-center justify-center gap-6">
      <Link className="text-[9vh] leading-[9vh] uppercase border-5 border-white rounded-full px-8 pt-3">
        Projects
      </Link>
      <Link className="text-[9vh] leading-[9vh] uppercase border-5 border-white rounded-full px-8 pt-3">
        Agence
      </Link>
    </div>
  );
};

export default HomeBottomText;
