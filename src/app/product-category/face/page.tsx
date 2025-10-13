import products from "../../data/productsData";
import ProductCard from "../../components/ProductCard";

export default function FacePage() {
  // Filter products for Face category
  const faceProducts = products.filter(product =>
    product.category.toLowerCase() === "skincare"
  );

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-4">Face Products</h1>
      <p>Explore all skin and face care products here.</p>

      {faceProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {faceProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="mt-8 text-gray-600">No products found in this category.</p>
      )}
    </div>
  );
}
