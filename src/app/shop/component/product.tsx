"use client";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Swal from "sweetalert2";

//  Define Product Type
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

const ProductGrid: React.FC = () => {
  const itemsPerPage = 8;
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [wishlist, setWishlist] = useState<string[]>([]);

  // Fetch Products
  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts: Product[] = await client.fetch(query);
        setProducts(fetchedProducts);
        setFilteredProducts(fetchedProducts);
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
  
    // Save Wishlist to Local Storage
    useEffect(() => {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);
  
    // Toggle Wishlist Function
    const toggleWishlist = (productId: string) => {
      setWishlist((prevWishlist) => {
        if (prevWishlist.includes(productId)) {
          return prevWishlist.filter((id) => id !== productId);
        } else {
          return [...prevWishlist, productId];
        }
      });
    };
 //  Apply Filters & Sorting
  const handleBuyNow = (product: Product) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {
      window.location.href = `/product/${product.slug.current}`;
    } else {
      Swal.fire({
        title: "Login Required!",
        text: "You need to log in to proceed with the purchase.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Go to Login",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.setItem("pendingProduct", product.slug.current);
          window.location.href = "/account";
        }
      });
    }
  };

  useEffect(() => {
    let updatedProducts = [...products];
    if (selectedCategory !== "All") {
      updatedProducts = updatedProducts.filter((p) => p.category === selectedCategory);
    }
    if (sortBy === "price-low") {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      updatedProducts.sort((a, b) => b.price - a.price);
    }
    setFilteredProducts(updatedProducts);
  }, [selectedCategory, sortBy, products]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const handlePageChange = (page: number) => setCurrentPage(page);

  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="max-w-7xl mx-auto px-1 py-16">
      {/* Filter & Sort Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between py-4 px-6 bg-[#FAF4F4] rounded-lg shadow-md mb-10 gap-4 md:gap-0 w-full">
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <span className="text-black font-medium">Category:</span>
          <select
            className="w-full md:w-[150px] h-[40px] border rounded px-3"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Chair">Chair</option>
            <option value="Bed">Bed</option>
            <option value="Table">Table</option>
          </select>
        </div>

        <div className="text-black font-medium text-center w-full md:w-auto">
          Showing {currentProducts.length} of {filteredProducts.length} results
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <span className="text-black font-medium">Sort by:</span>
          <select
            className="w-full md:w-[140px] h-[40px] border rounded px-3"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {currentProducts.map((product) => (
          <div key={product._id} className="bg-white shadow-lg rounded-lg p-4 transition-transform duration-300 hover:scale-105 border border-gray-200">

             {/* Wishlist Button */}
            <button className=" text-lg cursor-pointer bg-white rounded-full shadow-lg" onClick={() => toggleWishlist(product._id)}>
              {wishlist.includes(product._id) ? "🖤" : "🤍"}
            </button>
            <div className="relative w-full h-56 rounded-lg overflow-hidden">
              <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
              <p className="text-gray-600 text-md mt-1">${product.price}</p>
              <button className="mt-3 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition" onClick={() => handleBuyNow(product)}>
                Buy Now
              </button>
            </div>
          </div>
        ))}
     
      </div>
          {/* Pagination */}
          <div className="flex justify-center items-center mt-10">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-1 px-4 py-2 rounded-md text-lg transition-all duration-200 ${
              currentPage === index + 1 ? "bg-black text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;


