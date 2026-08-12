const services = [
  { label: "Custom Software Development", href: "/services" },
  { label: "Web Application Development", href: "/services" },
  { label: "Website Design & Development", href: "/services" },
  { label: "SaaS Platform Development", href: "/services" },
  { label: "Payment Integration (M-Pesa / Card)", href: "/services" },
  { label: "IT Consultancy & Strategy", href: "/services" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-12 pb-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">
        <div>
          <a href="/" className="text-xl font-bold text-white mb-1 block hover:opacity-80">Dantechdevs <span className="text-red-500">Developers</span></a>
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-4">Code the Future</p>
          <p className="text-sm text-slate-400">Dantechdevs designs, builds, and supports custom digital solutions for businesses across Kenya and East Africa.</p>
          <div className="border border-slate-700 rounded-md p-4 mt-4">
            <p className="text-blue-400 font-semibold text-xs mb-1">REGIONAL & GLOBAL STANDARD:</p>
            <p className="text-xs text-slate-400">Custom software products and enterprise digital solutions tailored for East Africa with global engineering standards.</p>
          </div>
        </div>
        <div>
          <p className="font-bold text-white mb-4 text-sm tracking-wide">TECHNOLOGY SERVICES</p>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {services.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="flex items-center gap-2 hover:text-white">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-bold text-white mb-4 text-sm tracking-wide">FLAGSHIP PRODUCT IP</p>
          <a href="https://americanbeauty.co.ke" target="_blank" rel="noopener noreferrer" className="block border border-slate-700 rounded-md p-4 mb-4 hover:border-blue-500 transition-colors">
            <p className="text-blue-400 font-semibold text-sm mb-1">American Beauty™</p>
            <p className="text-xs text-slate-400">Salon management platform for bookings, POS, invoicing, and service tracking — built and deployed for americanbeauty.co.ke.</p>
          </a>
          <p className="text-sm mb-1">Email: <a href="mailto:support@dantechdevelopers.com" className="text-white font-medium hover:underline">support@dantechdevelopers.com</a></p>
          <p className="text-sm mb-1">Phone: <a href="tel:+254712328150" className="text-white font-medium hover:underline">+254 712 328150 / +254 728 328150</a></p>
          <p className="text-sm">Office: <span className="text-white font-medium">Nairobi, Kenya</span></p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 mt-10 pt-6 border-t border-slate-800 text-xs text-slate-500 text-center">
        © 2026 Dantechdevs Developers. All rights reserved.
      </div>
    </footer>
  );
}
