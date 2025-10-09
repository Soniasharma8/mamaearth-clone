import HeroBanner from "./components/HeroBanner";
import ProductCard from "./components/ProductCard";
import products from "../app/data/productsData";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <section className="max-w-6xl mx-auto px-4 py-8 text-black ">
        <h2 className="text-2xl font-semibold mb-4">Best Sellers</h2>
        <p className="font-size-md mb-6 text-black">
          Explore best-selling safe, natural, and 100% toxin-free baby and
          beauty products from Mamaearth. Get amazing deals and start your
          toxin-free skin, hair, and baby care journey.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.slice(0, 4).map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
