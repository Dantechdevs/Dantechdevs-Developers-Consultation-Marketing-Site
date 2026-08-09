import type { Metadata } from "next";
import { inter, plexMono } from "./fonts";
import Products from "./Products";

export const metadata: Metadata = {
  title: "Proprietary Products — Dantechdevs",
  description:
    "Off-the-shelf, enterprise-grade software platforms built by Dantechdevs — ready to deploy and custom-extend, from campus management to fintech and AI security.",
};

export default function ProductsPage() {
  return (
    <div className={`${inter.variable} ${plexMono.variable} flex flex-1`}>
      <Products />
    </div>
  );
}
