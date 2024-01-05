import { METERS_PER_SECOND } from "@/constants";
import calculateMphToMs from "@/utils/calculateMphToMs";
import React from "react";
import Wrapper from "../Wrapper";
import { Muted } from "../ui/typography";

interface SimpleWindWidgetProps {
  label: string;
  milesPerHour: string | undefined;
  time?: string;
}

const SimpleWindWidget: React.FC<SimpleWindWidgetProps> = ({
  label,
  milesPerHour,
  time,
}: SimpleWindWidgetProps) => {
  if(!milesPerHour) return null;

  let parsedMilesPerHour: number;

  try {
    parsedMilesPerHour = parseFloat(milesPerHour);
  } catch (error) {
    return null;
  }

  const metersPerSecond = calculateMphToMs(parsedMilesPerHour);

  return (
    <Wrapper>
      <div className="flex flex-row justify-between">
        <Muted>{label}</Muted>

        {time ? (
          <div className="mb-1 text-right  text-sm font-bold uppercase text-gray-600">
            {time}
          </div>
        ) : null}
      </div>

      <p className="text-center text-2xl">
        {metersPerSecond.toFixed(1)} {METERS_PER_SECOND}
      </p>
    </Wrapper>
  );
};

export default SimpleWindWidget;
