export const SORT_OPTIONS = [
  { value: "default", label: "ডিফল্ট" },
  { value: "price-asc", label: "দাম: কম থেকে বেশি" },
  { value: "price-desc", label: "দাম: বেশি থেকে কম" },
];

/** হোম পেজের জন্য শীর্ষ পরিবর্তনকারী: সবচেয়ে বেশি দর বৃদ্ধি বা পতনগুলো আগে থাকবে */
export function getTopMovers(products, direction, limit = 6) {
  return products
    .filter((product) => product.change.dir === direction)
    .sort((a, b) => Math.abs(b.change.pct) - Math.abs(a.change.pct))
    .slice(0, limit);
}

/** সংখ্যার মান অনুসারে প্রাইস সর্ট করে, যেন ১,৮৫০ টেক্সট হিসেবে তুলনা না হয় */
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

/** গড় প্রাইস অনুযায়ী বাজারগুলোর তালিকা, সবচেয়ে সস্তা বাজারটি সবার আগে থাকবে */
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
