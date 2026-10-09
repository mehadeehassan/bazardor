import { gridClasses } from "@/components/products/ProductGrid";


export default function ProductGridSkeleton({ count = 6 }) {
  return (
    <div className={gridClasses} aria-busy="true" aria-label="লোড হচ্ছে">
      {Array.from({ length: count }, (_, index) => (
        <div
          key={index}
          className="h-34.5 rounded-2xl border border-base-300 bg-base-100 p-4"
        >
          <div className="flex gap-3">
            <div className="skeleton size-12 rounded-xl" />
            <div className="space-y-2 pt-1">
              <div className="skeleton h-4 w-28" />
              <div className="skeleton h-3 w-16" />
            </div>
          </div>
          <div className="mt-3 flex items-end justify-between">
            <div className="space-y-2">
              <div className="skeleton h-3 w-14" />
              <div className="skeleton h-5 w-20" />
            </div>
            <div className="skeleton h-6 w-14 rounded-xl" />
          </div>
        </div>
      ))}
    </div>
  );
}
