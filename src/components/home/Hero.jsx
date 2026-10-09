import Image from "next/image";
import { formatBanglaDate } from "@/lib/format";

export default function Hero() {
  return (
    <section className="rounded-3xl border border-base-300 bg-base-100 px-4 py-4 md:py-2.25">
      <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:justify-between">
        <div className="md:w-xl">
          <p className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            {formatBanglaDate()}
          </p>
          <h1 className="mt-2 text-3xl/tight font-bold md:text-4xl/tight">
            আজকের বাজারের দাম এক নজরে
          </h1>
          <p className="mt-5 text-base/6 text-base-content/70">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>
          <a
            href="#সব-পণ্য"
            className="btn btn-primary mt-7 h-10 text-sm font-semibold"
          >
            সব পণ্য দেখুন
          </a>
        </div>

        <Image
          src="/bazar-hero.png"
          alt="ঝুড়িতে রাখা তাজা ফল ও সবজি"
          width={315}
          height={263}
          priority
          className="h-auto w-78.75 max-w-full"
        />
      </div>
    </section>
  );
}
