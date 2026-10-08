import { notFound } from "next/navigation";
import { getCategoryBySlug, getProducts } from "@/lib/api";
import { formatCount } from "@/lib/format";
import Container from "@/components/ui/Container";
import NotFoundMessage from "@/components/ui/NotFoundMessage";
import CategoryProducts from "@/components/products/CategoryProducts";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  return { title: category?.nameBn ?? "বিভাগ পাওয়া যায়নি" };
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  if (!category) notFound();

  const products = await getProducts(slug);

  if (products.length === 0) {
    return (
      <NotFoundMessage
        title={`${category.nameBn} বিভাগে কোনো পণ্য নেই`}
        description="এই বিভাগের পণ্যের দাম এখনও যোগ করা হয়নি।"
      />
    );
  }

  return (
    <Container className="space-y-6 py-6">
      <header className="flex items-center gap-3 rounded-2xl border border-base-300 bg-base-100 p-5">
        <span className="text-4xl" aria-hidden="true">
          {category.icon}
        </span>
        <div>
          <h1 className="text-2xl/8 font-bold">{category.nameBn}</h1>
          <p className="text-sm text-base-content/70">
            {formatCount(products.length)}টি পণ্যের আজকের দাম ও পরিবর্তন
          </p>
        </div>
      </header>

      <CategoryProducts products={products} />
    </Container>
  );
}
