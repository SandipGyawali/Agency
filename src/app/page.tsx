import ContactUs from "@/components/Contact";
import FAQ from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import AnimatedLogoCloud from "@/components/LogoCloud";
import { QuickServicesSection } from "@/components/QuickService";
import Testimonials from "@/components/Testimonials";

function Home() {
  return (
    <main>
      <div className="space-y-8">
        <Hero />
        <AnimatedLogoCloud />
        <Features />
        <QuickServicesSection />
        <Testimonials />
        <FAQ wantTitle={true} isGrouped={false}/>
        <ContactUs />
      </div>
    </main>
  );
}

export default Home;