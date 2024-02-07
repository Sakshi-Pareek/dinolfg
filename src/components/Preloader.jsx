import React from "react";
import DinoWithScatBord from '../assets/images/webp/AboutDragon.webp'

const Preloader = () => {
  return (
    <>
      <div className="bg-[#0A4740] min-h-screen fixed flex flex-col justify-center items-center left-0 right-0">
        <img src={DinoWithScatBord} alt="DinoWithScatBord" className="md:max-w-[90px] max-w-[60px] vertical_motion w-full mx-auto"/>
        <h1 className="ff_lucky font-normal cursor-pointer leading-[94%] drop-shadow-[0px_1.337px_0px#000] sm:text-[60px] text-[50px] mx-auto overflow-hidden whitespace-nowrap tracking-[0.15em] mt-[-30px]">
          <span className="text-[#FBA11D]">D</span>
          <span className="text-[#23AAAC]">i</span>
          <span className="text-[#D45B07]">n</span>
          <span className="text-[#8EC627]">o</span>
          <span className="text-[#FCCA2B]">L</span>
          <span className="text-[#8F78D2]">F</span>
          <span className="text-[#8EC627]">G</span>
        </h1>
      </div>
    </>
  );
};

export default Preloader;
