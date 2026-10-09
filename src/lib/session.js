import { cache } from "react";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

/**
 * - বর্তমান সেশন বা null। ক্যাশ করা থাকে যাতে প্রতি রিকুয়েস্টে ডেটাবেসে মাত্র একবার হিট করে।
 * - যদি ডেটাবেস কানেক্ট না করা যায়, তবে ভিজিটরকে সাইন-আউট হিসেবে ধরা হবে,
 * - যাতে পাবলিক পেজগুলো স্বাভাবিকভাবে কাজ করতে পারে।
 */
export const getSession = cache(async () => {
// try ব্লকের বাইরে রিড করা হচ্ছে: Next.js একটি এরর থ্রো করে সংকেত দেয় যে "এই পেজটি ডাইনামিক"
  const requestHeaders = await headers();

  try {
    return await auth.api.getSession({ headers: requestHeaders });
  } catch (error) {
    console.error("Could not read the session:", error);
    return null;
  }
});
