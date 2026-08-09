"use client";

import { useState } from "react";

const steps = [
  { title: "Discover", time: "1 - 2 Weeks", desc: "Analyze your business, current workflows, pain points, and strategic goals.", deliverables: ["Needs Assessment Document", "Problem Statement", "Scope Definition"] },
  { title: "Plan", time: "1 Week", desc: "Define technical architecture, timeline, and project milestones.", deliverables: ["Technical Architecture", "Project Timeline", "Milestone Plan"] },
  { title: "Design", time: "1 - 2 Weeks", desc: "Design the user experience and system structure before writing code.", deliverables: ["UI/UX Wireframes", "Database Schema", "System Design Doc"] },
  { title: "Develop", time: "3 - 6 Weeks", desc: "Build the actual application following the agreed design and architecture.", deliverables: ["Working Application", "Progress Check-ins", "Code Documentation"] },
  { title: "Test", time: "1 Week", desc: "Verify functionality, fix bugs, and confirm the system meets requirements.", deliverables: ["QA Test Report", "Bug Fixes", "Performance Checks"] },
  { title: "Deploy", time: "3 - 5 Days", desc: "Launch the system to production with proper configuration and monitoring.", deliverables: ["Live Deployment", "Domain & SSL Setup", "Handover Documentation"] },
  { title: "Support", time: "Ongoing", desc: "Provide ongoing maintenance, updates, and fixes after launch.", deliverables: ["Bug Fix SLA", "Security Updates", "Direct Developer Access"] },
];

export default function Methodology() {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <section className="max-w-6xl mx-auto px-4 pb-16">
      <div className="border border-slate-200 rounded-lg p-8">
        <p className="text-blue-600 text-xs font-bold tracking-wide mb-2">OUR METHODOLOGY</p>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-2">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Discover → Plan → Design → Develop → Support</h2>
          <a href="/contact#consultation-form" className="whitespace-nowrap bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-3 rounded-md">START PROJECT DISCOVERY →</a>
        </div>
        <p className="text-slate-600 text-sm mb-8">Understand the problem → Design the solution → Build the technology → Deploy it → Support and improve it.</p>

        <div className="flex flex-wrap gap-3 mb-8">
          {steps.map((s, i) => (
            <button key={s.title} onClick={() => setActive(i)} className={`text-left px-4 py-3 rounded-md border min-w-[120px] ${active === i ? "bg-blue-600 border-blue-600 text-white" : "bg-white border-slate-200 text-slate-700 hover:border-blue-300"}`}>
              <p className="text-[10px] font-mono opacity-70">STEP {String(i + 1).padStart(2, "0")}</p>
              <p className="font-bold text-sm">{s.title}</p>
              <p className="text-xs opacity-80">{s.time}</p>
            </button>
          ))}
        </div>

        <div className="border border-slate-200 rounded-lg p-6 grid md:grid-cols-2 gap-6">
          <div>
            <span className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">Stage {String(active + 1).padStart(2, "0")}</span>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title} Phase <span className="text-sm font-normal text-slate-500">({step.time})</span></h3>
            <p className="text-sm text-slate-600">{step.desc}</p>
          </div>
          <div>
            <p className="font-bold text-slate-900 text-sm mb-3">PHASE DELIVERABLES:</p>
            <ul className="space-y-2">
              {step.deliverables.map((d) => (
                <li key={d} className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="text-green-600">✓</span> {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
