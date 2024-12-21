import React from "react";
import { User} from 'lucide-react';
import {Heart } from 'lucide-react';
import {ShoppingCart } from 'lucide-react';
import {Search } from 'lucide-react';
import Link from "next/link";

const Nav: React.FC = () => {
  return (
    <header  className="flex justify-between items-center px-6 pl-64  py-4 w-[1440px] h-[100px] bg-[#FFFFFF] ">
    <section className="flex justify-end items-center gap-14 pl-96 font-medium text-[16px] ">

     {/* NAVBAR code */}
     
        <a href="/" className="hover:text-gray-600">
          Home
        </a>
        <a href="/shop" className="hover:text-gray-600">
          Shop
        </a>
        <a href="/blog" className="hover:text-gray-600">
          About
        </a>
        <a href="/contact" className="hover:text-gray-600">
          Contact
        </a>
        </section>

      {/* Navbar icons code */}

      <div className="flex gap-7 mr-12 pl-7  w-[247px] h-[28px] space-x-[6px]">
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
    </header>
  );
};

export default Nav;
