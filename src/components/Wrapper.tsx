import React from "react";

interface WrapperProps {
  children: any;
  className?: string;
}

const Wrapper: React.FC<WrapperProps> = ({
  className,
  children,
}: WrapperProps) => {
  return (
    <div
      className={
        className +
        " w-auto m-2 shadow-md hover:shadow-lg bg-white rounded-lg h-auto p-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-101"
      }
    >
      {children}
    </div>
  );
};

export default Wrapper;
