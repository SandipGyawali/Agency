import { cn } from "../lib/utils";
import { ElementType, ReactNode } from "react";

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  className?: string;
  children: ReactNode;
};

function Container<T extends ElementType = "div">({
  as,
  className,
  children,
}: ContainerProps<T>) {
  const Component = as || "div";

  return (
    <Component className={cn("section-padding mx-3 sm:mx-5 md:mx-6", className)}>
      <div className="max-w-none mx-auto">{children}</div>
    </Component>
  );
}

export default Container;
