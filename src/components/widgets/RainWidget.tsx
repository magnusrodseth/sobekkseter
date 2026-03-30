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
  // RainWidget is a general-purpose numeric display widget. Despite its name, it is
  // also reused for humidity, pressure, and other scalar readings. The isRainfall
  // check triggers inch-to-mm conversion only when the unit is INCHES.
  const isRainfall = unit === INCHES;

  // This value is used to determine whether we have rainfall or not.
  let parsedValue: number;

  try {
    parsedValue = parseFloat(value);
  } catch (_) {
    return null;
  }

  const rainInMillimeters = calculateInToMm(parsedValue);

  return (
    <Wrapper>
      <div className="flex flex-row justify-between">
        <Muted>{label}</Muted>

        {time ? (
          <div className="mb-1 text-right text-sm font-bold uppercase text-[hsl(var(--muted-foreground))]">
            {time}
          </div>
        ) : null}

        {tendency && <Muted className="font-bold">{tendency}</Muted>}
      </div>
      <div
        className={
          parsedValue > 0
            ? "text-center text-2xl font-semibold text-blue-600 dark:text-blue-400"
            : "text-center text-2xl font-semibold"
        }
      >
        {isRainfall ? rainInMillimeters.toFixed(1) : parsedValue.toFixed(1)}{" "}
        {isRainfall ? MILLIMETERS : unit}
      </div>
    </Wrapper>
  );
};

export default RainWidget;
