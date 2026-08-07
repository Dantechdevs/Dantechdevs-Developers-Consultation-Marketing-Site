import Image from "next/image";
import { Bot, Calculator, ArrowRight, Code2, ShieldCheck } from "lucide-react";

export default function HomeHero() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-start">
      <div>
        <span className="inline-block border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold px-4 py-2 rounded-full">SOFTWARE ENGINEERING EXCELLENCE</span>
        <h1 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
          Technology That <span className="text-blue-600">Works For Your Business</span>
        </h1>
        <p className="mt-6 text-slate-600">
          Dantechdevs Developers is a technology and software development team focused on designing, building, and supporting digital solutions for businesses, savings groups, law firms, and organizations across Kenya. We turn manual processes into secure, data-driven systems.
        </p>

        <div className="mt-6 grid grid-cols-3 gap-3">
          <div className="border border-slate-200 rounded-md px-3 py-2 text-sm font-medium text-slate-700">Custom Software</div>
          <div className="border border-slate-200 rounded-md px-3 py-2 text-sm font-medium text-slate-700">M-Pesa Integration</div>
          <div className="border border-slate-200 rounded-md px-3 py-2 text-sm font-medium text-slate-700">Cloud & Security</div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href="/services" className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-3 rounded-md">EXPLORE 10 CORE SERVICES →</a>
          <a href="/portfolio" className="border border-blue-600 text-blue-600 hover:bg-blue-50 text-sm font-semibold px-5 py-3 rounded-md">VIEW OUR WORK</a>
        </div>
        <a href="/contact#consultation-form" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-slate-700 border border-slate-300 hover:border-slate-400 px-5 py-3 rounded-md">
          <Calculator size={16} /> ESTIMATE COST
        </a>

        <div className="mt-6 border border-slate-200 rounded-lg p-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-50 p-2 rounded-md"><Bot size={18} className="text-blue-600" /></div>
            <div>
              <p className="font-semibold text-slate-900 text-sm">Need technical scoping advice?</p>
              <p className="text-xs text-slate-500">Chat with us directly on WhatsApp</p>
            </div>
          </div>
          <a href="https://wa.me/254712328150" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm font-semibold whitespace-nowrap">Ask Us →</a>
        </div>
      </div>

      <div>
        <a href="/products/chamabiz" className="rounded-lg overflow-hidden border border-slate-200 block hover:shadow-md transition-shadow group">
          <div className="bg-blue-600 p-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-white p-2 rounded-md"><Calculator size={16} className="text-blue-600" /></div>
              <p className="text-white font-bold text-sm">ChamaBiz</p>
            </div>
            <span className="bg-white text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">FEATURED PROJECT</span>
          </div>
          <div className="relative h-56 flex items-end p-5"><Image src="/images/chamab.png" alt="ChamaBiz platform preview" fill className="object-cover brightness-125 saturate-110 group-hover:animate-pulse" /><div className="absolute inset-0 bg-gradient-to-t from-blue-900/85 via-blue-800/25 to-transparent" />
            <p className="text-white text-sm">Chama savings group management platform with M-Pesa contribution tracking, live at chamabiz.co.ke</p>
          </div>
        </a>
        <a href="/products/chamabiz" className="mt-3 flex items-center justify-between text-blue-600 font-semibold text-sm hover:underline">
          Launch Interactive Sandbox <ArrowRight size={16} />
        </a>

        <div className="mt-6 border border-slate-200 rounded-lg p-5">
          <div className="bg-blue-50 p-2.5 rounded-md w-fit mb-3"><Code2 size={20} className="text-blue-600" /></div>
          <h3 className="font-bold text-slate-900">Custom Software &amp; Web Portals</h3>
          <p className="text-sm text-slate-600 mt-2">Tailor-made business systems, booking platforms, and payment API integrations built for your organization's needs.</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Django", "Laravel", "Next.js", "M-Pesa API"].map((tag) => (
              <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>

        <div className="mt-4 border border-slate-200 rounded-lg p-5">
          <div className="bg-green-50 p-2.5 rounded-md w-fit mb-3"><ShieldCheck size={20} className="text-green-600" /></div>
          <h3 className="font-bold text-slate-900">Cloud Infrastructure &amp; Security</h3>
          <p className="text-sm text-slate-600 mt-2">VPS deployment, SSL configuration, server hardening, and automated backups for reliable, secure systems.</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {["VPS", "SSL/TLS", "Backups", "Hardening"].map((tag) => (
              <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
