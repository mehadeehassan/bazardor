import { getProducts } from "@/lib/api";
import { formatCount } from "@/lib/format";
import { getTopMovers } from "@/lib/products";
import Container from "@/components/ui/Container";
import Hero from "@/components/home/Hero";
import PriceMovers from "@/components/home/PriceMovers";
import ProductGrid from "@/components/products/ProductGrid";

export default async function HomePage() {
  const products = await getProducts();

  return (
    <Container className="space-y-10 py-6">
      <Hero />
      <PriceMovers direction="up" products={getTopMovers(products, "up")} />
      <PriceMovers direction="down" products={getTopMovers(products, "down")} />

      <section id="সব-পণ্য" className="space-y-3">
        <h2 className="text-xl/7 font-bold">সব পণ্য</h2>
        <div className="space-y-4">
          <p className="text-sm text-base-content/70">
            মোট {formatCount(products.length)}টি পণ্য দেখানো হচ্ছে
          </p>
          <ProductGrid products={products} />
        </div>
      </section>
    </Container>
  );
}
