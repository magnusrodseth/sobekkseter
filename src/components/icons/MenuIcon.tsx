import React from "react";
import classNames from "../../utils/classNames";

interface MenuIconProps {
  className?: string;
}

const MenuIcon: React.FC<MenuIconProps> = ({ className }: MenuIconProps) => {
  const styles = className !== undefined ? className : "";

  return (
    <div className={classNames(styles)}>
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
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </div>
  );
};

export default MenuIcon;
