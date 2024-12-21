import React from "react";

const Bar: React.FC = () => {
  return (
    <div className="bg-white w-[1440px] h-[100px] ">
    <div className="flex items-center justify-between py-2 px-48  bg-[#FAF4F4] w-[1440px] h-[80px] absolute bottom-24  ">

      {/* Bar linecode */}
      
      <div className="flex items-center gap-2 mt-6">
        <button className="flex items-center gap-1 text-black hover:text-gray-700 w-[85px] h-[30px] font-normal text-[17px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h6M4.5 6h.008M7.5 12h6m-6 6h6M4.5 12h.008m-.008 6h.008"
            />
          </svg>
          Filter
        </button>

        <div className="flex gap-2">
          <button className="p-2 border rounded hover:bg-gray-200  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6h3v3H6V6zm0 9h3v3H6v-3zm9-9h3v3h-3V6zm0 9h3v3h-3v-3z"
              />
            </svg>
          </button>
          <button className="p-2 border rounded hover:bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          </div>
          <button>
                <p className="text-[35px] mb-2 pl-4 font-thin text-[#9F9F9F]">|</p>
            </button>
    
      </div>

    
      <div className="text-black absolute left-1/3 -translate-x-16 text-[16px] font-normal mt-6">Showing 1–16 of 32 results</div>

      
      <div className="flex items-center gap-4  w-[126px] h-[55px] -translate-x-16 mt-8">
        <div className="flex items-center">
          <span className="text-black mr-2">Show</span>
          <input
            type="number"
            className="w-[55px] h-[55px] text-[#9F9F9F] text-center mb-1 "
            defaultValue={16}
          />
        </div>
        <div className="flex items-center m-4 ">
          <span className="text-black  w-[83px] h-[30px] font-normal  ">Short by</span>
          <input type="text"
          placeholder="Default"
          className="w-[140px] h-[55px] -translate-x-2 pl-4 mb-2 text-[#9F9F9F]" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Bar;
