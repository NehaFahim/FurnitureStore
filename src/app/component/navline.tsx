import React from "react";
import {User} from 'lucide-react';
import {Heart} from 'lucide-react';
import {ShoppingCart} from 'lucide-react';
import {Search} from 'lucide-react';
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header  className="flex justify-between items-center    w-[1440px] h-[100px] bg-[#FBEBB5] ">
    <section className="flex justify-end  gap-16  font-medium text-[16px] w-[430px] h-[24px] absolute right-72 ">
        <a href="" className="text-black font-medium text-[16px] mr-4">
          Home
        </a>
        <a href="/shop" className="text-black font-medium text-[16px] mr-4">
          Shop
        </a>
        <a href="/blog" className="text-black font-medium text-[16px] mr-4">
          About
        </a>
        <a href="/contact" className="text-black font-medium text-[16px] mr-14">
          Contact
        </a>

      <div className="flex gap-8 -mr-80   w-[247px] h-[28px] space-x-[6px] ">
      <button className="flex items-center space-x-1 text-sm ">
         <Link href="/account"><User size={20} /></Link>
          </button>

          <button className="flex items-center space-x-1 text-sm">
          <Link href="/"><Search size={20} /></Link>
          </button>
         
          <button className="flex items-center space-x-1 text-sm">
          <Link href=""><Heart size={20} /></Link>
          </button>
          
          <button className="flex items-center space-x-1 text-sm">
          <Link href="/cart"> <ShoppingCart size={20} /></Link>
          </button>

      </div>
      </section>
    </header>
  );
};

export default Header;




