"use client";

import { useState } from "react";
import { Calculator, Clock, CheckCircle2 } from "lucide-react";

const services = [
  { label: "Website Design & Development", base: 35000, weeks: 3 },
  { label: "Web Application Development", base: 55000, weeks: 4 },
  { label: "Custom Software Development", base: 80000, weeks: 6 },
  { label: "Business Management System", base: 70000, weeks: 5 },
  { label: "Financial & Payment Integration", base: 45000, weeks: 3 },
  { label: "API & System Integration", base: 40000, weeks: 3 },
  { label: "Cloud, Hosting & Infrastructure", base: 15000, weeks: 1 },
  { label: "Cybersecurity & System Security", base: 40000, weeks: 2 },
  { label: "IT Consultancy & Strategy", base: 25000, weeks: 2 },
  { label: "Technical Support & Maintenance", base: 12000, weeks: 1 },
];

export default function CostEstimator() {
  const [selected, setSelected] = useState<string[]>([]);

  function toggle(label: string) {
    setSelected((prev) => (prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]));
  }

  const chosen = services.filter((s) => selected.includes(s.label));
  const baseTotal = chosen.reduce((sum, s) => sum + s.base, 0);
  const lowEstimate = baseTotal;
  const highEstimate = Math.round(baseTotal * 1.25);
  const maxWeeks = chosen.reduce((max, s) => Math.max(max, s.weeks), 0);
  const minWeeks = chosen.length ? Math.max(1, maxWeeks - 2) : 0;

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <span className="inline-flex items-center gap-2 border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold px-4 py-2 rounded-full">
        <Calculator size={14} /> INTERACTIVE TOOL
      </span>
      <h1 className="mt-6 text-3xl font-extrabold text-slate-900">Project Cost Estimator</h1>
      <p className="mt-3 max-w-xl text-slate-600">Select the services your project needs for a live starting estimate. Final pricing is confirmed during your consultation.</p>

      <div className="mt-8 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-3">
          {services.map((s) => (
            <label key={s.label} className={`flex items-center justify-between border rounded-lg p-4 cursor-pointer ${selected.includes(s.label) ? "border-blue-500 bg-blue-50" : "border-slate-200"}`}>
              <span className="flex items-center gap-3">
                <input type="checkbox" checked={selected.includes(s.label)} onChange={() => toggle(s.label)} className="w-4 h-4" />
                <span className="font-medium text-slate-800 text-sm">{s.label}</span>
              </span>
              <span className="text-xs text-slate-500 whitespace-nowrap">+KES {s.base.toLocaleString()} base</span>
            </label>
          ))}
        </div>

        <div className="md:sticky md:top-24 h-fit border border-slate-200 rounded-lg p-6">
          <p className="text-blue-600 text-xs font-bold tracking-wide mb-1">LIVE ESTIMATE</p>
          <h3 className="text-lg font-bold text-slate-900 mb-4">Estimated Project Budget</h3>

          {chosen.length === 0 ? (
            <p className="text-sm text-slate-400">Select services on the left to see your estimate.</p>
          ) : (
            <>
              <p className="text-3xl font-extrabold text-slate-900">
                KES {lowEstimate.toLocaleString()} – {highEstimate.toLocaleString()}
              </p>
              <p className="text-xs text-slate-500 mb-4">Estimated range</p>

              <div className="border border-slate-200 rounded-md p-3 flex items-center justify-between mb-4">
                <span className="flex items-center gap-2 text-sm text-slate-600"><Clock size={16} /> Delivery Time</span>
                <span className="text-sm font-semibold text-slate-900">~{minWeeks}-{maxWeeks} Weeks</span>
              </div>

              <p className="text-xs font-bold text-slate-500 mb-2">SCOPE INCLUDED:</p>
              <ul className="space-y-1.5 mb-6">
                {chosen.map((s) => (
                  <li key={s.label} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle2 size={14} className="text-green-600" /> {s.label}
                  </li>
                ))}
              </ul>
            </>
          )}

          <a href="/contact#consultation-form" className="block text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-3 rounded-md">
            GET EXACT QUOTE →
          </a>
        </div>
      </div>
    </section>
  );
}
