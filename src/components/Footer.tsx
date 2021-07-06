import React from "react";

interface FooterProps {
  supplier: string;
  link: string;
}

const Footer: React.FC<FooterProps> = ({ supplier, link }: FooterProps) => {
  return (
    <footer
      className="grid gap-3 lg:grid-col-2 md:grid-cols-1 sm:grid-cols-1
    lg:grid-rows-1 md:grid-rows-2 sm:grid-rows-2
    font-mono text-sm w-screen	h-20 mb-10"
    >
      <a
        className="text-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 text-blue-400 hover:text-blue-600 hover:underline"
        href="https://github.com/magnusrodseth"
        target="_blank"
        rel="noopener"
      >
        Developed by Magnus Rødseth
      </a>

      <a
        className="text-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 text-blue-400 hover:text-blue-600 hover:underline"
        href={link}
        target="_blank"
        rel="noopener"
      >
        Data supplied by {supplier}
      </a>
    </footer>
  );
};

export default Footer;
