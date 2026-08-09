"use client";

import { useState } from "react";
import { CalendarClock } from "lucide-react";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const times = ["Morning (9AM - 12PM)", "Afternoon (1PM - 4PM)", "Late Afternoon (4PM - 5PM)"];

export default function BookSlot() {
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");

  const href = day && time ? `/contact?preferred=${encodeURIComponent(day + " - " + time)}#consultation-form` : "/contact#consultation-form";

  return (
    <section className="max-w-xl mx-auto px-4 py-16">
      <span className="inline-flex items-center gap-2 border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold px-4 py-2 rounded-full">
        <CalendarClock size={14} /> PLANNING TOOL
      </span>
      <h1 className="mt-6 text-3xl font-extrabold text-slate-900">Book a Consultation Slot</h1>
      <p className="mt-3 text-slate-600">Pick a day and time that works for you, and we'll carry it into your consultation request.</p>

      <div className="mt-8">
        <p className="text-sm font-semibold text-slate-700 mb-2">Preferred Day</p>
        <div className="flex flex-wrap gap-2">
          {days.map((d) => (
            <button key={d} onClick={() => setDay(d)} className={`text-sm px-4 py-2 rounded-md border ${day === d ? "bg-blue-600 border-blue-600 text-white" : "border-slate-200 text-slate-700 hover:border-blue-300"}`}>
              {d}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <p className="text-sm font-semibold text-slate-700 mb-2">Preferred Time</p>
        <div className="flex flex-col gap-2">
          {times.map((t) => (
            <button key={t} onClick={() => setTime(t)} className={`text-left text-sm px-4 py-3 rounded-md border ${time === t ? "bg-blue-600 border-blue-600 text-white" : "border-slate-200 text-slate-700 hover:border-blue-300"}`}>
              {t}
            </button>
          ))}
        </div>
      </div>

      <a href={href} className="mt-8 block text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-3 rounded-md">
        Continue to Consultation Form →
      </a>
    </section>
  );
}
