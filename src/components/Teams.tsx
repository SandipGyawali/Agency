"use client"
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const members = [
  {
    name: "Bhuwan Bhandari",
    role: "Co-Founder & CEO",
    avatar: "/bhuwan.jpeg",
    email: "bluwan@gmail.com",
    link: "#",
  },
  {
    name: "Sandip Gyawali",
    role: "Co-Founder & CTO",
    avatar: "/sandip.jpeg",
    email: "sandipgyawali100@gmail.com",
    link: "#",
  },
];

// animation variants
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

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const imageReveal: Variants = {
  hidden: { scale: 1.1, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export default function Teams() {
  return (
    <section className="my-5 md:py-20 overflow-hidden">
      <div className="mx-auto px-6">

        {/* Heading */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-15 lg:grid-cols-7 lg:gap-12"
        >
          <motion.div variants={fadeUp} className="col-span-3 font-medium">
            <div className="border border-foreground/20 bg-white w-fit px-2 py-0.5">
              <p>Our Teams</p>
            </div>
          </motion.div>

          <div className="col-span-4 ml-auto space-y-10 lg:pl-15">
            <motion.h1
              variants={fadeUp}
              className="text-2xl font-medium tracking-tight"
            >
              A team of passionate creators, thinkers, and problem-solvers
              dedicated to crafting meaningful digital experiences.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="w-fit text-lg text-foreground/40 lg:translate-y-2"
            >
              We combine creativity, collaboration, and technical expertise to
              turn ideas into solutions that inspire, engage, and leave a lasting
              impact.
            </motion.p>
          </div>
        </motion.div>

        {/* Team Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 md:mt-24 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          {members.map((member, index) => (
            <motion.div
              key={index}
              variants={cardReveal}
              className="group overflow-hidden"
            >
              <motion.img
                variants={imageReveal}
                className="w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                src={member.avatar}
                alt={member.name}
              />

              <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                <div className="flex justify-between">
                  <h3 className="text-base font-medium transition-all duration-500 group-hover:tracking-wider">
                    {member.name}
                  </h3>
                  <span className="text-xs">_0{index + 1}</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  {member.email}
                </p>

                <div className="mt-1 flex items-center justify-between">
                  <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {member.role}
                  </span>

                <div className="flex items-center gap-2">
                  <Link
                    href={member.link}
                    className="inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    Linkedin
                  </Link>
                   <Link
                    href={member.link}
                    className="inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    WhatsApp
                  </Link>
                </div>

                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
