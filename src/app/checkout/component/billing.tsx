"use client";
import { client } from "@/sanity/lib/client";
import React, { useState, useEffect } from "react";

interface CartItem {
  _id: string | number;
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const Billing: React.FC = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    country: "",
    address: "",
    city: "",
    province: "",
    zipCode: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  
  const [paymentMethod, setPaymentMethod] = useState<string>("direct-bank");
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    // Fetch cart items from localStorage or API
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlePlaceOrder = async () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert("Order placed successfully!");
    // Clear cart after order is placed
    localStorage.removeItem("cart");
    setCart([]);

    const orderData = {
      _type: 'order',
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      phone: formValues.phone,
      companyName: formValues.companyName,
      country: formValues.country,
      address: formValues.address,
      city: formValues.city,
      province: formValues.province,
      zipCode: formValues.zipCode, 
      cartItems: cart.map((item) => ({
        _type: 'reference',
        _ref: item._id,  // Ensure _id exists
      })),
      paymentMethod: paymentMethod,
      cartTotal: calculateSubtotal(),
      cartDiscount: 0, // Default discount (modify if needed)
      orderDate: new Date().toISOString()
    };

    try {
      await client.create(orderData);
      localStorage.removeItem("cart");
      localStorage.removeItem("appliedDiscount");
      setCart([]);
      alert("Order placed successfully!");
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start p-9 lg:p-20 bg-gray-50 w-full h-auto">
      {/* Billing Details */}
      <div className="lg:w-2/3 w-full mb-8 lg:mb-0 pl-4">
        <h2 className="text-[36px] font-bold mb-6">Billing details</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <label className="block mb-2 text-[16px] font-medium">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              className="w-full lg:w-[211px] h-[75px] border border-[#9F9F9F] rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={formValues.firstName}
              onChange={handleInputChange}
            />
          </div>
          {/* Last Name */}
          <div className="md:ml-0 lg:ml-[-96px]">
            <label className="block mb-2 text-[16px] font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              value={formValues.lastName}
              onChange={handleInputChange}
              className="w-full lg:w-[211px] h-[75px] border border-[#9F9F9F] rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          {/* Email */}
          <div className="md:col-span-2">
            <label className="block mb-2 text-[16px] font-medium">Email address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formValues.email}
              onChange={handleInputChange}
              className="w-full lg:w-[453px] h-[75px] border border-[#9F9F9F] rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          {/* Phone */}
          <div className="md:col-span-2">
            <label className="block mb-2 text-[16px] font-medium">Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter your phone number"
              value={formValues.phone}
              onChange={handleInputChange}
              className="w-full lg:w-[453px] h-[75px] border border-[#9F9F9F] rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          {/* Company Name */}
          <div className="md:col-span-2">
            <label className="block mb-2 text-[16px] font-medium">Company Name (Optional)</label>
            <input
              type="text"
              name="companyName"
              placeholder="Enter your company name"
              value={formValues.companyName}
              onChange={handleInputChange}
              className="w-full lg:w-[453px] h-[75px] border border-[#9F9F9F] rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          {/* Country */}
          <div className="md:col-span-2">
            <label className="block mb-2 text-[16px] font-medium">Country</label>
            <input
              type="text"
              name="country"
              placeholder="Enter your country name"
              value={formValues.country}
              onChange={handleInputChange}
              className="w-full lg:w-[453px] h-[75px] border border-[#9F9F9F] rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          {/* Street Address */}
          <div className="md:col-span-2">
            <label className="block mb-2 text-[16px] font-medium">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Write your address"
              value={formValues.address}
              onChange={handleInputChange}
              className="w-full lg:w-[453px] h-[75px] border border-[#9F9F9F] rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          {/* City */}
          <div>
            <label className="block mb-2 text-[16px] font-medium">City</label>
            <input
              type="text"
              name="city"
              placeholder="Enter city name"
              value={formValues.city}
              onChange={handleInputChange}
              className="w-full lg:w-[453px] h-[75px] border border-[#9F9F9F] rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          {/* Province */}
          <div className="md:col-span-2">
            <label className="block mb-2 text-[16px] font-medium">Province</label>
            <input
              type="text"
              name="province"
              placeholder="Enter province name"
              value={formValues.province}
              onChange={handleInputChange}
              className="w-full lg:w-[453px] h-[75px] border border-[#9F9F9F] rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          {/* ZIP Code */}
          <div>
            <label className="block mb-2 text-[16px] font-medium">ZIP code</label>
            <input
              type="text"
              name="zipCode"
              placeholder="Enter zip code"
              value={formValues.zipCode}
              onChange={handleInputChange}
              className="w-full lg:w-[453px] h-[75px] border border-[#9F9F9F] rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
        </form>
      </div>

      {/* Order Summary */}
      <div className="lg:w-1/3 w-full p-6 bg-white shadow-lg rounded-xl mt-8 lg:mt-0">
        <h3 className="text-[26px] font-bold mb-4">Order Summary</h3>
        <div className="space-y-4">
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <div key={`${item.id}-${index}`} className="flex justify-between text-[16px]">
                <span>{item.name} </span>
                <span>Rs. {item.price}</span>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No items in cart.</p>
          )}
        </div>
        <hr className="my-4" />
        <div className="flex justify-between text-[16px] font-medium">
          <span>Subtotal</span>
          <span>Rs. {calculateSubtotal()}</span>
        </div>
        <div className="flex justify-between text-[18px] font-bold text-[#B88E2F] mt-4">
          <span>Total</span>
          <span>Rs. {calculateSubtotal()}</span>
        </div>

        {/* Payment Options */}
        <div className="mt-6">
          <h4 className="text-[16px] font-medium mb-4">Payment Method</h4>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="payment"
                value="direct-bank"
                checked={paymentMethod === "direct-bank"}
                onChange={() => setPaymentMethod("direct-bank")}
                className="mr-2"
              />
              Direct Bank Transfer
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="payment"
                value="cash-on-delivery"
                checked={paymentMethod === "cash-on-delivery"}
                onChange={() => setPaymentMethod("cash-on-delivery")}
                className="mr-2"
              />
              Cash On Delivery
            </label>
          </div>
        </div>

        {/* Place Order Button */}
        <button
          onClick={handlePlaceOrder}
          className="w-full h-[50px] bg-[#B88E2F] text-white font-medium text-[18px] rounded-xl mt-8 hover:bg-yellow-600"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Billing;
