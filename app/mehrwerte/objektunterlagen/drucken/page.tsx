import { Suspense } from "react";
import type { Metadata } from "next";
import ChecklistePrint from "@/components/tools/ChecklistePrint";

export const metadata: Metadata = {
  title: "Objektunterlagen-Checkliste — Calvin Linke",
  robots: { index: false, follow: false },
};

export default function DruckenPage() {
  return (
    <Suspense>
      <ChecklistePrint />
    </Suspense>
  );
}
