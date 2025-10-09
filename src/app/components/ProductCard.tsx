"use client";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-3 hover:shadow-lg transition">
      <Link href={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="rounded-lg w-full h-48 object-cover"
        />
        <h3 className="font-semibold mt-2">{product.name}</h3>
        <p className="text-green-600 font-bold">₹{product.price}</p>
      </Link>
    </div>
  );
}
