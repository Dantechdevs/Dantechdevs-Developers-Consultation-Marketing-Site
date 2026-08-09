import { Rocket, HandHeart } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="max-w-6xl mx-auto px-4 pb-16 grid md:grid-cols-2 gap-6">
      <div className="border border-blue-200 rounded-lg p-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="bg-blue-600 p-3 rounded-md w-fit mb-4"><Rocket size={22} className="text-white" /></div>
        <h3 className="font-bold text-blue-700 mb-2 tracking-wide">OUR VISION</h3>
        <p className="text-slate-700 text-sm">Every business in Kenya deserves software built for how it actually works — not a rebranded template. Dantechdevs Developers exists to close that gap, one custom-built platform at a time, starting right here in Nairobi.</p>
      </div>
      <div className="border border-slate-200 rounded-lg p-6 bg-gradient-to-br from-slate-50 to-white">
        <div className="bg-slate-800 p-3 rounded-md w-fit mb-4"><HandHeart size={22} className="text-white" /></div>
        <h3 className="font-bold text-slate-800 mb-2 tracking-wide">OUR MISSION</h3>
        <p className="text-slate-700 text-sm">No account managers, no handoffs between teams — you talk directly to the developers building your system, from the first consultation to the code running in production and every update after launch.</p>
      </div>
    </section>
  );
}
