import Image from "next/image";

export default function AboutIntro() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 text-center">
      <span className="inline-flex items-center gap-2 border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold px-4 py-2 rounded-full">
        ABOUT DANTECHDEVS DEVELOPERS
      </span>
      <h1 className="mt-6 text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
        Building Digital Solutions. Empowering Businesses.
      </h1>
      <p className="mt-6 max-w-2xl mx-auto text-slate-600">
        At <span className="font-semibold text-blue-700">Dantechdevs Developers</span>, we believe technology should simplify work, improve decision-making,and create opportunities for growth.
      </p>
      <div className="mt-10 rounded-lg overflow-hidden relative h-72 md:h-96 flex items-end p-6 text-left">
        <Image
          src="/images/code.png"
          alt="Dantechdevs engineering team at Nairobi Tech Hub"
          fill
          priority
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 35%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0) 100%)",
          }}
        />
        <div className="relative z-10">
          <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">ENGINEERING TEAM • NAIROBI, KENYA</span>
          <h2 className="text-xl md:text-2xl font-bold text-white">A Small Team of Dedicated Software Engineers</h2>
          <p className="text-slate-200 text-sm mt-1">Around 5 developers combining full-stack range with direct, personal client communication — no account managers in between.</p>
        </div>
      </div>
    </section>
  );
}
