import HomeHero from "@/components/HomeHero";
import StatsBar from "@/components/StatsBar";
import ClientSolutions from "@/components/ClientSolutions";
import ServicesPage from "@/components/ServicesPage";
import WhyDantechdevs from "@/components/WhyDantechdevs";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <HomeHero />
      <StatsBar />
      <ClientSolutions />
      <ServicesPage />
      <WhyDantechdevs />
      <WhatsAppButton />
    </>
  );
}
