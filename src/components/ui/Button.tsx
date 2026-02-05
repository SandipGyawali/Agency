import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  invert?: boolean;
  href?: string;
  className?: string;
  children: React.ReactNode;
  spanClassName?: string;
};

function Button({
  invert,
  href,
  className,
  children,
  spanClassName,
  ...props
}: ButtonProps) {
  className = cn(
    "inline-flex px-4 py-1.5 text-sm font-semibold transition",
    invert
      ? "bg-white text-neutral-950 hover:bg-neutral-200"
      : "bg-neutral-950 text-white hover:bg-neutral-800",
    className
  );

  const _children = <span className={spanClassName}>{children}</span>;
  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {_children}
      </Link>
    );
  }
  return (
    <button className={className} {...props}>
      {_children}
    </button>
  );
}

export default Button;
