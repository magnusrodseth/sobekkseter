import React from "react";
import conversionSwitch, { IConverted } from "../utils/conversionSwitch";

export interface CardProps {
  name?: string;
  value: string;
  unit?: string;
  toBeConverted?: boolean;
}

const Card: React.FC<CardProps> = ({
  name,
  value,
  unit,
  toBeConverted,
}: CardProps) => {
  let parsedValue: number;

  // If an error occurred when parsing the value,
  // there is not need in displaying the Card component.
  try {
    parsedValue = parseFloat(value);
  } catch (error) {
    return null;
  }

  // Dynamically create the converted body if unit and value is to be converted.
  let body: any;

  if (unit && toBeConverted) {
    const { convertedValue, convertedUnit } = conversionSwitch(
      parsedValue,
      unit
    );

    body = `${convertedValue} ${convertedUnit}`;
  } else if (unit && !toBeConverted) {
    body = `${value} ${unit}`;
  } else {
    body = `${value}`;
  }

  return (
    <div className="m-2 w-100 shadow-md hover:shadow-lg bg-white rounded-lg h-auto p-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-101">
      <p className="font-bold">
        {/* If name is defined, add name with ':' */}
        {name ? `${name}: ` : null}

        {body}
      </p>
    </div>
  );
};

export default Card;
