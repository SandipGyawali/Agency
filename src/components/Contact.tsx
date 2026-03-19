"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, Clock, Twitter, Linkedin, Github, Facebook } from "lucide-react";
import Image from "next/image";

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
    transition: { staggerChildren: 0.12 },
  },
};

export const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

function Field({
  error,
  children,
}: {
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={false}
      animate={{ borderColor: error ? "#dc2626" : "#000" }}
      transition={{ duration: 0.25 }}
      className="relative"
    >
      {children}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-xs text-red-600"
        >
          {error}
        </motion.p>
      )}
    </motion.div>
  );
}

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  return (
    <motion.form
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onSubmit={handleSubmit((data) => console.log(data))}
      className="space-y-6 lg:space-y-8"
    >
      <motion.div variants={fadeUp}>
        <Field error={errors.name?.message}>
          <motion.input
            {...register("name")}
            placeholder="Name"
            whileFocus={{ scale: 1.01 }}
            className="w-full bg-transparent border-b border-neutral-300 pb-3 text-sm placeholder-neutral-500 focus:outline-none focus:border-black transition"
          />
        </Field>
      </motion.div>

      <motion.div variants={fadeUp}>
        <Field error={errors.email?.message}>
          <motion.input
            {...register("email")}
            placeholder="Email"
            whileFocus={{ scale: 1.01 }}
            className="w-full bg-transparent border-b border-neutral-300 pb-3 text-sm placeholder-neutral-500 focus:outline-none focus:border-black transition"
          />
        </Field>
      </motion.div>

      <motion.div variants={fadeUp}>
        <Field error={errors.phone?.message}>
          <motion.input
            {...register("phone")}
            placeholder="Phone (optional)"
            whileFocus={{ scale: 1.01 }}
            className="w-full bg-transparent border-b border-neutral-300 pb-3 text-sm placeholder-neutral-500 focus:outline-none focus:border-black transition"
          />
        </Field>
      </motion.div>

      <motion.div variants={fadeUp}>
        <Field error={errors.message?.message}>
          <motion.textarea
            {...register("message")}
            rows={3}
            placeholder="Tell us about your project (optional)"
            whileFocus={{ scale: 1.01 }}
            className="w-full resize-none bg-transparent border-b border-neutral-300 pb-3 text-sm placeholder-neutral-500 focus:outline-none focus:border-black transition"
          />
        </Field>
      </motion.div>

      <motion.button
        variants={fadeUp}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        disabled={isSubmitting}
        className="inline-flex items-center gap-2 bg-black px-4 lg:px-6 py-2 lg:py-3 font-semibold tracking-wide text-white transition hover:bg-neutral-800 disabled:opacity-50"
      >
        {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
      </motion.button>
    </motion.form>
  );
}

function ContactFooter() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mt-10 xl:mt-20 border-t border-neutral-200 pt-10"
    >
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-4 text-sm font-medium text-neutral-600">
          <div className="flex items-center gap-3">
            <Mail size={16} /> hello@submitline.com
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={16} /> Boston · Massachusetts, USA
          </div>
          <div className="flex items-center gap-3">
            <Clock size={16} /> Typically replies within 24 hours
          </div>
        </div>

        <div className="flex flex-col items-start gap-6 lg:items-end">
          <div className="flex items-center gap-5">
            {[Twitter, Linkedin, Github, Facebook].map((Icon, i) => (
              <motion.a
                key={i}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-neutral-500 hover:text-black"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>

          <p className="max-w-xs text-left text-xs font-medium text-neutral-500 lg:text-right">
            Open for collaborations, product design,
            <br /> and long-term partnerships.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ContactUs() {
  return (
    <section className="my-20 h-full lg:h-screen px-4 lg:px-6">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto flex h-full w-full overflow-hidden lg:border lg:border-foreground/10 lg:flex-row flex-col"
      >
        {/* LEFT */}
        <motion.div
          variants={fadeUp}
          className="border lg:border-none border-foreground/10 flex w-full flex-col justify-between bg-white p-7 md:p-10 lg:w-1/2 lg:p-14"
        >
          <div>
            <Image src="/logo-white.png" width={50} height={50} alt="logo" />

            <h1 className="mt-2 mb-6 font-extrabold leading-tight text-4xl">
              LET’S CREATE SOMETHING
              <br /> AMAZING TOGETHER!
            </h1>

            <p className="mb-12 max-w-md text-neutral-500">
              Discussing a project or an idea with us is easy.
              Just fill in the form and we’ll get back to you shortly.
            </p>

            <ContactForm />
          </div>

          <ContactFooter />
        </motion.div>

        {/* RIGHT MAP */}
        <motion.div
          variants={fadeUp}
          className="relative w-full h-full bg-white p-5 lg:w-1/2 max-lg:hidden "
        >
          <Image 
            src="/mountain-contact.jpg" 
            width={2000} 
            height={2000}
            className="w-full h-full object-cover object-center grayscale-50" 
            alt="mountain-contact" 
            loading="eager" 
            decoding="async" 
            priority 
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
