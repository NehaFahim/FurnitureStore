"use client";
import { useState, useEffect } from "react";
import { User, Heart, ShoppingCart, Search, Menu, X } from "lucide-react";
import Link from "next/link";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(0);

  // Load wishlist from localStorage
  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      const wishlist = JSON.parse(storedWishlist);
      setWishlistCount(wishlist.length);
    } else {
      setWishlistCount(0); // Initialize with 0 if no wishlist in localStorage
    }
  }, []);

  // Listen for wishlist changes
  useEffect(() => {
    const handleStorageChange = () => {
      const updatedWishlist = localStorage.getItem("wishlist");
      if (updatedWishlist) {
        const wishlist = JSON.parse(updatedWishlist);
        setWishlistCount(wishlist.length);
      } else {
        setWishlistCount(0);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-4 relative">
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
          <Link href="/wishlist" className="relative" aria-label="Visit Example">
            <Heart size={24} />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </Link>
          <Link href="/cart"><ShoppingCart size={24} /></Link>
        </div>

        {/* Mobile Menu Button - Now Fixed to Right Side */}
        <button className="md:hidden text-gray-800 ml-auto" onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden flex flex-col items-center space-y-4 bg-[#FBEBB5] font-bold transition-all duration-300 ${menuOpen ? "block" : "hidden"}`}>
        <Link href="/" className="hover:text-gray-600" onClick={toggleMenu}>Home</Link>
        <Link href="/shop" className="hover:text-gray-600" onClick={toggleMenu}>Shop</Link>
        <Link href="/blog" className="hover:text-gray-600" onClick={toggleMenu}>About</Link>
        <Link href="/contact" className="hover:text-gray-600" onClick={toggleMenu}>Contact</Link>

        {/* Mobile Icons */}
        <div className="flex gap-6 mt-2">
          <Link href="/account" aria-label="Visit Example"><User size={24} /></Link>
          <Link href="/search" aria-label="Visit Example"><Search size={24} /></Link>
          <Link href="/wishlist" className="relative" aria-label="Visit Example">
            <Heart size={23} />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </Link>
          <Link href="/cart"><ShoppingCart size={24} /></Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
