"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import {
  GraduationCap,
  Smartphone,
  FileText,
  Users,
  ShieldCheck,
  RefreshCw,
  BarChart3,
  Building2,
  CreditCard,
  Layers,
  Bot,
  Award,
  ArrowRight,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import styles from "./products.module.css";
import { flagship, products, type IconKey } from "./data";

const ICONS: Record<IconKey, LucideIcon> = {
  graduationCap: GraduationCap,
  smartphone: Smartphone,
  fileText: FileText,
  users: Users,
  shieldCheck: ShieldCheck,
  refreshCw: RefreshCw,
  barChart: BarChart3,
  building: Building2,
  creditCard: CreditCard,
  layers: Layers,
  bot: Bot,
  award: Award,
};

export default function Products() {
  const [activeId, setActiveId] = useState(products[0].id);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const active = products.find((p) => p.id === activeId) ?? products[0];
  const FlagshipIcon = ICONS[flagship.icon];
  const ActiveIcon = ICONS[active.icon];

  const focusTab = useCallback((nextIndex: number) => {
    const wrapped = (nextIndex + products.length) % products.length;
    setActiveId(products[wrapped].id);
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
      focusTab(products.length - 1);
    }
  };

  return (
    <section className={`${styles.scope} w-full`}>
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 lg:py-24">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className={`${styles.badge} inline-flex items-center gap-2 rounded-full px-4 py-1.5`}>
            <Award size={14} strokeWidth={2.4} />
            {flagship.eyebrowBadge}
          </span>
          <h1 className={`${styles.display} mt-6 text-4xl leading-[1.1] tracking-tight sm:text-5xl`}>
            Off-the-Shelf Enterprise Platforms
          </h1>
          <p className="mt-5 text-base leading-7 sm:text-lg" style={{ color: "var(--ink-soft)" }}>
            Unlike traditional web agencies that build every site from scratch, Dantechdevs
            develops ready-to-deploy, enterprise-grade software platforms for immediate
            deployment and custom extension.
          </p>
        </div>

        {/* Flagship spotlight */}
        <div className={`${styles.flagshipCard} mt-14 rounded-2xl p-6 sm:p-10`}>
          <div className="flex flex-wrap items-center gap-3">
            <span className={`${styles.tag} ${styles.tagGreen} inline-flex items-center gap-1.5 rounded-full px-3 py-1`}>
              <Award size={12} /> Flagship Proprietary EdTech Product
            </span>
            <span className={`${styles.tag} rounded-full px-3 py-1`}>{flagship.versionTag}</span>
            <span className={`${styles.tag} rounded-full px-3 py-1`}>{flagship.complianceTag}</span>
          </div>

          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex items-start gap-4">
              <div className={`${styles.iconTile} flex h-14 w-14 shrink-0 items-center justify-center rounded-xl`}>
                <FlagshipIcon size={26} color="#fff" strokeWidth={2} />
              </div>
              <div>
                <h2 className={`${styles.display} text-2xl leading-tight sm:text-3xl`}>{flagship.name}</h2>
                <p className="mt-2 max-w-md text-sm sm:text-base" style={{ color: "var(--ink-soft)" }}>
                  {flagship.tagline}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href={flagship.primaryCtaHref}
                className={`${styles.primaryCta} inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm whitespace-nowrap`}
              >
                <GraduationCap size={16} /> {flagship.primaryCtaLabel}
                <ArrowRight size={14} />
              </Link>
              <Link
                href={flagship.secondaryCtaHref}
                className={`${styles.secondaryCta} inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm whitespace-nowrap`}
              >
                {flagship.secondaryCtaLabel}
              </Link>
            </div>
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-7 sm:text-base" style={{ color: "var(--ink-soft)" }}>
            {flagship.description}
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
            {/* Feature cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {flagship.features.map((feature) => {
                const Icon = ICONS[feature.icon];
                return (
                  <div key={feature.title} className={`${styles.featureCard} rounded-xl p-4`}>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <Icon size={17} color="var(--green-soft)" strokeWidth={2.2} />
                        <span className="text-sm font-semibold">{feature.title}</span>
                      </div>
                      <span className={`${styles.miniBadge} shrink-0 rounded-full px-2 py-0.5`}>
                        {feature.badge}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6" style={{ color: "var(--ink-soft)" }}>
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Metrics panel */}
            <div className={`${styles.metricsPanel} flex flex-col rounded-xl p-5`}>
              <div className="flex items-center justify-between">
                <span className={`${styles.label} flex items-center gap-2 text-xs`} style={{ color: "var(--ink-soft)" }}>
                  <Layers size={14} color="var(--green-soft)" />
                  {flagship.metricsPanelLabel}
                </span>
                <span className={`${styles.metricsHeaderTag} rounded-full px-2 py-0.5`}>
                  {flagship.metricsPanelTag}
                </span>
              </div>

              <div className="mt-4 flex flex-1 flex-col gap-3">
                {flagship.metrics.map((metric) => {
                  const Icon = ICONS[metric.icon];
                  return (
                    <div
                      key={metric.label}
                      className={`${styles.metricRow} flex items-center justify-between gap-3 rounded-lg px-4 py-3`}
                    >
                      <div>
                        <p className="text-xs" style={{ color: "var(--ink-faint)" }}>
                          {metric.label}
                        </p>
                        <p className={`${styles.metricValue} mt-1 text-lg`}>{metric.value}</p>
                      </div>
                      <Icon size={18} color="var(--green-soft)" strokeWidth={2} />
                    </div>
                  );
                })}
              </div>

              <Link
                href={flagship.tourCtaHref}
                className={`${styles.primaryCta} mt-4 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm`}
              >
                <GraduationCap size={16} /> {flagship.tourCtaLabel}
              </Link>
            </div>
          </div>

          <div className={`${styles.noteBox} mt-6 flex flex-col gap-2 rounded-xl p-4 sm:flex-row sm:items-center sm:justify-between`}>
            <div className="flex items-center gap-2 text-sm" style={{ color: "var(--ink-soft)" }}>
              <CheckCircle2 size={16} color="var(--green-soft)" />
              {flagship.noteQuestion}
            </div>
            <Link href={flagship.noteLinkHref} className={`${styles.noteLink} inline-flex items-center gap-1.5 text-sm`}>
              {flagship.noteLinkLabel} <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Additional products */}
        <div className={`${styles.sectionDivider} mt-16 pt-16`}>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className={`${styles.display} text-3xl leading-tight sm:text-4xl`}>
              Additional Proprietary Enterprise Products
            </h2>
            <p className="mt-4 text-sm leading-7 sm:text-base" style={{ color: "var(--ink-soft)" }}>
              Select a product below to inspect features, target audience, and architecture.
            </p>
            <span className={`${styles.badge} mt-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5`}>
              <Layers size={14} strokeWidth={2.4} />
              {products.length} Off-The-Shelf IP Solutions
            </span>
          </div>

          {/* Product tabs */}
          <div
            role="tablist"
            aria-label="Proprietary products"
            className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
          >
            {products.map((product, i) => {
              const selected = product.id === activeId;
              const Icon = ICONS[product.icon];
              return (
                <button
                  key={product.id}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  role="tab"
                  id={`tab-${product.id}`}
                  aria-selected={selected}
                  aria-controls={`panel-${product.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActiveId(product.id)}
                  onKeyDown={(e) => onTabKeyDown(e, i)}
                  className={`${styles.productCard} flex flex-col gap-3 rounded-xl p-4`}
                >
                  <div className={`${styles.productIconTile} flex h-10 w-10 items-center justify-center rounded-lg`}>
                    <Icon size={19} color={selected ? "#ffffff" : "var(--blue)"} strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold leading-snug">{product.name}</p>
                    <span className={`${styles.categoryLabel} mt-1.5 block`}>{product.category}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div
            key={active.id}
            role="tabpanel"
            id={`panel-${active.id}`}
            aria-labelledby={`tab-${active.id}`}
            className={`${styles.detailPanel} mt-8 rounded-2xl p-6 sm:p-10`}
          >
            <p className="text-xs" style={{ color: "var(--ink-faint)" }}>
              {active.targetAudience}
            </p>

            <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex items-start gap-4">
                <div className={`${styles.iconTile} flex h-14 w-14 shrink-0 items-center justify-center rounded-xl`}>
                  <ActiveIcon size={26} color="#fff" strokeWidth={2} />
                </div>
                <div>
                  <h3 className={`${styles.display} text-2xl leading-tight sm:text-3xl`}>{active.name}</h3>
                  <p className="mt-2 max-w-md text-sm sm:text-base" style={{ color: "var(--ink-soft)" }}>
                    {active.tagline}
                  </p>
                </div>
              </div>

              <Link
                href={active.ctaHref}
                className={`${styles.blueCta} inline-flex shrink-0 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm whitespace-nowrap`}
              >
                {active.ctaLabel} <ArrowRight size={14} />
              </Link>
            </div>

            <p className="mt-6 max-w-3xl text-sm leading-7 sm:text-base" style={{ color: "var(--ink-soft)" }}>
              {active.description}
            </p>

            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <div>
                <h4 className={`${styles.label} text-xs uppercase tracking-wide`} style={{ color: "var(--ink-faint)" }}>
                  Key Capabilities & Features
                </h4>
                <ul className="mt-3">
                  {active.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className={`${styles.capabilityRow} flex items-start gap-2.5 py-2.5 text-sm`}
                      style={{ color: "var(--ink-soft)" }}
                    >
                      <CheckCircle2 size={16} color="var(--green-soft)" className="mt-0.5 shrink-0" />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className={`${styles.label} text-xs uppercase tracking-wide`} style={{ color: "var(--ink-faint)" }}>
                  Architecture & Deployment
                </h4>
                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className={`${styles.archBox} rounded-lg p-4`}>
                    <p className={styles.archLabel}>Module Structure</p>
                    <p className="mt-1 text-sm font-semibold">{active.architecture.moduleStructure}</p>
                  </div>
                  <div className={`${styles.archBox} rounded-lg p-4`}>
                    <p className={styles.archLabel}>Deployment Options</p>
                    <p className="mt-1 text-sm font-semibold">{active.architecture.deploymentOptions}</p>
                  </div>
                  <div className={`${styles.archBox} rounded-lg p-4`}>
                    <p className={styles.archLabel}>Data Security</p>
                    <p className={`${styles.archValueGreen} mt-1 text-sm font-semibold`}>
                      {active.architecture.dataSecurity}
                    </p>
                  </div>
                  <div className={`${styles.archBox} rounded-lg p-4`}>
                    <p className={styles.archLabel}>Support SLA</p>
                    <p className={`${styles.archValueBlue} mt-1 text-sm font-semibold`}>
                      {active.architecture.supportSLA}
                    </p>
                  </div>
                </div>

                <Link
                  href={active.budgetCtaHref}
                  className={`${styles.outlineCta} mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm sm:w-auto`}
                >
                  {active.budgetCtaLabel} <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}