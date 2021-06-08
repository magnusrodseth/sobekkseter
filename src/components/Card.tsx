import React from "react";

interface CardProps {
  name: string;
  value: string;
  unit: string;
}

const Card: React.FC<CardProps> = ({ name, value, unit }: CardProps) => {
  return (
    <div className="w-100 shadow-md hover:shadow-lg bg-white rounded-lg h-auto p-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-101">
      <p className="font-bold">
        {name} - {value} {unit}
      </p>
    </div>
  );
};

export default Card;
