import Hero from "@/components/Hero";
import CompanyInfoCard from "@/components/CompanyInfoCard";
import ConsultationForm from "@/components/ConsultationForm";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function ConsultationPage() {
  return (
    <>
      <Hero />
      <section id="consultation-form" className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8">
        <CompanyInfoCard />
        <ConsultationForm />
      </section>
      <WhatsAppButton />
    </>
  );
}
