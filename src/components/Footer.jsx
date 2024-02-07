import React from "react";
import DragonWithScatboad from "../assets/images/webp/dinoWithScatBoard.webp";
import FooterBg from "../assets/images/webp/FooterBg.webp";
import { DiscordIcon1, InstaIcon1, TwitterIcon1 } from "./icon";

const Footer = () => {
  return (
    <>
      <div className="relative xl:pt-[249px] sm:pt-[100px] pt-[40px] bg-[#0A4740] mt-[-2px]">
        <img
          src={FooterBg}
          alt="FooterBg"
          className="absolute bottom-0 w-full lg:h-[341px]"
        />
        <img
          src={DragonWithScatboad}
          alt="DragonWithScatboad"
          className="absolute w-full sm:max-w-[190px] max-w-[100px] right-[6%] bottom-[10px] walking-img z-[1]"
        />
        <div className="relative z-[1] container xl:max-w-[1038px] mx-auto xl:px-3 px-6">
          <div className="flex flex-col justify-center items-center sm:pb-[270px] pb-[175px]">
            <a href="#">
              <h2 className="text-[#FBA11D] cursor-pointer drop-shadow-[0px_2.745px_0px_#000] leading-[95%] sm:text-[80.366px] text-[60px] font-normal text-center lg:mb-[33px] sm:mb-[20px] mb-[5px] ff_lucky">
                D<span className="text-[#23AAAC]">i</span>
                <span className="text-[#D45B07]">n</span>
                <span className="text-[#8EC627]">o</span>
                <span className="text-[#FCCA2B]">L</span>
                <span className="text-[#8F78D2]">F</span>
                <span className="text-[#8EC627]">G</span>
              </h2>
            </a>
            <p className="text-white text-center lg:max-w-[376px] sm:pb-[33px] pb-[18px] text-[14px] font-normal ff_Balsamiq">
              Sed tempus pretium est, vestibulum dapibus mauris viverra id.
              Curabitur feugiat porta lorem,{" "}
            </p>
            <div className="flex gap-2">
              <a  href="https://www.twitter.com" target="_blank">
                <TwitterIcon1 />
              </a>
              <a  href="https://www.discord.com" target="_blank">
                <DiscordIcon1 />
              </a>
              <a  href="https://www.instagram.com" target="_blank">
                <InstaIcon1 />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
