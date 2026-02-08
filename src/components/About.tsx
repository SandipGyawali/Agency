"use client"
import React from "react";
import { motion, Variants } from "framer-motion";

// animations.ts
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const AboutUs = () => {
  return (
    <section className="py-32 section-padding w-full overflow-hidden">
      <div className="bigger-container">

        {/* Mission */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-15 lg:grid-cols-7 lg:gap-12"
        >
          <motion.div variants={fadeUp} className="col-span-3 font-medium">
            <div className="border border-foreground/20 w-fit bg-white px-2 py-0.5">
              <p>About Us</p>
            </div>
          </motion.div>

          <div className="col-span-4 ml-auto space-y-10 lg:pl-15">
            <motion.h1
              variants={fadeUp}
              className="text-2xl font-medium tracking-tight"
            >
              We transform ideas into digital experiences that inspire and engage.
              Every project is an opportunity to push boundaries, challenge
              conventions, and create something extraordinary that leaves a
              lasting impact.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="w-fit text-lg text-foreground/40 lg:translate-y-2"
            >
              Our approach: Research deeply, design thoughtfully, and deliver
              excellence. We believe in the power of collaboration, continuous
              learning, and staying ahead of industry trends.
            </motion.p>
          </div>
        </motion.div>

        {/* Images */}
        <div className="my-20 grid grid-cols-2 items-center gap-4">
          <motion.img
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            alt=""
            className="h-150 w-full object-cover saturate-0"
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img2.png"
          />

          <motion.img
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            alt=""
            className="h-150 w-full object-cover"
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img1.png"
          />
        </div>

        {/* What drives us */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-15 lg:grid-cols-7 lg:gap-12"
        >
          <motion.p variants={fadeUp} className="col-span-3 font-medium">
            What drives us
          </motion.p>

          <div className="col-span-4 ml-auto max-w-4xl space-y-10 lg:pl-15">
            <motion.h1
              variants={fadeUp}
              className="text-2xl font-medium tracking-tight"
            >
              We are a team of creators, thinkers, and builders who believe in
              crafting experiences that truly connect.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="w-fit text-lg text-foreground/40 lg:translate-y-2"
            >
              We ask: What's the goal? Who's it for? How do we make it effortless?
              <br className="hidden lg:block" />
              We begin with why, who, and how to make it better.
            </motion.p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutUs;


