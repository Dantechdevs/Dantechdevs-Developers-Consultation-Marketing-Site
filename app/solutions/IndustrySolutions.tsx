"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import {
  GraduationCap,
  Building2,
  CreditCard,
  Truck,
  HeartPulse,
  Globe2,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import styles from "./solutions.module.css";
import { sectors, type IconKey } from "./data";

const ICONS: Record<IconKey, LucideIcon> = {
  education: GraduationCap,
  enterprise: Building2,
  fintech: CreditCard,
  logistics: Truck,
  healthcare: HeartPulse,
  nonprofit: Globe2,
};

export default function IndustrySolutions() {
  const [activeId, setActiveId] = useState(sectors[0].id);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const active = sectors.find((s) => s.id === activeId) ?? sectors[0];

  const focusTab = useCallback((nextIndex: number) => {
    const wrapped = (nextIndex + sectors.length) % sectors.length;
    setActiveId(sectors[wrapped].id);
    tabRefs.current[wrapped]?.focus();
  }, []);

  const onTabKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      focusTab(index + 1);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      focusTab(index - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      focusTab(0);
    } else if (e.key === "End") {
      e.preventDefault();
      focusTab(sectors.length - 1);
    }
  };

  return (
    <section className={`${styles.scope} w-full`}>
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 lg:py-24">
        {/* Centered header */}
        <div className="mx-auto max-w-3xl text-center">
          <span
            className={`${styles.badge} inline-flex items-center gap-2 rounded-full px-4 py-1.5`}
          >
            <ShieldCheck size={14} strokeWidth={2.4} />
            Industry Solutions
          </span>
          <h1
            className={`${styles.display} mt-6 text-4xl leading-[1.1] tracking-tight sm:text-5xl`}
          >
            Tailored Digital Solutions by Industry Sector
          </h1>
          <p
            className="mt-5 text-base leading-7 sm:text-lg"
            style={{ color: "var(--ink-soft)" }}
          >
            Every sector faces distinct operational bottlenecks. Dantechdevs
            pairs reusable software components with hands-on domain
            engineering to solve your exact industry challenges.
          </p>
        </div>

        {/* Pill tabs */}
        <div
          role="tablist"
          aria-label="Industry sectors"
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          {sectors.map((sector, i) => {
            const selected = sector.id === activeId;
            const Icon = ICONS[sector.icon];
            return (
              <button
                key={sector.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                id={`tab-${sector.id}`}
                aria-selected={selected}
                aria-controls={`panel-${sector.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveId(sector.id)}
                onKeyDown={(e) => onTabKeyDown(e, i)}
                className={`${styles.pill} inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm`}
              >
                <Icon size={16} strokeWidth={2.2} />
                {sector.label}
              </button>
            );
          })}
        </div>

        {/* Spotlight panel */}
        <div
          key={active.id}
          role="tabpanel"
          id={`panel-${active.id}`}
          aria-labelledby={`tab-${active.id}`}
          className={`${styles.panel} mt-12 border`}
          style={{ borderColor: "var(--line)" }}
        >
          <div
            className="flex flex-col gap-5 border-b p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"
            style={{ borderColor: "var(--line)" }}
          >
            <div>
              <p
                className={`${styles.label} text-xs font-semibold`}
                style={{ color: "var(--blue)" }}
              >
                Industry solution spotlight
              </p>
              <h2 className={`${styles.display} mt-2 text-2xl leading-tight sm:text-3xl`}>
                {active.headline}
              </h2>
              <p className="mt-1 text-sm" style={{ color: "var(--ink-soft)" }}>
                {active.subhead}
              </p>
            </div>
            <Link
              href="/consultation"
              className={`${styles.ctaButton} inline-flex shrink-0 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm`}
            >
              Build solution proposal
              <ArrowRight size={16} strokeWidth={2.2} />
            </Link>
          </div>

          <p
            className="px-6 pt-6 text-sm leading-6 sm:px-8"
            style={{ color: "var(--ink-soft)" }}
          >
            {active.intro}
          </p>

          {/* Two-column challenge / capability boxes */}
          <div className="grid grid-cols-1 gap-6 p-6 sm:p-8 lg:grid-cols-2">
            <div className={`${styles.challengeBox} rounded-lg p-5`}>
              <p
                className={`${styles.boxHeading} flex items-center gap-2 font-semibold`}
                style={{ color: "var(--rust)" }}
              >
                <AlertCircle size={15} strokeWidth={2.3} />
                Key operational challenges solved
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {active.pairs.map((pair, i) => (
                  <li key={i} className="text-sm leading-6" style={{ color: "var(--ink)" }}>
                    {pair.challenge}
                  </li>
                ))}
              </ul>
            </div>

            <div className={`${styles.capabilityBox} rounded-lg p-5`}>
              <p
                className={`${styles.boxHeading} flex items-center gap-2 font-semibold`}
                style={{ color: "var(--teal)" }}
              >
                <CheckCircle2 size={15} strokeWidth={2.3} />
                Dantechdevs capabilities deployed
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {active.pairs.map((pair, i) => (
                  <li key={i} className="text-sm leading-6" style={{ color: "var(--ink)" }}>
                    {pair.capability}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Scope footer */}
          <div
            className={`${styles.label} flex flex-wrap items-center justify-between gap-3 border-t px-6 py-4 text-xs sm:px-8`}
            style={{ borderColor: "var(--line)", color: "var(--ink-soft)" }}
          >
            <span>Typical engagement — {active.scope.duration}</span>
            <span>Core team — {active.scope.team}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
