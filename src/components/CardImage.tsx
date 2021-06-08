import React from "react";

interface CardImageProps {
  src: string;
  alt: string;
  lastUpdated: string;
}

const CardImage: React.FC<CardImageProps> = (props) => {
  const { src, alt, lastUpdated } = props;
  console.log(lastUpdated);

  return (
    <div className="flex flex-col w-100 shadow-md hover:shadow-lg bg-white rounded-lg h-auto p-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-101">
      <img {...props} src={src} alt={alt} />
      <p className="text-sm italic text-center pt-2">{lastUpdated}</p>
    </div>
  );
};

export default CardImage;
