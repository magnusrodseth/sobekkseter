import React from "react";
import { DEGREES, METERS_PER_SECOND } from "../../constants";
import calculateMphToMs from "../../utils/calculateMphToMs";
import { ArrowUpIcon } from "@heroicons/react/outline";
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
        <div className="text-left font-mono text-sm text-gray-600 mb-1">
          {label}
        </div>

        {time ? (
          <div className="text-sm text-right font-bold font-mono uppercase text-gray-600 mb-1">
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
