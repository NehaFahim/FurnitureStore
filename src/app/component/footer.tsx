import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 w-full h-auto mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full h-auto">
          {/* Address Section */}
          <div className="text-gray-600 w-full h-auto mt-8 sm:mt-14">
            <p>400 University Drive Suite 200 Coral Gables,</p>
            <p>FL 33134 USA</p>
          </div>

          {/* Links Section */}
          <div className="sm:pl-10 md:pl-16 lg:pl-20">
            <h3 className="text-[#9F9F9F] font-semibold mb-6 md:mb-10">Links</h3>
            <ul className="space-y-4 md:space-y-6 lg:space-y-10">
              <li>
                <Link href="/" className="text-black font-medium hover:text-gray-500">
                  Home
                </Link>
              </li>
              <li>
                <a href="/shop" className="text-black font-medium hover:text-gray-500">
                  Shop
                </a>
              </li>
              <li>
                <a href="/about" className="text-black font-medium hover:text-gray-500">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-black font-medium hover:text-gray-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="sm:pl-10 md:pl-12 lg:pl-16">
            <h3 className="text-[#9F9F9F] font-semibold mb-6 md:mb-10">Help</h3>
            <ul className="space-y-4 md:space-y-6 lg:space-y-10">
              <li>
                <a href="/checkout" className="text-black font-medium hover:text-gray-500">
                  Payment Options
                </a>
              </li>
              <li>
                <a href="/returns" className="text-black font-medium hover:text-gray-500">
                  Returns
                </a>
              </li>
              <li>
                <a href="/privacy-policies" className="text-black font-medium hover:text-gray-500">
                  Privacy Policies
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="sm:pl-6 md:pl-8 lg:pl-12">
            <h3 className="text-[#9F9F9F] font-semibold mb-6 md:mb-10">Newsletter</h3>
            <form className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-2">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="border-b border-gray-400 bg-transparent focus:outline-none px-2 py-1 w-full sm:w-auto"
              />
              <button
                type="submit"
                className="underline underline-offset-2 text-black font-medium hover:text-red-500"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="w-full h-auto mt-14">
          <hr className="border-gray-300" />
          <div className="text-center text-gray-600 text-sm py-4">
            © 2022 Meubel House. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
