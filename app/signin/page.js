import AuthLayout from "@/components/auth/AuthLayout";
import SignInForm from "@/components/auth/SignInForm";

export const metadata = { title: "সাইন ইন" };

/** Only same-site paths are allowed as a redirect target */
function safeRedirect(path) {
  return path?.startsWith("/") && !path.startsWith("//") ? path : "/";
}

export default async function SignInPage({ searchParams }) {
  const { redirect, reason } = await searchParams;

  return (
    <AuthLayout
      title="সাইন ইন"
      subtitle="বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।"
    >
      <SignInForm
        redirectTo={safeRedirect(redirect)}
        loginRequired={reason === "login-required"}
      />
    </AuthLayout>
  );
}
