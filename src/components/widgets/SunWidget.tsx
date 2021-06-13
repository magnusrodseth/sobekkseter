import React from "react";
import ArrowIcon from "../icons/ArrowIcon";
import SunIcon from "../icons/SunIcon";
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
      <div className="text-left font-mono text-sm text-gray-600 mb-1">
        {label}
      </div>
      <div className="flex flex-row space-x-2 text-xl justify-evenly">
        <p>{time}</p>

        <div className="flex flex-row">
          {/* Display sun with fitting arrow, depending on if it is sunrise or not. */}
          <SunIcon />{" "}
          {sunrise ? <ArrowIcon degrees={0} /> : <ArrowIcon degrees={180} />}
        </div>
      </div>
    </Wrapper>
  );
};

export default SunWidget;
