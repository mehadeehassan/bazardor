"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { GitHubIcon, GoogleIcon } from "@/components/auth/SocialIcons";

const PROVIDERS = [
  { id: "google", label: "Google দিয়ে চালিয়ে যান", Icon: GoogleIcon },
  { id: "github", label: "GitHub দিয়ে চালিয়ে যান", Icon: GitHubIcon },
];


export default function SocialLogin({ callbackURL = "/" }) {
  const [pendingProvider, setPendingProvider] = useState(null);

  async function handleClick(provider) {
    setPendingProvider(provider);
    const { error } = await authClient.signIn.social({ provider, callbackURL });


    if (error) {
      toast.error("সোশ্যাল লগইন করা যায়নি, আবার চেষ্টা করুন।");
      setPendingProvider(null);
    }
  }

  return (
    <>
      <div className="flex items-center gap-4 text-xs" role="separator">
        <span className="h-0.5 flex-1 bg-base-content/10" />
        <span>অথবা</span>
        <span className="h-0.5 flex-1 bg-base-content/10" />
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        {PROVIDERS.map(({ id, label, Icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => handleClick(id)}
            disabled={pendingProvider !== null}
            className="btn btn-ghost h-10 border-base-300 px-2 text-sm font-semibold"
          >
            {pendingProvider === id ? (
              <span className="loading loading-spinner loading-xs" />
            ) : (
              <Icon />
            )}
            {label}
          </button>
        ))}
      </div>
    </>
  );
}
