import Link from "next/link";
import Container from "@/components/ui/Container";

/** 404-style message with a way back home. Used for unknown routes and empty categories. */
export default function NotFoundMessage({
  title = "পেজটি খুঁজে পাওয়া যায়নি",
  description = "আপনি যে পেজটি খুঁজছেন সেটি নেই বা সরিয়ে ফেলা হয়েছে।",
}) {
  return (
    <Container size="md" className="py-16">
      <div className="rounded-2xl border border-base-300 bg-base-100 p-8 text-center">
        <p className="text-5xl" aria-hidden="true">
          🧺
        </p>
        <h1 className="mt-4 text-2xl font-bold">{title}</h1>
        <p className="mt-2 text-sm text-base-content/70">{description}</p>
        <Link href="/" className="btn btn-primary mt-6 h-10 text-sm font-semibold">
          হোম পেজে ফিরে যান
        </Link>
      </div>
    </Container>
  );
}
