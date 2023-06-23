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
        <div className="mb-1 text-left text-sm text-gray-600">{label}</div>
      </div>

      <div className="flex flex-row items-center justify-evenly space-x-2 space-y-2 text-xl md:flex-col md:justify-center">
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
