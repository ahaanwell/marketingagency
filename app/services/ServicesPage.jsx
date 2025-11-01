import AboutUsSection from "@/components/landingPage/AboutUsSection";
import FAQSection from "@/components/landingPage/FAQSection";
import FooterSection from "@/components/landingPage/FooterSection";
import Header from "@/components/landingPage/Header";
import Hero from "@/components/landingPage/Hero";
import PrinterProductsSection from "@/components/landingPage/PrinterProductsSection";
import ServicesCards from "@/components/landingPage/ServicesCards";
import ServicesGridSection from "@/components/landingPage/ServicesGridSection";
import ServicesShowcaseSection from "@/components/landingPage/ServicesShowcaseSection";
import TestimonialsSection from "@/components/landingPage/TestimonialsSection";

function ServicesPage(){
    return(
        <>
        <Header/>
        <Hero/>
        <ServicesCards/>
        <ServicesGridSection/>
        <AboutUsSection/>
        <ServicesShowcaseSection/>
        <PrinterProductsSection/>
        <TestimonialsSection/>
        <FAQSection/>
        <FooterSection/>
        </>
    )
}

export default ServicesPage;