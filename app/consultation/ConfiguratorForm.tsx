"use client";

import { useMemo, useState } from "react";
import {
  Calculator,
  Clock,
  CheckCircle2,
  Copy,
  Send,
  X,
  Loader2,
} from "lucide-react";
import styles from "./consultation.module.css";
import {
  sectorOptions,
  volumeOptions,
  modules,
  addOns,
  type VolumeKey,
} from "./pricing";

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function ConfiguratorForm() {
  const [sector, setSector] = useState<string>(sectorOptions[0]);
  const [volumeKey, setVolumeKey] = useState<VolumeKey>("medium");
  const [selectedModules, setSelectedModules] = useState<Set<string>>(
    new Set(["custom-software"])
  );
  const [selectedAddOns, setSelectedAddOns] = useState<Set<string>>(new Set());

  const [showContactModal, setShowContactModal] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const [contact, setContact] = useState({
    full_name: "",
    email: "",
    phone: "",
    organization: "",
    preferred_date: "",
  });

  const volume = volumeOptions.find((v) => v.key === volumeKey)!;

  const chosenModules = useMemo(
    () => modules.filter((m) => selectedModules.has(m.id)),
    [selectedModules]
  );
  const chosenAddOns = useMemo(
    () => addOns.filter((a) => selectedAddOns.has(a.id)),
    [selectedAddOns]
  );

  const moduleSubtotal = chosenModules.reduce((sum, m) => sum + m.basePrice, 0);
  const addOnSubtotal = chosenAddOns.reduce((sum, a) => sum + a.price, 0);
  const subtotal = (moduleSubtotal + addOnSubtotal) * volume.multiplier;

  const budgetLow = Math.round((subtotal * 0.92) / 5) * 5;
  const budgetHigh = Math.round((subtotal * 1.18) / 5) * 5;

  const baseWeeks =
    chosenModules.reduce((sum, m) => sum + m.weeks, 0) * (0.7 + volume.multiplier * 0.3) +
    chosenAddOns.length * 0.4;
  const weeksLow = Math.max(1, Math.round(baseWeeks));
  const weeksHigh = weeksLow + Math.max(1, Math.round(chosenModules.length * 0.6));

  const hasSelection = chosenModules.length > 0;

  function toggleModule(id: string) {
    setSelectedModules((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  function toggleAddOn(id: string) {
    setSelectedAddOns((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  function buildProposalDraft() {
    const lines = [
      `Sector: ${sector}`,
      `Estimated user volume: ${volume.label}`,
      "",
      "Service modules:",
      ...chosenModules.map((m) => `  - ${m.name} (+$${m.basePrice})`),
      "",
      chosenAddOns.length > 0 ? "Integrations & add-ons:" : "",
      ...chosenAddOns.map((a) => `  - ${a.name} (+$${a.price})`),
      "",
      `Estimated project budget: $${budgetLow.toLocaleString()} – $${budgetHigh.toLocaleString()}`,
      `Estimated delivery time: ~${weeksLow}–${weeksHigh} weeks`,
    ].filter((line) => line !== "");
    return lines.join("\n");
  }

  async function handleCopyDraft() {
    try {
      await navigator.clipboard.writeText(buildProposalDraft());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — fail silently, nothing user-facing to break.
    }
  }

  function openContactModal() {
    setSubmitState("idle");
    setSubmitError(null);
    setShowContactModal(true);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitState("submitting");
    setSubmitError(null);

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: contact.full_name,
          email: contact.email,
          phone: contact.phone,
          organization: contact.organization || sector,
          service_needed: chosenModules.map((m) => m.name).join(", "),
          preferred_date: contact.preferred_date || null,
          project_details: buildProposalDraft(),
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setSubmitState("error");
        setSubmitError(data.message || "Could not submit your proposal. Please try again.");
        return;
      }

      setSubmitState("success");
    } catch {
      setSubmitState("error");
      setSubmitError("Network error. Please check your connection and try again.");
    }
  }

  return (
    <section className={`${styles.scope} w-full`}>
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 lg:py-24">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span
            className={`${styles.badge} inline-flex items-center gap-2 rounded-full px-4 py-1.5`}
          >
            <Calculator size={14} strokeWidth={2.4} />
            Interactive Proposal Configurator
          </span>
          <h1
            className={`${styles.display} mt-6 text-4xl leading-[1.1] tracking-tight sm:text-5xl`}
          >
            Configure Your Project &amp; Instant Cost Estimate
          </h1>
          <p
            className="mt-5 text-base leading-7 sm:text-lg"
            style={{ color: "var(--ink-soft)" }}
          >
            Select your service modules, technical integrations, and support
            needs to generate a transparent budget estimate and proposal
            draft instantly.
          </p>
        </div>

        {/* Form + Quote panel */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_400px] lg:items-start lg:gap-10">
          {/* Left: steps */}
          <div className="flex flex-col gap-8">
            {/* Step 1 */}
            <div className={`${styles.card} p-6 sm:p-8`}>
              <div className="flex items-center gap-3">
                <span
                  className={`${styles.stepBadge} flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm`}
                >
                  1
                </span>
                <h2 className="text-lg font-semibold">Organization Sector &amp; Scope</h2>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className={`${styles.label} text-xs font-semibold uppercase tracking-wide`}>
                    Industry / Sector
                  </span>
                  <select
                    className={`${styles.select} rounded-md px-3 py-2.5 text-sm`}
                    value={sector}
                    onChange={(e) => setSector(e.target.value)}
                  >
                    {sectorOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="flex flex-col gap-2">
                  <span className={`${styles.label} text-xs font-semibold uppercase tracking-wide`}>
                    Estimated User Volume
                  </span>
                  <select
                    className={`${styles.select} rounded-md px-3 py-2.5 text-sm`}
                    value={volumeKey}
                    onChange={(e) => setVolumeKey(e.target.value as VolumeKey)}
                  >
                    {volumeOptions.map((v) => (
                      <option key={v.key} value={v.key}>
                        {v.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>

            {/* Step 2 */}
            <div className={`${styles.card} p-6 sm:p-8`}>
              <div className="flex items-center gap-3">
                <span
                  className={`${styles.stepBadge} flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm`}
                >
                  2
                </span>
                <h2 className="text-lg font-semibold">Select Service Modules (Multi-Select)</h2>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {modules.map((m) => {
                  const selected = selectedModules.has(m.id);
                  return (
                    <button
                      key={m.id}
                      type="button"
                      data-selected={selected}
                      onClick={() => toggleModule(m.id)}
                      className={`${styles.tile} flex items-start justify-between gap-3 rounded-lg px-4 py-3.5`}
                    >
                      <span className="flex flex-col gap-1">
                        <span className="text-sm font-semibold leading-5">{m.name}</span>
                        <span className={`${styles.mono} text-xs`} style={{ color: "var(--blue)" }}>
                          +${m.basePrice.toLocaleString()} base
                        </span>
                      </span>
                      <span className={styles.checkbox} aria-hidden="true">
                        {selected && <CheckCircle2 size={13} color="#fff" strokeWidth={3} />}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3 */}
            <div className={`${styles.card} p-6 sm:p-8`}>
              <div className="flex items-center gap-3">
                <span
                  className={`${styles.stepBadge} flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm`}
                >
                  3
                </span>
                <h2 className="text-lg font-semibold">Integrations &amp; Add-on Capabilities</h2>
              </div>

              <div className="mt-5 flex flex-wrap gap-2.5">
                {addOns.map((a) => {
                  const selected = selectedAddOns.has(a.id);
                  return (
                    <button
                      key={a.id}
                      type="button"
                      data-selected={selected}
                      onClick={() => toggleAddOn(a.id)}
                      className={`${styles.chip} rounded-full px-4 py-2 text-sm font-medium`}
                    >
                      {a.name} (+${a.price})
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: sticky quote panel */}
          <div className={`${styles.quotePanel} sticky top-6 rounded-xl p-6 sm:p-8`}>
            <div className="flex items-center justify-between">
              <p className={styles.quoteEyebrow}>Real-time quote</p>
              <Calculator size={18} className="opacity-70" />
            </div>
            <h3 className="mt-1 text-xl font-semibold">Estimated Project Budget</h3>

            <p className={`${styles.priceRange} mt-5 text-3xl font-semibold sm:text-4xl`}>
              {hasSelection ? (
                <>
                  ${budgetLow.toLocaleString()} – ${budgetHigh.toLocaleString()}
                </>
              ) : (
                "Select a module"
              )}
            </p>
            <p className="mt-1 text-xs" style={{ color: "#94a3b8" }}>
              Estimated range in USD
            </p>

            <div className={`${styles.divider} mt-6 flex items-center justify-between border-t pt-5 text-sm`}>
              <span className="flex items-center gap-2" style={{ color: "#cbd5e1" }}>
                <Clock size={15} />
                Delivery time:
              </span>
              <span className="font-semibold">
                {hasSelection ? `~${weeksLow}–${weeksHigh} weeks` : "—"}
              </span>
            </div>

            <div className="mt-5">
              <p className={`${styles.label} text-xs font-semibold uppercase tracking-wide`} style={{ color: "#94a3b8" }}>
                Scope included
              </p>
              <ul className="mt-3 flex flex-col gap-2">
                {chosenModules.length === 0 && (
                  <li className="text-sm" style={{ color: "#94a3b8" }}>
                    No modules selected yet.
                  </li>
                )}
                {chosenModules.map((m) => (
                  <li key={m.id} className={`${styles.scopeRow} flex items-start gap-2 pt-2 text-sm`}>
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0" color="#4ade80" />
                    {m.name}
                  </li>
                ))}
                {chosenAddOns.map((a) => (
                  <li key={a.id} className={`${styles.scopeRow} flex items-start gap-2 pt-2 text-sm`}>
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0" color="#4ade80" />
                    {a.name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7 flex flex-col gap-3">
              <button
                type="button"
                onClick={handleCopyDraft}
                disabled={!hasSelection}
                className={`${styles.secondaryBtn} flex items-center justify-center gap-2 rounded-md px-4 py-3 text-sm`}
              >
                <Copy size={15} />
                {copied ? "Copied!" : "Copy Proposal Draft"}
              </button>
              <button
                type="button"
                onClick={openContactModal}
                disabled={!hasSelection}
                className={`${styles.primaryBtn} flex items-center justify-center gap-2 rounded-md px-4 py-3 text-sm`}
              >
                <Send size={15} />
                Submit Proposal to Dantechdevs Team
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact modal */}
      {showContactModal && (
        <div
          className={`${styles.overlay} fixed inset-0 z-50 flex items-center justify-center p-4`}
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowContactModal(false);
          }}
        >
          <div
            className={`${styles.modal} w-full max-w-md rounded-xl p-6 sm:p-8`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
          >
            {submitState === "success" ? (
              <div className="flex flex-col items-center py-4 text-center">
                <CheckCircle2 size={40} color="#16a34a" />
                <h3 className="mt-4 text-lg font-semibold">Proposal sent</h3>
                <p className="mt-2 text-sm" style={{ color: "var(--ink-soft)" }}>
                  Thanks{contact.full_name ? `, ${contact.full_name.split(" ")[0]}` : ""} — the
                  Dantechdevs team has your configuration and will follow up shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setShowContactModal(false)}
                  className={`${styles.primaryBtn} mt-6 rounded-md px-5 py-2.5 text-sm`}
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-start justify-between">
                  <h3 id="contact-modal-title" className="text-lg font-semibold">
                    Your details
                  </h3>
                  <button
                    type="button"
                    onClick={() => setShowContactModal(false)}
                    aria-label="Close"
                    className="text-slate-400 hover:text-slate-600"
                  >
                    <X size={20} />
                  </button>
                </div>
                <p className="mt-1 text-sm" style={{ color: "var(--ink-soft)" }}>
                  We&rsquo;ll attach your configuration and send it to the Dantechdevs team.
                </p>

                <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-4">
                  <label className="flex flex-col gap-1.5">
                    <span className={`${styles.label} text-xs font-semibold uppercase tracking-wide`}>
                      Full name
                    </span>
                    <input
                      required
                      type="text"
                      className={`${styles.field} rounded-md px-3 py-2.5 text-sm`}
                      value={contact.full_name}
                      onChange={(e) => setContact({ ...contact, full_name: e.target.value })}
                    />
                  </label>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <label className="flex flex-col gap-1.5">
                      <span className={`${styles.label} text-xs font-semibold uppercase tracking-wide`}>
                        Email
                      </span>
                      <input
                        required
                        type="email"
                        className={`${styles.field} rounded-md px-3 py-2.5 text-sm`}
                        value={contact.email}
                        onChange={(e) => setContact({ ...contact, email: e.target.value })}
                      />
                    </label>
                    <label className="flex flex-col gap-1.5">
                      <span className={`${styles.label} text-xs font-semibold uppercase tracking-wide`}>
                        Phone
                      </span>
                      <input
                        required
                        type="tel"
                        className={`${styles.field} rounded-md px-3 py-2.5 text-sm`}
                        value={contact.phone}
                        onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                      />
                    </label>
                  </div>

                  <label className="flex flex-col gap-1.5">
                    <span className={`${styles.label} text-xs font-semibold uppercase tracking-wide`}>
                      Organization <span style={{ color: "var(--ink-soft)" }}>(optional)</span>
                    </span>
                    <input
                      type="text"
                      className={`${styles.field} rounded-md px-3 py-2.5 text-sm`}
                      value={contact.organization}
                      onChange={(e) => setContact({ ...contact, organization: e.target.value })}
                    />
                  </label>

                  <label className="flex flex-col gap-1.5">
                    <span className={`${styles.label} text-xs font-semibold uppercase tracking-wide`}>
                      Preferred start date <span style={{ color: "var(--ink-soft)" }}>(optional)</span>
                    </span>
                    <input
                      type="date"
                      className={`${styles.field} rounded-md px-3 py-2.5 text-sm`}
                      value={contact.preferred_date}
                      onChange={(e) => setContact({ ...contact, preferred_date: e.target.value })}
                    />
                  </label>

                  {submitState === "error" && (
                    <p className="text-sm" style={{ color: "#dc2626" }}>
                      {submitError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={submitState === "submitting"}
                    className={`${styles.primaryBtn} mt-2 flex items-center justify-center gap-2 rounded-md px-4 py-3 text-sm`}
                  >
                    {submitState === "submitting" ? (
                      <>
                        <Loader2 size={15} className="animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Send proposal
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
