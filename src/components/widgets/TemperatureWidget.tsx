import React from "react";
import Wrapper from "../Wrapper";
import { Muted } from "../ui/typography";

interface TemperatureProps {
  label: string;
  value: string;
  unit: string;
  time?: string;
}

const TemperatureWidget: React.FC<TemperatureProps> = ({
  label,
  value,
  unit,
  time,
}: TemperatureProps) => {
  // This value is used to determine whether the temperature is positive or negative.
  let parsedValue: number;

  // If an error occurred when parsing the value,
  // there is not need in displaying the Card component.
  try {
    parsedValue = parseFloat(value);
  } catch (error) {
    return null;
  }

  return (
    <Wrapper>
      <div className="flex flex-row justify-between">
        <Muted>{label}</Muted>

        {time ? (
          <div className="text-right  text-sm font-bold uppercase text-gray-600">
            {time}
          </div>
        ) : null}
      </div>

      <div
        className={
          parsedValue > 0
            ? "text-center text-2xl text-red-600"
            : "text-center text-2xl text-blue-600"
        }
      >
        {value} {unit}
      </div>
    </Wrapper>
  );
};

export default TemperatureWidget;
