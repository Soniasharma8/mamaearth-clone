"use client";
import Image from "next/image";

export default function ProductCard({ product }) {
  // Define color mapping for badges
  const badgeColors = {
    "No.1 Face Wash": "bg-green-500",
    "Best Seller": "bg-yellow-500",
    "Stock Running": "bg-red-500",
    "Customer Favorite": "bg-blue-500",
  };

  const badgeColor = badgeColors[product.badge] || "bg-gray-400";

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

        {/* Dynamic Offer Tag */}
        {product.badge && (
          <span
            className={`absolute top-2 left-2 text-white text-xs font-semibold px-2 py-1 rounded-lg ${badgeColor}`}
          >
            {product.badge}
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
