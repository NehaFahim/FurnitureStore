import React from "react";

const InstagramSection = () => {
  return (
    <section
      className="flex flex-col items-center justify-center py-28 bg-cover bg-center w-full h-auto px-4"
      style={{
        backgroundImage: "url('/Rectangle 17.png')",
      }}
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mt-2 text-center">
        Our Instagram
      </h2>

      <p className="text-black font-normal text-lg md:text-xl mt-4 text-center">
        Follow our store on Instagram
      </p>

      <button className="px-8 md:px-16 py-3 mt-8 bg-[#FAF4F4] text-black font-medium rounded-full shadow-md hover:shadow-xl transition-shadow">
        Follow Us
      </button>
    </section>
  );
};

export default InstagramSection;
