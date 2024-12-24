import React from "react";
import Image from "next/image";

const Sidetableandsofa: React.FC = () => {
  return (
    <div className="flex justify-center items-center gap-16 bg-[#FAF4F4]  w-[1440px] h-[672px]">
      {/* Side Table */}
      <div className="flex flex-col items-center text-center">
        <Image
          src="/stable.png" 
          alt="Side Table"
          width={200}
          height={200}
          className="w-[605px] h-[562px] object-cover"
        />
        <h1 className="mt-96 text-4xl font-medium text-black w-[182px] h-[54px] absolute left-44">Side table</h1>
        <button
          className="mt-96 p-14  text-lg font-medium text-black underline underline-offset-4 absolute left-32  "
        >
          View More
        </button>
      </div>

    
      <div className="flex flex-col items-center text-center">
        <Image
          src="/cloudsofa.png" 
          alt="Sofa"
          width={200}
          height={200}
          className="w-[605px] h-[562px] object-cover"
        />
        <h1 className="mt-96 text-4xl font-medium text-black w-[182px] h-[54px] absolute right-80">Side table</h1>
        <button
          className="mt-96 p-14 text-lg font-medium text-black underline underline-offset-4 absolute right-80 mr-7"
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default Sidetableandsofa;


