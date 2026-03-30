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
        "hover:scale-101 m-2 h-auto w-auto transform rounded-lg bg-[hsl(var(--card-nested))] border border-[hsl(var(--border-nested))] p-5 shadow-sm transition duration-500",
        "ease-in-out hover:-translate-y-1 hover:shadow-md dark:shadow-md dark:shadow-black/30",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Wrapper;
