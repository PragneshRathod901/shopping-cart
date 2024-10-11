import { fetchProducts } from "@/app/lib/product_service";
import ProductCard from "./ProductCard";

export default async function ProductGrid() {
  const products = await fetchProducts();

  return (
    <div className="flex flex-wrap gap-4">
      {products.data.map((item) => (
        <ProductCard key={item.id} data={item} />
      ))}
    </div>
  );
}
