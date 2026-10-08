import { formatNumber, formatPercent, unitLabel } from "@/lib/format";

const ARROWS = { up: "▲", down: "▼", flat: "—" };
const COLORS = {
  up: "text-price-up",
  down: "text-price-down",
  flat: "text-base-content",
};

function TickerItem({ product }) {
  const { change } = product;

  return (
    <li className="flex h-9 shrink-0 items-center gap-1.5 whitespace-nowrap border-r border-base-200 px-4 text-sm">
      <span>{product.image}</span>
      <span className="font-medium">{product.nameBn}</span>
      <span>
        {formatNumber(product.today)} টাকা/{unitLabel(product.unit)}
      </span>
      <span className={`font-semibold ${COLORS[change.dir]}`}>
        {ARROWS[change.dir]} {formatPercent(change.pct)}
      </span>
    </li>
  );
}

/** Endless strip of today's prices. The list is rendered twice for a seamless loop. */
export default function PriceTicker({ products }) {
  return (
    <div
      className="ticker overflow-hidden border-b border-base-300 bg-base-100"
      aria-label="আজকের দামের তালিকা"
    >
      <div className="ticker-track flex w-max">
        <ul className="flex">
          {products.map((product) => (
            <TickerItem key={product.id} product={product} />
          ))}
        </ul>
        <ul className="flex" aria-hidden="true">
          {products.map((product) => (
            <TickerItem key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </div>
  );
}
