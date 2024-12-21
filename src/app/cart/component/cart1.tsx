import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center p-4 w-[1440px] h-[525px] pl-28">
      <div className=" max-w-5xl w-[1240px] h-[390px]">
        {/* Cart Table */}
        <div className=" p-4 rounded-md border border-black w-[840px] h-[55px] bg-[#FFF9E5] m-14 absolute left-28 text-center">
          <div className="grid grid-cols-4 gap-4 text-black font-medium text-[16px]  mb-2 ">
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Subtotal</div>
          </div>
          </div>
          <div className="grid grid-cols-4 gap-4 items-center  py-4 absolute -bottom-36 left-44">
            <div className="flex items-center gap-4 w-[817px] h-[216px]">
              <Image
                src="/Mask group (1).png"
                alt="Asgaard Sofa"
                width={80}
                height={80}
                className="rounded-md bg-[#FBEBB5] w-[106px] h-[106px]"
              />
              <span className="text-[#9F9F9F] font-normal text-[16px] w-[108px] h-[24px]">Asgaard Sofa</span>
            </div>
            <div className="text-[#9F9F9F] font-normal text-[16px] w-[112px] h-[24px]">Rs. 250,000.00</div>
            <div className="absolute left-1/3 pl-24">
              <input
                type="number"
                defaultValue={1}
                className="border border-bg[#9F9F9F] rounded-lg text-center w-[32px] h-[32px]"
              />
            </div>
            <div className="text-black font-normal text-[16px]">Rs. 250,000.00</div>
          </div>
          <button>
      <Image
        src="/deleteicon.png" 
        alt="Delete Icon"
        width={24} 
        height={24}
        className="cursor-pointer hover:opacity-80 absolute -bottom-8 right-96"
      />
    </button>
        </div>

        {/* Cart Totals */}
        <div className="mt-8 flex justify-end ml-96 pl-36 mb-48 ">
          <div className="bg-[#FFF9E5] p-6 rounded-md w-[393px] h-[390px] ml-96 ">
            <h2 className=" mb-4 w-[179px] h-[48px] font-bold text-[32px] ml-24">Cart Totals</h2>
            <div className="flex justify-between mb-12">
              <span className="text-black w-[69px] h-[24px] font-medium text-[16px] mt-10 ml-14">Subtotal</span>
              <span className="text-gray-400 mt-10 mr-12">Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-700 font-bold ml-14">Total</span>
              <span className="text-yellow-600 font-bold mr-12">Rs. 250,000.00</span>
            </div>
            <button className="w-[222px] h-[58.95px] py-2 bg-[#FFF9E5] text-black border border-black rounded-2xl font-normal text-[20px] ml-16 mt-8 hover:bg-black hover:text-white transition">
              <Link href={"/checkout"}>Check Out</Link>
            </button>
          </div>
        </div>
      </div>
    
  );
};

export default Page;
