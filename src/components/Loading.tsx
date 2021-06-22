import React from "react";

interface LoadingProps {}

const Loading: React.FC<LoadingProps> = ({}) => {
  return (
    <svg
      className="animate-spin h-5 w-5 mr-3 text-blue-400"
      viewBox="0 0 24 24"
    ></svg>
  );
};

export default Loading;
