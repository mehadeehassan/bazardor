import Link from "next/link";
import Container from "@/components/ui/Container";

/** Title, subtitle, card and the way back home shared by sign in and sign up */
export default function AuthLayout({ title, subtitle, children }) {
  return (
    <Container size="md" className="space-y-6 py-10">
      <div className="space-y-1">
        <h1 className="text-2xl/8 font-bold">{title}</h1>
        <p className="text-sm text-base-content/70">{subtitle}</p>
      </div>

      <div className="rounded-2xl border border-base-300 bg-base-100 p-6">
        {children}
      </div>

      <Link href="/" className="block text-center text-sm text-base-content/60">
        ← হোম পেজে ফিরে যান
      </Link>
    </Container>
  );
}
