"use client";

import React from "react";
import { motion } from "motion/react";
import Container from "./Container";

const Hero = () => {
  return (
    <Container className="pt-12 pb-10 md:pb-20">
      <div>
        {/* Heading */}
        <motion.div
          className="mb-5 max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-left font-playfair text-4xl tracking-tighter lg:text-5xl">
            We Provide Tech Services{" "}
            <br className="hidden md:block" />
            Across The World.
          </h1>
        </motion.div>

        <div className="relative lg:-translate-y-4">
          {/* Image Reveal */}
          <motion.section
            className="relative pointer-events-none w-full overflow-hidden"
            style={{
              aspectRatio: "1528 / 700",
              maskImage: `url("data:image/svg+xml,%3Csvg width='1528' height='700' viewBox='0 0 1528 700' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M0.589399 112.279C0.589402 82.1213 25.037 57.6738 55.1946 57.6738H335.688C350.06 57.6738 361.712 46.0226 361.712 31.6502C361.712 14.2835 375.79 0.205078 393.157 0.205078H949.833C983.496 0.205078 1010.78 27.4941 1010.78 61.1568C1010.78 89.0156 1033.37 111.6 1061.23 111.6H1472.74C1502.9 111.6 1527.35 136.047 1527.35 166.205V629.438C1527.35 659.596 1502.9 684.044 1472.74 684.044H639.176C619.635 684.044 603.794 668.203 603.794 648.662C603.794 629.122 587.954 613.281 568.413 613.281H55.1945C25.0369 613.281 0.589358 588.833 0.58936 558.676L0.589399 112.279Z' fill='%23D9D9D9'/%3E%3C/svg%3E")`,
              maskRepeat: "no-repeat",
              maskSize: "contain",
              width: "100%",
            }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.img
              className="h-full w-full object-cover grayscale-75"
              alt="Mountain landscape"
              src="/mountain-temp.jpg"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
            />
          </motion.section>

          {/* Contact Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="
              group
              mt-4
              flex items-center justify-center
              bg-neutral-950 text-white gap-2
              font-semibold px-6 py-2 text-sm tracking-tight transition-all
              lg:absolute lg:bottom-0 lg:left-3 lg:mt-0
              xl:bottom-3
            "
          >
            Contact Us
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              animate={{ rotate: -45 }}
              whileHover={{ rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </motion.svg>
          </motion.button>

          {/* Software & Systems Agency Block */}
          <motion.div
            className="mt-6 max-w-xs lg:mt-0 lg:absolute lg:top-0 lg:right-2"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="space-y-2">
              <h2 className="text-sm font-bold tracking-wide uppercase">
                Software &amp; Systems Agency
              </h2>
              <p className="text-xs font-medium text-muted-foreground">
                We build, scale, and operate reliable software systems for
                modern businesses.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;