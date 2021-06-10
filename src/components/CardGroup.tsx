import React from "react";
import Wrapper from "./Wrapper";

interface CardGroupProps {
  label: string;
  className?: string;
  children: any;
}

const CardGroup = ({ label, className, children }: CardGroupProps) => {
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

export default CardGroup;
