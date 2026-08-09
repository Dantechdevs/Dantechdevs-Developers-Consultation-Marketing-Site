"use client";

import { useState } from "react";
import { Send, X } from "lucide-react";

const WHATSAPP_NUMBER = "254712328150";

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.004 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.26.6 4.44 1.73 6.37L3.2 28.8l6.6-1.7a12.75 12.75 0 0 0 6.2 1.6h.01c7.07 0 12.8-5.73 12.8-12.8s-5.73-12.7-12.81-12.7zm0 23.32h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-4.02 1.05 1.07-3.92-.25-.4a10.52 10.52 0 0 1-1.62-5.64c0-5.85 4.76-10.6 10.62-10.6 2.84 0 5.5 1.1 7.51 3.11a10.55 10.55 0 0 1 3.1 7.5c0 5.85-4.76 10.61-10.61 10.61zm5.8-7.94c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.19.21-.37.24-.69.08-.32-.16-1.34-.5-2.55-1.58-.94-.84-1.58-1.87-1.76-2.19-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.55-.08-.16-.71-1.72-.98-2.35-.26-.63-.52-.54-.71-.55h-.6c-.21 0-.55.08-.83.4-.29.32-1.1 1.07-1.1 2.62 0 1.54 1.12 3.03 1.28 3.24.16.21 2.2 3.37 5.34 4.73.75.32 1.33.51 1.79.66.75.24 1.44.2 1.98.13.6-.09 1.88-.77 2.15-1.5.27-.75.27-1.38.19-1.5-.08-.13-.29-.21-.61-.37z" />
    </svg>
  );
}

const quickMessages = [
  "I need a quote for a custom software project.",
  "I want to inquire about web or app development.",
  "I would like to schedule a technical consultation.",
];

function openWhatsApp(message: string) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  function handleSend() {
    if (!message.trim()) return;
    openWhatsApp(message.trim());
    setMessage("");
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-80 bg-white rounded-lg shadow-2xl border border-slate-200 overflow-hidden">
          <div className="bg-green-600 px-4 py-3 flex items-center justify-between">
            <div>
              <p className="text-white font-semibold text-sm">Dantechdevs Developers</p>
              <p className="text-green-100 text-xs">Typically replies within minutes</p>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white">
              <X size={18} />
            </button>
          </div>

          <div className="bg-[#ede4d3] p-4 max-h-72 overflow-y-auto">
            <div className="bg-white rounded-lg p-3 shadow-sm mb-4">
              <p className="text-xs font-bold text-green-700 mb-1">Dantechdevs Developers</p>
              <p className="text-sm text-slate-700">Hello 👋 Welcome to Dantechdevs Developers. How can we help with your software project today?</p>
            </div>

            <p className="text-xs font-semibold text-slate-500 mb-2">Suggested quick messages:</p>
            <div className="space-y-2">
              {quickMessages.map((q) => (
                <button key={q} onClick={() => openWhatsApp(q)} className="w-full text-left bg-white border border-slate-200 rounded-lg p-3 text-sm text-slate-700 hover:border-green-400">
                  {q}
                </button>
              ))}
            </div>
          </div>

          <div className="p-3 border-t border-slate-200 flex items-center gap-2">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your message..."
              className="flex-1 border border-slate-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-green-400"
            />
            <button onClick={handleSend} className="bg-green-600 hover:bg-green-700 text-white p-2.5 rounded-full">
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      <button onClick={() => setOpen(!open)} className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold pl-3 pr-4 py-3 rounded-full shadow-lg transition-all">
        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
        <WhatsAppIcon size={20} />
        <span className="hidden sm:inline">Chat on WhatsApp</span>
        <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">+254 712 328150</span>
      </button>
    </div>
  );
}
