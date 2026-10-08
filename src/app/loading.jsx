import Container from "@/components/ui/Container";
import ProductGridSkeleton from "@/components/products/ProductGridSkeleton";

export default function HomeLoading() {
  return (
    <Container className="space-y-10 py-6">
      <div className="skeleton h-[283px] rounded-3xl" />
      <div className="space-y-3">
        <div className="skeleton h-7 w-40" />
        <ProductGridSkeleton />
      </div>
      <div className="space-y-3">
        <div className="skeleton h-7 w-40" />
        <ProductGridSkeleton />
      </div>
    </Container>
  );
}
