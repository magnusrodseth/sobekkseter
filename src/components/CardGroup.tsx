import React from "react";
import Card, { CardProps } from "./Card";

interface CardGroupProps {
  label: string;
  className?: string;
  children: any;
  width?: string;
}

const CardGroup = ({ label, className, children, width }: CardGroupProps) => {
  if (!className) {
    className = "";
  }

  return (
    <div
      className={
        className +
        " w-100 shadow-md hover:shadow-lg bg-white rounded-lg h-auto p-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-101"
      }
    >
      <p className="font-bold">{label}</p>

      {children}
    </div>
  );
};

export default CardGroup;
