"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { getAuthErrorMessage } from "@/lib/auth-errors";
import { validateSignIn } from "@/lib/validation";
import FormField from "@/components/auth/FormField";
import SocialLogin from "@/components/auth/SocialLogin";

export default function SignInForm({ redirectTo, loginRequired }) {
  const router = useRouter();
  const [pending, setPending] = useState(false);


  useEffect(() => {
    if (loginRequired) {
      toast.error("এই পেজ দেখতে আগে সাইন ইন করুন।", { id: "login-required" });
    }
  }, [loginRequired]);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const values = {
      email: form.get("email").trim(),
      password: form.get("password"),
    };

    const validationError = validateSignIn(values);
    if (validationError) {
      toast.error(validationError);
      return;
    }

    setPending(true);
    const { error } = await authClient.signIn.email(values);
    setPending(false);

    if (error) {
      toast.error(getAuthErrorMessage(error));
      return;
    }

    toast.success("সাইন ইন সফল হয়েছে।");
    router.push(redirectTo);
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <FormField
        label="ইমেইল"
        name="email"
        type="email"
        placeholder="you@example.com"
        autoComplete="email"
      />
      <FormField
        label="পাসওয়ার্ড"
        name="password"
        type="password"
        placeholder="কমপক্ষে ৮ অক্ষর"
        autoComplete="current-password"
      />

      <button
        type="submit"
        disabled={pending}
        className="btn btn-primary h-10 w-full text-sm font-semibold"
      >
        {pending && <span className="loading loading-spinner loading-xs" />}
        সাইন ইন
      </button>

      <SocialLogin callbackURL={redirectTo} />

      <p className="text-center text-sm">
        অ্যাকাউন্ট নেই?{" "}
        <Link href="/signup" className="text-primary">
          সাইন আপ করুন
        </Link>
      </p>
    </form>
  );
}
