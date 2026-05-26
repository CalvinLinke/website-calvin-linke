import type { Metadata } from "next";
export const metadata: Metadata = { title: "Artikel" };
export default function Page() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-5 sm:px-8 max-w-4xl mx-auto">
      <p className="text-[#6B7280]">Artikel folgt.</p>
    </div>
  );
}
