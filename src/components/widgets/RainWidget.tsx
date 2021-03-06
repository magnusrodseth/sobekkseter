import React from "react";
import { INCHES, MILLIMETERS } from "../../constants";
import calculateInToMm from "../../utils/calculateInToMm";
import Wrapper from "../Wrapper";

interface RainWidgetProps {
  label: string;
  value: string;
  unit: string;
  time?: string;
  tendency?:string;
}

const RainWidget: React.FC<RainWidgetProps> = ({
  label,
  value,
  unit,
  time,
  tendency
}: RainWidgetProps) => {
  // This is a suboptimal way of determining if the widget is a rainfall widget, or
  // something else related to rain (ex: humidity).
  const isRainfall = unit == INCHES;

  // This value is used to determine whether we have rainfall or not.
  let parsedValue: number;

  try {
    parsedValue = parseFloat(value);
  } catch (error) {
    return null;
  }

  const rainInMillimeters = calculateInToMm(parsedValue);

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

        {tendency ? (
          <div className="text-sm text-right font-mono font-bold text-gray-600 mb-1">
            {tendency}
          </div>
        ) : null}
      </div>
      <div
        className={
          parsedValue > 0
            ? "text-blue-400 text-center text-2xl"
            : "text-center text-2xl"
        }
      >
        {isRainfall ? rainInMillimeters.toFixed(1) : parsedValue.toFixed(1)}{" "}
        {isRainfall ? MILLIMETERS : unit}
      </div>
    </Wrapper>
  );
};

export default RainWidget;
