import Link from "next/link";
import { cn } from "../lib/utils";
import { socials } from "@/data/socials";


const SocialHandles = ({
  className,
  invert = false,
}: {
  className: string;
  invert: boolean;
}) => {
  return (
    <ul
      role="list"
      className={cn(
        "flex gap-x-10",
        invert ? "text-white" : "text-neutral-950",
        className
      )}
    >
      {socials.map((item) => (
        <li key={item.title}>
          <Link
            target="_blank"
            href={item.href}
            aria-label={item.title}
            className={cn(
              "transition",
              invert ? "hover:text-neutral-200" : "hover:text-neutral-700"
            )}
          >
            <item.icon className="h-6 w-6 fill-current" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialHandles;
