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
    <ChevronsUpIcon
      className={cn(className)}
      style={{
        transform: rotate,
      }}
    />
  );
};

export default ArrowIcon;
