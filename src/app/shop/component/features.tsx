import React from 'react';

const Features: React.FC = () => {
  return (
    <div className="bg-[#f9f5f3] py-10 w-[1440px] h-[280px] pl-40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div className=" w-[376px] h-[108px] mt-8">
          <h1 className="text-[30px] font-medium w-[205px] h-[48px]">Free Delivery</h1>
          <p className="text-gray-500 mt-2 w-[376px] h-[60px] text-[20px] font-normal">
            For all orders over $50, consectetur adipiscing elit.
          </p>
        </div>
        <div className=" w-[376px] h-[108px] mt-8">
          <h1 className="text-[30px] font-medium w-[244px] h-[48px]">90 Days Return</h1>
          <p className="text-gray-500 mt-2 w-[376px] h-[60px] text-[20px] font-normal">
            If goods have problems, consectetur adipiscing elit.
          </p>
        </div>
        <div className=" w-[376px] h-[108px] mt-8">
          <h1 className="text-[30px] font-medium w-[265px] h-[48px]">Secure Payment</h1>
          <p className="text-gray-500 mt-2 w-[376px] h-[60px] text-[20px] font-normal">
            100% secure payment, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
