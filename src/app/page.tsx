import HeroBanner from "./components/HeroBanner";
import ProductCard from "./components/ProductCard";
import products from "../app/data/productsData";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <HeroBanner />

      {/* Best Seller Section */}
      <section className="max-w-6xl mx-auto px-4 py-8 mt-10 text-black">
        {/* Title and Button Row */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Best Sellers</h2>
          <Link
            href="/all-products"
            className="bg-sky-500 text-white text-lg rounded px-4 py-1.5 hover:bg-sky-600 transition"
          >
            View All
          </Link>
        </div>

        {/* Description */}
        <p className="text-black mb-6 font-medium text-sm md:text-base">
          Explore best-selling safe, natural, and 100% toxin-free baby and
          beauty products from Mamaearth. Get amazing deals and start <br />
          your toxin-free skin, hair, and baby care journey.
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.slice(0, 4).map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-8 mt-10 text-black">
        {/* Title and Button Row */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Lightning sale</h2>
          <Link
            href="/all-products"
            className="bg-sky-500 text-white text-lg rounded px-4 py-1.5 hover:bg-sky-600 transition"
          >
            View All
          </Link>
        </div>

        {/* Description */}
        <p className="text-black mb-6 font-medium text-sm md:text-base">
          Explore the goodness of nature from Mamaearth. Take a look at our
          lightning offers
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.slice(0, 4).map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-8 mt-10 text-black">
        {/* Title and Button Row */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">New Launches</h2>
          <Link
            href="/all-products"
            className="bg-sky-500 text-white text-lg rounded px-4 py-1.5 hover:bg-sky-600 transition"
          >
            View All
          </Link>
        </div>

        {/* Description */}
        <p className="text-black mb-6 font-medium text-sm md:text-base">
          Explore the goodness of nature from Mamaearth. Take a look at our
          newly launched toxin-free and natural products for hair, skin, and
          babies
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.slice(0, 4).map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-8 mt-10 text-black">
        {/* Title and Button Row */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Baby Care</h2>
          <Link
            href="/all-products"
            className="bg-sky-500 text-white text-lg rounded px-4 py-1.5 hover:bg-sky-600 transition"
          >
            View All
          </Link>
        </div>

        {/* Description */}
        <p className="text-black mb-6 font-medium text-sm md:text-base">
          Explore the goodness of nature from Mamaearth. Take a look at our
          newly launched toxin-free and natural products for hair, skin, and
          babies
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.slice(0, 4).map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-8 mt-10 text-black">
        {/* Title and Button Row */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Baby Care</h2>
          <Link
            href="/all-products"
            className="bg-sky-500 text-white text-lg rounded px-4 py-1.5 hover:bg-sky-600 transition"
          >
            View All
          </Link>
        </div>

        {/* Description */}
        <p className="text-black mb-6 font-medium text-sm md:text-base">
          Your little bundle of joy deserves nothing but the best. Explore
          MadeSafe Certified, natural, 100% toxin-free & gentle baby care
          products by Mamaearth. Give your little one the care they deserve!
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.slice(0, 4).map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-8 mt-10 text-black">
        {/* Title and Button Row */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Baby Care</h2>
          <Link
            href="/all-products"
            className="bg-sky-500 text-white text-lg rounded px-4 py-1.5 hover:bg-sky-600 transition"
          >
            View All
          </Link>
        </div>

        {/* Description */}
        <p className="text-black mb-6 font-medium text-sm md:text-base">
          Your little bundle of joy deserves nothing but the best. Explore
          MadeSafe Certified, natural, 100% toxin-free & gentle baby care
          products by Mamaearth. Give your little one the care they deserve!
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.slice(0, 4).map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-8 mt-10 text-black">
        {/* Title and Button Row */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Baby Care</h2>
          <Link
            href="/all-products"
            className="bg-sky-500 text-white text-lg rounded px-4 py-1.5 hover:bg-sky-600 transition"
          >
            View All
          </Link>
        </div>

        {/* Description */}
        <p className="text-black mb-6 font-medium text-sm md:text-base">
          Your little bundle of joy deserves nothing but the best. Explore
          MadeSafe Certified, natural, 100% toxin-free & gentle baby care
          products by Mamaearth. Give your little one the care they deserve!
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.slice(0, 4).map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
