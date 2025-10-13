"use client";
import Link from "next/link";

export default function CategoryDropdown({ subcategories }) {
  return (
    <div className="absolute top-full left-0 bg-white shadow-lg rounded-md p-4 w-48 z-50">
      {subcategories.map((sub, idx) => (
        <Link
          key={idx}
          href={sub.link}
          className="block px-2 py-1 text-gray-700 hover:text-sky-500 hover:bg-gray-100 rounded"
        >
          {sub.name}
        </Link>
      ))}
    </div>
  );
}
