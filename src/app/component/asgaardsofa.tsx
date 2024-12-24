import Link from "next/link";
import React from "react";
import Image from "next/image";

const AsgaardSofa: React.FC = () => {
  return (
    <section className="flex  items-center justify-between bg-[#fff9eb] m-2  pl-40 w-[1440px] h-[672px]">
      {/* Sofa Image Section */}
      <div className="translate -translate-x-24">
        <Image
          src="/Asgaard sofa 1.png" 
          alt="Asgaard Sofa"
          width={800} height={600}
          className="w-[983px] h-[799px] rounded-lg"
        />
      </div>

      {/* Text and Button Section */}
      <div className=" md:text-left mb-24  md:pr-8 w-[331px] h-[108px]">
        <p className=" text-lg font-medium mt-4 w-[149px] h-[36px] flex justify-center items-center pl-10  ">New Arrivals</p>
        <h2 className="text-4xl font-bold mb-12 -translate-x-4 ">Asgaard sofa</h2>

        <button className=" border border-black  text-black rounded-sm font-normal hover:bg-black hover:text-white transition-all w-[180px] h-[45px] ml-2 -translate-x-2 -translate-y-4">
          <Link href={"/singleproduct"}>Order Now</Link> 
        </button>
      </div>
    </section>
  );
};

export default AsgaardSofa;
