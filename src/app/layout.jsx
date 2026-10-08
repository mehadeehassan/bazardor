import { Toaster } from "react-hot-toast";
import "@fontsource/hind-siliguri/bengali-400.css";
import "@fontsource/hind-siliguri/bengali-500.css";
import "@fontsource/hind-siliguri/bengali-600.css";
import "@fontsource/hind-siliguri/bengali-700.css";
import "@fontsource/hind-siliguri/latin-400.css";
import "@fontsource/hind-siliguri/latin-500.css";
import "@fontsource/hind-siliguri/latin-600.css";
import "@fontsource/hind-siliguri/latin-700.css";
import "./globals.css";
import { Suspense } from "react";
import { getCategories } from "@/lib/api";
import { getSession } from "@/lib/session";
import Header from "@/components/layout/Header";
import PriceTicker from "@/components/layout/PriceTicker";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: {
    default: "বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে",
    template: "%s | বাজার দর",
  },
  description:
    "চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার আজকের বাজার দর, বাজারভিত্তিক বিস্তারিত এবং দামের পরিবর্তন এক জায়গায়।",
};

export default async function RootLayout({ children }) {
  const [categories, session] = await Promise.all([
    getCategories(),
    getSession(),
  ]);

  return (
    <html lang="bn" data-theme="bazardor">
      <body className="flex min-h-screen flex-col">
        <Header categories={categories} user={session?.user} />
        <Suspense fallback={<div className="h-[37px] border-b border-base-300 bg-base-100" />}>
          <PriceTicker />
        </Suspense>
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
