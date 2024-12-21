import React from 'react'

const Startline = () => {
  return (
    <div className='flex justify-start pl-56 space-x-4 gap-1 py-12 w-[1440px] h-[100px]'>
      <h4 className='w-[48px] h-[24px] text-[#9F9F9F] font-normal text-[16px]'>Home</h4> <span className='w-[20px] h-[20px] font-extrabold text-black'>{">"}</span>
      <h4 className='w-[41px] h-[24px] text-[#9F9F9F] font-normal text-[16px]'>Shop</h4> <span className='w-[20px] h-[20px] font-extrabold text-black'>{">"}</span>
      <button>
                <p className="text-[32px] -mt-4 font-thin text-[#9F9F9F]">|</p>
            </button>

            <h2 className='font-medium text-[16px] w-[108px] h-[24px] pl-2 '>Asgaard sofa</h2>
    </div>
  )
}

export default Startline;
