import React from "react";

interface FooterProps {
  supplier: string;
  link: string;
}

const Footer: React.FC<FooterProps> = ({ supplier, link }: FooterProps) => {
  return (
    <div className="container mx-auto px-6">
      <div className="mt-auto flex flex-col items-center">
        <div className="sm:w-2/3 text-center py-3">
          <a
            className="text-sm text-blue-700 mb-2 hover:underline transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            href="https://github.com/magnusrodseth"
          >
            Developed by Magnus Rødseth
          </a>

          <a
            className="text-sm text-blue-700 mb-2 hover:underline transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            href={link}
            target="_blank"
          >
            Data supplied by {supplier}
          </a>
        </div>
      </div>
    </div>
    // <div className="flex justify-evenly lg:flex-row md:flex-col sm:flex-col xs:flex-col">
    //   <a
    //     href="https://github.com/magnusrodseth"
    //     className="transition duration-500 px-20 ease-in-out transform hover:-translate-y-1 hover:scale-105 text-xs"
    //   >
    //     Developed by{" "}
    //     <span className="text-blue-700 hover:underline px-2">
    //       Magnus Rødseth
    //     </span>
    //   </a>

    //   <a
    // href={link}
    // target="_blank"
    //     className="transition px-20 duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 text-xs"
    //   >
    //     Data supplied by{" "}
    //     <span className="text-blue-700 hover:underline px-2">{supplier}</span>
    //   </a>
    // </div>
  );
};

export default Footer;
