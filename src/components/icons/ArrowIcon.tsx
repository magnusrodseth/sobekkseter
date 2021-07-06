import React from "react";
import classNames from "../../utils/classNames";

interface ArrowIconProps {
  degrees: number;
  className?: string;
}

const ArrowIcon = ({ degrees, className }: ArrowIconProps) => {
  const style = className || "";

  const deg = `${degrees}deg`;

  const styles = {
    transform: `rotate(${deg})`,
  };

  return (
    <div style={styles} className={classNames("mb-1 md:mt-4", style)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7l4-4m0 0l4 4m-4-4v18"
        />
      </svg>
    </div>
  );
};

export default ArrowIcon;
