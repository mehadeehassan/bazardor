import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import Container from "@/components/ui/Container";
import Avatar from "@/components/ui/Avatar";
import SignOutButton from "@/components/auth/SignOutButton";
import UpdateProfileForm from "@/components/auth/UpdateProfileForm";

export const metadata = { title: "আমার প্রোফাইল" };

export default async function ProfilePage() {
  const session = await getSession();
  if (!session) {
    redirect("/signin?redirect=/profile&reason=login-required");
  }

  const { user } = session;

  return (
    <Container size="3xl" className="space-y-6 py-10">
      <div className="space-y-1">
        <h1 className="text-2xl/8 font-bold">আমার প্রোফাইল</h1>
        <p className="text-sm text-base-content/70">
          আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
        </p>
      </div>

      <section className="flex flex-col gap-4 rounded-2xl border border-base-300 bg-base-100 p-6 sm:flex-row sm:items-center">
        <Avatar user={user} className="h-[70px] w-20 rounded-2xl text-3xl" />
        <div className="min-w-0 flex-1">
          <p className="truncate text-xl/7">{user.name}</p>
          <p className="truncate text-base text-base-content/70">{user.email}</p>
        </div>
        <SignOutButton />
      </section>

      <section className="space-y-5 rounded-2xl border border-base-300 bg-base-100 p-5">
        <h2 className="text-lg/7 font-semibold">তথ্য</h2>
        <div className="px-1">
          <UpdateProfileForm currentName={user.name} />
        </div>
      </section>
    </Container>
  );
}
