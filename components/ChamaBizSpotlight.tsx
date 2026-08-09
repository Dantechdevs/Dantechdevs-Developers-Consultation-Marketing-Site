"use client";

import { useState } from "react";
import { PiggyBank, Users, HandCoins, AlertTriangle, Smartphone, Wallet, MessageCircle, Bot, ShieldCheck, BarChart3, UserCog, FileText } from "lucide-react";

const portals = [
  { key: "member", label: "Member Features", icon: Users },
  { key: "admin", label: "Admin Features", icon: UserCog },
];

const sampleRevenue = [
  { rank: 1, name: "Mbaa Mutune", transactions: 7, revenue: "KES 12,993" },
  { rank: 2, name: "Familia Club", transactions: 5, revenue: "KES 10,995" },
  { rank: 3, name: "Jitihada Group", transactions: 2, revenue: "KES 3,498" },
  { rank: 4, name: "ChamaBiz Demo Group", transactions: 1, revenue: "KES 999" },
];

const portalPanels: Record<string, { title: string; features: { icon: any; label: string; desc: string }[] }> = {
  member: {
    title: "Member Features",
    features: [
      { icon: HandCoins, label: "Contributions & Loans", desc: "Track contributions and apply for group loans directly from the member dashboard." },
      { icon: AlertTriangle, label: "Fines Tracking", desc: "View and settle fines issued by the group, with full transparency." },
      { icon: Smartphone, label: "M-Pesa Payments", desc: "Pay contributions and loan repayments directly via M-Pesa." },
      { icon: Wallet, label: "E-Wallet", desc: "A built-in wallet for holding and moving funds within the platform." },
      { icon: MessageCircle, label: "Messaging", desc: "In-app messaging between members and group administrators." },
      { icon: Bot, label: "WhatsApp Bot", desc: "Check balances and get updates directly through WhatsApp." },
    ],
  },
  admin: {
    title: "Admin Features",
    features: [
      { icon: PiggyBank, label: "Create & Manage Chamas", desc: "Set up new savings groups and manage member rosters and roles." },
      { icon: BarChart3, label: "Platform Revenue", desc: "Track revenue by chama group, transaction volume, and subscription plan." },
      { icon: FileText, label: "Audit Log", desc: "Full activity history for accountability across the platform." },
      { icon: ShieldCheck, label: "Role-Based Access", desc: "Owner, admin, and member permission levels keep data access controlled." },
    ],
  },
};

export default function ChamaBizSpotlight() {
  const [active, setActive] = useState("member");
  const panel = portalPanels[active];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="border border-slate-200 rounded-lg overflow-hidden">
        <div className="p-8">
          <span className="inline-flex items-center gap-2 border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold px-4 py-2 rounded-full">
            <PiggyBank size={14} /> DANTECHDEVS FEATURED PROJECT
          </span>
          <div className="mt-6 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">ChamaBiz Platform</h1>
              <p className="mt-4 max-w-xl text-slate-600">A complete platform for managing chamas — contributions, loans, fines, M-Pesa payments, and more, for both members and administrators. Live at <a href="https://chamabiz.co.ke/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">chamabiz.co.ke</a>.</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-4 min-w-[220px]">
              <p className="text-xs font-semibold text-slate-400 mb-2">PLATFORM DETAILS</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-slate-500">Built With</span><span className="font-semibold text-slate-900">Django 5.1</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Payments</span><span className="font-semibold text-slate-900">M-Pesa Integrated</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Access Control</span><span className="font-semibold text-slate-900">Role-Based</span></div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-xs font-semibold text-slate-500 mb-3">EXPLORE FEATURES:</p>
            <div className="flex flex-wrap gap-3">
              {portals.map((p) => {
                const Icon = p.icon;
                return (
                  <button key={p.key} onClick={() => setActive(p.key)} className={`flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-semibold border ${active === p.key ? "bg-blue-600 border-blue-600 text-white" : "bg-white border-slate-200 text-slate-700 hover:border-blue-300"}`}>
                    <Icon size={16} /> {p.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-6 bg-slate-50 border border-slate-200 rounded-lg p-6">
            <p className="text-xs font-bold text-blue-600 tracking-wide mb-4">{panel.title.toUpperCase()}</p>
            <div className="grid md:grid-cols-3 gap-4">
              {panel.features.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.label} className="bg-white border border-slate-200 rounded-lg p-4">
                    <Icon size={18} className="text-blue-600 mb-2" />
                    <p className="font-semibold text-sm text-slate-900">{f.label}</p>
                    <p className="text-xs text-slate-500 mt-1">{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 p-8">
          <h3 className="font-bold text-slate-900 mb-1">Public Demo Account — Top Chamas by Revenue</h3>
          <p className="text-xs text-slate-400 mb-4">From ChamaBiz's public demo account, not live production figures</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs text-slate-500 border-b border-slate-200">
                  <th className="py-2 pr-4">#</th>
                  <th className="py-2 pr-4">Chama Group</th>
                  <th className="py-2 pr-4">Transactions</th>
                  <th className="py-2 pr-4">Revenue</th>
                </tr>
              </thead>
              <tbody>
                {sampleRevenue.map((r) => (
                  <tr key={r.rank} className="border-b border-slate-100">
                    <td className="py-3 pr-4 text-blue-600 font-medium">{r.rank}</td>
                    <td className="py-3 pr-4">{r.name}</td>
                    <td className="py-3 pr-4">{r.transactions}</td>
                    <td className="py-3 pr-4 font-semibold text-slate-900">{r.revenue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
