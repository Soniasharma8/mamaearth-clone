import products from "../data/productsData";
import ProductCard from "../components/ProductCard";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto py-10 px-4">
        <h1 className="text-2xl font-bold mb-4">All Products</h1>
        <p>Explore all products here.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  }

  // Filter products based on category
  const categoryProducts = products.filter(product =>
    product.category && product.category.toLowerCase() === category.toLowerCase()
  );

  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-4">{categoryName} Products</h1>
      <p>Explore all {categoryName.toLowerCase()} care products here.</p>

      {categoryProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="mt-8 text-gray-600">No products found in this category.</p>
      )}
    </div>
  );
}
