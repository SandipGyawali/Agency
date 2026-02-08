"use client";
import ContactUs from "@/components/Contact";
import Container from "@/components/Container";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React from "react";
import { motion, Variants } from "motion/react"

// Step 1: Create a type for project (optional but helpful)
type Project = {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
};

// Step 2: Define the data separately
const projects: Project[] = [
  {
    id: "01",
    title: "E-commerce Platform",
    date: "04.17.2025",
    description:
      "Designed and developed a fully scalable e-commerce platform from scratch, focusing on simplicity and performance, which transformed workflows for over 10,000 users across multiple industries.",
    image: "https://img.freepik.com/premium-psd/pottery-ecommerce-web-template_211975-49.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    id: "02",
    title: "Mobile Banking App",
    date: "03.15.2025",
    description:
      "Built a secure and intuitive mobile banking application with real-time transaction processing, biometric authentication, and seamless user experience for financial institutions.",
    image: "https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/4abf9f1a0854a705ad9bc5d6c78de15a9a0338f6/a1e0e5dad15f66f6f3963fb9fe37be33a7b8be50",
  },
  {
    id: "03",
    title: "AI Content Generator",
    date: "02.28.2025",
    description:
      "Developed an AI-powered content generation platform that helps marketers create engaging content, with advanced NLP capabilities and customizable templates.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJTHq-CKz4prsuqmRM82hSEzyI0z4zohBIw&s",
  },
  {
    id: "04",
    title: "Project Management Tool",
    date: "01.20.2025",
    description:
      "Created a comprehensive project management solution with real-time collaboration, task tracking, and analytics dashboard for remote teams and enterprises.",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/430e16107295887.5fa3c252390f5.png",
  },
];

// animations.ts
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

const rowReveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageReveal: Variants = {
  hidden: { scale: 1.15, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};


const ProjectList: React.FC<{
  projects: Project[];
  className?: string;
}> = ({ projects, className }) => {
  const router = useRouter();

  return (
    <>
      <section className={cn("my-26 project-intro overflow-hidden", className)}>

        {/* Intro */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-15 lg:grid-cols-7 lg:gap-12"
        >
          <motion.div variants={fadeUp} className="col-span-3 font-medium">
            <div className="border border-foreground/20 w-fit bg-white px-2 py-0.5">
              <p>Our Projects</p>
            </div>
          </motion.div>

          <div className="col-span-4 ml-auto space-y-10 lg:pl-15">
            <motion.h1
              variants={fadeUp}
              className="text-2xl font-medium tracking-tight"
            >
              From bold startups to global brands, we craft digital experiences
              that captivate and connect.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="w-fit text-lg text-foreground/40 lg:translate-y-2"
            >
              Our portfolio spans web design, mobile apps, immersive interfaces,
              and innovative campaigns.
            </motion.p>
          </div>
        </motion.div>

        {/* List */}
        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative w-full"
        >
          <li className="font-semibold hidden justify-between gap-10 border-b border-foreground/20 pt-15 pb-2 text-sm tracking-tight text-foreground/40 uppercase lg:flex lg:text-base">
            <p className="w-1/4">Projects</p>
            <p className="w-2/4">Description</p>
            <p className="w-1/4 text-right">Gallery</p>
          </li>

          {projects.map((project) => (
            <motion.li
              key={project.id}
              variants={rowReveal}
              onClick={() => router.push(`/projects/${project.id}`)}
              className="project-row group cursor-pointer flex w-full flex-col justify-between gap-10 border-b border-foreground/20 py-10 lg:flex-row lg:py-15"
            >
              <div className="flex gap-4 text-xl font-medium tracking-tighter uppercase lg:w-1/4">
                <p className="text-foreground/20">{project.id}</p>
                <div className="flex flex-col gap-1">
                  <p className="group-hover:underline">{project.title}</p>
                  <p className="text-muted-foreground">
                    ({project.date})
                  </p>
                </div>
              </div>

              <div className="text-2xl lg:w-2/4">
                {project.description}
              </div>

              <motion.div
                variants={imageReveal}
                className="w-full overflow-hidden text-right text-sm uppercase lg:w-1/4 lg:pl-20"
              >
                <img
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  src={project.image}
                />
              </motion.div>
            </motion.li>
          ))}
        </motion.ul>
      </section>

      <ContactUs />
    </>
  );
};

// Step 4: Use it in the page
const Page = () => {
  return (
    <section className="pb-20 w-full">
      <Container>
        <ProjectList projects={projects} />
      </Container>
    </section>
  );
};

export default Page;
