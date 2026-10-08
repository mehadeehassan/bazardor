import Link from "next/link";
import { formatNumber, perUnitLabel } from "@/lib/format";
import PriceChange from "@/components/ui/PriceChange";

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="block rounded-2xl border border-base-300 bg-base-100 p-4 transition-colors hover:border-primary"
    >
      <div className="flex items-start gap-3">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-base-200 text-2xl">
          {product.image}
        </span>
        <div>
          <h3 className="text-base/6 font-semibold">{product.nameBn}</h3>
          <p className="text-xs/4">{perUnitLabel(product.unit)}</p>
        </div>
      </div>

      <div className="mt-3 flex items-end justify-between gap-2">
        <div>
          <p className="text-xs/4 text-base-content/70">আজকের দাম</p>
          <p className="text-xl/7 font-bold">
            {formatNumber(product.today)}{" "}
            <span className="text-sm font-medium">টাকা</span>
          </p>
        </div>
        <PriceChange change={product.change} />
      </div>
    </Link>
  );
}
