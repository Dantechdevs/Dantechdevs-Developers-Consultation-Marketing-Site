import { PiggyBank, Scale, Building2, Heart, ShoppingCart, Wheat } from "lucide-react";

const solutions = [
  { icon: PiggyBank, name: "ChamaBiz", tag: "FinTech", link: "https://chamabiz.co.ke/" },
  { icon: Scale, name: "WakiliPro", tag: "Legal Marketplace", link: null },
  { icon: Building2, name: "Dante Estate", tag: "Property Management", link: null },
  { icon: Heart, name: "American Beauty", tag: "Salon Booking", link: "https://americanbeauty.co.ke" },
  { icon: ShoppingCart, name: "Jerann Traders", tag: "E-Commerce", link: null },
  { icon: Wheat, name: "Mwirigi Farm", tag: "Agriculture", link: null },
];

export default function ClientSolutions() {
  return (
    <section className="max-w-6xl mx-auto px-4 pb-16">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
        <div>
          <span className="inline-block border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold px-4 py-2 rounded-full">REAL CLIENT SOLUTIONS</span>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900">Systems Built for Real Kenyan Businesses</h2>
          <p className="mt-2 text-slate-600 max-w-xl">Unlike agencies pitching templates, every Dantechdevs Developers project is custom-built and already running for a real business.</p>
        </div>
        <a href="/portfolio" className="whitespace-nowrap border border-blue-200 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">6 Delivered Projects →</a>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {solutions.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.name} className="border border-slate-200 rounded-lg p-6">
              <div className="bg-blue-50 p-3 rounded-md w-fit mb-4"><Icon size={20} className="text-blue-600" /></div>
              <p className="font-bold text-slate-900">{s.name}</p>
              <p className="text-xs text-slate-500 mb-3">{s.tag}</p>
              {s.link ? (
                <a href={s.link} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue-600 hover:underline">Visit Live Site →</a>
              ) : (
                <span className="text-sm text-slate-400">Private / Client Project</span>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
