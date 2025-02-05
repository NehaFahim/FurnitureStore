"use client";

import React, { useState } from "react";
import Link from "next/link";
import { User, Heart, ShoppingCart, Search, Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full bg-[#FBEBB5] shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-4 relative">
        {/* Logo */}
        {/* <h1 className="text-3xl font-extrabold text-[#2C3E50] tracking-wide">
          <span className="text-[#D35400]">Furniture</span> Store
        </h1> */}

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-16 font-medium text-[18px] ml-auto mr-20">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <Link href="/shop" className="hover:text-gray-600">Shop</Link>
          <Link href="/blog" className="hover:text-gray-600">About</Link>
          <Link href="/contact" className="hover:text-gray-600">Contact</Link>
        </nav>

        {/* Desktop Icons */}
        <div className="hidden md:flex gap-12 mr-6 ml-10">
          <Link href="/account" aria-label="Visit Example"><User size={24} /></Link>
          <Link href="/search" aria-label="Visit Example"><Search size={24} /></Link>
          <Link href="/wishlist" aria-label="Visit Example"><Heart size={24} /></Link>
          <Link href="/cart" aria-label="Visit Example"><ShoppingCart size={24} /></Link>
        </div>

        {/* Mobile Menu Button - Now Fixed to Right Side */}
        <button className="md:hidden text-gray-800 ml-auto" onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
          <span className="sr-only">Open Menu</span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden flex flex-col items-center space-y-4 bg-[#FBEBB5] transition-all duration-300 ${menuOpen ? "block" : "hidden"}`}>
        <Link href="/" className="hover:text-gray-600" onClick={toggleMenu}>Home</Link>
        <Link href="/shop" className="hover:text-gray-600" onClick={toggleMenu}>Shop</Link>
        <Link href="/blog" className="hover:text-gray-600" onClick={toggleMenu}>About</Link>
        <Link href="/contact" className="hover:text-gray-600" onClick={toggleMenu}>Contact</Link>

        {/* Mobile Icons */}
        <div className="flex gap-6 mt-2">
          <Link href="/account" aria-label="Visit Example"><User size={24} /></Link>
          <Link href="/search" aria-label="Visit Example"><Search size={24} /></Link>
          <Link href="/wishlist" aria-label="Visit Example"><Heart size={24} /></Link>
          <Link href="/cart" aria-label="Visit Example"><ShoppingCart size={24} /></Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
