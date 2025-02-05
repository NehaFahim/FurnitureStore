'use client';
import Image from 'next/image';
import { User, Search, Calendar, Tag } from 'lucide-react';

export default function Blogging() {
  return (
    <div className="flex flex-col px-4 py-6 w-full h-auto mt-20 lg:flex-row lg:justify-center">
      <div className="space-y-10 w-full lg:w-2/3">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="w-full h-auto">
            <Image
              src={`/Rectangle 68${index ? ` (${index})` : ''}.png`}
              alt="Blog Image"
              width={1200}
              height={400}
              className="w-full lg:w-[817px] h-auto object-cover"
            />
            <div className="mt-6">
              <div className="flex flex-wrap items-center space-x-4 text-sm text-[#9F9F9F]">
                <span className="flex items-center space-x-1">
                  <User /> <span>Admin</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Calendar /> <span>14 Oct 2022</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Tag /> <span>Wood</span>
                </span>
              </div>
              <h2 className="text-2xl lg:text-[30px] font-medium mt-6 mb-4">
                {index === 0
                  ? 'Going all-in with millennial design'
                  : index === 1
                  ? 'Exploring New Ways of Decorating'
                  : 'Handmade pieces that took time to make'}
              </h2>
              <p className="text-[#9F9F9F] text-sm lg:text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eius fugiat eveniet, reprehenderit placeat architecto doloribus quis ipsam quia cupiditate neque deserunt vitae reiciendis. Asperiores minima inventore eligendi rerum veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo praesentium animi laboriosam distinctio quam laborum odio velit repellendus laudantium voluptate culpa assumenda similique itaque, earum voluptas, porro doloribus exercitationem dicta.
              </p>
              <button className="text-black font-medium text-sm lg:text-[16px] underline mt-4">Read More</button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Sidebar */}
      <div className="w-full lg:w-1/3 lg:pl-6 mt-10 lg:mt-0">
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border-2 border-gray-300 rounded-md p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <button className="absolute right-3 top-3 text-[#9F9F9F]">
            <Search />
          </button>
        </div>
        
        <div className="mb-6">
          <h2 className="text-xl font-medium mb-4">Categories</h2>
          <ul className="space-y-2 text-sm lg:text-base text-[#9F9F9F]">
            {['Crafts', 'Design', 'Handmade', 'Interior', 'Wood'].map((category, index) => (
              <li key={index} className="flex justify-between">
                <span>{category}</span> <span className="text-gray-600">{[2, 8, 1, 1, 5][index]}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className='py-32'>
          <h3 className="text-xl font-medium mb-4">Recent Posts</h3>
          <ul className="space-y-4">
            {[...Array(5)].map((_, index) => (
              <li key={index} className="flex items-start space-x-4">
                <Image
                  src={`/Rectangle 69${index ? ` (${index})` : ''}.png`}
                  alt="post"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div>
                  <h4 className="text-black font-medium text-sm lg:text-[14px]">
                    {[
                      'Going all-in with millennial design',
                      'Exploring new ways of decorating',
                      'Handmade pieces that took time to make',
                      'Modern home in Milan',
                      'Colorful office redesign'
                    ][index]}
                  </h4>
                  <p className="text-[#9F9F9F] text-xs lg:text-[14px] mt-1">03 Aug 2022</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
