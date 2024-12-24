import React from "react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Trenton modular sofa_3",
    price: 25000,
    image: "/Trenton.png",
  },
  {
    id: 2,
    name: "Granite dining table with dining chair",
    price: 25000,
    image: "/Granitetable.png", 
  },
  {
    id: 3,
    name: "Outdoor bar table and stool",
    price: 25000,
    image: "/Outdoorbar.png", 
  },
  {
    id: 4,
    name: "Plain console with teak mirror",
    price: 25000,
    image: "/Plainconsol.png", 
  },
];

const Relate: React.FC = () => {
  return (

    <section className="text-center my-12 mx-2 ">
        <div className="w-[1440px] h-[777px]">
      <h1 className="text-[36px] font-medium mb-12 pl-48 text-black">Related Product</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-28 pl-28 hover">
        {products.map((product) => (
          <div key={product.id} className=" w-[287px] h-[397px]">
            <Image
              src={product.image}
              alt={product.name}
              width={287}
              height={397}
              className="w-[287px] h-[287px] object-contain mb-4"
            />
            <h2 className="text-sm font-normal w-[212px] h-[48px] text-black pr-14 ">{product.name}</h2>
            <p className="text-black text-xl font-medium w-[158px] h-[36px]">Rs. {product.price.toLocaleString("en-US")}.00</p>
          </div>
        ))}
      </div>
      <button className="mt-6 text-black font-medium text-lg underline ml-48 w-[115px] h-[49px]">View More</button>
      </div>
    </section>
  );
};

export default Relate;
