import React, { useState } from "react";
import FaqTopLayer from "../assets/images/webp/FaqTopLayer.webp";
import { AccordianArrow, AccordianArrowDown } from "./icon";

const Faqs = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  const accordionData = [
    {
      title: "Maecenas laoreet, sapien vel cursus ultricies?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nulla eum iure. Omnis earum dicta nobis laudantium alias non officiis ratione! Expedita dolore illum aliquam recusandae. Consequuntur deleniti ab totam!",
    },
    {
      title: "Maecenas laoreet, sapien vel cursus ultricies?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nulla eum iure. Omnis earum dicta nobis laudantium alias non officiis ratione! Expedita dolore illum aliquam recusandae. Consequuntur deleniti ab totam!",
    },
    {
      title: "Maecenas laoreet, sapien vel cursus ultricies?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nulla eum iure. Omnis earum dicta nobis laudantium alias non officiis ratione! Expedita dolore illum aliquam recusandae. Consequuntur deleniti ab totam!",
    },
    {
      title: "Maecenas laoreet, sapien vel cursus ultricies?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nulla eum iure. Omnis earum dicta nobis laudantium alias non officiis ratione! Expedita dolore illum aliquam recusandae. Consequuntur deleniti ab totam!",
    },
    {
      title: "Maecenas laoreet, sapien vel cursus ultricies?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nulla eum iure. Omnis earum dicta nobis laudantium alias non officiis ratione! Expedita dolore illum aliquam recusandae. Consequuntur deleniti ab totam!",
    },
  ];
  return (
    <>
      <div className="bg-[#0A4740]">
        <div
          className="xl:pt-[290px] lg:pt-[200px] md:pt-[167px] sm:pt-[150px] pt-[110px] mb-[40px] sm:mb-[61px] relative"
          id="Faq"
        >
          <img
            src={FaqTopLayer}
            alt="FaqTopLayer"
            className="absolute -top-1 left-0 right-0 w-full"
          />
          <h4 class="ff_chewy text-[#fff] sm:text-[64px] text-[42px] font-normal leading-[131%] text-center" data-aos="zoom-in">
            FAQs
          </h4>
        </div>
        <div className="container xl:max-w-[1136px] mx-auto lg:px-3 px-5">
          <div className="flex justify-center items-center">
            <div className="max-w-[810px] w-full" data-aos="zoom-in">
              {accordionData.map((item, index) => (
                <div
                  className="bg-[#09655a] border border-white rounded-[40.5px] shadow-[0_8px_25px_0_#00000021] sm:mb-[26px] mb-[17px]"
                  key={index}
                >
                  <div
                    onClick={() => toggleAccordion(index)}
                    className="flex justify-between items-center cursor-pointer sm:pt-[23px] sm:pb-[22px] sm:pl-[28px] sm:pe-[22px] py-4 pe-4 ps-[18px]"
                  >
                    <div className="rounded-[40.5px] ff_Balsamiq text-[#fff] text-[14px] sm:text-[20px] font-bold leading-[116%]">
                      {item.title}
                    </div>
                    <div
                      className={`${
                        openAccordion === index ? "rotate-180" : ""
                      } transition-all duration-500 ease-linear`}
                    >
                      <AccordianArrow />
                    </div>
                  </div>
                  <div
                    className={`max-h-0 overflow-hidden scale-100 transition-all duration-700 ease-in-out ff_Balsamiq sm:text-[16px] text-[14px] text-[#fff] font-normal ${
                      openAccordion === index
                        ? "mt-[-2px] max-h-[300px] pt-0 sm:pb-[22px] sm:pl-[28px] sm:pe-[22px] pb-4 pe-4 ps-[18px] scale-100"
                        : ""
                    }`}
                  >
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
