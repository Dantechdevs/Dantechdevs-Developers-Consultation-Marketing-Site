import { Award, Layers, MapPin, Wrench, Cpu, Lock, Calculator } from "lucide-react";

const comparison = [
  { label: "Core Software Assets", ours: "Custom-built platforms tailored to your business", theirs: "Generic templates or one-off code" },
  { label: "Payment Integration", ours: "M-Pesa and card payment gateways built in", theirs: "Third-party plugins or manual setup" },
  { label: "Regional Expertise", ours: "Deep understanding of the Kenyan and East African market", theirs: "Generic international playbooks" },
  { label: "Support", ours: "Direct, responsive support from the developer who built it", theirs: "Ticket queues and outsourced support" },
];

const features = [
  { icon: Layers, tag: "Speed & Reliability", title: "Custom-Built, Not Templated", body: "Every Dantechdevs project is built for your specific business, not adapted from a generic theme." },
  { icon: MapPin, tag: "Regional Standard", title: "Local East Africa Expertise", body: "Built with an understanding of local payment systems, connectivity constraints, and business realities in Nairobi and beyond." },
  { icon: Wrench, tag: "Long-Term Partner", title: "Ongoing Support After Launch", body: "Deployment is day one, not day last. Dantechdevs stays involved after launch for fixes, updates, and improvements." },
  { icon: Cpu, tag: "AI-Ready", title: "Modern Technical Architecture", body: "Projects are built on current, well-supported frameworks like Next.js, Laravel, and Django — not legacy stacks." },
  { icon: Lock, tag: "Secure by Default", title: "Security-Conscious Development", body: "Authentication, data handling, and deployment practices follow current best practices from the start." },
  { icon: Calculator, tag: "No Surprise Fees", title: "Transparent Project Scoping", body: "Clear estimates before work begins, with no hidden costs added midway through a project." },
];

export default function WhyDantechdevs() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <span className="inline-flex items-center gap-2 border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold px-4 py-2 rounded-full">
          <Award size={14} /> WHY CLIENTS CHOOSE DANTECHDEVS
        </span>
        <h2 className="mt-6 text-3xl md:text-4xl font-extrabold text-slate-900">
          A Developer Who Builds What You Actually Need
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-slate-600">
          Businesses across Nairobi and East Africa choose Dantechdevs for custom-built software, direct communication, and long-term support after launch.
        </p>
      </div>

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-slate-900">The Dantechdevs Advantage</h3>
        <p className="mt-2 text-slate-600">How custom-built software delivers more value than a template.</p>
      </div>

      <div className="border border-slate-200 rounded-lg overflow-hidden mb-12">
        <div className="grid md:grid-cols-3 gap-4 px-6 py-3 bg-slate-100 text-xs font-bold uppercase tracking-wide text-slate-500">
          <p>Feature / Capability</p>
          <p>Dantechdevs</p>
          <p>Typical Freelancer / Agency</p>
        </div>
        {comparison.map((row, i) => (
          <div key={row.label} className={`grid md:grid-cols-3 gap-4 px-6 py-4 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
            <p className="font-semibold text-slate-900">{row.label}</p>
            <p className="text-blue-700 font-medium">{row.ours}</p>
            <p className="text-slate-500">{row.theirs}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <div key={f.title} className="border border-slate-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-blue-50 p-2 rounded-md">
                  <Icon size={20} className="text-blue-600" />
                </div>
                <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2 py-1 rounded-full">{f.tag}</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-sm text-slate-600">{f.body}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-12 bg-slate-950 text-white rounded-lg p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold mb-2">Ready to build your project?</h3>
          <p className="text-slate-300 text-sm">Schedule a consultation or reach out directly to discuss your idea.</p>
        </div>
        <div className="flex gap-3">
          <a href="/contact#consultation-form" className="bg-blue-600 hover:bg-blue-700 text-sm font-semibold px-5 py-3 rounded-md">SCHEDULE CONSULTATION</a>
          <a href="/contact" className="border border-slate-600 hover:border-slate-400 text-sm font-semibold px-5 py-3 rounded-md">CONTACT DANTECHDEVS</a>
        </div>
      </div>
    </section>
  );
}
