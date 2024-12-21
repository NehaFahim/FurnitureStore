"use client";
import React, { useState } from "react";

const Billing: React.FC = () => {
  
  const [paymentMethod, setPaymentMethod] = useState<string>("direct-bank");

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start p-9 lg:p-20 bg-gray-50 w-[1440px] h-[1829px] ">
      {/* Billing Details */}
      <div className="lg:w-2/3 mb-8 lg:mb-0 w-[608px] h-[1714px] pl-20">
        <h2 className="text-[36px] font-bold mb-6 w-[245px] h-[54px]">Billing details</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <label className="block mb-2 text-[16px] font-medium w-[87px] h-[24px]">First Name</label>
            <input
              type="text"
              placeholder=""
              className="w-[211px] h-[75px] border border-[#9F9F9F] rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          {/* Last Name */}
          <div className="-ml-36">
            <label className="block mb-2 text-[16px] font-medium w-[86px] h-[24px]">Last Name</label>
            <input
              type="text"
              placeholder=""
              className="w-[211px] h-[75px] border border-[#9F9F9F] rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          {/* Company Name */}
          <div className="md:col-span-2">
            <label className="block mb-2 text-[16px] font-medium w-[233px] h-[24px]">
              Company Name (Optional)
            </label>
            <input
              type="text"
              placeholder=""
              className="w-[453px] h-[75px] border border-[#9F9F9F] rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          {/* Country */}
          <div className="md:col-span-2">
            <label className="block mb-2 text-[16px] font-medium w-[137px] h-[24px]">Country / Region</label>
            <select
              className="w-[453px] h-[75px] border border-[#9F9F9F] text-[#9F9F9F] text-[16px] font-normal rounded-xl p-2 pl-7 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              defaultValue="Sri Lanka"
            >
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Pakistan">Pakistan</option>
              <option value="India">India</option>
            </select>
          </div>
          {/* Street Address */}
          <div className="md:col-span-2">
            <label className="block mb-2 text-[16px] font-medium w-[118px] h-[24px]">Street address</label>
            <input
              type="text"
              placeholder=""
              className="w-[453px] h-[75px] border border-[#9F9F9F] rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          {/* Town / City */}
          <div>
            <label className="block mb-2 text-[16px] font-medium w-[92px] h-[24px]">Town / City</label>
            <input
              type="text"
              placeholder=""
              className="w-[453px] h-[75px] border border-[#9F9F9F] rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          {/* Province */}
          <div className="grid col-span-2">
            
            <label className="block mb-2 text-[16px] font-medium w-[70px] h-[24px]">Province</label>
            <select className="w-[453px] h-[75px] border border-[#9F9F9F] text-[#9F9F9F] text-[16px] font-normal rounded-xl p-2 pl-7 focus:outline-none focus:ring-2 focus:ring-yellow-400">
              <option>Western Province</option>
              <option>Eastern Province</option>
            </select>
          </div>
          {/* ZIP Code */}
          <div>
            <label className="block mb-2 text-[16px] font-medium w-[68px] h-[24px]">ZIP code</label>
            <input
              type="text"
              placeholder=""
              className="w-[453px] h-[75px] border border-[#9F9F9F] rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          {/* Phone */}
          <div className="grid col-span-2">
            <label className="block mb-2 text-[16px] font-medium w-[51px] h-[24px]">Phone</label>
            <input
              type="text"
              placeholder=""
              className="w-[453px] h-[75px] border border-[#9F9F9F] rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          {/* Email */}
          <div className="md:col-span-2">
            <label className="block mb-2 text-[16px] font-medium w-[115px] h-[24px]">Email address</label>
            <input
              type="email"
              placeholder=""
              className="w-[453px] h-[75px] border border-[#9F9F9F] rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          {/* Additional Information */}
          <div className="md:col-span-2">
            <textarea
              rows={4}
              placeholder="Additional Information"
              className="w-[453px] h-[75px] border border-[#9F9F9F] rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
        </form>
      </div>

      {/* Order Summary */}
      <div className="lg:w-1/3 w-[608px] h-[789px]">
        <h3 className=" mb-4 w-[94px] h-[36px] font-medium text-[24px]">Product</h3>
        <h3 className=" absolute top-2/3 mt-20 w-[103px] h-[36px] font-medium text-[24px] ml-80 pl-4 ">Subtotal</h3>
        <div className="flex justify-between mb-2  font-normal text-[16px] text-[#9F9F9F]">
          <span>Asgaard sofa x 1</span>
          <span className="font-light text-black">Rs. 250,000.00</span>
        </div>
        <div className="flex justify-between my-4 text-black font-normal text-[16px]">
          <span>Subtotal</span>
          <span className="font-light text-black">Rs. 250,000.00</span>
        </div>
        
        <div className="flex justify-between mb-4 text-black font-normal text-[16px]">
          <span>Total</span>
          <span className="font-bold text-[24px] text-[#B88E2F] ">Rs. 250,000.00</span>
        </div>
        <hr />
         <br />
        {/* Payment Options */}
        <div className="mb-9">
          <h4 className="font-medium text-[16px] mb-4 ">Direct Bank Transfer</h4>
          <p className="font-light text-[16px] text-[#9F9F9F] mb-8">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
          <div className="space-y-2 mb-8">
            <label className="flex items-center font-medium text-[16px] text-[#9F9F9F]">
              <input
                type="radio"
                name="payment"
                value="direct-bank"
                checked={paymentMethod === "direct-bank"}
                onChange={() => setPaymentMethod("direct-bank")}
                className="mr-2 focus:ring-yellow-400"
              />
              Direct Bank Transfer
            </label>
            <label className="flex items-center font-medium text-[16px] text-[#9F9F9F]">
              <input
                type="radio"
                name="payment"
                value="cash-on-delivery"
                checked={paymentMethod === "cash-on-delivery"}
                onChange={() => setPaymentMethod("cash-on-delivery")}
                className="mr-2 focus:ring-yellow-400"
              />
              Cash On Delivery
            </label>
          </div>
          <p className="text-[16px] font-light text-black mt-2 w-[453px] h-[96px]">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <strong className="font-semibold">privacy policy</strong>.
            </p>
        </div>

       
        <button
          type="submit"
          className="w-[318px] h-[64px] bg-[#FFFFFF] text-black border border-black  font-normal text-[20px] ml-20 py-3 rounded-xl hover:bg-yellow-500"
        >
          Place order
        </button>
      </div>
    </div>
  );
};

export default Billing;
