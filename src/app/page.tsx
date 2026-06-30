import IntroSection from "@/components/templates/home/IntroSection";
import WhyUs from "@/components/templates/home/WhyUsSection";
import WhyUsSection from "@/components/templates/home/WhyUsSection";
import CTASection from "@/components/templates/home/CTASection";
import TestimonialsSection from "@/components/templates/home/TestimonialsSection";
import NewsletterSection from "@/components/templates/home/NewsletterSection";
import './globals.css'
import Menu from "@/components/templates/home/Menu";

export default function Home() {
  return (
    <>
        <IntroSection />
        <Menu/>
        <WhyUsSection/>
        <CTASection/>
        <TestimonialsSection/>
        <NewsletterSection/>
    </>
  );
}
