import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="lg:grid-col-2 mb-10 grid h-20 w-screen
    gap-3 font-mono text-sm
    sm:grid-cols-1 sm:grid-rows-2 md:grid-cols-1	md:grid-rows-2 lg:grid-rows-1"
    >
      <Link
        className="transform text-center text-blue-600 transition duration-500 ease-in-out  hover:text-blue-800 hover:underline"
        href="https://github.com/magnusrodseth"
        target="_blank"
        rel="noopener noreferrer"
      >
        Utviklet av Magnus Rødseth
      </Link>

      <Link
        className="transform text-center text-blue-600 transition duration-500 ease-in-out  hover:text-blue-800 hover:underline"
        href="https://www.weatherlink.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Data levert av WeatherLink
      </Link>
    </footer>
  );
};

export default Footer;
