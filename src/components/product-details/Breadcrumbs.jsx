import Link from "next/link";

function Chevron() {
  return (
    <svg
      width="6"
      height="8"
      viewBox="0 0 6 8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden="true"
      className="opacity-60"
    >
      <path d="M1 1l4 3-4 3" />
    </svg>
  );
}

/** items: [{ label, href? }], the last one is the current page */
export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="breadcrumb" className="py-2 text-sm">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            {index > 0 && <Chevron />}
            {item.href ? (
              <Link href={item.href} className="hover:text-primary">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
