"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import Container from "./Container";

export default function FAQ() {
  const faqItems = [
    {
      id: "item-1",
      question: "What types of software services do you offer?",
      answer:
        "We specialize in custom software development, SaaS product development, web and mobile app development, API integrations, and cloud-based solutions. We also offer ongoing maintenance and support.",
    },
    {
      id: "item-2",
      question: "How do you price your software projects?",
      answer:
        "Pricing depends on the scope, complexity, and timeline of the project. We offer both fixed-price and hourly billing models. After an initial consultation, we’ll provide a detailed proposal and quote.",
    },
    {
      id: "item-3",
      question: "What is your typical project timeline?",
      answer:
        "Timelines vary based on project requirements. A simple MVP may take 4–6 weeks, while a more complex enterprise application can take several months. We always provide a clear timeline before starting.",
    },
    {
      id: "item-4",
      question: "Do you offer post-launch support and maintenance?",
      answer:
        "Yes, we offer flexible support plans to keep your software running smoothly post-launch. This includes bug fixes, updates, performance monitoring, and feature enhancements.",
    },
    {
      id: "item-5",
      question: "How do you ensure software quality?",
      answer:
        "We follow best practices in software engineering, including code reviews, automated testing, and QA testing at every stage of development. We also conduct user acceptance testing (UAT) before launch.",
    },
    {
      id: "item-6",
      question: "Can you work with our existing team or system?",
      answer:
        "Absolutely. We can integrate with your in-house team or legacy systems. Our developers are comfortable working with a wide range of tech stacks and can collaborate using your preferred tools and workflows.",
    },
    {
      id: "item-7",
      question: "What is your process for starting a new project?",
      answer:
        "We begin with a discovery session to understand your goals and requirements. From there, we move into planning, design, development, testing, and deployment. We maintain clear communication throughout.",
    },
    {
      id: "item-8",
      question: "Do you offer NDA and IP protection?",
      answer:
        "Yes, we’re happy to sign NDAs and ensure that all intellectual property rights belong to you. We take data security and confidentiality very seriously.",
    },
  ];

  return (
    <section
      style={{ borderRadius: 40 }}
      className="overflow-hidden bg-[#f4f4f4] pb-24 pt-16 m-1 sm:m-4"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-body-xs-medium inline-flex h-8 items-center gap-2 rounded-[10px] border border-gray-200 bg-white px-3 py-0 leading-none shadow-[0_1px_2px_0_rgba(13,13,18,0.06)]">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black/50 opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-neutral-700"></span>
            </span>
            Faqs
          </span>
          <h2 className="font-semibold text-heading-1 mt-4 tracking-tight lg:text-[52px]">
            Everything you need to Know
          </h2>
          <p className="text-body-md sm:text-body-lg mx-auto mt-2 max-w-2xl text-neutral-600">
            Smarter decisions starts with clear answers
          </p>
        </div>

        <div className="mx-auto mt-12 w-full">
          <Accordion
            type="single"
            collapsible
            className="w-full rounded-2xl py-3 space-y-2.5"
          >
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="bg-white px-8 md:py-2.5 rounded-xl"
              >
                <AccordionTrigger className="cursor-pointer text-base md:text-lg font-semibold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
