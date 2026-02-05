import { cn } from "../lib/utils";
import Link from "next/link";

type LogoProps = {
  invert: boolean;
  href: string;
  className: string;
  children: React.ReactNode;
};

const Logo = ({ invert, href, className, children, ...props }: LogoProps) => {
  className = cn(
    className,
    "black",
    invert ? "text-white hover:text-blue-600" : "text-black hover:text-blue-600"
  );
  const inner = <span className="relative">{children}</span>;
  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {inner}
      </Link>
    );
  }
  return (
    <h2
      className={cn(
        "cursor-pointer text-2xl font-semibold duration-300",
        className
      )}
      {...props}
    >
      {inner}
    </h2>
  );
};

export default Logo;
