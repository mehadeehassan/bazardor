import { formatNumber } from "@/lib/format";

/** Prices in each market, cheapest average first */
export default function MarketPriceTable({ rows }) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg/7 font-semibold">বাজারভিত্তিক আজকের দাম</h2>

      <div className="overflow-x-auto rounded-2xl border border-base-300 bg-base-100">
        <table className="table table-zebra min-w-[640px] leading-normal">
          <thead>
            <tr className="text-sm text-base-content/60">
              <th className="font-bold">বাজার</th>
              <th className="font-bold">বিভাগ</th>
              <th className="text-right font-bold">সর্বনিম্ন</th>
              <th className="text-right font-bold">সর্বাধিক</th>
              <th className="text-right font-bold">গড়</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {rows.map((row) => (
              <tr key={row.market}>
                <td className="font-medium">{row.market}</td>
                <td>{row.division}</td>
                <td className="text-right">{formatNumber(row.min)} টাকা</td>
                <td className="text-right">{formatNumber(row.max)} টাকা</td>
                <td className="text-right font-semibold">
                  {formatNumber(row.average)} টাকা
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
