import { PiggyBank, Scale, Heart, Building2, ShoppingCart, Wheat } from "lucide-react";

const audiences = [
  { icon: PiggyBank, title: "Chamas & Savings Groups", desc: "Contribution tracking, M-Pesa integration, and member dashboards" },
  { icon: Scale, title: "Law Firms & Advocates", desc: "Client marketplaces, case management, and advocate dashboards" },
  { icon: Heart, title: "Salons & Beauty Businesses", desc: "Booking, POS, and service management platforms" },
  { icon: Building2, title: "Real Estate & Property", desc: "Property management, tenant, and payment systems" },
  { icon: ShoppingCart, title: "Retail & E-Commerce", desc: "Online storefronts, catalog, and inventory management" },
  { icon: Wheat, title: "Agriculture & Farms", desc: "Farm operations tracking and remote record management" },
];

export default function WhoWeServe() {
  return (
    <section className="max-w-6xl mx-auto px-4 pb-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Who We Serve</h2>
        <p className="mt-2 text-slate-600 text-sm uppercase tracking-wide">Providing tailored digital solutions for diverse Kenyan businesses</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {audiences.map((a) => {
          const Icon = a.icon;
          return (
            <div key={a.title} className="border border-slate-200 rounded-lg p-6">
              <div className="bg-blue-50 p-3 rounded-md w-fit mb-4"><Icon size={20} className="text-blue-600" /></div>
              <h3 className="font-bold text-slate-900 mb-2">{a.title}</h3>
              <p className="text-sm text-slate-600">{a.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
