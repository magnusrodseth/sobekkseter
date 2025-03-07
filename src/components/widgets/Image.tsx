import translateLastUpdated from "@/utils/translateLastUpdated";
import Image from "next/image";
import type { ComponentProps } from "react";
import React from "react";
import { P } from "../ui/typography";
import { cn } from "@/lib/utils";

interface WebcameraImageProps extends ComponentProps<typeof Image> {
  src: string;
  alt: string;
  updated: string;
  width: number;
  priority: boolean;
  height: number;
  fill?: boolean;
  sizes?: string;
  className?: string;
}

const WebcameraImage: React.FC<WebcameraImageProps> = ({
  src,
  alt,
  updated,
  width,
  height,
  priority,
  className,
  fill,
  sizes,
  ...props
}) => {
  return (
    <div className="flex h-auto flex-col p-2">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={cn(className)}
        fill={fill}
        sizes={sizes}
        {...props}
      />
      <P className="text-center italic">{translateLastUpdated(updated)}</P>
    </div>
  );
};

export default WebcameraImage;
