"use client";

import { useState } from "react";
import { Home, Sparkles, Code2, Package, Layers, Award, PhoneCall, ChevronDown, PiggyBank, Calculator, Bot, Headset, Compass, Smartphone, CalendarClock, GanttChartSquare } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/", icon: Home },
  { label: "Portfolio", href: "/portfolio", icon: Sparkles },
  { label: "Services", href: "/services", icon: Code2 },
  { label: "Products", href: "/products", icon: Package },
  { label: "Solutions", href: "/solutions", icon: Layers },
  { label: "Why Dantechdevs", href: "/why-dantechdevs", icon: Award },
];

const demoTools = [
  { label: "ChamaBiz Demo", href: "/products/chamabiz", icon: PiggyBank, tag: "FLAGSHIP" },
  { label: "Cost Estimator", href: "/tools/cost-estimator", icon: Calculator, tag: null },
  { label: "AI Architect", href: "/tools/ai-architect", icon: Bot, tag: "AI" },
  { label: "24/7 Support Desk", href: "/tools/support-desk", icon: Headset, tag: null },
];

const planningTools = [
  { label: "Service Finder", href: "/tools/service-finder", icon: Compass, tag: null },
  { label: "M-Pesa Checker", href: "/tools/mpesa-checker", icon: Smartphone, tag: null },
  { label: "Book a Slot", href: "/tools/book-slot", icon: CalendarClock, tag: null },
  { label: "Timeline Planner", href: "/tools/timeline-planner", icon: GanttChartSquare, tag: null },
];

export default function NavBar() {
  const [toolsOpen, setToolsOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <div>
          <p className="text-lg font-bold text-blue-600 whitespace-nowrap">
            Dantechdevs <span className="text-red-600">Developers</span>
          </p>
          <p className="text-[10px] tracking-wide text-slate-500 uppercase">
            Code the Future
          </p>
        </div>

        <ul className="hidden lg:flex items-center gap-4 text-sm font-medium text-slate-700">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.href}>
                <a href={link.href} className="flex items-center gap-1.5 hover:text-blue-600">
                  <Icon size={16} />
                  {link.label}
                </a>
              </li>
            );
          })}
          <li>
            <a href="/contact" className="flex items-center gap-1.5 hover:text-blue-600">
              <PhoneCall size={16} />
              Contact Us
            </a>
          </li>
        </ul>

        <div className="relative">
          <button onClick={() => setToolsOpen(!toolsOpen)} className="flex items-center gap-1.5 bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-blue-700">
            <Sparkles size={16} />
            Interactive Tools
            <ChevronDown size={14} className={toolsOpen ? "rotate-180 transition-transform" : "transition-transform"} />
          </button>

          {toolsOpen && (
            <div className="absolute right-0 mt-2 w-72 bg-white border border-slate-200 rounded-md shadow-lg overflow-hidden max-h-[28rem] overflow-y-auto">
              <p className="px-4 pt-3 pb-2 text-[10px] font-bold text-slate-400 tracking-wide">LIVE DEMOS &amp; SANDBOXES</p>
              {demoTools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <a key={tool.href} href={tool.href} className="flex items-center justify-between gap-2 px-4 py-2.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600">
                    <span className="flex items-center gap-2"><Icon size={16} /> {tool.label}</span>
                    {tool.tag && <span className="text-[10px] font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded-full">{tool.tag}</span>}
                  </a>
                );
              })}
              <p className="px-4 pt-3 pb-2 text-[10px] font-bold text-slate-400 tracking-wide border-t border-slate-100 mt-1">PLANNING TOOLS</p>
              {planningTools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <a key={tool.href} href={tool.href} className="flex items-center justify-between gap-2 px-4 py-2.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600">
                    <span className="flex items-center gap-2"><Icon size={16} /> {tool.label}</span>
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
