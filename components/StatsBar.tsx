const stats = [
  { value: "10+", label: "CORE IT SERVICES", sub: "End-to-End Technology Suite" },
  { value: "6+", label: "PROJECTS DELIVERED", sub: "Across Finance, Legal & Retail" },
  { value: "5", label: "ENGINEERING TEAM", sub: "Full-Stack Developers" },
  { value: "24/7", label: "TECHNICAL SUPPORT", sub: "Continuous SLA Maintenance" },
];

export default function StatsBar() {
  return (
    <section className="max-w-6xl mx-auto px-4 pb-16">
      <div className="grid md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="border border-slate-200 rounded-lg p-6 text-center">
            <p className="text-3xl font-extrabold text-blue-600">{s.value}</p>
            <p className="font-bold text-slate-900 text-sm mt-2">{s.label}</p>
            <p className="text-xs text-slate-500 mt-1">{s.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
