import React from "react";
import { DEGREES, METERS_PER_SECOND } from "../../constants";
import calculateMphToMs from "../../utils/calculateMphToMs";
import windSpeedToDescription from "../../utils/windSpeedToDescription";
import ArrowIcon from "../icons/ArrowIcon";
import Wrapper from "../Wrapper";

interface WindWidgetProps {
  label: string;
  degrees: string;
  direction: string;
  milesPerHour: string;
}

const WindWidget: React.FC<WindWidgetProps> = ({
  label,
  degrees,
  direction,
  milesPerHour,
}: WindWidgetProps) => {
  let parsedMilesPerHour: number;

  try {
    parsedMilesPerHour = parseFloat(milesPerHour);
  } catch (error) {
    return null;
  }

  const metersPerSecond = calculateMphToMs(parsedMilesPerHour);

  const description = windSpeedToDescription(metersPerSecond);

  const parsedDegrees = parseFloat(degrees);

  return (
    <Wrapper>
      <div className="flex flex-row justify-between">
        <div className="text-left font-mono text-sm text-gray-600 mb-1">
          {label}
        </div>
      </div>

      <div className="flex flex-row md:flex-col justify-evenly md:justify-center items-center text-xl space-y-2 space-x-2">
        <p className="mt-4">
          {degrees} {DEGREES}
        </p>

        <ArrowIcon degrees={parsedDegrees} className="w-6" />

        <p>
          {metersPerSecond.toFixed(1)} {METERS_PER_SECOND}
        </p>

        <p>{description}</p>
      </div>
    </Wrapper>
  );
};

export default WindWidget;
