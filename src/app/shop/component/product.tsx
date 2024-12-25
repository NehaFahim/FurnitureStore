"use client";
import Image from "next/image";
import React, { useState } from "react";

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
};

const products: Product[] = [
  { id: 1, name: "Trenton modular sofa_3", price: "Rs. 25,000.00", image: "/Trenton.png" },
  { id: 2, name: "Granite dining table with dining chair", price: "Rs. 25,000.00", image: "/Granitetable.png" },
  { id: 3, name: "Outdoor bar table and stool", price: "Rs. 25,000.00", image: "/Outdoorbar.png" },
  { id: 4, name: "Plain console with teak mirror", price: "Rs. 25,000.00", image: "/Plainconsol.png" },
  { id: 5, name: "Grain coffee table", price: "Rs. 15,000.00", image: "/Grain coffee table 1.png" },
  { id: 6, name: "Kent coffee table", price: "Rs. 225,000.00", image: "/Kent coffee table 1.png" },
  { id: 7, name: "Round coffee table_color 2", price: "Rs. 251,000.00", image: "/Round coffee table_color 2 1.png" },
  { id: 8, name: "Reclaimed teak coffee table", price: "Rs. 25,200.00", image: "/Reclaimed teak coffee table 1.png" },
  { id: 9, name: "Plain console", price: "Rs. 258,200.00", image: "/Plain console_ 1.png" },
  { id: 10, name: "Reclaimed teak Sideboard", price: "Rs. 20,000.00", image: "/Reclaimed teak sideboard 1.png" },
  { id: 11, name: "SJP_0825", price: "Rs. 200,000.00", image: "/4tables.png" },
  { id: 12, name: "Bella chair and table", price: "Rs. 100,000.00", image: "/Bella chair and table 1.png" },
  { id: 13, name: "Granite square side table", price: "Rs. 258,800.00", image: "/stable.png" },
  { id: 14, name: "Asgaard sofa", price: "Rs. 250,000.00", image: "/Asgaard sofa 1.png" },
  { id: 15, name: "Maya sofa three seater", price: "Rs. 115,000.00", image: "/Mask group.png" },
  { id: 16, name: "Outdoor sofa set", price: "Rs. 244,000.00", image: "/Outdoor sofa set 1.png" },
];

const ProductGrid: React.FC = () => {
  const itemsPerPage = 16;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handlePageChange = (page: number) => setCurrentPage(page);

  const currentProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-8 w-[1440px] h-[1808px] mt-20 pl-28">
      {/* Product Grid */}
      <div className="grid grid-cols-4 gap-6">
        {currentProducts.map((product) => (
          <div key={product.id} className="bg-white w-[287px] h-[397px]">
            <Image
              src={product.image}
              alt={product.name}
              width={287}
              height={397}
              className="w-[287px] h-[287px]"
            />
            <div className="p-4">
              <h3 className="text-[16px] font-normal text-black">
                {product.name}
              </h3>
              <p className="text-[24px] font-medium text-gray-900">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>

<div className="flex justify-center items-center mt-5 gap-8 absolute left-2/4 -ml-28  w-[392px] h-[60px]">
     
     {Array.from({ length: totalPages }, (_, index) => (
       <button
         key={index}
         onClick={() => handlePageChange(index + 1)}
         className={`px-4 py-2 rounded w-[60px] h-[60px] font-normal text-[20px] hover:bg-gray-100 ${
           currentPage === index + 1
             ? "bg-[#FBEBB5]"
             : "bg-gray-200 hover:bg-gray-300"
         }`}
       >
         {index + 1}
       </button>
     ))}

{Array.from({ length: totalPages }, (_, index) => (
       <button
         key={index}
         onClick={() => handlePageChange(index + 1)}
         className={`px-4 py-2 rounded w-[60px] h-[60px] bg-[#FFF9E5] font-normal text-[20px] hover:bg-gray-100 ${
           currentPage === index + 2
           
         }`}
       >
         {index + 2}
       </button>
     ))}

{Array.from({ length: totalPages }, (_, index) => (
       <button
         key={index}
         onClick={() => handlePageChange(index + 1)}
         className={`px-4 py-2 rounded w-[60px] h-[60px] bg-[#FFF9E5] font-normal text-[20px] hover:bg-gray-100 ${
           currentPage === index + 1
      
         }`}
       >
         {index + 3}
       </button>
     ))}

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;
