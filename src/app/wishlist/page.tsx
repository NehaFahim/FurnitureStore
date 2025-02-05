"use client";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import Nav from "../shop/component/nav";

// Define Product Type
type Product = {
  _id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  slug: {
    current: string;
  };
};

const query = `*[_type == "product"] { _id, name, price, category, "image": image.asset->url, slug }`;

const Wishlist: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);

  // Fetch Products from Sanity
  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts: Product[] = await client.fetch(query);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  // Load Wishlist from Local Storage
  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  // Save Wishlist to Local Storage when it changes
  useEffect(() => {
    if (wishlist.length > 0) {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  }, [wishlist]);

  // Remove Product from Wishlist
  const removeFromWishlist = (productId: string) => {
    const updatedWishlist = wishlist.filter((id) => id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Ensure it's updated in storage
  };

  // Filter products that are in the wishlist
  const wishlistProducts = products.filter((product) =>
    wishlist.includes(product._id)
  );

  return (
    <div>
      <Nav />
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 md:py-20 w-full h-auto">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Your Wishlist</h2>

        {/* No Products in Wishlist */}
        {wishlistProducts.length === 0 ? (
          <p className="text-gray-600">Your wishlist is empty. Add some products!</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
            {wishlistProducts.map((product) => (
              <div
                key={product._id}
                className="bg-white shadow-lg rounded-lg p-4 transition-transform duration-300 hover:scale-105 border border-gray-200"
              >
                <Link href={`/product/${product.slug.current}`}>
                  <div className="relative w-full h-56 rounded-lg overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-900 truncate">{product.name}</h3>
                    <p className="text-gray-600 text-md mt-1">${product.price}</p>
                  </div>
                </Link>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromWishlist(product._id)}
                  className="mt-2 w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-800 transition"
                >
                  Remove from Wishlist
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
