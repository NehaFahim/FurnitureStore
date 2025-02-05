


import React from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <div className="w-full h-auto bg-[#FBEBB5] flex flex-col lg:flex-row-reverse items-center justify-between  py-4 lg:gap-4 lg:pr-20 lg:pl-24 -mt-12">
      {/* Image Section */}
      <div className="w-full h-auto lg:w-screen  flex justify-center">
        <Image
          src="/seater.png"
          alt="Rocket single seater chair"
          width={853} 
          height={1000} 
          className="max-w-full h-auto "
        />
      </div>

      {/* Text Section */}
      <div className="w-full  text-center lg:text-left space-y-8 -mt-12 ">
        <h1 className="text-[50px] font-medium text-black leading-[1.2] max-w-[450px] ml-24">
          Rocket single <br /> seater
        </h1>
        <button className="font-medium text-lg text-black underline hover:text-gray-800 ml-24">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
