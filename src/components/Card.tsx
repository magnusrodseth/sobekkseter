import React from "react";
import calculateMphToMs from "../utils/calculateMphToMs";

interface CardProps {
  name?: string;
  value: string;
  unit?: string;
  mphToMs?: boolean;
}

const Card: React.FC<CardProps> = ({
  name,
  value,
  unit,
  mphToMs,
}: CardProps) => {
  let parsedValue: number;

  // If an error occurred when parsing the value,
  // there is not need in displaying the Card component.
  try {
    parsedValue = parseFloat(value);
  } catch (error) {
    return null;
  }

  let metersPerSecond = mphToMs ? calculateMphToMs(parsedValue) : null;

  return (
    <div className="w-100 shadow-md hover:shadow-lg bg-white rounded-lg h-auto p-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-101">
      <p className="font-bold">
        {/* If name is defined, add name with ':' */}
        {/* Furthermore, only display parsed value if needed. */}
        {name ? `${name}: ` : null} {mphToMs ? parsedValue : value} {unit}
      </p>
    </div>
  );
};

export default Card;
