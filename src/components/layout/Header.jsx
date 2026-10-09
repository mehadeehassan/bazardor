import Link from "next/link";
import { formatBanglaDate } from "@/lib/format";
import CategoryNav from "@/components/layout/CategoryNav";
import UserMenu from "@/components/layout/UserMenu";

export default function Header({ categories, user }) {
  return (
    <header className="border-b border-base-300 bg-base-100">
      <div className="mx-auto flex h-17 max-w-291 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-lg">
            🛒
          </span>
          <span className="leading-none">
            <span className="block text-xl/7 font-bold">বাজার দর</span>
            <span className="block text-xs/4">{formatBanglaDate()}</span>
          </span>
        </Link>

        {user ? (
          <UserMenu user={user} />
        ) : (
          <div className="flex items-center gap-2">
            <Link href="/signin" className="btn btn-ghost h-10 text-sm font-semibold">
              সাইন ইন
            </Link>
            <Link href="/signup" className="btn btn-primary h-10 text-sm font-semibold">
              সাইন আপ
            </Link>
          </div>
        )}
      </div>

      <CategoryNav categories={categories} />
    </header>
  );
}
