import React from "react";
import { DEGREES, METERS_PER_SECOND } from "../../constants";
import calculateMphToMs from "../../utils/calculateMphToMs";
import windSpeedToDescription from "../../utils/windSpeedToDescription";
import ArrowIcon from "../icons/ArrowIcon";
import Wrapper from "../Wrapper";
import { Muted } from "../ui/typography";

interface WindWidgetProps {
  label: string;
  degrees: string;
  milesPerHour: string;
  gustMph?: string;
}

const WindWidget: React.FC<WindWidgetProps> = ({
  label,
  degrees,
  milesPerHour,
  gustMph,
}) => {
  let parsedMilesPerHour: number;

  try {
    parsedMilesPerHour = parseFloat(milesPerHour);
  } catch (_) {
    return null;
  }

  const metersPerSecond = calculateMphToMs(parsedMilesPerHour);
  const description = windSpeedToDescription(metersPerSecond);
  const parsedDegrees = parseFloat(degrees);

  const gustMs = gustMph ? calculateMphToMs(parseFloat(gustMph)) : null;

  return (
    <Wrapper>
      <Muted>{label}</Muted>

      <div className="flex flex-row items-center justify-evenly space-x-2 space-y-2 text-xl md:flex-col md:justify-center">
        <p className="mt-4">
          {degrees} {DEGREES}
        </p>

        <ArrowIcon degrees={parsedDegrees} className="w-6" />

        <p>
          {metersPerSecond.toFixed(1)} {METERS_PER_SECOND}
        </p>

        {gustMs !== null && gustMs > metersPerSecond && (
          <p className="text-sm text-[hsl(var(--muted-foreground))]">
            Kast: {gustMs.toFixed(1)} {METERS_PER_SECOND}
          </p>
        )}

        <p>{description}</p>
      </div>
    </Wrapper>
  );
};

export default WindWidget;
