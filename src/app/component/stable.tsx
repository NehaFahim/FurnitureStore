import React from "react";
import Image from "next/image";

const Sidetableandsofa: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-32 bg-[#FAF4F4] w-full h-auto py-20">
      {/* Side Table Section */}
      <div className="flex flex-col items-center text-center w-[350px] lg:w-[550px]">
        <Image
          src="/stable.png"
          alt="Side Table"
          width={450}
          height={450}
          className="w-full h-auto object-contain"
        />
        <div className="mb-14"> {/* Proper spacing added */}
          <h1 className="text-4xl font-medium text-black -mt-28 mr-40">Side table</h1>
          <br />
          <button className="text-lg font-medium text-black underline underline-offset-4 hover:text-gray-700 mr-56">
            View More
          </button>
        </div>
      </div>

      {/* Sofa Section */}
      <div className="flex flex-col items-center text-center w-[350px] lg:w-[600px]">
        <Image
          src="/cloudsofa.png"
          alt="Sofa"
          width={450}
          height={450}
          className="w-full h-auto object-contain"
        />
        <div className="mb-14"> {/* Proper spacing added */}
          <h1 className="text-4xl font-medium text-black -mt-28 mr-40">Side table</h1>
          <br />
          <button className="text-lg font-medium text-black underline underline-offset-4 hover:text-gray-700 mr-56">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidetableandsofa;
