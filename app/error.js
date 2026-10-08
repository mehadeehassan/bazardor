"use client";

import Container from "@/components/ui/Container";

export default function Error({ reset }) {
  return (
    <Container size="md" className="py-16">
      <div className="rounded-2xl border border-base-300 bg-base-100 p-8 text-center">
        <h1 className="text-2xl font-bold">কিছু একটা সমস্যা হয়েছে</h1>
        <p className="mt-2 text-sm text-base-content/70">
          দামের তথ্য এখন আনা যাচ্ছে না। একটু পরে আবার চেষ্টা করুন।
        </p>
        <button
          type="button"
          onClick={reset}
          className="btn btn-primary mt-6 h-10 text-sm font-semibold"
        >
          আবার চেষ্টা করুন
        </button>
      </div>
    </Container>
  );
}
