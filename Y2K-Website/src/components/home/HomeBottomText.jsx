import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-2">
      <p className="absolute lg:w-75 w-68 lg:right-5 right-1 lg:bottom-32 bottom-20 font-[font1] text-[13px] leading-[2.5vh]">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        K72 est une agence qui pense chaque action pour nourrir la marque.
        Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée
        l’étincelle pour générer de l’émotion. Pour assurer une relation
        honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui
        doit être fait.
      </p>
      <div className="leading-[9vh] lg:h-21 h-7 lg:mt-20 mt-48 flex items-center uppercase border-3 border-white hover:border-[#D3FD50] hover:text-[#D3FD50] rounded-full lg:px-6 px-4">
        <Link
          className="lg:text-[12vh] text-[3.5vh] lg:mt-3 mt-1.5"
          to="/projects"
        >
          Projects
        </Link>
      </div>
      <div className="leading-[9vh] lg:h-21 h-7 lg:mt-20 mt-48 flex items-center uppercase border-3 border-white hover:border-[#D3FD50] hover:text-[#D3FD50] rounded-full lg:px-6 px-4">
        <Link
          className="lg:text-[12vh] text-[3.5vh] lg:mt-3 mt-1.5"
          to="/agence"
        >
          Agence
        </Link>
      </div>
    </div>
  );
};

export default HomeBottomText;
