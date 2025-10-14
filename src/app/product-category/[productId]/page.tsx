interface ProductDetailProps {
  params: Promise<{
    productId: string;
  }>;
}

export default async function ProductDetail({ params }: ProductDetailProps) {
  const { productId } = await params;
  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-xl font-bold">Product Details: {productId}</h1>
    </div>
  );
}
