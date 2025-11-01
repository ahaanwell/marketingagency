import AwardsRecognition from "@/components/AwardsRecognition";
import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import CountersSection from "@/components/CountersSection";
import FeaturesSection from "@/components/FeaturesSection";
import Hero from "@/components/Hero";
import MainLayout from "@/components/MainLayout";
import ServicesSection from "@/components/ServicesSection";
import TechnologySection from "@/components/TechnologySection";
import WorkingProcessSection from "@/components/WorkingProcessSection";

export default function Home() {
  return (
    <MainLayout>
    <Hero/>
    <TechnologySection/>
    <CountersSection/>
    <ServicesSection/>
    <FeaturesSection/>
    <AwardsRecognition/>
    <WorkingProcessSection/>
    <ClientsSection/>
    <ContactSection/>
    </MainLayout>
  );
}
