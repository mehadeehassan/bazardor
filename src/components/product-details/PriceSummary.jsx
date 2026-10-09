import { formatNumber, perUnitLabel } from "@/lib/format";

function SummaryStat({ label, value, caption, color }) {
  return (
    <div className="rounded-2xl border border-base-300 bg-base-100 px-6 py-4">
      <p className="text-xs/[18px]">{label}</p>
      <p className={`text-2xl/8 font-bold ${color}`}>
        {formatNumber(value)}{" "}
        <span className="text-sm font-medium">টাকা</span>
      </p>
      <p className="text-xs/[18px]">{caption}</p>
    </div>
  );
}

export default function PriceSummary({ summary, unit }) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg/7 font-semibold">দামের সারসংক্ষেপ</h2>
      <div className="grid gap-3 sm:grid-cols-3">
        <SummaryStat
          label="সর্বনিম্ন দাম"
          value={summary.min}
          caption="সবচেয়ে কম দামের বাজার"
          color="text-price-down"
        />
        <SummaryStat
          label="সর্বাধিক দাম"
          value={summary.max}
          caption="সবচেয়ে বেশি দামের বাজার"
          color="text-price-up"
        />
        <SummaryStat
          label="গড় দাম"
          value={summary.average}
          caption={`${perUnitLabel(unit)}-এর হিসাবে`}
          color="text-primary"
        />
      </div>
    </section>
  );
}
