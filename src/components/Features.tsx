"use client";
import EffortlessIntegration from "./effortless-integration";
import ScoreBoard from "./ScoreBoard";
import SmartSimpleBrilliant from "./smart-simple-brilliant";
import YourWorkInSync from "./your-work-in-sync";
import { motion, Variants } from "motion/react"

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

const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};


const metrics = [
  { label: "Revenue Growth", value: 82, color: "bg-emerald-500" },
  { label: "User Retention", value: 68, color: "bg-blue-500" },
  { label: "Conversion Rate", value: 54, color: "bg-purple-500" },
  { label: "Performance", value: 91, color: "bg-amber-500" },
];


export default function Features() {
    return(
        <div className="mt-20 w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
               
        {/* Mission */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bigger-container grid grid-cols-1 gap-15 lg:grid-cols-7 lg:gap-12"
        >
          <motion.div variants={fadeUp} className="col-span-3 font-medium">
            <div className="border border-foreground/20 w-fit bg-white px-2 py-0.5">
              <p>Features</p>
            </div>
          </motion.div>

          <div className="col-span-4 ml-auto space-y-10 lg:pl-15">
            <motion.h1
              variants={fadeUp}
              className="text-xl md:text-2xl font-medium tracking-tight"
            >
             We design, build, and scale modern digital infrastructure for ambitious teams.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="w-fit text-sm sm:text-base md:text-lg font-medium text-foreground/40 lg:translate-y-2"
            >
              From SaaS platforms to cloud-native systems, we help startups and enterprises launch faster, scale confidently, and operate efficiently. Our expertise spans cloud architecture, DevOps automation, infrastructure engineering, and strategic technology consulting
            </motion.p>
          </div>
        </motion.div>

                {/* Bento Grid Content */}
                <div className="mt-16 self-stretch bg-white flex justify-center items-start">
                  <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                    {/* Left decorative pattern */}
                    <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                      {Array.from({ length: 200 }).map((_, i) => (
                        <div
                          key={i}
                          className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
                    {/* Top Left - Smart. Simple. Brilliant. */}
                    <div className="border-b border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
                          Smart. Simple. Brilliant.
                        </h3>
                        <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                          Your data is beautifully organized so you see everything clearly without the clutter.
                        </p>
                      </div>
                      <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex items-center justify-center overflow-hidden">
                        <SmartSimpleBrilliant
                          width="100%"
                          height="100%"
                          theme="light"
                          className="scale-50 sm:scale-65 md:scale-75 lg:scale-90"
                        />
                      </div>
                    </div>

                    {/* Top Right - Your work, in sync */}
                    <div className="border-b border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[#37322F] font-semibold leading-tight font-sans text-lg sm:text-xl">
                          Your work, in sync
                        </h3>
                        <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                          Every update flows instantly across your team and keeps collaboration effortless and fast.
                        </p>
                      </div>
                      <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex overflow-hidden text-right items-center justify-center">
                        <YourWorkInSync
                          width="400"
                          height="250"
                          theme="light"
                          className="scale-60 sm:scale-75 md:scale-90"
                        />
                      </div>
                    </div>

                    {/* Bottom Left - Effortless integration */}
                    <div className="border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6 bg-transparent">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
                          Effortless integration
                        </h3>
                        <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                          All your favorite tools connect in one place and work together seamlessly by design.
                        </p>
                      </div>
                      <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex overflow-hidden justify-center items-center relative bg-transparent">
                        <div className="w-full h-full flex items-center justify-center bg-transparent">
                          <EffortlessIntegration width={400} height={250} className="max-w-full max-h-full" />
                        </div>
                      </div>
                    </div>

                    {/* Bottom Right - Numbers that speak */}
                    <div className="p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
                          Numbers that speak
                        </h3>
                        <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                          Track growth with precision and turn raw data into confident decisions you can trust.
                        </p>
                      </div>
                      <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex overflow-hidden items-center justify-center relative">
                        {/* give me component here  */}
                        <div
      className={`flex items-center justify-center`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-full max-w-xl p-6 overflow-hidden"
      >

       <ScoreBoard 
         items={[
          {
            className: 'rounded-md bg-green-600',
            label: 'A',
            progress: 34
          },
          {
            className: 'rounded-md bg-red-600',
            label: 'B',
            progress: 14
          },
          {
            className: 'rounded-md bg-green-600',
            label: 'C',
            progress: 34
          },
          {
            className: 'rounded-md bg-green-600',
            label: 'D',
            progress: 70
          },
          {
            className: 'rounded-md bg-green-600',
            label: 'E',
            progress: 52
          },
          {
            className: 'rounded-md bg-green-600',
            label: 'F',
            progress: 30
          },
          {
            className: 'rounded-md bg-green-600',
            label: 'G',
            progress: 37
          },
          {
            className: 'rounded-md bg-green-600',
            label: 'H',
            progress: 72
          },
          {
            className: 'rounded-md bg-green-600',
            label: 'I',
            progress: 42
          },
           {
            className: 'rounded-md bg-green-600',
            label: 'J',
            progress: 30
          },
          {
            className: 'rounded-md bg-green-600',
            label: 'K',
            progress: 37
          },
          {
            className: 'rounded-md bg-green-600',
            label: 'L',
            progress: 72
          },
          {
            className: 'rounded-md bg-green-600',
            label: 'M',
            progress: 42
          },
           {
            className: 'rounded-md bg-green-600',
            label: 'N',
            progress: 34
          },
          {
            className: 'rounded-md bg-red-500',
            label: 'O',
            progress: 14
          },
          {
            className: 'rounded-md bg-green-600',
            label: 'P',
            progress: 34
          },
          {
            className: 'rounded-md bg-green-600',
            label: 'Q',
            progress: 70
          },
        ]}/>
      </motion.div>
    </div>

                        {/* Fallback content if component doesn't render */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-20 hidden">
                          <div className="flex flex-col items-center gap-2 p-4">
                            <div className="w-3/4 h-full bg-green-500 rounded-full"></div>
                          </div>
                          <div className="text-sm text-green-600">Growth Rate</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                    {/* Right decorative pattern */}
                    <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                      {Array.from({ length: 200 }).map((_, i) => (
                        <div
                          key={i}
                          className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
    );
}