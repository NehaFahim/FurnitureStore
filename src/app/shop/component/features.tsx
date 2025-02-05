import React from 'react';

const Features: React.FC = () => {
  return (
    <div className="bg-[#f9f5f3] py-10 w-full h-auto px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="w-full h-auto mt-8 text-center sm:text-left">
          <h1 className="text-[30px] font-medium">Free Delivery</h1>
          <p className="text-gray-500 mt-2 text-[20px] font-normal">
            For all orders over $50, consectetur adipiscing elit.
          </p>
        </div>
        <div className="w-full h-auto mt-8 text-center sm:text-left">
          <h1 className="text-[30px] font-medium">90 Days Return</h1>
          <p className="text-gray-500 mt-2 text-[20px] font-normal">
            If goods have problems, consectetur adipiscing elit.
          </p>
        </div>
        <div className="w-full h-auto mt-8 text-center sm:text-left">
          <h1 className="text-[30px] font-medium">Secure Payment</h1>
          <p className="text-gray-500 mt-2 text-[20px] font-normal">
            100% secure payment, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;

