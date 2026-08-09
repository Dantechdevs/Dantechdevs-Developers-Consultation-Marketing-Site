"use client";

import { useState } from "react";
import { Smartphone, CheckCircle2 } from "lucide-react";

const questions = [
  { key: "customerPays", q: "Do customers pay your business directly?", desc: "e.g. a customer paying for a booking or product" },
  { key: "youPay", q: "Does your business send money out to others?", desc: "e.g. paying suppliers, refunds, or payouts to members" },
  { key: "instant", q: "Do you need instant payment confirmation on your site?", desc: "e.g. unlocking access right after payment" },
];

export default function MpesaChecker() {
  const [answers, setAnswers] = useState<Record<string, boolean>>({});

  function toggle(key: string) {
    setAnswers((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  const answered = Object.keys(answers).length === questions.length;
  let recommendation = "";
  if (answered) {
    if (answers.customerPays && answers.instant) recommendation = "M-Pesa STK Push";
    else if (answers.customerPays && !answers.instant) recommendation = "M-Pesa C2B (Paybill/Till)";
    else if (answers.youPay) recommendation = "M-Pesa B2C";
    else recommendation = "Let's discuss your exact flow";
  }

  const descriptions: Record<string, string> = {
    "M-Pesa STK Push": "Best for real-time payments — customers get a payment prompt directly on their phone and your system gets instant confirmation.",
    "M-Pesa C2B (Paybill/Till)": "Best when customers pay via your Paybill or Till number, with confirmation processed shortly after.",
    "M-Pesa B2C": "Best for sending money out — payouts, refunds, or disbursements from your business to customers or members.",
    "Let's discuss your exact flow": "Your setup sounds like it needs a custom combination — let's talk through the exact flow during a consultation.",
  };

  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <span className="inline-flex items-center gap-2 border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold px-4 py-2 rounded-full">
        <Smartphone size={14} /> PLANNING TOOL
      </span>
      <h1 className="mt-6 text-3xl font-extrabold text-slate-900">M-Pesa Integration Checker</h1>
      <p className="mt-3 text-slate-600">Answer a few quick questions to find out which M-Pesa integration your project needs.</p>

      <div className="mt-8 space-y-4">
        {questions.map((q) => (
          <label key={q.key} className={`flex items-start gap-3 border rounded-lg p-4 cursor-pointer ${answers[q.key] ? "border-blue-500 bg-blue-50" : "border-slate-200"}`}>
            <input type="checkbox" checked={!!answers[q.key]} onChange={() => toggle(q.key)} className="w-4 h-4 mt-1" />
            <span>
              <p className="font-medium text-slate-900">{q.q}</p>
              <p className="text-xs text-slate-500">{q.desc}</p>
            </span>
          </label>
        ))}
      </div>

      {answered && (
        <div className="mt-8 bg-slate-950 text-white rounded-lg p-6">
          <p className="text-xs font-bold text-blue-400 mb-2">RECOMMENDED INTEGRATION</p>
          <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><CheckCircle2 size={20} className="text-green-400" /> {recommendation}</h3>
          <p className="text-slate-300 text-sm mb-4">{descriptions[recommendation]}</p>
          <a href="/contact#consultation-form" className="inline-block bg-blue-600 hover:bg-blue-700 text-sm font-semibold px-5 py-2.5 rounded-md">Discuss This Integration →</a>
        </div>
      )}
    </section>
  );
}
