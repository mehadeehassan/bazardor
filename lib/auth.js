import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { nextCookies } from "better-auth/next-js";
import { MongoClient } from "mongodb";

// The local fallback only keeps `next build` working without env vars;
// real deployments must set MONGODB_URI.
const client = new MongoClient(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017"
);
const db = client.db(process.env.MONGODB_DB_NAME || "bazardor");

export const auth = betterAuth({
  database: mongodbAdapter(db, { client }),
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 8,
    // After signing up the user is sent to the sign in page
    autoSignIn: false,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID ?? "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? "",
    },
  },
  // must stay the last plugin
  plugins: [nextCookies()],
});
