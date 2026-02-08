import ContactUs from "@/components/Contact";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Page() {
  return(
    <>  
      <Services className="pt-20"/>
      <Testimonials />
      <ContactUs />
    </>
  );
}