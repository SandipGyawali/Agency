import React from "react";
import PixelBlast from "./Doodles/PixelBlast";

const Footer = () => {
  const [time, setTime] = React.useState("");

  React.useEffect(() => {
    const updateTime = () => {
      const formatted = new Date().toLocaleTimeString("en-US", {
        timeZone: "Asia/Kathmandu",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });

      setTime(`${formatted} · Kathmandu`);
    };

    updateTime(); // initial run
    const interval = setInterval(updateTime, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="section-padding pb-0!">
      <footer className="relative m-5 mt-0! overflow-hidden py-8 md:m-6 bg-foreground text-background dark:bg-background dark:text-foreground dark:invert">
        {/* Background Canvas */}
        <div className="absolute inset-0 h-full w-full object-cover">
          <PixelBlast />
        </div>
        

        {/* Content */}
        <div className="bigger-container font-medium relative z-10 flex min-h-[min(90dvh,750px)] flex-col justify-between">
          {/* Top Nav */}
          <div className="flex items-center justify-center gap-6 md:justify-between">
            <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              <a className="animated-underline" href="/">Home</a>
              <a className="animated-underline" href="/services">Services</a>
              <a className="animated-underline" href="/projects">Work</a>
              <a className="animated-underline" href="/about">Studio</a>
              <a className="animated-underline" href="/contact">Contact</a>
            </nav>

            <div className="hidden items-center gap-6 md:flex">
              <a
                className="animated-underline"
                href="https://instagram.com/hive"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a
                className="animated-underline"
                href="https://x.com/hive"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
              >
                X / Twitter
              </a>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-6 md:hidden">
              <a
                href="https://instagram.com/hive"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="animated-underline"
              >
                Instagram
              </a>
              <a
                href="https://x.com/hive"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="animated-underline"
              >
                X / Twitter
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 md:justify-between">
              <a className="animated-underline" href="mailto:contact@hive.com">
                contact@bityeti.com
              </a>
              <span>{time}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
