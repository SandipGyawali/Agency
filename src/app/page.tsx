import Hero from "@/components/Hero";
import AnimatedLogoCloud from "@/components/LogoCloud";
import Testimonials from "@/components/Testimonials";

function Home() {
  return (
    <main>
      <div className="space-y-8">
        <Hero />
        <AnimatedLogoCloud />
        <Testimonials />
        {/* <Contact />
        <FAQ />
        <Gallery /> */}
        {/* <CTA /> */}
      </div>
    </main>
  );
}

export default Home;
