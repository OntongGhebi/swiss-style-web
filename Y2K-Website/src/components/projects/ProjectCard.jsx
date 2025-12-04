import React from "react";

const ProjectCard = (props) => {
  return (
    <>
      <div className="w-1/2 group transition-all relative rounded-none hover:rounded-[50px] overflow-hidden h-full">
        <img className="h-full w-full object-cover" src={props.image1} alt="" />
        <div className="opacity-0 transition-all group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/10">
          <h2 className="uppercase text-6xl font-[font2] border-2 border-white pt-4 px-4 text-white rounded-full">
            Voir le Project
          </h2>
        </div>
      </div>
      <div className="w-1/2 group transition-all relative rounded-none hover:rounded-[70px] overflow-hidden h-full">
        <img className="h-full w-full object-cover" src={props.image2} alt="" />
        <div className="opacity-0 transition-all group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/10">
          <h2 className="uppercase text-6xl font-[font2] border-2 border-white pt-4 px-4 text-white rounded-full">
            Voir le Project
          </h2>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
