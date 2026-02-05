import Container from "./Container";
import Button from "./ui/Button";

function CTA() {
  return (
    <section className="py-32">
      <Container className="container">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-20 overflow-hidden rounded-2xl border border-muted bg-[#f4f4f4] pt-20 sm:pl-16 lg:flex-row lg:pl-20">
          <div className="lg:texlf mx-auto max-w-md px-4 text-center md:px-0 lg:mx-0 lg:pb-20 lg:text-left">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Engineering Modern Business Success
            </h2>
            <p className="text-lg text-muted-foreground">
              We help startups and enterprises turn ideas into scalable digital
              products. From concept to deployment — we’re with you every step
              of the way.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Button>Get Started</Button>
              <Button invert className="bg-muted">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative w-full pl-4 sm:pl-0">
            <div className="absolute -bottom-8 -left-8 -z-10 h-4/5 w-4/5 rounded-tl-2xl rounded-br-2xl bg-stone-900/20 blur-2xl"></div>
            <img
              src="/cta-img.jpg"
              alt="placeholder"
              className="relative z-10 h-full max-h-[400px] w-full rounded-tl-2xl rounded-br-2xl object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CTA;
