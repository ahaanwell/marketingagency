import AwardsRecognition from "@/components/AwardsRecognition";
import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import CountersSection from "@/components/CountersSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import TechnologySection from "@/components/TechnologySection";
import TopHeader from "@/components/TopHeader";
import WorkingProcessSection from "@/components/WorkingProcessSection";

export default function Home() {
  return (
    <>
    <Hero/>
    <TechnologySection/>
    <CountersSection/>
    <ServicesSection/>
    <FeaturesSection/>
    <AwardsRecognition/>
    <WorkingProcessSection/>
    <ClientsSection/>
    <ContactSection/>
    </>
  );
}
