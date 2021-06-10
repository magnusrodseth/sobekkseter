import React from "react";

interface ImageProps {
  src: string;
  alt: string;
  updated: string;
}

const Image: React.FC<ImageProps> = (props) => {
  const { src, alt, updated } = props;

  return (
    <div className="flex mt-3 flex-col w-100 shadow-md hover:shadow-lg bg-white rounded-lg h-auto p-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-101">
      <img {...props} src={src} alt={alt} />
      <p className="text-sm italic text-center pt-2">{updated}</p>
    </div>
  );
};

export default Image;
