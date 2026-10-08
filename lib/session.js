import { cache } from "react";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

/** Current session or null. Cached so a request only hits the database once. */
export const getSession = cache(async () => {
  return auth.api.getSession({ headers: await headers() });
});
