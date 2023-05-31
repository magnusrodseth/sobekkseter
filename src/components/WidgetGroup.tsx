import type { ReactNode } from "react";
import Wrapper from "./Wrapper";
import classNames from "../utils/classNames";

interface WidgetGroupProps {
  label: string;
  className?: string;
  accentColor?: string;
  children: ReactNode;
}

const WidgetGroup = ({
  label,
  className,
  accentColor,
  children,
}: WidgetGroupProps) => {
  const accent = accentColor ? `bg-${accentColor}-200` : "bg-gray-100";
  return (
    <Wrapper className={className}>
      <h1 className={classNames(" text-2xl font-bold")}>{label}</h1>
      {accentColor && (
        <div
          className={classNames(
            "my-3 h-1 w-auto rounded-md",
            `${accent} opacity-50`
          )}
        />
      )}
      {children}
    </Wrapper>
  );
};

export default WidgetGroup;
