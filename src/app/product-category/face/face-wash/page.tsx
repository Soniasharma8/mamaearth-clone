import products from "../../../data/productsData";
import ProductCard from "../../../components/ProductCard";

export default function FaceWashPage() {
  // Filter products for Face Wash subcategory
  const faceWashProducts = products.filter(product =>
    product.name.toLowerCase().includes("face wash")
  );

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-4">Face Wash</h1>
      <p>Here are our face wash products.</p>

      {faceWashProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {faceWashProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="mt-8 text-gray-600">No face wash products found.</p>
      )}
    </div>
  );
}
