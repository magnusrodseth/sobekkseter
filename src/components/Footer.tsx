import React from "react";

interface FooterProps {
  supplier: string;
  link: string;
}

const Footer: React.FC<FooterProps> = ({ supplier, link }: FooterProps) => {
  // TODO: Fix formatted footer. Footer should be centered both in lg, md and sm.
  return (
    <footer className="font-mono text-sm w-screen	h-20 mb-10 flex lg:space-x-10 lg:flex-row md:flex-col sm:flex-col lg:content-end md:content-center justify-center items-end content-end text-center">
      <a
        className="text-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 text-blue-400 hover:text-blue-600 hover:underline"
        href="https://github.com/magnusrodseth"
      >
        Developed by Magnus Rødseth
      </a>

      <a
        className="text-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 text-blue-400 hover:text-blue-600 hover:underline"
        href={link}
        target="_blank"
      >
        Data supplied by {supplier}
      </a>
    </footer>
  );
};

export default Footer;
