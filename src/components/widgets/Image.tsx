import Image from "next/image";
import type { ComponentProps } from "react";
import React from "react";

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
      <p className="pt-2 text-center text-sm italic">{updated}</p>
    </div>
  );
};

export default WebcameraImage;
