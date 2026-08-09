"use client";

import { useState } from "react";
import { Code2, Globe, LayoutTemplate, Building2, CreditCard, Cpu, Server, ShieldAlert, Compass, Wrench, CheckCircle2, Clock, Tag, Calculator } from "lucide-react";

const categories = ["All Services", "Custom & Web Apps", "Business Systems", "Payments & APIs", "Cloud & Infrastructure", "Cybersecurity", "Consultancy"];

const services = [
  { icon: Code2, category: "Custom & Web Apps", title: "Custom Software Development", desc: "Tailor-made software applications engineered for specific business workflows and operations.", points: ["Operational & Administrative Workflows", "Financial Management & Ledger Systems", "Reporting & Analytics Dashboards"], weeks: "~6 Weeks", from: "From KES 80,000" },
  { icon: Globe, category: "Custom & Web Apps", title: "Web Application Development", desc: "Modern, secure, and responsive web portals accessible from any desktop or mobile browser.", points: ["Management Information Systems", "Customer & Staff Portals", "Online Registration & Booking"], weeks: "~4 Weeks", from: "From KES 55,000" },
  { icon: LayoutTemplate, category: "Custom & Web Apps", title: "Website Design & Development", desc: "Professional, search-optimized websites communicating your brand, values, and offerings.", points: ["Corporate & Institutional Sites", "School, Salon & NGO Websites", "Content Management Systems"], weeks: "~3 Weeks", from: "From KES 35,000" },
  { icon: Building2, category: "Business Systems", title: "Business Management Systems", desc: "Centralized platforms for bookings, inventory, invoicing, and staff/customer portals.", points: ["Booking & Scheduling Systems", "Inventory & POS Management", "Automated Invoicing"], weeks: "~5 Weeks", from: "From KES 70,000" },
  { icon: CreditCard, category: "Payments & APIs", title: "Financial & Payment Integration", desc: "Streamlined digital payment gateways supporting M-Pesa, automated receipts, and reconciliation.", points: ["M-Pesa STK Push / C2B / B2C", "Automated Receipting", "Bank Gateway & Card Integration"], weeks: "~3 Weeks", from: "From KES 45,000" },
  { icon: Cpu, category: "Payments & APIs", title: "API & System Integration", desc: "Connecting disparate business software, mobile money, SMS providers, and third-party tools.", points: ["Payment Gateway & Bank APIs", "SMS & Email Notification Gateways", "Third-Party API Integration"], weeks: "~3 Weeks", from: "From KES 40,000" },
  { icon: Server, category: "Cloud & Infrastructure", title: "Cloud, Hosting & Infrastructure", desc: "Reliable deployment, domain management, SSL security, database setup, and backups.", points: ["Deployment & Domain Setup", "SSL/TLS Certificate Installation", "Automated Database Backups"], weeks: "~1 Week", from: "From KES 15,000" },
  { icon: ShieldAlert, category: "Cybersecurity", title: "Cybersecurity & System Security", desc: "Server hardening, access control, vulnerability assessments, and secure API audits.", points: ["Application Vulnerability Assessment", "Access Control Hardening", "Encrypted Data Protection"], weeks: "~2 Weeks", from: "From KES 40,000" },
  { icon: Compass, category: "Consultancy", title: "IT Consultancy & Strategy", desc: "Strategic advice to select the right technology, digitize business processes, and maximize ROI.", points: ["Digital Transformation Roadmap", "Requirements Analysis", "Technology Selection & Evaluation"], weeks: "~2 Weeks", from: "From KES 25,000" },
  { icon: Wrench, category: "Consultancy", title: "Technical Support & Maintenance", desc: "Proactive maintenance, bug fixes, updates, database optimization, and guaranteed response times.", points: ["Priority Bug Fixes & Patching", "Regular Security Updates", "Database Health Checks"], weeks: "~1 Week", from: "From KES 12,000" },
];

export default function ServicesPage() {
  const [active, setActive] = useState("All Services");
  const filtered = active === "All Services" ? services : services.filter((s) => s.category === active);

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="mb-10">
        <span className="inline-flex items-center gap-2 border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold px-4 py-2 rounded-full">COMPLETE CAPABILITIES</span>
        <h1 className="mt-6 text-3xl md:text-4xl font-extrabold text-slate-900">What We Do: End-to-End Technology Solutions</h1>
        <p className="mt-4 max-w-2xl text-slate-600">From custom software and business systems to payment gateways, cloud infrastructure, and ongoing technical support.</p>
        <a href="/contact#consultation-form" className="mt-6 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-3 rounded-md">
          <Calculator size={16} /> REQUEST A PROJECT ESTIMATE
        </a>
      </div>

      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button key={cat} onClick={() => setActive(cat)} className={`text-xs font-semibold px-4 py-2 rounded-md border ${active === cat ? "bg-blue-600 text-white border-blue-600" : "bg-white text-slate-700 border-slate-300 hover:border-blue-400"}`}>
            {cat}{cat === "All Services" ? ` (${services.length})` : ""}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={s.title} className="border border-slate-200 rounded-lg p-6 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-blue-50 p-3 rounded-md"><Icon size={22} className="text-blue-600" /></div>
                <span className="text-xs text-slate-400 font-mono">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{s.title}</h3>
              <p className="text-sm text-slate-600 mb-4">{s.desc}</p>
              <ul className="space-y-2 mb-4">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 mb-4">
                <span className="flex items-center gap-1"><Clock size={14} /> {s.weeks}</span>
                <span className="flex items-center gap-1"><Tag size={14} /> {s.from}</span>
              </div>
              <a href="/contact#consultation-form" className="text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 rounded-md">Request Estimate</a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
