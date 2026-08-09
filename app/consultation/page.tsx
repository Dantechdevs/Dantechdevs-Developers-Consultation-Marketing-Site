import type { Metadata } from "next";
import { fraunces, inter, plexMono } from "./fonts";
import ConfiguratorForm from "./ConfiguratorForm";

export const metadata: Metadata = {
  title: "Project Configurator — Dantechdevs",
  description:
    "Configure your project scope and get an instant cost estimate and proposal draft from Dantechdevs.",
};

export default function ConsultationPage() {
  return (
    <div className={`${fraunces.variable} ${inter.variable} ${plexMono.variable} flex flex-1`}>
      <ConfiguratorForm />
    </div>
  );
}
