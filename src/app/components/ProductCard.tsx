"use client";
import Link from "next/link";

// components/ProductCard.jsx

import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 p-4">
      {/* Product Image */}
      <div className="relative w-full h-72 mb-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-xl"
        />
        {/* Offer Tag */}
        {product.offer && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-lg">
            {product.offer}
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500">{product.category}</p>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <span className="text-yellow-500">★</span>
          <span className="text-sm text-gray-700">{product.rating}</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-gray-900">
            ₹{product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ₹{product.originalPrice}
            </span>
          )}
        </div>

        {/* Add to Cart */}
        <button className="w-full mt-2 bg-sky-500 text-white text-sm py-2 rounded-lg hover:bg-sky-600 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

