"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CategoryNav({ categories }) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="পণ্যের বিভাগ"
      className="border-t border-base-200 bg-base-100"
    >
      <ul className="mx-auto flex h-12 max-w-6xl items-center gap-1 overflow-x-auto px-4">
        {categories.map((category) => {
          const href = `/category/${category.slug}`;
          const isActive = pathname === href;

          return (
            <li key={category.id} className="shrink-0">
              <Link
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={`flex items-center gap-1.5 rounded-lg border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  isActive
                    ? "border-[#047c37] bg-[#047f39] text-primary-content"
                    : "border-transparent hover:bg-base-200"
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.nameBn}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
