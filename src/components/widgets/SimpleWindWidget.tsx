import { METERS_PER_SECOND } from "@/constants";
import calculateMphToMs from "@/utils/calculateMphToMs";
import React from "react";
import Wrapper from "../Wrapper";

interface SimpleWindWidgetProps {
  label: string;
  milesPerHour: string;
  time?: string;
}

const SimpleWindWidget: React.FC<SimpleWindWidgetProps> = ({
  label,
  milesPerHour,
  time,
}: SimpleWindWidgetProps) => {
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
        <div className="mb-1 text-left  text-sm text-gray-600">{label}</div>

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
