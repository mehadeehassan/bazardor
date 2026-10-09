import { notFound, redirect } from "next/navigation";
import { getProductBySlug } from "@/lib/api";
import { getMarketRows, getPriceSummary } from "@/lib/products";
import { getSession } from "@/lib/session";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/product-details/Breadcrumbs";
import ProductHeader from "@/components/product-details/ProductHeader";
import PriceSummary from "@/components/product-details/PriceSummary";
import MarketPriceTable from "@/components/product-details/MarketPriceTable";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  return { title: product?.nameBn ?? "পণ্য পাওয়া যায়নি" };
}

export default async function ProductDetailsPage({ params }) {
  const { slug } = await params;

  const session = await getSession();
  if (!session) {
    redirect(`/signin?redirect=/product/${slug}&reason=login-required`);
  }

  const product = await getProductBySlug(slug);
  if (!product) notFound();

  return (
    <Container className="space-y-6 py-6">
      <Breadcrumbs
        items={[
          { label: "হোম", href: "/" },
          { label: product.categoryNameBn, href: `/category/${product.category}` },
          { label: product.nameBn },
        ]}
      />
      <ProductHeader product={product} />

      <div className="space-y-6 rounded-2xl border border-base-300 bg-base-100 p-5">
        <PriceSummary summary={getPriceSummary(product.markets)} unit={product.unit} />
        <MarketPriceTable rows={getMarketRows(product.markets)} />
      </div>
    </Container>
  );
}
