import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-base-300 bg-base-100">
      <Container className="flex min-h-[68px] flex-col justify-between gap-1 py-3 text-sm sm:flex-row sm:items-center">
        <p>বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</p>
        <p>সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।</p>
      </Container>
    </footer>
  );
}
