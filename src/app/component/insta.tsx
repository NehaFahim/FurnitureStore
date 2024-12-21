import React from "react";

const InstagramSection = () => {
  return (
    <section
      className="flex flex-col items-center justify-center py-16 bg-cover bg-center w-[1440px] h-[450px]"
      style={{
        backgroundImage: "url('/Rectangle 17.png')", 
      }}
    >
     
   
      <h2 className="text-6xl font-bold text-black mt-2 pl-28">
        Our Instagram
      </h2>
  
      <p className="text-black font-normal  text-xl mt-4 pl-28 ">
        Follow our store on Instagram
      </p>
     
      <button className="px-16 py-3 absolute mt-52 right-96 mr-20 bg-[#FAF4F4] text-black font-medium rounded-full shadow-md hover:shadow-xl transition-shadow">
        Follow Us
      </button>
     
    </section>
  );
};

export default InstagramSection;

