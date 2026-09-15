import Image from "next/image";
import MainSection from "../../components/home/main-section.jsx";
import CatalogSection from "../../components/home/catalog-section.jsx";
import WhyChooseUsSection from "../../components/home/why-choose-us-section.jsx";
import TestimonialSection from "../../components/home/testimonial-section.jsx";
import HowToRentSection from "../../components/home/how-to-rent-section.jsx";
import CTASection from "../../components/home/cta-section.jsx";
import FAQSection from "../../components/home/faq-section.jsx";

export default function Home() {
  return (
    <div className="w-full h-full">
      <MainSection></MainSection>
      <CatalogSection></CatalogSection>
      <WhyChooseUsSection></WhyChooseUsSection>
      <TestimonialSection></TestimonialSection>
      <HowToRentSection></HowToRentSection>
      <CTASection></CTASection>
      <FAQSection></FAQSection>
    </div>
  );
}
