import React from "react";

const HeroSection: React.FC = () => {
  return (
   <div>
    <div  className="flex flex-col items-center justify-center px-6 md:px-20 lg:flex-row lg:justify-between w-[1440px] h-[672px] bg-[#FBEBB5] ">
    
    
      <div className="text-center lg:text-left m-24 space-y-4  w-[440px] h-[276px] ">
        <h1 className="text-5xl font-medium text-black leading-tight mb-24 pl-32  w-[440px] h-[192px] ">
          Rocket single <br /> seater
        </h1>
        <button className="m-28 font-medium w-[121px] h-[49px] text-lg text-black underline  hover:text-gray-800 absolute bottom-36">
          Shop Now
        </button>
      </div>
   
      <div className="mb-10 ">
        <img
          src="/seater.png" 
          alt="Rocket single seater chair"
        />
      </div>
    </div>
    </div>
  );
};

export default HeroSection;
