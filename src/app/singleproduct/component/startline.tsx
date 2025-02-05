import React from 'react'

const Startline = () => {
  return (
    <div className='flex flex-wrap justify-start pl-6 sm:pl-16 md:pl-24 lg:pl-56 space-x-2 gap-1 py-6 sm:py-8 w-full h-auto'>
      <h4 className='text-[#9F9F9F] font-normal text-[14px] sm:text-[16px]'>Home</h4> 
      <span className='font-extrabold text-black text-[16px] sm:text-[18px]'>{">"}</span>
      
      <h4 className='text-[#9F9F9F] font-normal text-[14px] sm:text-[16px]'>Shop</h4> 
      <span className='font-extrabold text-black text-[16px] sm:text-[18px]'>{">"}</span>
      
      <button>
        <p className="text-[24px] sm:text-[32px] -mt-4 font-thin text-[#9F9F9F]">|</p>
      </button>

      <h2 className='font-medium text-[14px] sm:text-[16px] w-[90px] sm:w-[108px] h-[24px]'>
        Asgaard sofa
      </h2>
    </div>
  )
}

export default Startline;
