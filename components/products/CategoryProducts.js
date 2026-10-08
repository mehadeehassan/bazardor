"use client";

import { useState } from "react";
import { formatCount } from "@/lib/format";
import { SORT_OPTIONS, sortProducts } from "@/lib/products";
import ProductGrid from "@/components/products/ProductGrid";

/** Sort bar, product count and the grid of products for one category */
export default function CategoryProducts({ products }) {
  const [order, setOrder] = useState("default");
  const sortedProducts = sortProducts(products, order);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-end gap-2 rounded-2xl border border-base-300 bg-base-100 p-4">
        <label htmlFor="sort-order" className="text-sm text-base-content/70">
          সাজান
        </label>
        <select
          id="sort-order"
          value={order}
          onChange={(event) => setOrder(event.target.value)}
          className="select select-sm w-auto text-xs"
        >
          {SORT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <p className="text-sm text-base-content/70">
        মোট {formatCount(products.length)}টি পণ্য দেখানো হচ্ছে
      </p>
      <ProductGrid products={sortedProducts} />
    </div>
  );
}
