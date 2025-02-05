"use client";
import React, { useState } from "react";
import { XCircle } from "lucide-react";
import Image from "next/image";


const ProductDetail = () => {
  const [showCartBox, setShowCartBox] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 lg:p-12 w-full h-auto">
      {/* Left Section */}
      <div className="flex flex-col gap-4 w-full lg:w-1/2">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Thumbnail Images */}
          <div className="flex lg:flex-col space-y-2 lg:space-y-4 w-[76px]">
            {["/Asgaard sofa 1.png", "/Group 94.png", "/Mask group (1).png", "/Mask group (2).png"].map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Thumbnail ${index + 1}`}
                width={76}
                height={80}
                className="w-[76px] h-[80px] rounded-lg cursor-pointer hover:ring-2 hover:ring-gray-400 bg-[#FFF9E5]"
              />
            ))}
          </div>
          {/* Main Image */}
          <div className="bg-[#FFF9E5] rounded-xl flex items-center justify-center w-full h-auto lg:h-[500px]">
            <Image
              src="/Asgaard sofa 1.png"
              alt="Product Image"
              width={423}
              height={500}
              className="w-full lg:w-[481px] h-[391px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col gap-6 w-full lg:w-1/2">
        <div>
          <h1 className="text-2xl lg:text-4xl font-normal">Asgaard Sofa</h1>
          <p className="text-lg lg:text-xl text-[#9F9F9F] font-medium mt-2">Rs. 250,000.00</p>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="flex text-yellow-400 text-lg">⭐⭐⭐⭐⭐</div>
          <p className="text-[#9F9F9F] text-sm">(5 Customer Reviews)</p>
        </div>
        
        <p className="text-black text-sm leading-relaxed">
          Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
        </p>

        {/* Size Selection */}
        <div className="flex items-center gap-2">
          <p className="text-[#9F9F9F]">Size:</p>
          <div className="flex gap-2">
            {["L", "XL", "XS"].map((size) => (
              <button key={size} className="px-3 py-1 w-10 h-10 border rounded-md hover:bg-yellow-200 bg-[#FAF4F4]">
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Color Selection */}
        <div className="flex items-center gap-2">
          <p className="text-[#9F9F9F]">Color:</p>
          <div className="flex gap-2">
            {["#816DFA", "#000000", "#CDBA7B"].map((color) => (
              <div key={color} className={`w-8 h-8 rounded-full cursor-pointer hover:ring-2`} style={{ backgroundColor: color }}></div>
            ))}
          </div>
        </div>

        {/* Quantity and Add to Cart */}
        <div className="flex items-center gap-4">
          <div className="flex items-center border rounded-xl text-lg">
            <button onClick={handleDecrement} className="px-4 py-2">-</button>
            <span className="px-4 py-2">{quantity}</span>
            <button onClick={handleIncrement} className="px-4 py-2">+</button>
          </div>
          <button
            className="px-8 py-3 rounded-xl border border-black hover:bg-black hover:text-white"
            onClick={() => setShowCartBox(!showCartBox)}
          >
            Add To Cart
          </button>
        </div>

        {/* Cart Box */}
        {showCartBox && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="w-[90%] sm:w-[400px] bg-white p-6 rounded-lg shadow-lg relative">
              <h2 className="text-xl font-semibold text-center">Shopping Cart</h2>
              <button className="absolute top-4 right-4" onClick={() => setShowCartBox(false)}>
                <XCircle size={20} />
              </button>
              <div className="mt-6 flex items-center gap-4 border-t pt-4">
                <Image src="/Asgaard sofa 1.png" alt="Product" width={80} height={80} className="rounded-lg" />
                <div>
                  <p className="text-lg font-medium">Asgaard Sofa</p>
                  <p className="text-sm text-gray-500">1 x Rs. 250,000.00</p>
                </div>
              </div>
              <div className="mt-4 flex justify-between text-lg font-semibold">
                <span>Subtotal:</span>
                <span className="text-yellow-600">Rs. 250,000.00</span>
              </div>
              <div className="mt-6 flex justify-between">
                <a href="/cart" className="border px-4 py-2 rounded hover:bg-yellow-200">View Cart</a>
                <a href="/checkout" className="border px-4 py-2 rounded hover:bg-yellow-200">Checkout</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
