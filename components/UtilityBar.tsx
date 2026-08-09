import { MapPin, Mail, Phone } from "lucide-react";

export default function UtilityBar() {
  return (
    <div className="w-full bg-slate-950 text-slate-100 text-xs">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-8 px-4 py-2">
        <p className="font-medium flex items-center gap-2"><span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-white">DANTECHDEVS DEVELOPERS:</span> Code the Future. Build Today. • Local Expertise, Modern Engineering
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <span className="flex items-center gap-1">
            <MapPin size={14} className="text-red-500" /> Nairobi, Kenya
          </span>
          
            <a href="mailto:support@dantechdevs.co.ke"
            className="flex items-center gap-1 hover:underline"
          >
            <Mail size={14} /> support@dantechdevs.co.ke
          </a>
          
            <a href="tel:+254712328150"
            className="flex items-center gap-1 hover:underline"
          >
            <Phone size={14} className="text-red-500" /> +254 712 328150 / +254 728 328150
          </a>
        </div>
      </div>
    </div>
  );
}
