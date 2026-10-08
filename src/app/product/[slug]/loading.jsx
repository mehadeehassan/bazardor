import Container from "@/components/ui/Container";

export default function ProductLoading() {
  return (
    <Container className="space-y-6 py-6">
      <div className="skeleton h-5 w-56" />
      <div className="skeleton h-[174px] rounded-2xl" />
      <div className="skeleton h-[640px] rounded-2xl" />
    </Container>
  );
}
