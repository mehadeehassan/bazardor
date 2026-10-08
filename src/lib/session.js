import { cache } from "react";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

/**
 * Current session or null. Cached so a request only hits the database once.
 * If the database is unreachable the visitor is treated as signed out,
 * so the public pages keep working.
 */
export const getSession = cache(async () => {
  // read outside the try block: Next.js signals "this page is dynamic" by throwing
  const requestHeaders = await headers();

  try {
    return await auth.api.getSession({ headers: requestHeaders });
  } catch (error) {
    console.error("Could not read the session:", error);
    return null;
  }
});
