"use client";

import { useState } from "react";
import { Headset, Send } from "lucide-react";

type Ticket = {
  id: string;
  priority: "HIGH" | "MEDIUM" | "LOW";
  title: string;
  system: string;
  date: string;
  status: "Open" | "In Progress" | "Resolved";
  request: string;
  log: { by: string; date: string; note: string }[];
};

const priorityColor: Record<string, string> = {
  HIGH: "bg-red-100 text-red-700",
  MEDIUM: "bg-yellow-100 text-yellow-700",
  LOW: "bg-slate-100 text-slate-600",
};

const statusColor: Record<string, string> = {
  Open: "text-blue-600",
  "In Progress": "text-yellow-600",
  Resolved: "text-green-600",
};

const sampleTickets: Ticket[] = [
  {
    id: "DTD-2026-041",
    priority: "MEDIUM",
    title: "Request to add new payment gateway callback URL",
    system: "M-Pesa Reconciliation Module",
    date: "2026-08-02 09:30",
    status: "In Progress",
    request: "Please update the production callback endpoint for the M-Pesa Daraja API to handle secondary server IP addresses.",
    log: [
      { by: "System", date: "2026-08-02 09:30", note: "Ticket logged via client request." },
      { by: "Dantechdevs Team", date: "2026-08-02 10:15", note: "Engineer assigned. Firewall rules updated on primary gateway." },
    ],
  },
  {
    id: "DTD-2026-039",
    priority: "LOW",
    title: "Booking calendar timezone configuration",
    system: "American Beauty Platform",
    date: "2026-07-28 14:10",
    status: "Resolved",
    request: "Booking times are showing in UTC instead of EAT for salon staff.",
    log: [
      { by: "System", date: "2026-07-28 14:10", note: "Ticket logged via client request." },
      { by: "Dantechdevs Team", date: "2026-07-28 15:40", note: "Timezone config corrected across all booking views. Confirmed resolved by client." },
    ],
  },
];

export default function SupportDesk() {
  const [active, setActive] = useState(sampleTickets[0]);
  const [subject, setSubject] = useState("");
  const [system, setSystem] = useState("");
  const [details, setDetails] = useState("");

  function handleSubmit() {
    const message = `Support Request\nSubject: ${subject}\nSystem: ${system}\nDetails: ${details}`;
    window.open(`https://wa.me/254712328150?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <span className="inline-flex items-center gap-2 border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold px-4 py-2 rounded-full">
        <Headset size={14} /> SUPPORT DESK
      </span>
      <h1 className="mt-6 text-3xl font-extrabold text-slate-900">Client Support Desk</h1>
      <p className="mt-3 max-w-xl text-slate-600">Existing clients can track support requests here. Below are sample tickets illustrating how requests are logged and resolved — not live client data.</p>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="space-y-3">
          <p className="text-xs font-bold text-slate-400 tracking-wide">SAMPLE TICKETS (ILLUSTRATIVE)</p>
          {sampleTickets.map((t) => (
            <button key={t.id} onClick={() => setActive(t)} className={`w-full text-left border rounded-lg p-4 ${active.id === t.id ? "border-blue-500 bg-blue-50" : "border-slate-200"}`}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono text-blue-600">{t.id}</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${priorityColor[t.priority]}`}>{t.priority} PRIORITY</span>
              </div>
              <p className="font-semibold text-sm text-slate-900">{t.title}</p>
              <p className="text-xs text-slate-500">{t.system}</p>
              <p className={`text-xs font-semibold mt-1 ${statusColor[t.status]}`}>● {t.status}</p>
            </button>
          ))}
        </div>

        <div className="md:col-span-2 border border-slate-200 rounded-lg p-6">
          <p className="text-sm text-slate-500 mb-1">System: <span className="font-semibold text-slate-900">{active.system}</span></p>
          <div className="border border-slate-200 rounded-md p-4 my-4">
            <p className="text-xs font-bold text-slate-400 mb-1">ORIGINAL REQUEST:</p>
            <p className="text-sm text-slate-700">{active.request}</p>
          </div>
          <p className="text-xs font-bold text-slate-400 mb-3">ACTIVITY &amp; RESOLUTION LOG</p>
          <div className="space-y-4">
            {active.log.map((l, i) => (
              <div key={i} className="border-b border-slate-100 pb-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-blue-600">{l.by}</span>
                  <span className="text-xs text-slate-400">{l.date}</span>
                </div>
                <p className="text-sm text-slate-700 mt-1">{l.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 border border-slate-200 rounded-lg p-6 max-w-2xl">
        <h3 className="font-bold text-slate-900 mb-1">Submit a Real Support Request</h3>
        <p className="text-sm text-slate-600 mb-4">This sends your request directly to our team on WhatsApp.</p>
        <div className="space-y-3">
          <input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm" />
          <input value={system} onChange={(e) => setSystem(e.target.value)} placeholder="Which system or project?" className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm" />
          <textarea value={details} onChange={(e) => setDetails(e.target.value)} placeholder="Describe the issue..." rows={3} className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm" />
          <button onClick={handleSubmit} className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-3 rounded-md">
            <Send size={16} /> Send via WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
