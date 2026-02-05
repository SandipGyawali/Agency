import Link from "next/link";
import {
  BsFacebook,
  BsTwitter,
  BsGithub,
  BsYoutube,
  BsLinkedin,
} from "react-icons/bs";
import { cn } from "../lib/utils";

export const SocialMediaProfiles = [
  {
    title: "Youtube",
    href: "https://www.youtube.com",
    icon: BsYoutube,
  },
  { title: "GitHub", href: "https://github.com/SandipGyawali", icon: BsGithub },
  {
    title: "Facebook",
    href: "www.facebook.com",
    icon: BsFacebook,
  },
  {
    title: "linkedin",
    href: "https://www.linkedin.com",
    icon: BsLinkedin,
  },
  {
    title: "Twitter",
    href: "https://twitter.com",
    icon: BsTwitter,
  },
];

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
      {SocialMediaProfiles.map((item) => (
        <li key={item.title}>
          <Link
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
