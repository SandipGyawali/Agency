import React from "react";
import { cn } from "../lib/utils";

interface OfficeProps {
  name: string;
  children: React.ReactNode;
  invert: boolean;
}

function Office({ name, children, invert = false }: OfficeProps) {
  return (
    <address
      className={cn(
        "text-sm not-italic",
        invert ? "text-neutral-300" : "text-neutral-600"
      )}
    >
      <strong className={invert ? "text-white" : "text-neutral-950"}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
}

interface OfficesProps {
  invert: boolean;
}

const Offices = ({
  invert = false,
  ...props
}: OfficesProps & { className: string }) => {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="United States" invert={invert}>
          Boston · Massachusetts
        </Office>
      </li>
    </ul>
  );
};

export default Offices;
