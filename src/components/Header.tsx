import Link from "next/link";
import Container from "./Container";
import Button from "./ui/Button";
import { cn } from "../lib/utils";
import { IconType } from "react-icons";
import Image from "next/image";

type HeaderProps = {
  icon: IconType;
  invert?: boolean;
  panelId?: string;
  toggleRef?: unknown;
  expanded: boolean;
  onToggle?: () => void;
};

function Header({
  icon: Icon,
  invert = false,
  panelId,
  expanded,
  onToggle,
}: HeaderProps) {
  return (
    <Container>
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image
            alt="logo"
            loading="eager"
            width="40"
            height="40"
            decoding="async"
            src="/logo.png"
          />
        </Link>
        <div className="flex items-center gap-x-3 md:gap-x-8">
          <Button href="/contact" className={cn(expanded && "bg-white text-foreground")}>Work With Us</Button>
          <button
            className={cn(
              "group -m-2.5 rounded-full p-2.5 transition",
              invert ? "hover:bg-white/10" : "hover:bg-neutral-950/10"
            )}
            onClick={onToggle}
            aria-expanded={expanded}
            aria-controls={panelId}
            aria-label="Navigation Toggle"
          >
            <Icon
              className={cn(
                "h-6 w-6",
                invert
                  ? "fill-white group-hover:fill-neutral-200"
                  : "fill-neutral-950 group-hover:fill-neutral-700"
              )}
            />
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Header;
