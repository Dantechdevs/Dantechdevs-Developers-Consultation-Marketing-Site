"use client";

import { useState } from "react";
import { Bot, Send, User } from "lucide-react";

type Msg = { from: "bot" | "user"; text: string };

const suggestedQuestions = [
  "What is the typical timeline for a custom web application?",
  "Can you integrate M-Pesa into an existing system?",
  "What cybersecurity practices do you follow?",
  "How much does a project usually cost?",
];

const answers: Record<string, string> = {
  "What is the typical timeline for a custom web application?":
    "Most web applications take 4-6 weeks from discovery to deployment, depending on scope. Simple websites can be done in 1-3 weeks, while larger systems with payment integration or multiple user roles can take 6-10 weeks. We'll give you an exact timeline after understanding your requirements.",
  "Can you integrate M-Pesa into an existing system?":
    "Yes — we build M-Pesa STK Push, C2B, and B2C integrations into both new and existing systems. This typically takes 2-3 weeks depending on your current codebase and whether it needs a full payment reconciliation flow.",
  "What cybersecurity practices do you follow?":
    "We follow current best practices: encrypted data in transit and at rest, server and firewall hardening, secure authentication, and regular dependency updates. For higher-risk projects we also run vulnerability assessments before launch.",
  "How much does a project usually cost?":
    "Pricing depends on scope, but most projects start from KES 35,000 for a website and scale up from there for custom software or business systems. Try our Cost Estimator tool for a rough starting range, or contact us directly for an exact quote.",
};

const fallback = "That's a great question for our team directly — they can give you a precise answer based on your specific project. Want to continue this conversation on WhatsApp?";

export default function AIArchitect() {
  const [messages, setMessages] = useState<Msg[]>([
    { from: "bot", text: "Hello! I can help you scope custom software, explain our M-Pesa and payment integrations, or point you to the right service for your project. How can I help today?" },
  ]);
  const [input, setInput] = useState("");

  function ask(question: string) {
    setMessages((prev) => [...prev, { from: "user", text: question }]);
    const answer = answers[question] || fallback;
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: answer }]);
    }, 400);
  }

  function handleSend() {
    if (!input.trim()) return;
    ask(input.trim());
    setInput("");
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <span className="inline-flex items-center gap-2 border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold px-4 py-2 rounded-full">
        <Bot size={14} /> TECHNICAL ADVISOR
      </span>
      <h1 className="mt-6 text-3xl font-extrabold text-slate-900">Dantechdevs Technical Advisor</h1>
      <p className="mt-3 text-slate-600">Get quick answers to common questions about timelines, integrations, and pricing. For anything specific to your project, we'll route you straight to our team.</p>

      <div className="mt-8 border border-slate-200 rounded-lg overflow-hidden">
        <div className="bg-blue-600 px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-full"><Bot size={20} className="text-white" /></div>
            <div>
              <p className="text-white font-bold text-sm">Dantechdevs Technical Advisor</p>
              <p className="text-blue-100 text-xs">● Answers common questions instantly</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-5 max-h-96 overflow-y-auto space-y-4">
          {messages.map((m, i) => (
            <div key={i} className={`flex gap-3 ${m.from === "user" ? "flex-row-reverse" : ""}`}>
              <div className={`p-2 rounded-full h-fit ${m.from === "bot" ? "bg-blue-100" : "bg-slate-200"}`}>
                {m.from === "bot" ? <Bot size={16} className="text-blue-600" /> : <User size={16} className="text-slate-600" />}
              </div>
              <div className={`rounded-lg p-3 text-sm max-w-[80%] ${m.from === "bot" ? "bg-white text-slate-700 shadow-sm" : "bg-blue-600 text-white"}`}>
                {m.text}
                {m.from === "bot" && m.text === fallback && (
                  <a href="https://wa.me/254712328150" target="_blank" rel="noopener noreferrer" className="block mt-2 text-green-600 font-semibold underline">
                    Open WhatsApp →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {messages.length <= 1 && (
          <div className="px-5 py-4 border-t border-slate-200">
            <p className="text-xs font-semibold text-slate-500 mb-2">Suggested questions:</p>
            <div className="grid sm:grid-cols-2 gap-2">
              {suggestedQuestions.map((q) => (
                <button key={q} onClick={() => ask(q)} className="text-left text-sm bg-white border border-slate-200 rounded-md px-3 py-2 hover:border-blue-400">
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="p-3 border-t border-slate-200 flex items-center gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask a question..."
            className="flex-1 border border-slate-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-blue-400"
          />
          <button onClick={handleSend} className="bg-blue-600 hover:bg-blue-700 text-white p-2.5 rounded-full">
            <Send size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
