"use client";

import { motion, Variants } from "motion/react";
import Image from "next/image";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const word: Variants = {
  hidden: {
    y: 40,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <section className="relative w-full text-white overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/mountain.jpg"
          alt="Background"
          fill
          priority
          className="object-cover object-center opacity-80 grayscale-50"
        />
      </div>

      {/* Grain Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-[0.06]" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[80dvh] lg:min-h-screen flex-col justify-between px-5 md:px-6 py-6">

        {/* TOP BAR */}
        <motion.div
          className="grid grid-cols-1 gap-8 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={fadeUp} className="space-y-2">
            <h2 className="text-sm font-bold tracking-wide uppercase">
              Software & Systems Agency
            </h2>
            <p className="max-w-xs text-xs font-bold text-muted-foreground">
              We build, scale, and operate reliable software systems for modern
              businesses.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="hidden lg:block">
            <h2 className="text-sm font-bold tracking-wide uppercase">
              Engineering · <br /> Consulting · DevOps
            </h2>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-3 text-sm">
            <p className="font-bold uppercase">Services We Offer</p>
            <ul className="flex flex-col items-start justify-end space-y-1 text-muted-foreground font-semibold">
              <li>Custom Software Development</li>
              <li>Technical Consulting & Architecture</li>
              <li>Cloud, DevOps & Infrastructure</li>
              <li>Performance, Security & Reliability</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* BOTTOM CONTENT */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-end">

          {/* Animated Headline */}
          <motion.h1
            className="max-w-3xl font-mono font-semibold text-4xl leading-tight tracking-tight lg:text-7xl"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {["WE BUILD", "RELIABLE SOFTWARE", "SYSTEMS THAT SCALE TO THE HORIZON."].map(
              (line, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.span className="block" variants={word}>
                    {line}
                  </motion.span>
                </div>
              )
            )}
          </motion.h1>

          {/* Footer info */}
          <motion.div
            className="flex flex-col items-start gap-6 lg:items-end"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.p variants={fadeUp} className="text-sm font-semibold text-white/50">
              Available for long-term partnerships & complex systems
            </motion.p>

            <motion.button
              variants={fadeUp}
              className="animated-underline cursor-pointer text-sm font-medium text-white underline underline-offset-4 hover:text-white/70"
            >
              Schedule a consultation
            </motion.button>

            <motion.div variants={fadeUp} className="flex gap-4 text-xs text-white/40">
              <span>Client Satisfaction</span>
              <span>Cloud-Native</span>
              <span>Production-First</span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
