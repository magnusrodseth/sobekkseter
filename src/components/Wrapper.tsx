import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import React from "react";

interface WrapperProps {
  children: ReactNode;
  className?: string;
}

const Wrapper: React.FC<WrapperProps> = ({
  className,
  children,
}: WrapperProps) => {
  return (
    <div
      className={cn(
        "hover:scale-101 m-2 h-auto w-auto transform rounded-lg bg-white p-5 shadow-md transition duration-500",
        "ease-in-out hover:-translate-y-1 hover:shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Wrapper;
