"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Product } from "../../../../types/products";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Nav from "@/app/shop/component/nav";
import { XCircle } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      productName,
      name,
      image,
      price,
      rating,
      reviews,
      description,
      category,
      discountpercentage,
      stockLevel
    }`,
    { slug }
  );
}

export default function ProductPage() {
  const { slug } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [showCartBox, setShowCartBox] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const handleAddToCart = () => {
    // Get existing cart from localStorage or initialize an empty array
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

    // Add the current product to the cart
    const updatedCart = [
      ...existingCart,
      { ...product, quantity }
    ];

    // Save the updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    setShowCartBox(true); // Show the cart box after adding the item
  };

  useEffect(() => {
    if (!slug) return;

    async function fetchProduct() {
      const fetchedProduct = await getProduct(slug as string);
      setProduct(fetchedProduct);
    }

    fetchProduct();
  }, [slug]);

  return (
    <div className="bg-white  w-full h-auto -ml-6">
      <Nav />
      {product && (
        <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2 flex justify-center items-center">
            {product.image && (
              <Image
                src={urlFor(product.image).url()}
                alt={product.productName || "Product image"}
                width={500}
                height={500}
                className="rounded-lg shadow-md object-cover"
              />
            )}
          </div>
          <div className="md:w-1/2 flex flex-col gap-6 p-6 text-gray-900">
            <h1 className="text-4xl font-bold text-gray-900">{product.productName || product.name}</h1>
            <p className="text-2xl text-gray-800 font-semibold">${product.price}</p>

            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400 text-xl">
                {Array.from({ length: product.rating || 5 }).map((_, index) => (
                  <span key={index}>⭐</span>
                ))}
              </div>
              <span className="text-gray-600 text-sm">({product.reviews || 5} Customer Reviews)</span>
            </div>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
            <div className="text-gray-600 text-sm space-y-4">
              <p className="font-normal text-[16px] text-[#9F9F9F]">
                <span>Category</span><span className="px-8">: {product.category }</span>
              </p>
              <p className="font-normal text-[16px] text-[#9F9F9F]">
                <span>Discount Percentage</span><span className="px-8">: {product.discountPercentage || "0%"}</span>
              </p>
              <p className="font-normal text-[16px] text-[#9F9F9F]">
                <span>Stock Level</span><span className="px-8">: {product.stockLevel}</span>
              </p>
            </div>

            <div className="flex items-center gap-4">
              <p className="text-gray-600">Share <span className="px-6">:</span></p>
              <div className="flex gap-6 -ml-4 text-lg">
                <a href="#" className="hover:text-gray-800">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#" className="hover:text-gray-800">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="#" className="hover:text-gray-800">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-2">
              <p>Select Quantity of Items</p>
              <div className="flex items-center font-medium text-lg">
                <button onClick={handleDecrement} className="px-4 py-2 bg-gray-200 hover:bg-gray-300">-</button>
                <span className="px-6 py-2">{quantity}</span>
                <button onClick={handleIncrement} className="px-4 py-2 bg-gray-200 hover:bg-gray-300">+</button>
              </div>
            </div>
            <button
              className="w-full py-3 mt-4 bg-black text-white rounded-lg hover:bg-gray-800 transition"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
          </div>
        </div>
      )}

      {showCartBox && product && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-96 p-6 rounded-lg">
            <div className="flex justify-between items-center pb-4 mb-4">
              <h2 className="text-xl font-semibold">Shopping Cart</h2>
              <button onClick={() => setShowCartBox(false)}>
                <XCircle size={24} className="text-gray-500 hover:text-black" />
              </button>
            </div>
            <div className="flex items-center gap-4">
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt="Product image"
                  width={80}
                  height={80}
                  className="rounded-md"
                />
              )}
              <div>
                <p className="text-lg font-medium">{product.productName}</p>
                <p className="text-gray-600">{quantity} x ${product.price}</p>
              </div>
            </div>
            <div className="mt-4 pt-4 flex justify-between font-semibold">
              <span>Subtotal:</span>
              <span>${(product.price * quantity).toFixed(2)}</span>
            </div>
            <div className="mt-4 flex gap-4">
              <a href="/cart" className="flex-1 text-center py-2 border border-black hover:bg-gray-100">View Cart</a>
              <a href="/checkout" className="flex-1 text-center py-2 bg-black text-white hover:bg-gray-800">Checkout</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
