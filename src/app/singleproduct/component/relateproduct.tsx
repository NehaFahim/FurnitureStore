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

const TopPicks: React.FC = () => {
  return (
    <section className="text-center my-12 mx-auto w-full max-w-7xl px-4">
      {/* Title */}
      <h1 className="text-3xl font-semibold text-black mb-2">Top Picks For You</h1>
      <p className="text-[#9F9F9F] text-lg mb-10">
        Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
      </p>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center">
            <Image
              src={product.image}
              alt={product.name}
              width={250}
              height={250}
              className="w-[250px] h-[250px] object-contain"
            />
            <h2 className="text-black text-lg font-medium mt-4">{product.name}</h2>
            <p className="text-black text-xl font-semibold mt-1">Rs. {product.price.toLocaleString("en-US")}.00</p>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <button className="mt-12 text-black font-medium text-lg underline hover:text-gray-700">
        View More
      </button>
    </section>
  );
};

export default TopPicks;
