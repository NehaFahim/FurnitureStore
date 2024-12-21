'use client';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';
import { FaCalendar} from 'react-icons/fa6';
import { FaTag} from 'react-icons/fa6';
import { FaUser } from 'react-icons/fa6';



export default function Blogging() {
  return (
    <div className="flex flex-col px-4 py-6  w-[1440px] h-[2710px] mt-20 pl-36">
   
      <div className="space-y-10  w-[820px] h-[2490px]">
   
        <div className=" w-[820px] h-[794px]">
          <Image
            src="/Rectangle 68.png"
            alt="Laptop on wooden table"
            width={1200}
            height={400}
            className="w-[817px] h-[500px] object-cover"
          />
          <div className=" mt-6">
            <div className="flex items-center space-x-9 text-sm w-[349px] h-[24px] text-[#9F9F9F]">
              <span className="flex items-center">
               <FaUser/>
                <i className="mr-1"></i> Admin
              </span>
              <span className="flex items-center">
               <FaCalendar/>
                <i className="mr-1"></i> 14 Oct 2022
              </span>
              <span className="flex items-center">
               <FaTag/>
                <i className="mr-1"></i> Wood
              </span>
            </div>
            <h2 className="text-[30px] font-medium mt-6 mb-4 w-[517px] h-[45px] ">Going all-in with millennial design</h2>
            <p className="text-[#9F9F9F]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
            </p>
          </div>
          <button className="text-black font-medium text-[16px] underline underline-offset-8 w-[89px] h-[24px] mt-6">
                  Read More
                </button>
        </div>

        {/* Blog Post 2 */}
        <div className="w-[820px] h-[794px]">
          <Image
            src="/Rectangle 68 (1).png"
            alt="Hand sketching on a notebook"
            width={1200}
            height={400}
            className="w-[817px] h-[500px] object-cover"
          />
          <div className="mt-6">
          <div className="flex items-center space-x-9 text-sm w-[349px] h-[24px] text-[#9F9F9F]">
              <span className="flex items-center">
               <FaUser/>
                <i className="mr-1"></i> Admin
              </span>
              <span className="flex items-center">
               <FaCalendar/>
                <i className="mr-1"></i> 14 Oct 2022
              </span>
              <span className="flex items-center">
               <FaTag/>
                <i className="mr-1"></i> Wood
              </span>
            </div>
            <h2 className="text-[30px] font-medium mt-6 mb-4 w-[506px] h-[45px]">Exploring New Ways of Decorating</h2>
            <p className="text-[#9F9F9F]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
            </p>
          </div>
          <button className="text-black font-medium text-[16px] underline underline-offset-8 w-[89px] h-[24px] mt-6">
                  Read More
                </button>
        </div>

        {/* Blog Post 3 */}
        <div className="w-[820px] h-[794px]">
          <Image
            src="/Rectangle 68 (2).png"
            alt="Writing in a notebook with coffee"
            width={1200}
            height={400}
            className="w-[817px] h-[500px] object-cover"
          />
          <div className="mt-6">
          <div className="flex items-center space-x-9 text-sm w-[349px] h-[24px] text-[#9F9F9F]">
              <span className="flex items-center">
               <FaUser/>
                <i className="mr-1"></i> Admin
              </span>
              <span className="flex items-center">
               <FaCalendar/>
                <i className="mr-1"></i> 14 Oct 2022
              </span>
              <span className="flex items-center">
               <FaTag/>
                <i className="mr-1"></i> Wood
              </span>
            </div>
            <h2 className="text-[30px] font-medium mt-6 mb-4">Handmade pieces that took time to make</h2>
            <p className="text-[#9F9F9F]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
            </p>
          </div>
          <button className="text-black font-medium text-[16px] underline underline-offset-8 w-[89px] h-[24px] mt-6">
                  Read More
                </button>
        </div>
        <div className='absolute top-3/4 left-3/4 pl-4'>
          {/* Right Column: Search Bar and Categories */}
      <div className="w-[393px] h-[537px]">
        {/* Search Bar */}
        <div className="mb-8 w-[311px] h-[58px] ">
        <button className="text-[#9F9F9F] absolute left-72 mt-3">
            <FaSearch/>
        </button>
          <input
            type="text"
            className="w-full border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>
       
      {/* Sidebar */}
      <div className="w-full md:w-1/3 px-4 grid grid-rows-2 row-span-2 ">
        {/* Categories */}
        <div className="w-[251px] h-[px] mb-6">
          <h2 className="text-[24px] font-medium mb-8 w-[134px] h-[36px] pl-4">Categories</h2>
          <ul className="space-y-9 text-[16px] text-[#9F9F9F] font-normal pl-4">
            <li className="flex justify-between">
              <span>Crafts</span> <span className="text-gray-600">2</span>
            </li>
            <li className="flex justify-between">
              <span>Design</span> <span className="text-gray-600">8</span>
            </li>
            <li className="flex justify-between">
              <span>Handmade</span> <span className="text-gray-600">1</span>
            </li>
            <li className="flex justify-between">
              <span>Interior</span> <span className="text-gray-600">1</span>
            </li>
            <li className="flex justify-between">
              <span>Wood</span> <span className="text-gray-600">5</span>
            </li>
          </ul>
        </div>
        </div>

        {/* Recent Posts */}
        <div className="w-[252px] h-[618px] absolute top-3/4 mt-40 pl-9">
          <h3 className="text-[24px] font-medium mb-4 w-[155px] h-[36px]">Recent Posts</h3>
          <ul className="space-y-10">
            <li className="flex items-start space-x-4">
              <Image
                src="/Rectangle 69.png"
                alt="post"
                width={80}
                height={80}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div>
                <h4 className="text-black font-medium text-[14px]">Going all-in with millennial design</h4>
                <p className="text-[#9F9F9F] text-[14px] font-normal mt-1">03 Aug 2022</p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <Image
                src="/Rectangle 69 (1).png"
                alt="post"
                width={80}
                height={80}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div>
                <h4 className="text-black font-medium text-[14px]">Exploring new ways of decorating</h4>
                <p className="text-[#9F9F9F] text-[14px] font-normal mt-1">03 Aug 2022</p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <Image
                src="/Rectangle 69 (2).png"
                alt="post"
                width={80}
                height={80}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div>
                <h4 className="text-black font-medium text-[14px]">Handmade pieces that took time to make</h4>
                <p className="text-[#9F9F9F] text-[14px] font-normal mt-1">03 Aug 2022</p>
              </div>
            </li>

            <li className="flex items-start space-x-4">
              <Image
                src="/Rectangle 69 (3).png"
                alt="post"
                width={80}
                height={80}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div>
                <h4 className="text-black font-medium text-[14px]">Modern home in Milan</h4>
                <p className="text-[#9F9F9F] text-[14px] font-normal mt-1">03 Aug 2022</p>
              </div>
            </li>

            <li className="flex items-start space-x-4">
              <Image
                src="/Rectangle 69 (4).png"
                alt="post"
                width={80}
                height={80}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div>
                <h4 className="text-black font-medium text-[14px]">Colorful office redesign</h4>
                <p className="text-[#9F9F9F] text-[14px] font-normal mt-1">03 Aug 2022</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
}

