import UtilityBar from "@/components/UtilityBar";
import NavBar from "@/components/NavBar";
import WhyDantechdevs from "@/components/WhyDantechdevs";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function WhyDantechdevsPage() {
  return (
    <main className="min-h-screen bg-white">
      <UtilityBar />
      <NavBar />
      <WhyDantechdevs />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
