import type { Metadata } from "next";
import { fraunces, inter, plexMono } from "./fonts";
import IndustrySolutions from "./IndustrySolutions";

export const metadata: Metadata = {
  title: "Solutions by Sector — Dantechdevs",
  description:
    "Software solutions engineered around how each sector actually runs — higher education, enterprise, fintech, logistics, healthcare and non-profit.",
};

export default function SolutionsPage() {
  return (
    <div className={`${fraunces.variable} ${inter.variable} ${plexMono.variable} flex flex-1`}>
      <IndustrySolutions />
    </div>
  );
}
