"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Avatar from "@/components/ui/Avatar";
import { authClient } from "@/lib/auth-client";

export default function UserMenu({ user }) {
  const router = useRouter();
  const menuRef = useRef(null);
  const [open, setOpen] = useState(false);

  // close on outside click or Escape
  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event) {
      if (!menuRef.current?.contains(event.target)) setOpen(false);
    }
    function handleKeyDown(event) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  async function handleSignOut() {
    setOpen(false);
    const { error } = await authClient.signOut();

    if (error) {
      toast.error("সাইন আউট করা যায়নি, আবার চেষ্টা করুন।");
      return;
    }
    toast.success("সাইন আউট হয়েছে।");
    router.push("/");
    router.refresh();
  }

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="btn btn-ghost h-10 gap-2 px-0.75 pr-2 text-sm font-medium"
      >
        <Avatar user={user} />
        <span className="max-w-24 truncate">{user.name}</span>
        <span className="text-xs font-normal" aria-hidden="true">
          ▾
        </span>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full z-30 mt-2 w-64 rounded-2xl border border-base-300 bg-base-100 p-2 shadow-lg"
        >
          <div className="px-3 pb-2 pt-1">
            <p className="truncate text-sm">{user.name}</p>
            <p className="truncate text-xs text-base-content/70">
              {user.email}
            </p>
          </div>

          <Link
            href="/profile"
            role="menuitem"
            onClick={() => setOpen(false)}
            className="flex h-8.25 items-center rounded-lg px-3 text-sm hover:bg-base-200"
          >
            👤 আমার প্রোফাইল
          </Link>
          <button
            type="button"
            role="menuitem"
            onClick={handleSignOut}
            className="flex h-8.25 w-full items-center rounded-lg px-3 text-sm text-error hover:bg-base-200"
          >
            ↩ সাইন আউট
          </button>
        </div>
      )}
    </div>
  );
}
