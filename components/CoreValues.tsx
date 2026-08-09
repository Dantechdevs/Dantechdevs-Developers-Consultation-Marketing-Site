import { Hammer, Timer, KeyRound, MessageCircleHeart, Search, RefreshCw } from "lucide-react";

const values = [
  { icon: Hammer, title: "Built, Not Assembled", desc: "Every system is written for your specific workflow — no drag-and-drop templates pretending to be custom software." },
  { icon: Timer, title: "Deadlines That Hold", desc: "Realistic timelines set upfront, and communicated early if anything shifts — no silent delays." },
  { icon: KeyRound, title: "Security by Default", desc: "Authentication, data handling, and deployment follow current best practices from day one, not bolted on later." },
  { icon: MessageCircleHeart, title: "One Point of Contact", desc: "You reach the developers who actually wrote your code — not a support queue or a rotating account manager." },
  { icon: Search, title: "Built Around Your Business", desc: "Requirements come from how your team actually operates, not a generic feature checklist." },
  { icon: RefreshCw, title: "Support That Continues", desc: "Launch day isn't the finish line — fixes, updates, and improvements keep coming after handover." },
];

export default function CoreValues() {
  return (
    <section className="max-w-6xl mx-auto px-4 pb-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Our Core Values</h2>
        <p className="mt-2 text-slate-600 text-sm uppercase tracking-wide">The standards behind every Dantechdevs Developers project</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {values.map((v, i) => {
          const Icon = v.icon;
          return (
            <div key={v.title} className={`border rounded-lg p-6 transition-shadow hover:shadow-md ${i === 0 ? "border-blue-300 bg-blue-50/40" : "border-slate-200"}`}>
              <div className={`p-3 rounded-md w-fit mb-4 ${i === 0 ? "bg-blue-600" : "bg-slate-100"}`}>
                <Icon size={20} className={i === 0 ? "text-white" : "text-slate-600"} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{v.title}</h3>
              <p className="text-sm text-slate-600">{v.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
