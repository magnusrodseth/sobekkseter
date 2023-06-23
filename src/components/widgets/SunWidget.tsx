import {
  ArrowLongDownIcon,
  ArrowLongUpIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import Wrapper from "../Wrapper";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  SunriseIcon,
  SunsetIcon,
} from "lucide-react";

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
      <div className="mb-1 text-left  text-sm text-gray-600">{label}</div>
      <div className="flex flex-row justify-evenly space-x-2 text-xl">
        <p>{time}</p>

        {sunrise ? (
          <SunriseIcon className="w-8" />
        ) : (
          <SunsetIcon className="w-8" />
        )}
      </div>
    </Wrapper>
  );
};

export default SunWidget;
