import { PhoneCall } from "lucide-react";

export default function Hero() {
  return (
    <section className="text-center px-4 py-12 bg-slate-50">
      <a href="#consultation-form" className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 text-xs font-semibold px-4 py-2 rounded-full hover:bg-blue-50">
        <PhoneCall size={14} /> GET IN TOUCH
      </a>

      <h1 className="mt-4 text-3xl md:text-4xl font-extrabold text-slate-900">
        Let&apos;s Build Something Better Together
      </h1>
      <p className="mt-3 max-w-2xl mx-auto text-slate-600">
        Whether you need a professional website, custom software, a SaaS
        platform, or digital transformation advice — Dantechdevs is ready to
        turn your idea into a working digital solution.
      </p>
    </section>
  );
}