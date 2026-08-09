export type IconKey =
  | "graduationCap"
  | "smartphone"
  | "fileText"
  | "users"
  | "shieldCheck"
  | "refreshCw"
  | "barChart"
  | "building"
  | "creditCard"
  | "layers"
  | "bot"
  | "award";

export type FlagshipFeature = {
  icon: IconKey;
  title: string;
  badge: string;
  description: string;
};

export type Metric = {
  icon: IconKey;
  label: string;
  value: string;
};

export type Flagship = {
  eyebrowBadge: string;
  versionTag: string;
  complianceTag: string;
  icon: IconKey;
  name: string;
  tagline: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  description: string;
  features: FlagshipFeature[];
  metricsPanelLabel: string;
  metricsPanelTag: string;
  metrics: Metric[];
  tourCtaLabel: string;
  tourCtaHref: string;
  noteQuestion: string;
  noteLinkLabel: string;
  noteLinkHref: string;
};

export const flagship: Flagship = {
  eyebrowBadge: "Proprietary Software Products & IP",
  versionTag: "Version 4.2 Release",
  complianceTag: "100% East Africa Compliant",
  icon: "graduationCap",
  name: "Dantechdevs Campus Sphere™",
  tagline: "All-In-One Campus Management & Student Information System (EMIS/ERP)",
  primaryCtaLabel: "Launch Live Interactive Sandbox",
  primaryCtaHref: "/tools/chat",
  secondaryCtaLabel: "Configure Institution Pricing",
  secondaryCtaHref: "/consultation",
  description:
    "Engineered specifically for schools, colleges, and universities in East Africa. Dantechdevs Campus Sphere™ connects academics, fee collection, student self-service, lecturers, and parents into a single, secure cloud ecosystem.",
  features: [
    {
      icon: "smartphone",
      title: "M-Pesa STK Fee Engine",
      badge: "Finance",
      description:
        "Automatic STK push to parent phones with real-time ledger updates & SMS receipts.",
    },
    {
      icon: "fileText",
      title: "CBC & KNEC Assessment",
      badge: "Academics",
      description:
        "Automated transcript generation aligned with Kenyan KICD, CBC & KNEC grading standards.",
    },
    {
      icon: "users",
      title: "4-in-1 Dedicated Portals",
      badge: "Access",
      description:
        "Tailored web & mobile portals for Administrators, Lecturers, Students, and Parents.",
    },
    {
      icon: "shieldCheck",
      title: "Biometric Attendance & SMS",
      badge: "Security",
      description:
        "RFID and fingerprint student logging linked with instant automated parent SMS alerts.",
    },
    {
      icon: "refreshCw",
      title: "Offline Resilient Cloud Sync",
      badge: "Reliability",
      description:
        "Runs smoothly even during local internet downtime with background database sync.",
    },
    {
      icon: "barChart",
      title: "Executive Analytics Hub",
      badge: "Analytics",
      description:
        "Real-time financial collection charts, class performance metrics, and enrollment trends.",
    },
  ],
  metricsPanelLabel: "Live Institutional Benchmark",
  metricsPanelTag: "Proven IP",
  metrics: [
    { icon: "users", label: "Active Students Managed", value: "45,000+" },
    { icon: "smartphone", label: "M-Pesa STK Fee Reconciled", value: "99.9% Instant" },
    { icon: "fileText", label: "Curriculum Standards", value: "CBC & KNEC Aligned" },
    { icon: "refreshCw", label: "Parent SMS Notification Speed", value: "< 3 Seconds" },
  ],
  tourCtaLabel: "Explore Campus Sphere Full Tour",
  tourCtaHref: "/tools/chat",
  noteQuestion: "Need custom modules or local server deployment for your institution?",
  noteLinkLabel: "Speak with EdTech Architect",
  noteLinkHref: "/tools/chat",
};

export type Product = {
  id: string;
  name: string;
  category: string;
  icon: IconKey;
  targetAudience: string;
  tagline: string;
  ctaLabel: string;
  ctaHref: string;
  description: string;
  capabilities: string[];
  architecture: {
    moduleStructure: string;
    deploymentOptions: string;
    dataSecurity: string;
    supportSLA: string;
  };
  budgetCtaLabel: string;
  budgetCtaHref: string;
};

export const products: Product[] = [
  {
    id: "self-paced",
    name: "Self-Paced Learning System",
    category: "Monetized LMS",
    icon: "graduationCap",
    targetAudience: "Target: Course Creators, Coaches & Digital Academies",
    tagline: "Sellable Self-Paced Courses & Membership Platform",
    ctaLabel: "Request Self-Paced Platform Demo",
    ctaHref: "/tools/quote",
    description:
      "A monetized, self-paced learning platform for course creators and academies who want to package and sell content directly — drip-fed modules, paywalled content, and automated payouts, no third-party marketplace cut.",
    capabilities: [
      "Paywalled courses with M-Pesa & card checkout",
      "Drip-fed content release and cohort scheduling",
      "Built-in quizzes, assignments & progress tracking",
      "Affiliate and coupon-based sales tools",
      "Automated payout reports for instructors",
      "Mobile-first learner app with offline video caching",
    ],
    architecture: {
      moduleStructure: "Modular LMS Engine",
      deploymentOptions: "Cloud Managed",
      dataSecurity: "Encrypted Automated Backups",
      supportSLA: "24/7 Dedicated Support Portal",
    },
    budgetCtaLabel: "Configure Budget in Estimator",
    budgetCtaHref: "/consultation",
  },
  {
    id: "lms",
    name: "Fully Customizable LMS",
    category: "EdTech Suite",
    icon: "graduationCap",
    targetAudience: "Target: Schools, Universities, Training Academies & Corporates",
    tagline: "Enterprise & Institutional Learning Management System",
    ctaLabel: "Request Customizable LMS Demo",
    ctaHref: "/tools/quote",
    description:
      "A fully customizable Learning Management System (LMS) engineered for schools, universities, training institutes, and enterprise organizations. Features bespoke white-label branding, custom course structures, live virtual classrooms, assignment submission portals, and real-time student tracking.",
    capabilities: [
      "100% customizable branding, custom domains & portal themes",
      "Live virtual classroom integration (Zoom, Google Meet, Teams)",
      "Interactive course builder with video, quiz & PDF modules",
      "Automated certificate issuance & digital badge credentials",
      "Student attendance, gradebook & performance analytics",
      "Multi-role portals for Students, Lecturers, Instructors & Admins",
    ],
    architecture: {
      moduleStructure: "Modular LMS Engine",
      deploymentOptions: "Cloud Managed / On-Premise",
      dataSecurity: "Encrypted Automated Backups",
      supportSLA: "24/7 Dedicated Support Portal",
    },
    budgetCtaLabel: "Configure Budget in Estimator",
    budgetCtaHref: "/consultation",
  },
  {
    id: "erp",
    name: "Dantechdevs Enterprise ERP",
    category: "Proprietary IP",
    icon: "building",
    targetAudience: "Target: SMEs, Manufacturers, Retail Chains & Corporates",
    tagline: "Unified Enterprise Resource Planning Suite",
    ctaLabel: "Request Enterprise ERP Demo",
    ctaHref: "/tools/quote",
    description:
      "A single operational backbone for finance, inventory, HR, procurement, and reporting. Replaces disconnected spreadsheets with one live source of truth across every department and branch.",
    capabilities: [
      "Multi-branch inventory, warehouse & procurement tracking",
      "Integrated payroll, HR records & leave management",
      "Automated invoicing, expense tracking & financial reports",
      "Role-based access across finance, ops & executive teams",
      "Custom approval workflows and audit trails",
      "Real-time dashboards for cash flow and stock levels",
    ],
    architecture: {
      moduleStructure: "Modular ERP Core",
      deploymentOptions: "Cloud Managed / On-Premise",
      dataSecurity: "Encrypted Automated Backups",
      supportSLA: "24/7 Dedicated Support Portal",
    },
    budgetCtaLabel: "Configure Budget in Estimator",
    budgetCtaHref: "/consultation",
  },
  {
    id: "pay",
    name: "Dantechdevs Pay STK Orchestrator",
    category: "FinTech Engine",
    icon: "creditCard",
    targetAudience: "Target: Institutions, SACCOs, E-commerce & Utility Billers",
    tagline: "M-Pesa STK Push & Multi-Channel Payment Orchestration",
    ctaLabel: "Request Pay Orchestrator Demo",
    ctaHref: "/tools/quote",
    description:
      "A drop-in payment orchestration layer that pushes M-Pesa STK prompts, reconciles transactions instantly, and routes receipts and ledger updates across every connected system — no manual reconciliation required.",
    capabilities: [
      "M-Pesa STK Push, Paybill & Till reconciliation engine",
      "Instant SMS and email payment receipts",
      "Multi-provider routing: M-Pesa, cards & bank transfers",
      "Real-time ledger sync with your ERP or SIS",
      "Automated retry logic for failed or pending transactions",
      "Exportable settlement & reconciliation reports",
    ],
    architecture: {
      moduleStructure: "API-First Payment Engine",
      deploymentOptions: "Cloud Managed / On-Premise",
      dataSecurity: "PCI-Aligned Encrypted Transactions",
      supportSLA: "24/7 Dedicated Support Portal",
    },
    budgetCtaLabel: "Configure Budget in Estimator",
    budgetCtaHref: "/consultation",
  },
  {
    id: "portal-builder",
    name: "Dantechdevs Portal Builder",
    category: "SaaS Platform",
    icon: "layers",
    targetAudience: "Target: Agencies, SaaS Founders & Multi-Client Businesses",
    tagline: "White-Label Portal & Multi-Tenant SaaS Framework",
    ctaLabel: "Request Portal Builder Demo",
    ctaHref: "/tools/quote",
    description:
      "A multi-tenant framework for spinning up branded client portals in days instead of months — used internally to launch dedicated dashboards for every Dantechdevs product line and client deployment.",
    capabilities: [
      "Multi-tenant architecture with isolated client workspaces",
      "Drag-and-drop portal & dashboard theme builder",
      "Custom domains and white-label branding per client",
      "Plug-in module marketplace for rapid feature additions",
      "Centralized billing and subscription management",
      "Role-based admin, staff and client-facing access tiers",
    ],
    architecture: {
      moduleStructure: "Multi-Tenant SaaS Core",
      deploymentOptions: "Cloud Managed",
      dataSecurity: "Encrypted Automated Backups",
      supportSLA: "24/7 Dedicated Support Portal",
    },
    budgetCtaLabel: "Configure Budget in Estimator",
    budgetCtaHref: "/consultation",
  },
  {
    id: "ai-sentinel",
    name: "Dantechdevs AI Sentinel",
    category: "Security IP",
    icon: "bot",
    targetAudience: "Target: Institutions, Enterprises & Regulated Businesses",
    tagline: "AI-Driven Monitoring, Fraud Detection & Threat Response",
    ctaLabel: "Request AI Sentinel Demo",
    ctaHref: "/tools/quote",
    description:
      "An AI monitoring layer that watches transactions, logins, and system activity around the clock, flagging anomalies and fraud patterns before they become incidents — built to sit alongside any Dantechdevs platform.",
    capabilities: [
      "Real-time anomaly detection across logins & transactions",
      "Automated fraud pattern flagging with confidence scoring",
      "Configurable alert thresholds and escalation rules",
      "Instant SMS/email alerts to designated administrators",
      "Audit-ready activity logs for compliance reviews",
      "Plugs into Campus Sphere, ERP & Pay Orchestrator natively",
    ],
    architecture: {
      moduleStructure: "AI Monitoring Layer",
      deploymentOptions: "Cloud Managed / On-Premise",
      dataSecurity: "Encrypted Automated Backups",
      supportSLA: "24/7 Dedicated Support Portal",
    },
    budgetCtaLabel: "Configure Budget in Estimator",
    budgetCtaHref: "/consultation",
  },
];