import React from "react";
import Wrapper from "../Wrapper";

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
        <div className="text-left font-mono text-sm text-gray-600 mb-1">
          {label}
        </div>

        {time ? (
          <div className="text-sm text-right font-bold font-mono uppercase text-gray-600 mb-1">
            {time}
          </div>
        ) : null}
      </div>

      <div
        className={
          parsedValue > 0
            ? "text-red-400 text-center text-2xl"
            : "text-blue-400 text-center text-2xl"
        }
      >
        {value} {unit}
      </div>
    </Wrapper>
  );
};

export default TemperatureWidget;
