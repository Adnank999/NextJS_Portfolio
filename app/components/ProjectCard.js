import React from "react";

const ProjectCard = ({ card }) => {
  return (
    

    <div
      key={card.id}
      className="group relative  overflow-hidden border border-cyan-500/50 rounded-md transition-shadow shadow-2xl shadow-cyan-500/50 hover:shadow-xl hover:shadow-purple-600 xs:h-[250px] xs:w-[450px] sm:h-[300px] sm:w-[600px] md:h-[350px] md:w-[850px]  lg:h-[450px] lg:w-[900px]"
    >
      <div className="absolute inset-0 z-0 duration-300 group-hover:scale-110 transition-transform ">
        <div
          style={{
            backgroundImage: `url(${card.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        ></div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>

        <div className="absolute inset-0 flex translate-y-[90%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="xs:text-sm md: text-lg font-serif lg:text-3xl font-bold text-white">
            {card.title}
          </h1>
          <p className="mb-3 xs:text-sm md:text-base lg:text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {card.para}
          </p>
          <button className="rounded-full bg-neutral-900 py-2 px-3.5 xs:text-xs md:text-sm capitalize text-white shadow shadow-black/60">
            {card.buttonName}
          </button>
        </div>

        
      </div>
    </div>
  );
};

export default ProjectCard;
