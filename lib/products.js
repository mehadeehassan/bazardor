export const SORT_OPTIONS = [
  { value: "default", label: "ডিফল্ট" },
  { value: "price-asc", label: "দাম: কম থেকে বেশি" },
  { value: "price-desc", label: "দাম: বেশি থেকে কম" },
];

/** Top movers for the home page: the biggest rises or falls first */
export function getTopMovers(products, direction, limit = 6) {
  return products
    .filter((product) => product.change.dir === direction)
    .sort((a, b) => Math.abs(b.change.pct) - Math.abs(a.change.pct))
    .slice(0, limit);
}

/** Sorts by the numeric price, so 1,850 is never compared as text */
export function sortProducts(products, order) {
  if (order === "price-asc") {
    return [...products].sort((a, b) => a.today - b.today);
  }
  if (order === "price-desc") {
    return [...products].sort((a, b) => b.today - a.today);
  }
  return products;
}

function marketAverage(market) {
  return (market.min + market.max) / 2;
}

/** Markets with their average price, cheapest first */
export function getMarketRows(markets) {
  return markets
    .map((market) => ({ ...market, average: marketAverage(market) }))
    .sort((a, b) => a.average - b.average);
}

export function getPriceSummary(markets) {
  const averages = markets.map(marketAverage);
  const total = averages.reduce((sum, value) => sum + value, 0);

  return {
    min: Math.min(...markets.map((market) => market.min)),
    max: Math.max(...markets.map((market) => market.max)),
    average: Math.round(total / averages.length),
  };
}
