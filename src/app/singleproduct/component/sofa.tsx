"use client";
import React, { useState } from "react";
import { LockFill, XCircleFill, Facebook, Linkedin, Twitter } from 'react-bootstrap-icons'


const ProductDetail = () => {
  const [showCartBox, setShowCartBox] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () =>
    setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className="flex flex-col lg:flex-row gap-2 p-20 w-[1440px] h-[820px] pl-52">

      <div className="flex flex-col gap-4 w-[1241.01px] h-[730.87px]">
        <div className="flex flex-col gap-6">
          <div className="flex lg:flex-row gap-8 w-[553px] h-[500px]">
            <div className="flex flex-col space-y-6 w-[76px] h-[416px] ">
            
              <img
                src="/Asgaard sofa 1.png"
                alt="Thumbnail 1"
                className="w-[76px] h-[80px] rounded-lg cursor-pointer hover:ring-2 hover:ring-gray-400 bg-[#FFF9E5]"
              />
              <img
                src="/Group 94.png"
                alt="Thumbnail 2"
                className="w-[76px] h-[80px] rounded-lg cursor-pointer hover:ring-2 hover:ring-gray-400 bg-[#FFF9E5]"
              />
              <img
                src="/Mask group (1).png"
                alt="Thumbnail 3"
                className="w-[76px] h-[80px] rounded-lg cursor-pointer hover:ring-2 hover:ring-gray-400 bg-[#FFF9E5]"
              />
              <img
                src="/Mask group (2).png"
                alt="Thumbnail 4"
                className="w-[76px] h-[80px] rounded-lg cursor-pointer hover:ring-2 hover:ring-gray-400 bg-[#FFF9E5]"
              />
            </div>
     
            <div className=" bg-[#FFF9E5] rounded-xl flex items-center justify-center  w-[423px] h-[500px]">
              <img
                src="/Asgaard sofa 1.png"
                alt="Product Image"
                className="w-[481px] h-[391px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>


      <div className="flex flex-col gap-7 w-[606.01px] h-[730.87px] mr-24">
      
        <div>
          <h1 className="text-[42px] font-normal w-[282px] h-[63px]">Asgaard Sofa</h1>
          <p className="text-[24px] text-[#9F9F9F] font-medium mt-2 w-[173px] h-[36px]">Rs. 250,000.00</p>
        </div>


        <div className="flex items-center gap-2 -mt-6 ">
          <div className="flex text-yellow-400 w-[124px] h-[20px]">
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
          </div>
          <span>
                <p className="text-[28px]  font-thin text-[#9F9F9F] w-[30px]">|</p>
            </span>
          <p className="text-[#9F9F9F] font-normal text-[13px]   ">(5 Customer Review)</p>
        </div>

        {/* Description */}
        <p className="text-black font-normal text-[13px] leading-relaxed w-[424px] h-[80px] -mt-3">
          Setting the bar as one of the loudest speakers in its class, the
          Kilburn is a compact, stout-hearted hero with a well-balanced audio
          which boasts a clear midrange and extended highs for a sound.
        </p>

        <div className="flex items-center gap-2 w-[123px] h-[63px]">
          <p className="font-normal text-[14px]  w-[27px] h-[21px] mb-24 text-[#9F9F9F]">Size:</p>
        
          <div className="flex gap-2 border-t-cyan-600 -ml-8">
            
            <button className="px-3 py-1 w-[30px] h-[30px] border rounded-md hover:bg-yellow-200 bg-[#FBEBB5]">
              L
            </button>
            <button className="px-3 py-1  w-[30px] h-[30px] border rounded-md hover:bg-[#FBEBB5] bg-[#FAF4F4]">
              XL
            </button>
            <button className="px-3 py-1  w-[30px] h-[30px] border rounded-md hover:bg-[#FBEBB5] bg-[#FAF4F4]">
              XS
            </button>
          </div>
        </div>

     
        <div className="flex items-center gap-2 -mt-4">
          <p className="font-normal text-[14px] mb-20 text-[#9F9F9F] w-[38px] h-[21px]">Color:</p>
          <div className="flex gap-2 -ml-12">
            <div className=" bg-[#816DFA] rounded-full cursor-pointer hover:ring-2 hover:ring-purple-400 w-[30px] h-[30px] "></div>
            <div className=" bg-[#000000] rounded-full cursor-pointer hover:ring-2 hover:ring-gray-400 w-[30px] h-[30px] "></div>
            <div className=" bg-[#CDBA7B] rounded-full cursor-pointer hover:ring-2 hover:ring-yellow-400 w-[30px] h-[30px] "></div>
          </div>
        </div>

   
        <div className="flex items-center gap-4 ">
          <div className="flex items-center border rounded-xl -mt-10 font-medium texty-[16px] ">
            <button
              onClick={handleDecrement}
              className="px-4 py-4"
            >
              -
            </button>
            <span className="px-4 py-2">{quantity}</span>
            <button
              onClick={handleIncrement}
              className="px-4 py-2 "
            >
              +
            </button>
          </div>
          <button
        className="px-10 py-4 rounded-xl border-[1px] border-black mb-9 ml-2 hover:bg-[#000000] hover:text-white"
        onClick={() => setShowCartBox(!showCartBox)}
      >
        Add To Cart
      </button>

      {/* Cart Box */}
      {showCartBox && (
        <div className="fixed left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%] w-[90%] sm:w-[417px] h-[90%] sm:h-[746px] bg-[#FFFFFF] z-50 rounded-lg shadow-lg p-6">
  {/* Shopping Cart Header */}
  <div className="absolute top-[28px] left-[30%] transform -translate-x-[50%] w-[177px] h-[36px] text-[#000000] bg-[#FFFFFF] flex items-center justify-between p-2">
  <div className="font-[Poppins] font-[600] text-[24px] leading-[36px] whitespace-nowrap">
    <h2 className='mt-24'>Shopping Cart</h2>
    <div className="absolute top-[150%] mt-14 left-[8] w-[287px] border-t-[1px] border-[#D9D9D9]">
    <div className="top-[132px] pt-[30px]  mt-8 pr-4 left-[1050px] w-[108px] h-[105px] ">
  <img src="/Asgaard sofa 1.png" alt="Picture" className=" w-[105px] h-[105px]   bg-[#FBEBB5]" />
</div>
  </div>
  </div>


  <div className="absolute top-[10px] mt-12 left-[160%] sm:left-[160%] md:left-[160%] lg:left-[160%px] w-[16.63px] h-[19px] flex items-center justify-center">
  <LockFill size={16.63} color="#9F9F9F" />
</div>

<button
  className="absolute top-[190px] left-[160%] sm:left-[167%] lg:left-[167%] w-[20px] h-[20px] text-[#9F9F9F] flex items-center justify-center"
  onClick={() => setShowCartBox(false)}
>
  <XCircleFill size={20} />
</button>
    <div className=" w-[130px] h-[56px] text-[#000000] ">
  <p className="font-medium mt-48 -ml-9 text-[16px] ">
    Asgaard sofa
  </p>
  <div className='flex space-x-4 mt-2 -ml-9 font-light text-[16px]'>
  <p className=''>
    1
  </p>
  <p className='font-light text-[16px]'>
    X
  </p>
  <p className='font-medium text-[12px] text-[#B88E2F] mt-1'>
    Rs.250,000.00
  </p>
  </div>
  </div> 
  <p className=''>
    1
  </p>

  <p className=''>
    X
  </p>

  <p className=''>
    Rs.250,000.00
  </p>

<div 
  className="absolute top-[535px] left-[5%] sm:left-[5%] md:left-[5%] lg:left-[5%] w-[131px] h-[31px] text-[#000000] font-[Poppins] font-[400] text-[16px] leading-[24px] flex items-center justify-center "
>
  Subtotal
</div>

<div 
  className="absolute top-[535px] left-[5%] sm:left-[105%] md:left-[105%] lg:left-[105%] w-[131px] h-[31px] text-[#B88E2F] font-[Poppins] font-semibold text-[16px] leading-[24px] flex items-center justify-center "
>
Rs. 250,000.00
</div>
<div 
  className="absolute top-[590px] left-[5%] sm:left-[5%] md:left-0 lg:left-[5%] w-[70%] sm:w-[350px] h-[1px] border-[1px] border-[#D9D9D9]"
></div>

<a 
  href="/cart" 
  className="absolute top-[615px] left-[5%] sm:left-[15%] md:left-[15%] lg:left-[15%] w-[131px] h-[31px] text-[#000000] font-[Poppins] font-normal text-[12px] leading-[18px] flex items-center justify-center border-[1px] border-[#000000] rounded-[50px] hover:bg-yellow-200 hover:font-semibold"
>
  View Cart
</a>

<a 
  href="/checkout" 
  className="absolute top-[615px] left-[5%] sm:left-[105%] md:left-[105%] lg:left-[105%] w-[131px] h-[31px] text-[#000000] font-[Poppins] font-[400] text-[12px] leading-[18px] flex items-center justify-center border-[1px] border-[#000000] rounded-[50px] hover:bg-yellow-200 hover:font-semibold"
>
  Checkout
</a>
</div>
</div>
      )}

        </div>
        <hr />
        <div className="text-gray-600 text-sm space-y-4">
          <p className="font-normal text-[16px] text-[#9F9F9F]">
            <span>SKU</span><span className="px-8">: SS001</span>
          </p>
          <p className="font-normal text-[16px] text-[#9F9F9F]">
            <span>Category</span><span className="px-8">: Sofas</span>
          </p>
          <p className="font-normal text-[16px] text-[#9F9F9F]">
            <span>Tags</span><span className="px-8"> :  Sofa, Chair, Home, Shop</span>
          </p>

        </div>

       
        <div className="flex items-center gap-4">
          <p className="text-gray-600">Share <span className="px-6">:</span></p>
          <div className="flex gap-6 -ml-4  text-lg">
            <a href="#" className="hover:text-gray-800">
              <Facebook/>
            </a>
            <a href="#" className="hover:text-gray-800">
               <Linkedin/>
            </a>
            <a href="#" className="hover:text-gray-800">
               <Twitter/>
            </a>
          </div>
        </div>
      </div>

    </div>
    
  );
};

export default ProductDetail;
