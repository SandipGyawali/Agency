"use client"
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const logos = [
  { name: 'Next.js', url: 'https://cdn.simpleicons.org/nextdotjs/white' },
  { name: 'Vercel', url: 'https://cdn.simpleicons.org/vercel/white' },
  { name: 'Node.js', url: 'https://cdn.simpleicons.org/nodedotjs/white' },
  { name: 'Google Cloud', url: 'https://cdn.simpleicons.org/googlecloud/white' },
  { name: 'React', url: 'https://cdn.simpleicons.org/react/white' },
  { name: 'Bun', url: 'https://cdn.simpleicons.org/bun/white' },
  { name: 'Python', url: 'https://cdn.simpleicons.org/python/white' },
  { name: 'Claude', url: 'https://cdn.simpleicons.org/anthropic/white' },
  { name: 'Django', url: 'https://cdn.simpleicons.org/django/white' },
  { name: 'Javascript', url: 'https://cdn.simpleicons.org/javascript/white' },
  { name: 'FastAPI', url: 'https://cdn.simpleicons.org/fastapi/white' },
  { name: 'PostgreSQL', url: 'https://cdn.simpleicons.org/postgresql/white' },
  { name: 'MongoDB', url: 'https://cdn.simpleicons.org/mongodb/white' },
  { name: 'GitHub Actions', url: 'https://cdn.simpleicons.org/githubactions/white' },
  { name: 'Git', url: 'https://cdn.simpleicons.org/git/white' },
  { name: 'Nginx', url: 'https://cdn.simpleicons.org/nginx/white' },
  { name: 'Typescript', url: 'https://cdn.simpleicons.org/typescript/white' },
  { name: 'Linux', url: 'https://cdn.simpleicons.org/linux/white' },
  { name: 'Terraform', url: 'https://cdn.simpleicons.org/terraform/white' },
]


const AnimatedLogoCloud = () => {

  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [40, -40])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 0])

  return (
    <motion.div 
      ref={ref}
      style={{ y, opacity }}
      className="w-full py-10 md:py-16 lg:py-20"
    >
      <div className="mx-auto w-full px-4 md:px-8">
        <div
          className="relative mt-6 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex w-max gap-20 animate-logo-cloud"
          >
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo.url}
                className="h-10 w-28 px-2 opacity-30 brightness-0 dark:invert"
                alt={logo.name}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}


export default AnimatedLogoCloud