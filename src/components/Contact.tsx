"use client"
import { motion } from "motion/react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, Clock, Twitter, Linkedin, Github, Dribbble, Facebook } from "lucide-react";


export const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;



interface InputProps {
  error?: string;
  children: React.ReactNode;
}

export function Field({ error, children }: InputProps) {
  return (
    <motion.div
      initial={false}
      animate={{
        borderColor: error ? "#dc2626" : "#000",
      }}
      transition={{ duration: 0.25 }}
      className="relative"
    >
      {children}

      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs text-red-600 mt-2"
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

  const onSubmit = async (data: ContactFormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Name */}
      <Field error={errors.name?.message}>
        <motion.input
          {...register("name")}
          placeholder="Name"
          whileFocus={{ scale: 1.01 }}
          className="w-full bg-transparent border-b border-neutral-400 pb-3 text-sm placeholder-neutral-500 focus:outline-none focus:border-black transition"
        />
      </Field>

      {/* Email */}
      <Field error={errors.email?.message}>
        <motion.input
          {...register("email")}
          placeholder="Email"
          whileFocus={{ scale: 1.01 }}
          className="w-full bg-transparent border-b border-neutral-400 pb-3 text-sm placeholder-neutral-500 focus:outline-none focus:border-black transition"
        />
      </Field>

      {/* Phone */}
      <Field error={errors.phone?.message}>
        <motion.input
          {...register("phone")}
          placeholder="Phone (optional)"
          whileFocus={{ scale: 1.01 }}
          className="w-full bg-transparent border-b border-neutral-400 pb-3 text-sm placeholder-neutral-500 focus:outline-none focus:border-black transition"
        />
      </Field>

      {/* Message */}
      <Field error={errors.message?.message}>
        <motion.textarea
          {...register("message")}
          placeholder="Tell us about your project (optional)"
          rows={3}
          whileFocus={{ scale: 1.01 }}
          className="w-full bg-transparent border-b border-neutral-400 pb-3 text-sm placeholder-neutral-500 focus:outline-none focus:border-black transition resize-none"
        />
      </Field>

      {/* Submit */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        disabled={isSubmitting}
        className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 font-semibold tracking-wide hover:bg-neutral-800 transition disabled:opacity-50"
      >
        {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
      </motion.button>
    </form>
  );
}


export function ContactFooter() {
  return (
    <motion.div
      // initial={{ opacity: 0, y: 20 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mt-20 pt-10 border-t border-neutral-200"
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
        
        {/* Contact Info */}
        <div className="font-medium space-y-4 text-sm text-neutral-600">
          <div className="flex items-center gap-3">
            <Mail size={16} />
            <span>
              hello@bityeti.com
            </span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin size={16} />
            <span>
              Remote · Worldwide
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Clock size={16} />
            <span>
              Typically replies within 24 hours
            </span>
          </div>
        </div>

        {/* Social + CTA */}
        <div className="flex flex-col items-start lg:items-end gap-6">
          
          {/* Social Icons */}
          <div className="flex items-center gap-5">
            {[
              { icon: Twitter, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Github, href: "#" },
              { icon: Facebook, href: "#" },
            ].map(({ icon: Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-neutral-500 hover:text-black transition"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>

          {/* Extra Trust Line */}
          <p className="text-xs font-medium text-neutral-500 max-w-xs text-left lg:text-right">
            Open for collaborations, product design, <br /> and long-term partnerships.
          </p>
        </div>
      </div>
    </motion.div>
  );
}


export default function ContactUs() {
  return (
    <div className="my-20 min-h-screen flex items-center justify-center px-6">
      <div className="w-full h-screen overflow-hidden flex flex-col lg:flex-row">

        {/* LEFT */}
        <div className="w-full lg:w-1/2 bg-white p-10 lg:p-14 flex flex-col justify-between">
      {/* Header */}
      <div>
        <div className="inline-block bg-neutral-200 text-black font-extrabold tracking-widest px-4 py-2 mb-8">
          BitYeti
        </div>

        <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-6">
          LET’S CREATE SOMETHING <br />
          AMAZING TOGETHER!
        </h1>

        <p className="text-neutral-500 max-w-md mb-12 leading-relaxed">
          Discussing a project or an idea with us is easy.
          Just fill in the form and we’ll get back to you shortly.
        </p>

        {/* Form */}
        <ContactForm />
      </div>

      {/* Bottom Section */}
      <ContactFooter />
    </div>

    {/* RIGHT */}
    <div className="p-5 bg-white w-full lg:w-1/2 relative flex items-center justify-center">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1808683.9701161296!2d82.91770955625002!3d27.69919150000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a266b342bc5%3A0x73bbfa829a89af1b!2sTribhuvan%20International%20Airport!5e0!3m2!1sen!2snp!4v1770277850969!5m2!1sen!2snp" 
        className="w-full h-full"
        loading="lazy"
      > 
      </iframe>
    </div>
      </div>
    </div>
  );
}
