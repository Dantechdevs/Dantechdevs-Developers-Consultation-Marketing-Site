"use client";

import { useState } from "react";
import { Compass, ArrowRight } from "lucide-react";

const businessTypes = [
  { key: "chama", label: "Savings Group / Chama", example: "ChamaBiz", href: "/products/chamabiz", desc: "Contribution tracking, M-Pesa payments, and member management, like ChamaBiz." },
  { key: "legal", label: "Law Firm / Legal Practice", example: "WakiliPro", href: "/portfolio", desc: "Client marketplaces, case management, and advocate dashboards, like WakiliPro." },
  { key: "salon", label: "Salon / Beauty Business", example: "American Beauty", href: "/portfolio", desc: "Booking, POS, and service tracking, like American Beauty." },
  { key: "realestate", label: "Real Estate / Property", example: "Dante Estate", href: "/portfolio", desc: "Tenant, payment, and maintenance notification systems, like Dante Estate." },
  { key: "retail", label: "Retail / E-Commerce", example: "Jerann Traders", href: "/portfolio", desc: "Online storefronts with catalog and inventory management, like Jerann Traders." },
  { key: "agriculture", label: "Agriculture / Farm", example: "Mwirigi Farm", href: "/portfolio", desc: "Operational tracking with cloud-based media storage, like Mwirigi Farm." },
];

export default function ServiceFinder() {
  const [selected, setSelected] = useState<typeof businessTypes[0] | null>(null);

  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <span className="inline-flex items-center gap-2 border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold px-4 py-2 rounded-full">
        <Compass size={14} /> PLANNING TOOL
      </span>
      <h1 className="mt-6 text-3xl font-extrabold text-slate-900">Which Service Fits My Business?</h1>
      <p className="mt-3 text-slate-600">Select the type of business you run, and we'll show you a real Dantechdevs project similar to what you'd need.</p>

      <div className="mt-8 grid sm:grid-cols-2 gap-3">
        {businessTypes.map((b) => (
          <button key={b.key} onClick={() => setSelected(b)} className={`text-left border rounded-lg p-4 ${selected?.key === b.key ? "border-blue-500 bg-blue-50" : "border-slate-200 hover:border-blue-300"}`}>
            <p className="font-semibold text-slate-900">{b.label}</p>
          </button>
        ))}
      </div>

      {selected && (
        <div className="mt-8 border border-blue-200 bg-blue-50 rounded-lg p-6">
          <p className="text-xs font-bold text-blue-600 mb-2">RECOMMENDED EXAMPLE</p>
          <h3 className="text-xl font-bold text-slate-900 mb-2">{selected.example}</h3>
          <p className="text-slate-700 mb-4">{selected.desc}</p>
          <div className="flex gap-3">
            <a href={selected.href} className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-md flex items-center gap-2">
              See This Project <ArrowRight size={14} />
            </a>
            <a href="/contact#consultation-form" className="border border-blue-300 text-blue-700 text-sm font-semibold px-5 py-2.5 rounded-md">
              Discuss My Project
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
