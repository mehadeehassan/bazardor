import { formatPercent } from "@/lib/format";

const STYLES = {
  up: { arrow: "▲", color: "text-price-up" },
  down: { arrow: "▼", color: "text-price-down" },
  flat: { arrow: "—", color: "text-base-content" },
};

/**
 * Arrow + percentage of today's price change.
 * "badge" is the pill used on product cards, "inline" is plain text.
 */
export default function PriceChange({ change, variant = "badge" }) {
  const { arrow, color } = STYLES[change.dir];
  const percent = formatPercent(change.pct);

  if (variant === "inline") {
    return (
      <span className={`whitespace-nowrap text-sm font-semibold ${color}`}>
        {arrow} {percent}
      </span>
    );
  }

  return (
    <span
      className={`inline-flex h-6 items-center gap-1 rounded-xl bg-base-200 px-2 text-xs ${color}`}
    >
      <span>{arrow}</span>
      <span className="font-semibold">{percent}</span>
    </span>
  );
}
