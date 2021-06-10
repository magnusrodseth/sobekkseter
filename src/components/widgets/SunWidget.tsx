import React from "react";
import Arrow from "../icons/Arrow";
import Sun from "../icons/Sun";
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
          <Sun /> {sunrise ? <Arrow degrees={0} /> : <Arrow degrees={180} />}
        </div>
      </div>
    </Wrapper>
  );
};

export default SunWidget;
