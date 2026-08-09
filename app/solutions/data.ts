export type Pair = { challenge: string; capability: string };

export type IconKey =
  | "education"
  | "enterprise"
  | "fintech"
  | "logistics"
  | "healthcare"
  | "nonprofit";

export type Sector = {
  id: string;
  index: string;
  label: string;
  icon: IconKey;
  headline: string;
  subhead: string;
  intro: string;
  pairs: Pair[];
  scope: { duration: string; team: string };
};

export const sectors: Sector[] = [
  {
    id: "education",
    index: "01",
    label: "Higher Education",
    icon: "education",
    headline: "Higher Education & Academic Institutions",
    subhead: "Admissions, student records & learning delivery",
    intro:
      "From application to alumnus, one system replaces the folders, spreadsheets and phone calls that slow an institution down.",
    pairs: [
      {
        challenge:
          "Admissions run on paper forms and manual transcript checks, so every intake cycle backs up.",
        capability:
          "Digital admissions portal with automated document verification and instant offer letters.",
      },
      {
        challenge:
          "Student records are split across the registrar, finance and academic departments.",
        capability:
          "One student information system spanning enrollment, billing and academic history.",
      },
      {
        challenge:
          "Lecturers track attendance, grading and course materials in disconnected tools.",
        capability:
          "Integrated LMS with attendance, gradebook and material distribution in one place.",
      },
      {
        challenge:
          "Regulatory reports for the Commission for University Education are compiled by hand.",
        capability:
          "Compliance dashboards that generate CUE-ready reports on demand.",
      },
    ],
    scope: { duration: "10–16 weeks", team: "3–4 engineers" },
  },
  {
    id: "enterprise",
    index: "02",
    label: "Enterprise",
    icon: "enterprise",
    headline: "Enterprise & Corporate Operations",
    subhead: "Workflow automation, internal tooling & systems integration",
    intro:
      "We connect the systems you already run and remove the manual steps sitting between them.",
    pairs: [
      {
        challenge:
          "Procurement, HR and finance approvals stall in email threads for days.",
        capability:
          "Configurable workflow engine with role-based routing and a full audit trail.",
      },
      {
        challenge:
          "Legacy ERP, HRIS and accounting systems don't share data with each other.",
        capability:
          "API middleware that syncs records across your existing enterprise systems.",
      },
      {
        challenge:
          "Leadership has no real-time view of operational KPIs between meetings.",
        capability:
          "Live executive dashboards pulling directly from operational data sources.",
      },
      {
        challenge:
          "An analyst manually rebuilds the same spreadsheet report every week.",
        capability:
          "Self-service reporting that replaces recurring manual exports.",
      },
    ],
    scope: { duration: "8–14 weeks", team: "2–4 engineers" },
  },
  {
    id: "fintech",
    index: "03",
    label: "FinTech",
    icon: "fintech",
    headline: "FinTech & Financial Services",
    subhead: "Payments, compliance & risk infrastructure",
    intro:
      "Infrastructure built to move money correctly, prove it, and survive an audit.",
    pairs: [
      {
        challenge:
          "Reconciling transactions across mobile money, banks and card rails is done by hand.",
        capability:
          "Automated multi-rail reconciliation engine with exception flagging.",
      },
      {
        challenge:
          "KYC and AML checks slow onboarding and carry real compliance exposure.",
        capability:
          "Integrated KYC/AML verification pipeline with audit-ready logging.",
      },
      {
        challenge:
          "The core system can't support a new payment product without months of rework.",
        capability:
          "API-first payment architecture that ships new products in weeks.",
      },
      {
        challenge:
          "Fraud patterns are only caught after settlement, when it's too late.",
        capability:
          "Real-time transaction monitoring with configurable fraud rules.",
      },
    ],
    scope: { duration: "12–20 weeks", team: "3–5 engineers" },
  },
  {
    id: "logistics",
    index: "04",
    label: "Logistics, Fleet",
    icon: "logistics",
    headline: "Logistics, Fleet & Distribution",
    subhead: "Route visibility, vehicle health & delivery proof",
    intro:
      "Know where every vehicle is, what it costs, and whether the delivery actually happened.",
    pairs: [
      {
        challenge:
          "Dispatchers plan routes manually with no live view of vehicle location.",
        capability:
          "GPS fleet tracking with live dispatch and route optimization.",
      },
      {
        challenge:
          "Fuel and maintenance costs are logged in spreadsheets, after the fact.",
        capability:
          "Automated fuel and maintenance logging tied to each vehicle's history.",
      },
      {
        challenge:
          "Proof of delivery relies on paper waybills that go missing in transit.",
        capability:
          "Digital proof-of-delivery capture with signature and photo at drop-off.",
      },
      {
        challenge:
          "Harsh braking, idling and speeding stay invisible until there's an incident.",
        capability:
          "Telematics-based driver scorecards with real-time alerting.",
      },
    ],
    scope: { duration: "10–16 weeks", team: "3–4 engineers" },
  },
  {
    id: "healthcare",
    index: "05",
    label: "Healthcare",
    icon: "healthcare",
    headline: "Healthcare & Medical Practice",
    subhead: "Patient records, scheduling & care continuity",
    intro:
      "Clinical systems that keep a patient's history intact from first visit to referral.",
    pairs: [
      {
        challenge:
          "Patient files sit on paper or in clinic-specific systems that don't connect.",
        capability:
          "Electronic medical records built around Kenya's Data Protection Act.",
      },
      {
        challenge:
          "Appointments are booked over the phone into a manual diary.",
        capability:
          "Online booking with automated reminders and fewer no-shows.",
      },
      {
        challenge:
          "Referrals between providers lose clinical context in the handoff.",
        capability:
          "Structured e-referral workflow that carries the full case history.",
      },
      {
        challenge:
          "Patients have no way to see their own results or treatment history.",
        capability:
          "Patient portal for results, prescriptions and appointment history.",
      },
    ],
    scope: { duration: "12–18 weeks", team: "3–5 engineers" },
  },
  {
    id: "nonprofit",
    index: "06",
    label: "Non-Profit, NGO",
    icon: "nonprofit",
    headline: "Non-Profit, NGO & Public Sector",
    subhead: "Grant tracking, field reporting & donor transparency",
    intro:
      "Field data that reaches a program manager the same day it's collected — and a report every donor can read.",
    pairs: [
      {
        challenge:
          "Field data is collected on paper and re-entered weeks later.",
        capability:
          "Offline-capable mobile data collection that syncs when connectivity returns.",
      },
      {
        challenge:
          "Grant spend lives in spreadsheets that don't match donor reporting formats.",
        capability:
          "Budget tracking mapped directly to each donor's reporting structure.",
      },
      {
        challenge:
          "Program teams only see field activity at the next reporting cycle.",
        capability:
          "Live field-activity dashboards for program managers.",
      },
      {
        challenge:
          "Every donor wants impact reported in a different format.",
        capability:
          "Report templates configurable per donor, built from the same underlying data.",
      },
    ],
    scope: { duration: "8–14 weeks", team: "2–3 engineers" },
  },
];
