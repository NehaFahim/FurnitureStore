import React from "react";
import Image from "next/image";

const AsgaardSofa: React.FC = () => {
  return (
    <section className="flex flex-wrap items-center justify-center bg-[#FFF9EB] px-6 py-12 w-full max-w-screen-2xl mx-auto">
      {/* Sofa Image Section */}
      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 flex justify-center">
        <Image
          src="/Asgaard sofa 1.png"
          alt="Asgaard Sofa"
          width={500} // Fixed smaller width
          height={400} // Fixed smaller height
          className="w-auto h-auto object-contain max-w-full"
        />
      </div>

      {/* Text and Button Section */}
      <div className="w-full lg:w-1/3 text-center lg:text-left px-6 mt-6 lg:mt-0">
        <p className="text-lg font-medium text-gray-950">New Arrivals</p>
        <h2 className="text-4xl font-bold text-black mt-2">Asgaard sofa</h2>

         <button className="mt-8">
        <a href="/singleproduct" className=" mt-6 border border-black text-black px-12 py-3 rounded-sm hover:bg-black hover:text-white ">Order Now</a>
         </button> 
       
      </div>
    </section>
  );
};

export default AsgaardSofa;

