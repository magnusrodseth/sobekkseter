import { INCHES, MILLIMETERS } from "@/constants";
import calculateInToMm from "@/utils/calculateInToMm";
import React from "react";
import Wrapper from "../Wrapper";
import { Muted } from "../ui/typography";

interface RainWidgetProps {
  label: string;
  value: string;
  unit: string;
  time?: string;
  tendency?: string;
}

const RainWidget: React.FC<RainWidgetProps> = ({
  label,
  value,
  unit,
  time,
  tendency,
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
        <Muted>{label}</Muted>

        {time ? (
          <div className="mb-1 text-right  text-sm font-bold uppercase text-gray-600">
            {time}
          </div>
        ) : null}

        {tendency && <Muted className="font-bold">{tendency}</Muted>}
      </div>
      <div
        className={
          parsedValue > 0
            ? "text-center text-2xl text-blue-600"
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
