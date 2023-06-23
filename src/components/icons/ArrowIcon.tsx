import { cn } from "@/lib/utils";
import { ChevronsUpIcon } from "lucide-react";
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
    <div className={cn(rotate, className)}>
      <ChevronsUpIcon />
    </div>
  );
};

export default ArrowIcon;
