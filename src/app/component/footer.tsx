import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 w-[1440px] h-[555px] pl-20 mt-14 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-[1240.01px] h-[419px]  ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-[1131px] h-[312px] ">
          {/* Address Section */}
          <div className="text-gray-600 w-[285px] h-[72px] mt-28 ">
            <p>400 University Drive Suite 200 Coral Gables,</p>
            <p>FL 33134 USA</p>
          </div>

          {/* Links Section */}
          <div className='pl-20'>
            <h3 className="text-[#9F9F9F] font-semibold mb-14">Links</h3>
            <ul className="space-y-[55px] w-[68px] h-[312px] ">
              <li><a href="/" className="text-black font-medium hover:text-gray-900">Home</a></li>
              <li><a href="/shop" className="text-black font-medium hover:text-gray-900">Shop</a></li>
              <li><a href="/about" className="text-black font-medium hover:text-gray-900">About</a></li>
              <li><a href="/contact" className="text-black font-medium hover:text-gray-900">Contact</a></li>
            </ul>
          </div>

          {/* Help Section */}
          <div className='pl-12'>
            <h3 className="text-[#9F9F9F] font-semibold mb-14">Help</h3>
            <ul className="space-y-[55px] w-[140px] h-[242px]">
              <li><a href="/payment-options" className="text-black font-medium hover:text-gray-900">Payment Options</a></li>
              <li><a href="/returns" className="text-black font-medium hover:text-gray-900">Returns</a></li>
              <li><a href="/privacy-policies" className="text-black font-medium hover:text-gray-900">Privacy Policies</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className='pl-4'>
            <h3 className="text-[#9F9F9F] font-semibold mb-14">Newsletter</h3>
            <form className="  w-[286px] h-[101px] text-[#9F9F9F] ">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="pr-6 underline underline-offset-2 "
              />
              <button
                type="submit"
                className="underline underline-offset-2 text-black font-medium"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
        
        <div className=' w-[1240.01px] h-[59px] mt-20'>
          <hr />
          <br />
         <span className='mt-40 font-normal text-[16px] w-[306px] h-[24px] pl-2'>2022 Meubel House. All rights reserved.</span>
       
        </div>
      </div>
    </footer>
  );
};

export default Footer;
