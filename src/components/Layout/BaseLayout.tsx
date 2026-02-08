"use client";
import { MotionConfig, motion, useReducedMotion } from "motion/react";
import { HiMenuAlt4 } from "react-icons/hi";
import Header from "../Header";
import { usePathname } from "next/navigation";
import { useId, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Navigation from "@/app/Navigation";
import Container from "../Container";
import Footer from "../Footer";
import Offices from "../Offices";
import SocialHandles from "../SocialHandles";
import ReactLenis from "lenis/react";

interface BaseLayoutInterface {
  children: React.ReactNode;
}

function BaseLayout({ children }: BaseLayoutInterface) {
  const panelId = useId();
  const pathname = usePathname();
  const openRef = useRef<HTMLDivElement | null>(null);
  const closeRef = useRef<HTMLDivElement | null>(null);
  const [expanded, setExpanded] = useState<boolean>(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      {/* <ReactLenis
        root
        options={{ lerp: 0.1, duration: 1, smoothWheel: true }}
      > */}
        <header>
          <div className="absolute left-0 right-0 top-2 z-99 pt-2">
            <Header
              panelId={panelId}
              icon={HiMenuAlt4}
              toggleRef={openRef}
              expanded={expanded}
              onToggle={() => {
                setExpanded((expanded) => !expanded);
                window.setTimeout(() =>
                  closeRef.current?.focus({ preventScroll: true })
                );
              }}
            />
          </div>
          <motion.div
            layout
            style={{ height: expanded ? "auto" : "0.5rem" }}
            className="relative z-50 overflow-hidden bg-black pt-2"
          >
            <motion.div layout className="bg-neutral-800">
              <div className="bg-black pb-16 pt-2">
                <Header
                  invert
                  panelId={panelId}
                  icon={IoMdClose}
                  toggleRef={closeRef}
                  expanded={expanded}
                  onToggle={() => {
                    setExpanded((expanded) => !expanded);
                    window.setTimeout(() =>
                      openRef.current?.focus({ preventScroll: true })
                    );
                  }}
                />
              </div>

              {/* Navigation */}
              <Navigation setExpanded={setExpanded} />
              <div className="relative bg-black before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-900">
                <Container>
                  <div className="grid grid-cols-1 gap-y-10 pb-16 pt-10 sm:grid-cols-2 sm:pt-16">
                    <div>
                      <h2 className="font-display text-base font-semibold text-white">
                        Our offices
                      </h2>
                      <Offices
                        invert
                        className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
                      />
                    </div>
                    <div className="sm:border-l sm:border-transparent sm:pl-16">
                      <h2 className="font-display text-base font-semibold text-white">
                        Follow us
                      </h2>
                      <SocialHandles className="mt-6" invert />
                    </div>
                  </div>
                </Container>
              </div>
            </motion.div>
          </motion.div>
        </header>
        <motion.div
          layout
          // style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="relative flex flex-auto overflow-hidden bg-[#f8f8f4] pt-7"
        >
          <motion.div
            layout
            className="relative isolate flex w-full flex-col pt-7"
          >
            <main className="w-full flex-auto">{children}</main>
            {/* Footer */}
            <Footer />
          </motion.div>
        </motion.div>
      {/* </ReactLenis> */}
    </MotionConfig>
  );
}

export default BaseLayout;
