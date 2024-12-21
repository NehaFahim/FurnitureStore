"use client";
import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center w-[1440px] h-[760px] bg-[#FFFFFF] ">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-[#FFFFFF] pl-48">
        {/* Log In Section */}
        <div className=" p-8 w-[608px] h-[630px]">
          <h2 className="text-[36px] font-semibold mb-6">Log In</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-[16px] font-medium text-black w-[224px] h-[24px]">
                Username or email address
              </label>
              <input
                type="text"
                className="mt-1 block p-2 border border-[#9F9F9F] rounded-xl focus:outline-none  focus:ring-[#9F9F9F]  w-[423px] h-[75px]"
              
              />
            </div>
            <div>
              <label className="block text-[16px] font-medium text-black w-[78px] h-[24px]">
                Password
              </label>
              <input
                type="password"
                className="mt-1 block p-2 border border-[#9F9F9F] rounded-xl focus:outline-none  focus:ring-[#9F9F9F] w-[423px] h-[75px]"
                
              />
            </div>
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className=" text-[#9F9F9F] border-[#9F9F9F] rounded focus:ring-blue-500 w-[30px] h-[27px]"
              />
              <label htmlFor="remember" className="ml-2 text-[16px] font-normal  text-black w-[120px] h-[24px]">
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className=" text-center py-2 border-2 border-black rounded-2xl  font-normal text-[20px] hover:bg-gray-800 hover:text-white transition-colors w-[215px] h-[64px]"
            >
              Log In
            </button>
          </form>
          <div className="-mt-10 ml-20 text-sm text-gray-500 text-center">
            <a href="#" className="hover:underline  w-[160px] h-[24px]">
              Lost Your Password?
            </a>
          </div>
        </div>

        {/* Register Section */}
        <div className="bg-[#FFFFFF]  p-8 w-[608px] h-[630px]">
          <h2 className="text-[36px] font-semibold mb-6  w-[151px] h-[54px]">Register</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700  w-[115px] h-[24px]">
                Email address
              </label>
              <input
                type="email"
                className="mt-1 block p-2 border border-[#9F9F9F] rounded-xl focus:outline-none focus:ring-[#9F9F9F]  w-[423px] h-[75px]"
               
              />
            </div>
            <p className="text-[16px] font-light text-black mt-2  w-[453px] h-[48px]">
              A link to set a new password will be sent to your email <br /> address.
            </p>
            <p className="text-[16px] font-light text-black mt-2 w-[453px] h-[96px]">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <strong className="font-semibold">privacy policy</strong>.
            </p>
            <button
              type="submit"
              className=" text-center py-2 border-2  border-black rounded-2xl font-normal text-[20px] hover:bg-gray-800 hover:text-white transition-colors w-[215px] h-[64px]"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
