export type VolumeKey = "small" | "medium" | "large" | "enterprise";

export const sectorOptions = [
  "Educational Institution (University/School)",
  "Enterprise / Corporate",
  "SME Business",
  "NGO / Church / Non-Profit",
  "FinTech / Payment Tech",
  "Startup / Entrepreneur",
] as const;

export const volumeOptions: { key: VolumeKey; label: string; multiplier: number }[] = [
  { key: "small", label: "Small (< 100 active users)", multiplier: 1.0 },
  { key: "medium", label: "Medium (100 – 1,000 users)", multiplier: 1.12 },
  { key: "large", label: "Large (1,000 – 10,000 users)", multiplier: 1.3 },
  { key: "enterprise", label: "Enterprise (10,000+ users)", multiplier: 1.55 },
];

export type Module = {
  id: string;
  name: string;
  basePrice: number;
  weeks: number;
};

export const modules: Module[] = [
  { id: "custom-software", name: "Custom Software Development", basePrice: 2400, weeks: 4 },
  { id: "web-app", name: "Web Application Development", basePrice: 1700, weeks: 3 },
  { id: "website", name: "Website Design & Development", basePrice: 750, weeks: 1.5 },
  { id: "sector-system", name: "Sector Management System", basePrice: 3000, weeks: 5 },
  { id: "payments", name: "Payments & Financial Integration", basePrice: 1300, weeks: 2 },
  { id: "api-integration", name: "API & Systems Integration", basePrice: 1000, weeks: 1.5 },
  { id: "cloud-hosting", name: "Cloud, Hosting & Infrastructure", basePrice: 500, weeks: 1 },
  { id: "cybersecurity", name: "Cybersecurity & System Hardening", basePrice: 1400, weeks: 2 },
  { id: "lms", name: "E-Learning (LMS) & Self-Paced Platforms", basePrice: 2100, weeks: 3.5 },
  { id: "consultancy", name: "IT Consultancy & Strategy", basePrice: 850, weeks: 1 },
  { id: "support", name: "Technical Support & Maintenance (monthly)", basePrice: 400, weeks: 0.5 },
];

export type AddOn = {
  id: string;
  name: string;
  price: number;
};

export const addOns: AddOn[] = [
  { id: "mpesa", name: "M-Pesa STK Push Gateway", price: 350 },
  { id: "sms", name: "SMS Alert Gateway", price: 200 },
  { id: "portals", name: "Client / Staff Portals", price: 500 },
  { id: "security-audit", name: "Security Audit", price: 400 },
  { id: "vps", name: "Managed VPS & SSL", price: 250 },
  { id: "multi-tenant", name: "Multi-Tenant Database", price: 600 },
];
