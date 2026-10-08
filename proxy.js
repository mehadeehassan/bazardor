import { NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

// Only checks that a session cookie exists, so signed-out visitors are
// bounced quickly. The pages still verify the session on the server.
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
