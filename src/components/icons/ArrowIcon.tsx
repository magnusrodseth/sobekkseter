import classNames from "@/utils/classNames";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import type { FC } from "react";

type ArrowIconProps = {
  degrees: number;
  className?: string;
};

const ArrowIcon: FC<ArrowIconProps> = ({
  degrees,
  className,
}: ArrowIconProps) => {
  const rotate = `rotate(${degrees}deg)`;

  return (
    <div className={classNames(rotate, className || "")}>
      <ArrowUpIcon />
    </div>
  );
};

export default ArrowIcon;
