import React from "react";
import Wrapper from "./Wrapper";
import classNames from "../utils/classNames";

interface WidgetGroupProps {
  label: string;
  className?: string;
  accentColor?: string;
  children: any;
}

const WidgetGroup = ({
  label,
  className,
  accentColor,
  children,
}: WidgetGroupProps) => {
  const styles = className ? className : "";

  return (
    <Wrapper className={styles}>
      <h1 className={classNames("font-bold font-mono text-2xl")}>{label}</h1>
      {accentColor ? (
        <div
          className={classNames(
            "h-1 my-3 w-auto rounded-md",
            `bg-${accentColor}-400 opacity-50`
          )}
        />
      ) : null}
      {children}
    </Wrapper>
  );
};

export default WidgetGroup;
