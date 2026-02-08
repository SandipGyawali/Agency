import Link from "next/link";
import React from "react";
import Container from "../components/Container";

type ItemsProps = {
  href: string;
  children: React.ReactNode;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>
};

function NavigationItem({ href, children, setExpanded }: ItemsProps) {
  return (
    <Link
      href={href}
      onClick={() => setExpanded(false)}
      className="group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16"
    >
      {children}
      <span className="absolute inset-y-0 -z-10 w-screen bg-black opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100" />
    </Link>
  );
}

function NavigationRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="even:mt-px sm:bg-neutral-950">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2">{children}</div>
      </Container>
    </div>
  );
}

function Navigation({ setExpanded }: { setExpanded: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <nav className="mt-px font-display text-5xl font-medium tracking-tight text-white">
      <NavigationRow>
        <NavigationItem setExpanded={setExpanded}  href="/projects">Our Work</NavigationItem>
        <NavigationItem setExpanded={setExpanded} href="/about">About Us</NavigationItem>
      </NavigationRow>
      <NavigationRow>
        <NavigationItem setExpanded={setExpanded} href="/services">Our Services</NavigationItem>
        <NavigationItem setExpanded={setExpanded} href="/contact">Contact Us</NavigationItem>
      </NavigationRow>
    </nav>
  );
}

export default Navigation;
