import React from "react";
import { DEGREES, METERS_PER_SECOND } from "../../constants";
import calculateMphToMs from "../../utils/calculateMphToMs";
import windSpeedToDescription from "../../utils/windSpeedToDescription";
import Arrow from "../icons/Arrow";
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
      <div className="text-left font-mono text-sm text-gray-600 mb-1">
        {label}
      </div>
      <div className="flex flex-row space-x-2 text-xl justify-evenly">
        <p>
          {degrees} {DEGREES}
        </p>

        <Arrow degrees={parsedDegrees} />

        <p>
          {metersPerSecond} {METERS_PER_SECOND}
        </p>

        <p>{description}</p>
      </div>
    </Wrapper>
  );
};

export default WindWidget;
