"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { getAuthErrorMessage } from "@/lib/auth-errors";
import { validateSignUp } from "@/lib/validation";
import FormField from "@/components/auth/FormField";
import SocialLogin from "@/components/auth/SocialLogin";

export default function SignUpForm() {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const values = {
      name: form.get("name").trim(),
      email: form.get("email").trim(),
      password: form.get("password"),
      confirmPassword: form.get("confirmPassword"),
    };

    const validationError = validateSignUp(values);
    if (validationError) {
      toast.error(validationError);
      return;
    }

    setPending(true);
    const { error } = await authClient.signUp.email({
      name: values.name,
      email: values.email,
      password: values.password,
    });
    setPending(false);

    if (error) {
      toast.error(getAuthErrorMessage(error));
      return;
    }

    toast.success("অ্যাকাউন্ট তৈরি হয়েছে। এবার সাইন ইন করুন।");
    router.push("/signin");
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <FormField
        label="নাম"
        name="name"
        placeholder="যেমন: রহিম উদ্দিন"
        autoComplete="name"
      />
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
        autoComplete="new-password"
      />
      <FormField
        label="পাসওয়ার্ড নিশ্চিত করুন"
        name="confirmPassword"
        type="password"
        placeholder="আবার লিখুন"
        autoComplete="new-password"
      />

      <button
        type="submit"
        disabled={pending}
        className="btn btn-primary h-10 w-full text-sm font-semibold"
      >
        {pending && <span className="loading loading-spinner loading-xs" />}
        অ্যাকাউন্ট তৈরি করুন
      </button>

      <SocialLogin callbackURL="/" />

      <p className="text-center text-sm">
        অ্যাকাউন্ট আছে?{" "}
        <Link href="/signin" className="text-primary">
          সাইন ইন করুন
        </Link>
      </p>
    </form>
  );
}
