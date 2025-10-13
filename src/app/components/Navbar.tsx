"use client";
import Link from "next/link";
import { useState } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { subCategories } from "../data/navData.js";

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  const categories = [
    "Home",
    "Face",
    "Hair",
    "Makeup",
    "Body",
    "Baby",
    "Combos",
    "New Launches",
    "Ingredients",
    "All Products",
    "Blog",
    "Plant Goodness",
    "Store Locator",
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[rgb(255,108,98)] text-white text-xs md:text-sm py-1 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-2">
          <div className="text-right font-medium">
            Asia's First Brand with Made Safe Certified Products
          </div>
          <div className="flex items-center space-x-1">
            <span className="font-medium">
              Karwa Chauth Special: Get a Kajal Free |
            </span>
            <span className="font-semibold">Code: FREEKAJAL |</span>
            <Link href="/shop-now" className="underline hover:text-yellow-200">
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center py-2 px-4 text-gray-700">
          <Link href="/">
            <img
              src="/images/logo.png"
              alt="MamaClone Logo"
              width={120}
              height={30}
            />
          </Link>
          <form onSubmit={handleSearch} className="flex mx-4 flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 rounded-l px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <button
              type="submit"
              className="bg-sky-500 text-white px-3 py-1.5 rounded-r text-sm hover:bg-sky-600"
            >
              Search
            </button>
          </form>
          <div className="flex items-center space-x-4 text-gray-600 font-medium text-sm">
            <Link
              href="/cart"
              className="flex items-center space-x-1 hover:text-sky-500 relative"
            >
              <FaShoppingCart size={18} />
              <span>Cart</span>
              <span className="absolute -top-2 -right-4 bg-sky-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                3
              </span>
            </Link>
            <Link
              href="/login"
              className="flex items-center space-x-1 hover:text-sky-500"
            >
              <FaUser size={18} />
              <span>Login</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-200" />

      {/* Category Navbar */}
      <nav className="bg-white relative">
        <div className="max-w-7xl mx-auto flex space-x-7 py-3 px-28 text-gray-600 font-15px text-sm">
          {categories.map((category, idx) => {
            const key = category.toLowerCase().replace(/\s+/g, "-");
            const isMainCategory = subCategories[key];

            return (
              <div key={idx} className="relative group">
                <Link
                  href={key === "home" ? "/" : `/product-category/${key}`}
                  className="hover:text-sky-500 whitespace-nowrap"
                >
                  {category}
                </Link>

                {/* Mega Menu - Compact Version */}
                {isMainCategory && (
                  <div
                    className="
                      absolute left-0 top-full mt-0
                      bg-white shadow-xl rounded-b-lg px-6 py-5 z-50 border border-gray-200
                      hidden group-hover:block
                    "
                    style={{
                      minWidth: "400px",
                      maxWidth: "500px",
                    }}
                  >
                    <div className="grid grid-cols-2 gap-3">
                      {/* Explore Section */}
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-3 text-sm">
                          Explore
                        </h3>
                        <div className="space-y-2">
                          <Link
                            href={`/new-launches`}
                            className="block text-gray-600 hover:text-sky-500 text-sm"
                          >
                            New Launches
                          </Link>
                          <Link
                            href={`/best-sellers`}
                            className="block text-gray-600 hover:text-sky-500 text-sm"
                          >
                            Best Sellers
                          </Link>
                          <Link
                            href={`/combos`}
                            className="block text-gray-600 hover:text-sky-500 text-sm"
                          >
                            Combos
                          </Link>
                          <Link
                            href={`/gift-packs`}
                            className="block text-gray-600 hover:text-sky-500 text-sm"
                          >
                            Gift Packs
                          </Link>
                        </div>
                      </div>

                      {/* Category Specific Section */}
                      <div>
                        <div className="flex justify-between items-center mb-3">
                          <h3 className="font-semibold text-gray-800 text-sm">
                            {category}
                          </h3>
                          <Link
                            href={`/product-category/${key}`}
                            className="text-sky-500 text-xs hover:underline"
                          >
                            See All
                          </Link>
                        </div>
                        <div className="space-y-2">
                          {subCategories[key].slice(0, 8).map((sub, sIdx) => (
                            <Link
                              key={sIdx}
                              href={`/product-category/${sub.slug}`}
                              className="block text-gray-600 hover:text-sky-500 text-sm"
                            >
                              {sub.name}
                            </Link>
                          ))}
                          {subCategories[key].length > 8 && (
                            <Link
                              href={`/product-category/${key}`}
                              className="block text-sky-500 hover:underline text-sm font-medium mt-2"
                            >
                              See All
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
