// "use client";
// import Link from "next/link";
// import { useState } from "react";
// import { FaShoppingCart, FaUser } from "react-icons/fa";

// export default function Navbar() {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearch = (e) => {
//     e.preventDefault();
//     console.log("Searching for:", searchTerm);
//   };

//   const categories = [
//     "Home",
//     "Face",
//     "Hair",
//     "Makeup",
//     "Body",
//     "Baby",
//     "Combos",
//     "New Launches",
//     "Ingredients",
//     "All Products",
//     "Blog",
//     "Plant Goodness",
//     "Store Locator",
//   ];

//   return (
//     <header className="sticky top-0 z-50">
//       {/* 🔹 Top Offer / Announcement Bar */}
//       <div className="bg-[rgb(255,108,98)] text-white text-xs md:text-sm py-1 px-4">
//         <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-2">
//           {/* Right Side Text */}
//           <div className="text-right font-medium">
//             Asia’s First Brand with Made Safe Certified Products
//           </div>

//           {/* Left Side Offer */}
//           <div className="flex items-center space-x-1">
//             <span className="font-medium">
//               Karwa Chauth Special: Get a Kajal Free |
//             </span>
//             <span className="font-semibold">Code: FREEKAJAL |</span>
//             <Link href="/shop-now" className="underline hover:text-yellow-200">
//               Shop Now
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* 🔹 Main Navbar */}
//       <div className="bg-white shadow-md">
//         <div className="max-w-6xl mx-auto flex justify-between items-center py-2 px-4 text-gray-700">
//           {/* Logo */}
//           <Link href="/">
//             <img
//               src="/images/logo.png"
//               alt="MamaClone Logo"
//               width={120}
//               height={30}
//             />
//           </Link>

//           {/* Search Bar */}
//           <form onSubmit={handleSearch} className="flex mx-4 flex-1 max-w-md">
//             <input
//               type="text"
//               placeholder="Search products..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full border border-gray-300 rounded-l px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
//             />
//             <button
//               type="submit"
//               className="bg-sky-500 text-white px-3 py-1.5 rounded-r text-sm hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500-600"
//             >
//               Search
//             </button>
//           </form>

//           {/* Cart & Login */}
//           <div className="flex items-center space-x-4 text-gray-600 font-medium text-sm">
//             <Link
//               href="/cart"
//               className="flex items-center space-x-1 hover:text-sky-500 relative"
//             >
//               <FaShoppingCart size={18} />
//               <span>Cart</span>
//               <span className="absolute -top-2 -right-4 bg-sky-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
//                 3
//               </span>
//             </Link>
//             <Link
//               href="/login"
//               className="flex items-center space-x-1 hover:text-sky-500"
//             >
//               <FaUser size={18} />
//               <span>Login</span>
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Divider */}
//       <hr className="border-t border-gray-200" />

//       {/* 🔹 Category Navbar */}
//       <div className="bg-white">
//         <div className="max-w-7xl mx-auto flex overflow-x-auto space-x-7 py-3 px-25 text-gray-600 font-medium text-sm">
//           {categories.map((category, idx) => (
//             <Link
//               key={idx}
//               href={`/${category.toLowerCase().replace(/\s+/g, "-")}`}
//               className="hover:text-sky-500 whitespace-nowrap"
//             >
//               {category}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </header>
//   );
// }

"use client";
import Link from "next/link";
import { useState } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";

// Category dropdown data (you can later move this to /data/navData.js)
const subCategories = {
  face: ["Face Wash", "Sunscreen", "Moisturizer"],
  hair: ["Shampoo", "Conditioner", "Hair Oil"],
  body: ["Body Wash", "Body Lotion", "Scrub"],
  baby: ["Baby Shampoo", "Baby Cream", "Baby Lotion"],
  makeup: ["Lip Balm", "BB Cream", "Foundation"],
};

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [hovered, setHovered] = useState(null);

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
      {/* 🔹 Top Bar */}
      <div className="bg-[rgb(255,108,98)] text-white text-xs md:text-sm py-1 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-2">
          <div className="text-right font-medium">
            Asia’s First Brand with Made Safe Certified Products
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

      {/* 🔹 Main Navbar */}
      <div className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center py-2 px-4 text-gray-700">
          {/* Logo */}
          <Link href="/">
            <img
              src="/images/logo.png"
              alt="MamaClone Logo"
              width={120}
              height={30}
            />
          </Link>

          {/* Search Bar */}
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

          {/* Cart & Login */}
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

      {/* 🔹 Category Navbar */}
      <div className="bg-white relative">
        <div className="max-w-7xl mx-auto flex overflow-x-auto space-x-7 py-3 px-5 text-gray-600 font-medium text-sm">
          {categories.map((category, idx) => {
            const key = category.toLowerCase().replace(/\s+/g, "-");
            const isMainCategory = subCategories[key];

            return (
              <div
                key={idx}
                className="relative"
                onMouseEnter={() => setHovered(key)}
                onMouseLeave={() => setHovered(null)}
              >
                <Link
                  href={key === "home" ? "/" : `/product-category/${key}`}
                  className="hover:text-sky-500 whitespace-nowrap"
                >
                  {category}
                </Link>

                {/* 🔹 Dropdown */}
                {isMainCategory && hovered === key && (
                  <div className="absolute left-0 top-8 bg-white shadow-lg rounded-md p-3 w-48">
                    {subCategories[key].map((sub, i) => (
                      <Link
                        key={i}
                        href={`/product-category/${key}/${sub
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="block text-gray-600 hover:text-sky-500 py-1 text-sm"
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
}
