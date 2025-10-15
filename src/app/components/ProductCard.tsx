"use client";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "../context/CartContext";

interface Product {
  badge?: string;
  image: string;
  name: string;
  category?: string;
  size?: string;
  rating?: number | string;
  reviews?: number | string;
  price: number | string;
  originalPrice?: number | string;
  discount?: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(0); // 👈 initially 0 means "Add to Cart" show karega

  // Define color mapping for badges
  const badgeColors = {
    "NO. 1 FACE WASH": "bg-green-500",
    "BEST SELLER": "bg-red-500",
    "MOST LOVED SUNSCREEN": "bg-green-500",
    "Stock Running": "bg-red-500",
    "Customer Favorite": "bg-blue-500",
  };

  const badgeColor =
    product.badge !== undefined
      ? badgeColors[product.badge as keyof typeof badgeColors] || "bg-gray-400"
      : "bg-gray-400";

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col h-full">
      {/* Product Image Container */}
      <div className="relative bg-gray-50 pt-[133%]">
        {/* Badge */}
        {product.badge && (
          <div
            className={`absolute top-3 left-3 ${badgeColor} text-white text-[10px] font-bold px-2 py-1 rounded z-10`}
          >
            {product.badge}
          </div>
        )}

        {/* Product Image */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Product Name */}
        <h3 className="text-sm font-medium text-gray-900 leading-snug mb-1 line-clamp-3 min-h-[3.6rem]">
          {product.name}
        </h3>

        {/* Category/Description */}
        <p className="text-xs text-teal-600 mb-2 line-clamp-2">
          {product.category}
        </p>

        {/* Size */}
        {product.size && (
          <p className="text-sm text-gray-700 font-medium mb-2">
            {product.size}
          </p>
        )}

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <span className="text-yellow-400 text-sm">★</span>
            <span className="text-sm font-medium text-gray-900">
              {product.rating}
            </span>
          </div>
          {product.reviews && (
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
              </svg>
              <span>{product.reviews} Reviews</span>
            </div>
          )}
        </div>

        {/* Price Section */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl font-bold text-gray-900">
            ₹ {product.price}
          </span>
          {product.originalPrice && (
            <>
              <span className="text-sm text-gray-400 line-through">
                ₹ {product.originalPrice}
              </span>
              {product.discount && (
                <span className="bg-green-100 text-green-700 text-xs font-semibold px-1.5 py-0.5 rounded">
                  {product.discount}
                </span>
              )}
            </>
          )}
        </div>

        {/* ✅ Add to Cart Button OR Quantity Selector */}
        {quantity === 0 ? (
          // 👉 Initially show "Add to Cart"
          <button
            onClick={() => setQuantity(1)}
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2.5 rounded-md transition-all duration-300"
          >
            ADD TO CART
          </button>
        ) : (
          // 👉 After clicking, show quantity selector
          <div className="flex items-center justify-between border-2 border-cyan-500 rounded-md overflow-hidden transition-all duration-300">
            <button
              onClick={() => setQuantity(Math.max(0, quantity - 1))}
              className="text-cyan-500 font-bold text-xl w-10 h-10 flex items-center justify-center hover:bg-cyan-50"
            >
              −
            </button>
            <span className="font-semibold text-gray-900">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="text-cyan-500 font-bold text-xl w-10 h-10 flex items-center justify-center hover:bg-cyan-50"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
