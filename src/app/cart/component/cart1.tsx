"use client";

import { Product } from "../../../../types/products";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { getCartItems, removeFromCart } from "@/app/context/cart";
import Link from "next/link";
import { DeleteIcon } from "lucide-react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const uniqueItems = [...new Map(getCartItems().map(item => [item._id, item])).values()];
    setCartItems(uniqueItems);
  }, []);

  const handleRemove = (id: string) => {
    removeFromCart(id);
    setCartItems(prevItems => prevItems.filter(item => item._id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
  };

  return (
    <div className="p-6 md:p-12 lg:p-24 bg-white w-full h-auto">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800 text-center pb-6 md:pb-12">
        🛒 Your Shopping Cart
      </h1>

      <div className="flex flex-col md:flex-row w-full h-auto gap-6">
        <div className="w-full md:w-3/4 overflow-x-auto">
          <table className="w-full border border-gray-300 text-sm md:text-base">
            <thead>
              <tr className="bg-yellow-100 text-center">
                <th className="p-2 md:p-3 border">Product</th>
                <th className="p-2 md:p-3 border">Price</th>
                <th className="p-2 md:p-3 border">Quantity</th>
                <th className="p-2 md:p-3 border">Subtotal</th>
                <th className="p-2 md:p-3 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                  <tr key={item._id || index} className="text-center border-b">
                    <td className="p-2 md:p-3 flex items-center gap-4">
                      {item.image && (
                        <Image
                          src={urlFor(item.image).url()}
                          className="w-12 h-12 md:w-20 md:h-20 object-cover rounded-lg"
                          alt="product image"
                          width={80}
                          height={80}
                        />
                      )}
                      {item.productName}
                    </td>
                    <td className="p-2 md:p-3">Rs. {item.price.toLocaleString()}</td>
                    <td className="p-2 md:p-3">{item.quantity || 1}</td>
                    <td className="p-2 md:p-3">Rs. {(item.price * (item.quantity || 1)).toLocaleString()}</td>
                    <td className="p-2 md:p-3">
                      <button onClick={() => handleRemove(item._id)} className="text-red-500 text-lg md:text-xl">
                        <DeleteIcon />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="text-gray-600 text-center p-4">
                    Your cart is empty
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {cartItems.length > 0 && (
  <div className="w-full md:w-1/3 bg-gradient-to-b from-yellow-100 to-yellow-100 p-6 md:p-8 rounded-2xl shadow-xl border border-yellow-100">
    <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-800 mb-6 text-center">
       Cart Totals
    </h2>
    <p className="text-gray-700 font-medium mb-4 md:mb-6 text-lg md:text-xl text-center">
      Subtotal: <span className="font-semibold text-gray-900">Rs. {calculateTotal().toLocaleString()}</span>
    </p>
    <p className="text-lg md:text-xl font-semibold text-yellow-700 text-center mt-10 border-t border-yellow-400 pt-4">
      Total: <span className="text-2xl md:text-3xl font-bold text-yellow-900">Rs. {calculateTotal().toLocaleString()}</span>
    </p>
    <Link href="/checkout">
      <button className="mt-16 w-full px-5 py-3 md:py-4 bg-green-500 text-white text-base md:text-lg font-semibold rounded-xl shadow-md hover:bg-green-600 hover:scale-105 transition-all duration-300 ease-in-out">
        Proceed to Checkout 
      </button>
    </Link>
  </div>
)}
      </div>
    </div>
  );
};

export default CartPage;
