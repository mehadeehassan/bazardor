import ProductCard from "@/components/products/ProductCard";

export const gridClasses = "grid gap-4 sm:grid-cols-2 lg:grid-cols-3";

export default function ProductGrid({ products }) {
  return (
    <div className={gridClasses}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
