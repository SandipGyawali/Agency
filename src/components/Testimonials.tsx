import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/Card"; // adjust path as needed
import Container from "./Container";

const testimonials = [
  {
    content:
      "Hive gave us a logo that feels bold and confident. It's simple, memorable, and works perfectly across all our platforms",
    name: "Robert Evans",
    title: "Founder of BankPro",
    img: "https://github.com/shadcn.png",
  },
  {
    content:
      "Hive took our rough ideas and turned them into a clean, timeless logo. The process was smooth, and the result is something we're proud to put everywhere.",
    name: "Anna Peterson",
    title: "Founder of Nextdock",
    img: "https://github.com/shadcn.png",
  },
  {
    content:
      "The team really listened to our story and captured it perfectly in the design. Our new identity feels professional and has already impressed our clients",
    name: "David Kim",
    title: "Director at Scalar",
    img: "https://github.com/shadcn.png",
  },
  {
    content:
      "We needed a rebrand that felt fresh but stayed true to our roots. Hive delivered exactly that — modern, simple, and versatile",
    name: "Sofia Martinez",
    title: "Marketing Lead at Neobase",
    img: "https://github.com/shadcn.png",
  },
  {
    content:
      "Professional, fast, and creative. The new logo has already made a difference in how our customers see our brand",
    name: "James Carter",
    title: "CEO at Northwind Finance",
    img: "https://github.com/shadcn.png",
  },
];

const Testimonials = () => {
  return (
    <Container className="my-32">
      <section className="marquee-container space-y-16 md:space-y-18">
        <div className="grid grid-cols-1 gap-15 lg:grid-cols-7 lg:gap-12">
          <p className="col-span-3 font-medium">Testimonials</p>

          <div className="col-span-4 ml-auto space-y-10 lg:pl-15">
            <h1 className="text-2xl font-medium tracking-tight">
              We turn ideas into digital experiences that engage and inspire. 
              Each project is a chance to innovate and create something memorable.
            </h1>

            <p className="w-fit text-lg text-foreground/40 lg:translate-y-2">
              Our process: Research, design, and deliver with care. Collaboration and innovation guide everything we do.
            </p>
          </div>
        </div>
        <div className="marquee-track flex gap-5 marquee">
          {testimonials.map((testimonial, index) => (
            <Card
              key={`${testimonial.title}-${index}`}
              className="transition-all duration-300 hover:grayscale-0 grayscale w-[310px] sm:w-[450px] rounded-none flex-shrink-0 py-8 md:py-10 flex flex-col"
            >
              <CardContent className="text-muted-foreground font-medium border-none text-lg px-8 md:px-10 flex-1">
                {testimonial.content}
              </CardContent>
              <CardFooter className="bg-transparent border-none flex items-center gap-4 px-8 md:px-10 pt-8 md:pt-10 mt-auto">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="object-cover"
                />
                <div className="flex flex-col gap-0">
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-muted-foreground">{testimonial.title}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Testimonials;
