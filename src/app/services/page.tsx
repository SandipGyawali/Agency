import ContactUs from "@/components/Contact";
import Services from "@/components/Services";

export default function Page() {
  return(
    <>  
      <Services className="pt-20"/>
      {/* <Testimonials /> */}
      <div className="px-5">
        <ContactUs />
      </div>

    </>
  );
}