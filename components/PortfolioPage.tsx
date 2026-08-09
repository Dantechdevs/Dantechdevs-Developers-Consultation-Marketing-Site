import { Sparkles } from "lucide-react";

const projects = [
  {
    tag: "FinTech / Savings Groups",
    client: "ChamaBiz",
    title: "Automating Group Savings & M-Pesa Reconciliation",
    challenge: "Chama groups relied on manual spreadsheets and cash records, causing disputes over contributions and slow, error-prone reconciliation.",
    solution: "Built a full Django platform with M-Pesa integration, automated contribution tracking, and a custom navy/sky-green/gold brand system for member-facing dashboards.",
  },
  {
    tag: "Legal / Marketplace",
    client: "WakiliPro",
    title: "Connecting Clients with LSK-Verified Advocates",
    challenge: "Clients had no reliable way to find verified, available advocates, and advocates lacked a digital presence to manage client relationships.",
    solution: "Developed a two-sided marketplace with advocate and client dashboards, subscription management, and a navy/amber brand system built in Laravel.",
  },
  {
    tag: "Real Estate",
    client: "Dante Estate",
    title: "Streamlining Payments & Maintenance Notifications",
    challenge: "Property managers had no centralized way to notify tenants about payments due or maintenance updates, leading to missed communications.",
    solution: "Built a notification system spanning payment and maintenance workflows, with in-app alerts and email preview tooling for the property team.",
  },
  {
    tag: "Beauty / Booking",
    client: "American Beauty",
    title: "Digitizing Salon Bookings, POS & Invoicing",
    challenge: "The salon managed bookings and payments manually, making it difficult to track services rendered and reconcile daily sales.",
    solution: "Delivered a Laravel platform covering bookings, point-of-sale, standalone invoicing, and service tracking, deployed live at americanbeauty.co.ke.",
  },
  {
    tag: "E-Commerce",
    client: "Jerann Traders",
    title: "Launching a Tech Products Online Store",
    challenge: "The retailer had no online storefront and was losing sales to competitors with an established e-commerce presence.",
    solution: "Built a Laravel 11 e-commerce platform with product catalog management, with UI benchmarked against established local competitor sites.",
  },
  {
    tag: "Agriculture",
    client: "Mwirigi Farm",
    title: "Bringing Farm Operations Online",
    challenge: "Farm records and media were scattered across paper logs and local files, with no reliable backup or remote access.",
    solution: "Built a React/Node.js farm management app with cloud-based media storage via Cloudinary, deployed for remote, reliable access.",
  },
];

export default function PortfolioPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <span className="inline-flex items-center gap-2 border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold px-4 py-2 rounded-full">
        <Sparkles size={14} /> PROVEN IMPACT
      </span>

      <div className="mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">Client Case Studies & Digital Transformations</h1>
          <p className="mt-4 max-w-2xl text-slate-600">Real-world examples of how Dantechdevs Developers solves operational challenges for savings groups, legal practices, real estate, retail, and agriculture.</p>
        </div>
        <a href="/contact#consultation-form" className="whitespace-nowrap inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-3 rounded-md">
          SCHEDULE SOLUTION BRIEFING →
        </a>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.title} className="border border-slate-200 rounded-lg p-6 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full">{p.tag}</span>
            </div>
            <p className="text-sm font-semibold text-slate-500 mb-1">{p.client}</p>
            <h3 className="font-bold text-slate-900 mb-4 leading-snug">{p.title}</h3>
            <div className="border-t border-slate-100 pt-4 mb-3">
              <p className="text-sm text-slate-700"><span className="font-bold text-red-600">Challenge:</span> {p.challenge}</p>
            </div>
            <div>
              <p className="text-sm text-slate-700"><span className="font-bold text-blue-600">Dantechdevs Solution:</span> {p.solution}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
