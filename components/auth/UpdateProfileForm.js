"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { validateName } from "@/lib/validation";
import FormField from "@/components/auth/FormField";

export default function UpdateProfileForm({ currentName }) {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const name = new FormData(event.currentTarget).get("name").trim();

    const validationError = validateName(name);
    if (validationError) {
      toast.error(validationError);
      return;
    }

    setPending(true);
    const { error } = await authClient.updateUser({ name });
    setPending(false);

    if (error) {
      toast.error("তথ্য আপডেট করা যায়নি, আবার চেষ্টা করুন।");
      return;
    }

    toast.success("আপনার তথ্য আপডেট হয়েছে।");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <FormField
        label="নাম"
        name="name"
        defaultValue={currentName}
        placeholder="আপনার নাম"
        autoComplete="name"
      />
      <button
        type="submit"
        disabled={pending}
        className="btn btn-primary h-10 w-full text-sm font-semibold"
      >
        {pending && <span className="loading loading-spinner loading-xs" />}
        আপডেট
      </button>
    </form>
  );
}
