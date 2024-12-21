import { Clock } from 'lucide-react';
import { Calendar } from 'lucide-react';
import React from "react";

const BlogSection = () => {
  const blogs = [
    {
      title: "Going all-in with millennial design",
      date: "12th Oct 2022",
      readTime: "5 min",
      image: "/pic1.png",
    },
    {
      title: "Going all-in with millennial design",
      date: "12th Oct 2022",
      readTime: "5 min",
      image: "/pic2.png",
    },
    {
      title: "Going all-in with millennial design",
      date: "12th Oct 2022",
      readTime: "5 min",
      image: "/pic3.png",
    },
  ];

  return (
    <section className="py-12 bg-white w-[1440px] h-[944px]">
      <div className="container mx-auto text-center pl-12 w-[1240px] h-[679px]">
        <h2 className="text-3xl font-medium mb-2 pl-8">Our Blogs</h2>
        <p className="text-[#9F9F9F] mb-8 pl-6">
          Find a bright idea to suit your taste with our great selection
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-[1240px] h-[555px]">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white  overflow-hidden"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-[393px] h-[393px] object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-normal w-[339px] h-[30px] pl-4">{blog.title}</h2>
                <button className="text-black font-medium text-lg underline underline-offset-8 w-[130px] h-[36px] mt-2">
                  Read More
                </button>
                <div className="flex items-center justify-center text-black space-x-4 text-sm font-normal">
                  <div className="flex items-center mt-4 mb-4 font-light">
                    <Clock className="mr-1 w-[18px] h-[17.83px] font-medium" />
                    {blog.readTime}
                  </div>
                  <div className="flex items-center font-light">
                    <Calendar className="mr-1 w-[18px] h-[17.83px] font-medium" />
                    {blog.date}
                  </div>
                </div>
               
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
        <button className="text-black font-medium text-xl underline underline-offset-8 w-[130px] h-[36px] mt-2 pl-3 ">
                  View All Post
                </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

