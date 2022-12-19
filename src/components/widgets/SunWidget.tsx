import {
  ArrowLongDownIcon,
  ArrowLongUpIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import Wrapper from "../Wrapper";

interface SunWidgetProps {
  label: string;
  time: string;
  sunrise?: boolean;
}

const SunWidget: React.FC<SunWidgetProps> = ({
  label,
  time,
  sunrise,
}: SunWidgetProps) => {
  return (
    <Wrapper>
      <div className="mb-1 text-left font-mono text-sm text-gray-600">
        {label}
      </div>
      <div className="flex flex-row justify-evenly space-x-2 text-xl">
        <p>{time}</p>

        <div className="flex w-12">
          {/* Display sun with fitting arrow, depending on if it is sunrise or not. */}
          <SunIcon />{" "}
          {sunrise ? (
            <ArrowLongUpIcon className="w-8" />
          ) : (
            <ArrowLongDownIcon className="w-8" />
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default SunWidget;
