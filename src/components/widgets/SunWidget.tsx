import React from "react";
import Wrapper from "../Wrapper";
import { SunriseIcon, SunsetIcon } from "lucide-react";
import { Muted } from "../ui/typography";

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
      <Muted>{label}</Muted>
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
