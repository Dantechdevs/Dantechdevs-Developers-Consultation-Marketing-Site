# Dantechdevs Developers — Consultation Site

A standalone marketing + lead-generation site for **Dantechdevs Developers**, modeled after the Elivam Technologies consultation page pattern. Built separately from the main Dantechdevs portfolio site.

---

## 1. Overview

**Company:** Dantechdevs Developers — a team of about 5 developers based in Nairobi, Kenya, building custom software for Kenyan and East African businesses.

**Tagline:** "Code the Future. Build Today."

**Goal:** Give potential clients a fast, professional way to learn about Dantechdevs Developers and submit a qualified project consultation request.

**Local project path:** `C:\xampp\htdocs\dantechdevs-consultation-new`

**Live business contact numbers:** +254 712 328150 / +254 728 328150

---

## 2. Tech Stack

| Layer | Choice |
|---|---|
| Frontend framework | Next.js (App Router, TypeScript, Tailwind CSS) |
| Hosting (planned) | Vercel |
| Database | Supabase (Postgres) — project `dantechdevs-consultation`, hosted in Central EU (Frankfurt) |
| Email notifications | Resend |
| Icons | lucide-react |

HostPinnacle was considered for hosting but is a PHP/cPanel host — not suited to this Next.js app, which needs a Node server for the consultation API route. Vercel is the planned host for this project; HostPinnacle remains fine for the PHP/Laravel projects.

---

## 3. Site Structure (routes)

| Route | Content |
|---|---|
| `/` | Homepage — hero, stats bar, real client solutions grid, services, why-Dantechdevs comparison |
| `/contact` | Consultation form (company info + lead-capture form) |
| `/portfolio` | About intro, vision/mission, core values, methodology timeline, who we serve, case studies |
| `/services` | Filterable grid of 10 core services |
| `/why-dantechdevs` | Comparison table + feature cards vs. typical agencies |
| `/products/chamabiz` | Featured project spotlight (ChamaBiz), with clearly labeled sample/demo data |

Global layout (`app/layout.tsx`) renders `UtilityBar`, `NavBar`, and `Footer` on every page. Individual page files under `app/` only contain their unique content.

A floating WhatsApp widget (`components/WhatsAppButton.tsx`) appears on every page — click to expand a chat panel with quick-message suggestions, or use the number directly: +254 712 328150.

---

## 4. Branding Notes

- Wordmark: "Dantechdevs" (blue) + "Developers" (red), kept on one line in the nav (`whitespace-nowrap`)
- Utility bar: "DANTECHDEVS DEVELOPERS: Code the Future. Build Today. • Local Expertise, Modern Engineering" with a pulsing green status dot, red map-pin and phone icons
- Footer includes a "Flagship Product IP" column featuring American Beauty, and a "Regional & Global Standard" callout

---

## 5. Real Client Projects Featured

Used across `/portfolio`, `/why-dantechdevs`, and the homepage client-solutions grid:

- **ChamaBiz** (chamabiz.co.ke) — Django chama savings platform, M-Pesa integration
- **WakiliPro** — Laravel legal marketplace for LSK-verified advocates
- **Dante Estate** — Laravel property management system
- **American Beauty** (americanbeauty.co.ke) — Laravel salon booking/POS platform
- **Jerann Traders** — Laravel 11 e-commerce store
- **Mwirigi Farm** — React/Node.js farm management app

---

## 6. Environment Setup

`.env.local` (already filled in locally — **never commit this file**; `.gitignore` already excludes `.env*`):

```
NEXT_PUBLIC_SUPABASE_URL=https://lcvsoxgbkgohutjmrqvj.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<set>
SUPABASE_SERVICE_ROLE_KEY=<set>
RESEND_API_KEY=<set, using Resend sandbox sender for now>
```

**Security note:** the Supabase and Resend keys above were pasted into a chat session during setup. Before real client data flows through this site, regenerate both the Supabase `service_role` key and the Resend API key from their respective dashboards, and update `.env.local` (and Vercel's environment variables) with the new values.

### Supabase table

Run `supabase_migration.sql` in the Supabase SQL Editor to create the `consultations` table:

```sql
create table consultations (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text not null,
  organization text,
  service_needed text not null,
  preferred_date date,
  project_details text not null,
  status text default 'new',
  created_at timestamp default now()
);

alter table consultations enable row level security;
```

---

## 7. Current Status

- Full site built across all routes listed above
- Supabase project created and confirmed healthy (Frankfurt region)
- Resend account created, API key generated
- `.env.local` filled in with real keys
- **Form submission not yet confirmed end-to-end** — the consultation form shows a success message on submit, but the Supabase `consultations` table has not yet been confirmed to receive the row, and no notification email has been confirmed received. Next debugging steps:
  1. Confirm the dev server was restarted *after* `.env.local` was filled in (Next.js only loads env vars on startup)
  2. Check the terminal running `npm run dev` for `Supabase insert error` or `Resend email error` logs after a test submission
  3. Check the browser Network tab (`/api/consultation` request) for the actual server response
  4. Confirm the `consultations` table actually exists in Supabase Table Editor

---

## 8. Outstanding Before Public Launch

- [ ] Confirm consultation form writes to Supabase and triggers email (see Section 7)
- [ ] Verify a real sending domain in Resend (currently using sandbox `onboarding@resend.dev`, which can only deliver to the Resend account owner's email)
- [ ] Regenerate Supabase `service_role` key and Resend API key (exposed in chat during setup)
- [ ] Replace placeholder service pricing on `/services` with real figures, or switch to "Contact for Quote"
- [ ] Fix or remove dead nav links (`/products` index, `/solutions` — not yet built)
- [ ] Update `app/layout.tsx` metadata (currently default "Create Next App" title/description) and favicon
- [ ] Mobile responsiveness pass across all pages
- [ ] Add a privacy policy page
- [ ] Deploy to Vercel and connect a domain