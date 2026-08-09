import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import UtilityBar from "@/components/UtilityBar";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Dantechdevs Developers | Custom Software & Web Solutions in Kenya",
    template: "%s | Dantechdevs Developers",
  },
  description:
    "Dantechdevs Developers designs, builds, and supports custom software, web platforms, and M-Pesa payment integrations for businesses, savings groups, and organizations across Kenya and East Africa.",
  keywords: [
    "software development Kenya",
    "web development Nairobi",
    "M-Pesa integration",
    "custom software Kenya",
    "ChamaBiz",
    "Dantechdevs",
  ],
  authors: [{ name: "Dantechdevs Developers" }],
  openGraph: {
    title: "Dantechdevs Developers | Custom Software & Web Solutions in Kenya",
    description:
      "Custom software, web platforms, and M-Pesa payment integrations for businesses across Kenya and East Africa.",
    url: "https://dantechdevelopers.com",
    siteName: "Dantechdevs Developers",
    locale: "en_KE",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <UtilityBar />
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
