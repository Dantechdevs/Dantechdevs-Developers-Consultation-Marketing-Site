"use client";

import { useState } from "react";

const SERVICES = [
  "Custom Software Development",
  "SaaS Platform Development",
  "Web Development",
  "Mobile App Development",
  "Digital Transformation Consulting",
  "Other",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function ConsultationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Something went wrong. Please try again.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white border border-slate-200 rounded-lg p-8 text-center">
        <h3 className="text-lg font-bold text-slate-900 mb-2">
          Thanks — request received!
        </h3>
        <p className="text-sm text-slate-600">
          We&apos;ll be in touch within 24 hours to schedule your consultation.
        </p>
      </div>
    );
  }

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6">
      <h2 className="text-lg font-bold text-slate-900 mb-4">
        Schedule Project Consultation
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Honeypot field — hidden from real users, bots tend to fill it */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">
              Your Full Name *
            </label>
            <input
              name="full_name"
              required
              placeholder="e.g. Jane Wanjiru"
              className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="e.g. jane@company.co.ke"
              className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="+254 7XX XXX XXX"
              className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">
              Organization / Institution
            </label>
            <input
              name="organization"
              placeholder="e.g. Company Name"
              className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">
              Primary Service Needed *
            </label>
            <select
              name="service_needed"
              required
              className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm bg-white"
            >
              {SERVICES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">
              Preferred Consultation Date
            </label>
            <input
              type="date"
              name="preferred_date"
              min={today}
              className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1">
            Project Specifications &amp; Questions *
          </label>
          <textarea
            name="project_details"
            required
            rows={4}
            placeholder="Describe your current challenge, project goals, estimated timeframe, or questions..."
            className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm"
          />
        </div>

        <p className="text-xs text-slate-500">
          Your information is used only to respond to your inquiry.
        </p>

        {status === "error" && (
          <p className="text-sm text-red-600">{errorMsg}</p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full md:w-auto bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-md hover:bg-blue-700 disabled:opacity-60"
        >
          {status === "submitting" ? "Submitting..." : "Submit Consultation Request"}
        </button>
      </form>
    </div>
  );
}
