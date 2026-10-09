import { NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

// শুধুমাত্র সেশন কুকি আছে কি না তা চেক করে, যাতে সাইন-আউট থাকা ভিজিটরদের
// দ্রুত রিডাইরেক্ট করে দেওয়া যায়। তবে পেজগুলো সার্ভারে ঠিকই সেশন পুনরায় যাচাই করে।

export function proxy(request) {
  if (getSessionCookie(request)) {
    return NextResponse.next();
  }

  const signInUrl = new URL("/signin", request.url);
  signInUrl.searchParams.set("redirect", request.nextUrl.pathname);
  signInUrl.searchParams.set("reason", "login-required");
  return NextResponse.redirect(signInUrl);
}

export const config = {
  matcher: ["/product/:path*", "/profile"],
};
