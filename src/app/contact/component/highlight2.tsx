import React from "react";
import { ChevronRight } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

const Shoppage = () => {
  return (
    <section
      className="flex flex-col items-center justify-center py-20 mt-4 bg-cover bg-center w-full h-auto"
      style={{
        backgroundImage: "url('/shopback.png')",
      }}
    >
      <div className="relative w-full flex flex-col items-center">
        {/* Logo */}
        <Image
          src="/Meubel House_Logos-05.png"
          alt="Sofa"
          width={100}
          height={100}
          className="w-[77px] h-[77px] absolute top-10 md:top-2 left-1/2 transform -translate-x-1/2 -translate-y-8"
        />

        {/* Heading */}
        <h2 className="text-[36px] md:text-[48px] font-medium text-black text-center mt-24 md:mt-14 -translate-y-8">
          Contact
        </h2>

        {/* Breadcrumbs */}
        <div className="text-black flex items-center space-x-2 mt-2 text-[14px] md:text-[16px] -translate-y-8">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          <p className="font-normal">Contact</p>
        </div>
      </div>
    </section>
  );
};

export default Shoppage;
