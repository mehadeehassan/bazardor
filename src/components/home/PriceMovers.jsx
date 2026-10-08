import ProductGrid from "@/components/products/ProductGrid";

const HEADINGS = {
  up: { arrow: "▲", color: "text-price-up", title: "আজ দাম বেড়েছে" },
  down: { arrow: "▼", color: "text-price-down", title: "আজ দাম কমেছে" },
};

/** Top risers or fallers of the day */
export default function PriceMovers({ direction, products }) {
  const { arrow, color, title } = HEADINGS[direction];

  return (
    <section className="space-y-3">
      <h2 className="flex items-center gap-2 text-xl/7 font-bold">
        <span className={`text-base font-normal ${color}`} aria-hidden="true">
          {arrow}
        </span>
        {title}
      </h2>
      <ProductGrid products={products} />
    </section>
  );
}
