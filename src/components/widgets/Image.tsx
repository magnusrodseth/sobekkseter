import translateLastUpdated from "@/utils/translateLastUpdated";
import Image from "next/image";
import type { ComponentProps } from "react";
import React from "react";
import { P } from "../ui/typography";

interface WebcameraImageProps extends ComponentProps<typeof Image> {
  updated: string;
}

const WebcameraImage: React.FC<WebcameraImageProps> = ({
  src,
  alt,
  updated,
  ...props
}) => {
  return (
    <div className="flex h-auto flex-col p-2">
      <Image src={src} alt={alt} {...props} />
      <P className="text-center italic">{translateLastUpdated(updated)}</P>
    </div>
  );
};

export default WebcameraImage;
