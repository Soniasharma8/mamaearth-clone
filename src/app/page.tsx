import HeroBanner from "./components/HeroBanner";
import ProductCard from "./components/ProductCard";
import products from "../app/data/productsData";
import sectionsData from "../app/data/sectionsData";
import ProductSlider from "./components/ProductSlider";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <ProductSlider products={products} />

      {/* Dynamic Sections */}
      {sectionsData.map((section, index) => (
        <section
          key={index}
          className="max-w-6xl mx-auto px-4 py-8 mt-10 text-black"
        >
          {/* Title and Button */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">{section.title}</h2>
            <Link
              href="/all-products"
              className="bg-sky-500 text-white text-lg rounded px-4 py-1.5 hover:bg-sky-600 transition"
            >
              View All
            </Link>
          </div>

          {/* Description */}
          <p className="text-black mb-6 font-medium text-sm md:text-base">
            {section.description}
          </p>

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {products.slice(0, 4).map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
