"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    group: "Submissions",
    items: [
      {
        q: "How can I submit my site?",
        a: "Create an account, go to the Submissions page, and follow the steps to submit your site for review.",
        h: true
      },
      {
        q: "What size is the main image thumbnail?",
        a: "The recommended thumbnail size is 1600×1200px for best quality.",
        h: true
      },
      {
        q: "Can I add more images/videos to my submission?",
        a: "Yes, you can upload additional images and videos from the edit submission page.",
        h: false
      }
    ]
  },
  {
    group: "Approval",
    items: [
      {
        q: "How long does it take for my site to be approved?",
        a: "Reviews usually take 2–5 business days, depending on submission volume.",
        h: true
      },
      {
        q: "How can I edit my submission?",
        a: "You can edit your submission anytime before approval from your dashboard.",
        h: false
      }
    ]
  },
  {
    group: "Billing",
    items: [
      {
        q: "Can I submit website templates?",
        a: "Yes, templates are allowed as long as they meet our quality guidelines.",
        h: true
      },
      {
        q: "How can I pay for a submission with a credit?",
        a: "Credits can be applied at checkout when submitting your site.",
        h: true,
      },
      {
        q: "How can I add credits to my submission?",
        a: "You can purchase credits from the Billing section of your account.",
        h: true
      }
    ]
  }
];

function FAQItem({ q, a }: { q: string, a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-dashed border-neutral-300 py-6">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-neutral-900">{q}</h3>
        <button
          onClick={() => setOpen(!open)}
          className={`rounded-lg border px-4 py-1 text-sm transition ${
            open
              ? "bg-neutral-900 text-white border-neutral-900"
              : "bg-white text-neutral-900 border-neutral-300"
          }`}
        >
          {open ? "Hide" : "View more"}
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
              <h1 className="text-2xl font-medium tracking-tight">
                Everything You Need to Know About Our Process
              </h1>
              <p className="w-fit text-lg text-foreground/40 lg:translate-y-2">
                Find answers to the most common questions about submitting your work and navigating 
                our review process. We’ve compiled clear explanations to help you understand each step, 
                so you can submit with confidence and get timely feedback.
              </p>
            </div>
          </div>
        )
      }

      {isGrouped && faqData.map((group, idx) => (
        <div key={idx} className="mb-10 bg-white p-5">
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

      {!isGrouped && faqData.map((group, idx) => (
          <div key={idx} className="bg-white px-5">
            <div className="divide-y divide-dashed divide-neutral-300">
              {group.items.filter((val => val.h === true)).map((item, i) => (
                <FAQItem key={i} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        ))
      }
    </section>
  );
}