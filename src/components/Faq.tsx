"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    group: "Services & Expertise",
    items: [
      {
        q: "What services does Summit Line Tech specialize in?",
        a: "We provide end-to-end solutions across AI development, MLOps infrastructure, and cloud engineering. This includes building production-ready machine learning systems, automating model lifecycle pipelines, and designing scalable cloud architectures tailored to business needs.",
        h: true
      },
      {
        q: "What industries do you work with?",
        a: "We work across industries including fintech, healthcare, SaaS, e-commerce, and logistics. Our solutions are tailored to industry-specific challenges such as compliance, scalability, and data sensitivity.",
        h: true
      },
      {
        q: "Do you build custom AI solutions or use pre-built models?",
        a: "We do both. For high-impact use cases, we design custom models tailored to your data. For faster delivery, we also integrate and optimize proven pre-trained models when appropriate.",
        h: false
      }
    ]
  },
  {
    group: "AI & MLOps",
    items: [
      {
        q: "What is MLOps and why does my business need it?",
        a: "MLOps is the practice of deploying, monitoring, and maintaining machine learning models in production. Without it, models degrade over time. We ensure your AI systems remain accurate, scalable, and reliable in real-world environments.",
        h: true
      },
      {
        q: "How do you ensure model performance over time?",
        a: "We implement continuous monitoring, automated retraining pipelines, drift detection, and performance alerts to ensure your models stay accurate and aligned with real-world data changes.",
        h: true
      },
      {
        q: "Can you integrate AI into our existing systems?",
        a: "Yes, we specialize in integrating AI into existing platforms, APIs, and workflows without disrupting your current operations.",
        h: false
      }
    ]
  },
  {
    group: "Cloud & Infrastructure",
    items: [
      {
        q: "Which cloud platforms do you support?",
        a: "We work with AWS, Google Cloud, and Azure. We help you choose, migrate, and optimize the best platform based on your performance, cost, and scalability requirements.",
        h: true
      },
      {
        q: "Do you help reduce cloud costs?",
        a: "Yes. We audit your infrastructure, eliminate inefficiencies, and implement cost-optimized architectures such as auto-scaling, spot instances, and workload right-sizing.",
        h: true
      },
      {
        q: "Can you handle cloud migrations?",
        a: "We manage end-to-end cloud migrations, ensuring minimal downtime, data integrity, and improved system performance post-migration.",
        h: false
      }
    ]
  },
  {
    group: "Security & Compliance",
    items: [
      {
        q: "How do you ensure data security?",
        a: "We follow industry best practices including encryption, secure access controls, network isolation, and compliance with standards like SOC 2 and GDPR where applicable.",
        h: true
      },
      {
        q: "Do you work with sensitive or regulated data?",
        a: "Yes, we have experience working with regulated environments such as healthcare and finance, ensuring compliance with relevant standards and secure data handling practices.",
        h: true
      }
    ]
  },
  {
    group: "Engagement & Process",
    items: [
      {
        q: "What does your typical project process look like?",
        a: "We start with discovery and requirements analysis, followed by architecture design, development, testing, deployment, and continuous optimization. We maintain transparency at every stage.",
        h: true
      },
      {
        q: "How long does a typical project take?",
        a: "Timelines vary based on complexity. MVPs can take 4–8 weeks, while full-scale AI systems or infrastructure projects may take several months.",
        h: false
      },
      {
        q: "Do you offer ongoing support after deployment?",
        a: "Yes, we provide ongoing monitoring, maintenance, optimization, and support to ensure long-term success of your systems.",
        h: false
      }
    ]
  },
  {
    group: "Pricing & Engagement",
    items: [
      {
        q: "How is your pricing structured?",
        a: "We offer flexible pricing models including fixed-price projects, hourly engagements, and long-term retainers depending on your needs.",
        h: true
      },
      {
        q: "Do you offer consultations before starting a project?",
        a: "Yes, we provide initial consultations to understand your requirements, evaluate feasibility, and propose the best technical approach.",
        h: false
      },
      {
        q: "Can startups work with you?",
        a: "Absolutely. We work with startups to build scalable foundations early, helping them avoid costly technical debt as they grow.",
        h: false
      }
    ]
  }
];

function FAQItem({ q, a }: { q: string, a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-dashed border-neutral-300 py-6">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-xs sm:text-sm md:text-base text-neutral-900">{q}</h3>
        <button
          onClick={() => setOpen(!open)}
          className={`rounded-lg text-xs sm:text-sm border px-4 py-1 transition ${
            open
              ? "bg-neutral-900 text-white border-neutral-900"
              : "bg-white text-neutral-900 border-neutral-300"
          }`}
        >
          {open ? "Hide" : "View"}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="mt-4 max-w-3xl overflow-hidden text-neutral-600 leading-relaxed"
          >
            {a}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ({ wantTitle = true, isGrouped = true }: { wantTitle?: boolean,  isGrouped?: boolean }) {
  const faqItems = faqData.slice(0, 7);
  
  return (
    <section className="mx-auto px-6 py-16">
      {
        wantTitle && (
          <div className="grid grid-cols-1 gap-15 lg:grid-cols-7 lg:gap-12 mb-16">
            <div className="col-span-3 font-medium">
                <div className="border border-foreground/20 w-fit bg-white px-2 py-0.5">
                  <p>
                    Faqs
                  </p>
                </div>
              </div>
            <div className="col-span-4 ml-auto space-y-10 lg:pl-15">
              <h1 className="text-xl md:text-2xl font-medium tracking-tight">
                Everything You Need to Know About Our Process
              </h1>
              <p className="font-medium w-fit text-sm sm:text-base  md:text-lg text-foreground/40 lg:translate-y-2">
                Find answers to the most common questions about submitting your work and navigating 
                our review process. We’ve compiled clear explanations to help you understand each step, 
                so you can submit with confidence and get timely feedback.
              </p>
            </div>
          </div>
        )
      }

      {isGrouped && faqData.map((group, idx) => (
        <div key={idx} className="mb-10 bg-white p-5 border border-foreground/10">
          <h3 className="mb-6 text-lg font-bold uppercase tracking-widest text-neutral-500">
            {group.group}
          </h3>

          <div className="divide-y divide-dashed divide-neutral-300">
            {group.items.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      ))}

      <div className="border border-foreground/10">
        {!isGrouped && faqData.slice(0, 7).map((group, idx) => (
            <div key={idx} className="bg-white px-5">
              <div className="divide-y divide-dashed divide-neutral-300">
                {group.items.filter((val => val.h === true)).map((item, i) => (
                  <FAQItem key={i} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))
        }
      </div>

    </section>
  );
}