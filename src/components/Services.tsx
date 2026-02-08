"use client";
import React, { useState } from "react";
import Container from "./Container";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const listItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Services({ className }: { className?: string }) {
  const [activeId, setActiveId] = useState("02");
  const [direction, setDirection] = useState(1);

  const services = [
    {
      id: "01",
      title: "Engineering",
      image:
        "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=687&auto=format&fit=crop",
      description:
        "We build robust, scalable systems with clean architecture, performance in mind, and long-term maintainability.",
    },
    {
      id: "02",
      title: "UI/UX Design",
      image:
        "https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=1470&auto=format&fit=crop",
      description:
        "We craft intuitive interfaces and seamless user experiences backed by research, testing, and data.",
    },
    {
      id: "03",
      title: "Application Development",
      image:
        "https://images.unsplash.com/photo-1631624210938-539575f92e3c?q=80&w=687&auto=format&fit=crop",
      description:
        "We build high-performance web and mobile applications using modern, scalable technologies.",
    },
    {
      id: "04",
      title: "DevOps",
      image:
        "https://plus.unsplash.com/premium_photo-1675024226990-36dcb7252c62?q=80&w=685&auto=format&fit=crop",
      description:
        "We streamline deployments, automate infrastructure, and ensure reliability with modern DevOps practices.",
    },
    {
      id: "05",
      title: "Consulting",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop",
      description:
        "We provide strategic and technical consulting to help you make confident, future-proof decisions.",
    },
  ];

  const activeService = services.find((s) => s.id === activeId);

  return (
    <section className={cn("w-full overflow-hidden", className)}>
      <Container>

        {/* Intro */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-15 lg:grid-cols-7 lg:gap-12"
        >
          <motion.div variants={fadeUp} className="col-span-3 font-medium">
            <div className="border border-foreground/20 bg-white w-fit px-2 py-0.5">
              <p>Our Services</p>
            </div>
          </motion.div>

          <div className="col-span-4 ml-auto space-y-10 lg:pl-15">
            <motion.h1
              variants={fadeUp}
              className="text-2xl font-medium tracking-tight"
            >
              Designing, building, and scaling digital products that matter.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="w-fit text-lg text-foreground/40 lg:translate-y-2"
            >
              From strategy to execution, we craft thoughtful digital solutions
              that balance aesthetics, performance, and purpose.
            </motion.p>
          </div>
        </motion.div>

        {/* Content */}
        <div className="mt-16 flex w-full flex-col lg:flex-row lg:gap-20">

          {/* Left sticky preview */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="top-10 h-fit w-full space-y-7 py-8 lg:sticky lg:max-w-xs"
          >
            <div className="relative h-90 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeService?.id}
                  src={activeService?.image}
                  alt={activeService?.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                />
              </AnimatePresence>
            </div>

            <p className="font-semibold tracking-tight text-foreground/30 uppercase">
              {activeService?.title}
            </p>
            <p className="text-sm font-medium text-muted-foreground">
              {activeService?.description}
            </p>
          </motion.div>

          {/* Right list */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative w-full xl:pl-20"
          >
            <ul>
              {services.map((service) => (
                <motion.li
                  key={service.id}
                  variants={listItem}
                  onMouseEnter={() => {
                    setDirection(service.id > activeId ? 1 : -1);
                    setActiveId(service.id);
                  }}
                  className="cursor-pointer border-b border-foreground/20 py-8 text-5xl font-semibold tracking-tight lg:text-7xl"
                >
                  <div
                    className={
                      service.id === activeId ? "opacity-100" : "opacity-20"
                    }
                  >
                    <span>{service.title}</span>
                    <sup className="align-super text-sm text-[#ff652d] lg:text-3xl">
                      {`{${service.id}}`}
                    </sup>
                  </div>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <motion.button
              variants={fadeUp}
              className="group mt-10 inline-flex h-9 items-center gap-2 bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-black/80"
            >
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4 transition-transform duration-300 group-hover:rotate-45"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
