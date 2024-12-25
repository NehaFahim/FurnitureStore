import React from "react";
// import { FaChevronRight } from "react-icons/fa6";
import { ChevronRight } from 'lucide-react';
import Image from "next/image";

const Shoppage = () => {
  return (
    <section
      className="flex flex-col items-center justify-center py-16 bg-cover bg-center w-[1440px] h-[316px]"
      style={{
        backgroundImage: "url('/shopback.png')", 
      }}
    >
         <div>
        <Image
          src="/Meubel House_Logos-05.png" 
          alt="Sofa"
          width={100}
          height={100}
          className="w-[77px] h-[77px] mt-20 absolute left-1/2  top-20 ml-16 "
        />

      <div>
          
            <h2 className="text-[48px] font-medium text-black w-[285px] h-[72px] absolute top-56 pl-28"> Shop
            </h2>
            <div className="text-black flex items-center space-x-2 pl-28 mt-24">
                  <p className="font-medium text-[16px]">Home</p>
                  <ChevronRight/>
                  <p className="font-normal text-[16px]">Shop</p>
                </div>
      
           
            </div>
            </div>
    </section>
  );
};

export default Shoppage;

