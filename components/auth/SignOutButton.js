"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function SignOutButton() {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  async function handleClick() {
    setPending(true);
    const { error } = await authClient.signOut();

    if (error) {
      setPending(false);
      toast.error("সাইন আউট করা যায়নি, আবার চেষ্টা করুন।");
      return;
    }

    toast.success("সাইন আউট হয়েছে।");
    router.push("/");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={pending}
      className="btn btn-outline btn-error h-10 text-sm font-semibold"
    >
      {pending && <span className="loading loading-spinner loading-xs" />}
      ↩ সাইন আউট
    </button>
  );
}
