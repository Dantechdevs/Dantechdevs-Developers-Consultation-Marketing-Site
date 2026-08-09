"use client";

import { useState } from "react";
import { GanttChartSquare } from "lucide-react";

const services = [
  { label: "Website Design & Development", weeks: 3 },
  { label: "Web Application Development", weeks: 4 },
  { label: "Custom Software Development", weeks: 6 },
  { label: "M-Pesa / Payment Integration", weeks: 3 },
  { label: "Cloud, Hosting & Infrastructure", weeks: 1 },
];

const stages = ["Discover", "Design", "Develop", "Deploy"];

export default function TimelinePlanner() {
  const [selected, setSelected] = useState<string[]>([]);

  function toggle(label: string) {
    setSelected((prev) => (prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]));
  }

  const chosen = services.filter((s) => selected.includes(s.label));
  const totalWeeks = chosen.reduce((sum, s) => sum + s.weeks, 0);

  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <span className="inline-flex items-center gap-2 border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold px-4 py-2 rounded-full">
        <GanttChartSquare size={14} /> PLANNING TOOL
      </span>
      <h1 className="mt-6 text-3xl font-extrabold text-slate-900">Project Timeline Planner</h1>
      <p className="mt-3 text-slate-600">Select the services your project needs to see a rough timeline across our Discover → Design → Develop → Deploy process.</p>

      <div className="mt-8 grid sm:grid-cols-2 gap-3">
        {services.map((s) => (
          <label key={s.label} className={`flex items-center justify-between border rounded-lg p-4 cursor-pointer ${selected.includes(s.label) ? "border-blue-500 bg-blue-50" : "border-slate-200"}`}>
            <span className="flex items-center gap-3">
              <input type="checkbox" checked={selected.includes(s.label)} onChange={() => toggle(s.label)} className="w-4 h-4" />
              <span className="text-sm font-medium text-slate-800">{s.label}</span>
            </span>
            <span className="text-xs text-slate-500">~{s.weeks}w</span>
          </label>
        ))}
      </div>

      {chosen.length > 0 && (
        <div className="mt-10 border border-slate-200 rounded-lg p-6">
          <p className="text-sm text-slate-600 mb-1">Estimated total timeline</p>
          <p className="text-2xl font-extrabold text-slate-900 mb-6">~{totalWeeks} weeks</p>

          <div className="flex w-full h-8 rounded-md overflow-hidden">
            {stages.map((stage, i) => (
              <div key={stage} className={`flex items-center justify-center text-xs font-semibold text-white ${["bg-blue-400", "bg-blue-500", "bg-blue-600", "bg-blue-700"][i]}`} style={{ width: "25%" }}>
                {stage}
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-2">Illustrative breakdown — exact phase durations depend on final scope.</p>

          <a href="/contact#consultation-form" className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-3 rounded-md">Get an Exact Timeline →</a>
        </div>
      )}
    </section>
  );
}
