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
    <div className="w-100 hover:scale-101 mt-3 flex h-auto transform flex-col rounded-lg bg-white p-5 shadow-md transition duration-500 ease-in-out hover:-translate-y-1 hover:shadow-lg">
      <Image src={src} alt={alt} {...props} />
      <p className="pt-2 text-center text-sm italic">{updated}</p>
    </div>
  );
};

export default WebcameraImage;
