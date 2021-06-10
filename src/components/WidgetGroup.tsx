import React from "react";
import Wrapper from "./Wrapper";

interface WidgetGroupProps {
  label: string;
  className?: string;
  children: any;
}

const WidgetGroup = ({ label, className, children }: WidgetGroupProps) => {
  if (!className) {
    className = "";
  }

  return (
    <Wrapper className={className}>
      <p className="font-bold font-mono text-2xl">{label}</p>
      {children}
    </Wrapper>
  );
};

export default WidgetGroup;
