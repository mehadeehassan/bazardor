import Container from "@/components/ui/Container";
import ProductGridSkeleton from "@/components/products/ProductGridSkeleton";

export default function CategoryLoading() {
  return (
    <Container className="space-y-6 py-6">
      <div className="skeleton h-[94px] rounded-2xl" />
      <div className="space-y-4">
        <div className="skeleton h-[66px] rounded-2xl" />
        <div className="skeleton h-5 w-44" />
        <ProductGridSkeleton count={4} />
      </div>
    </Container>
  );
}
