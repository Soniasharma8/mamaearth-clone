import products from "../../data/productsData";
import ProductCard from "../../components/ProductCard";

export default function HairPage() {
  // Filter products for Hair category
  const hairProducts = products.filter(product =>
    product.category.toLowerCase() === "hair"
  );

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-4">Hair Products</h1>
      <p>Explore all hair care products here.</p>

      {hairProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {hairProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="mt-8 text-gray-600">No products found in this category.</p>
      )}
    </div>
  );
}
