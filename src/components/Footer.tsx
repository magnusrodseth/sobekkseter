import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mb-8 flex flex-col items-center justify-center space-y-4 p-4">
      <Link
        href="https://www.weatherlink.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Data levert av WeatherLink
      </Link>

      <Link
        href="https://github.com/magnusrodseth"
        target="_blank"
        rel="noopener noreferrer"
      >
        Utviklet av Magnus Rødseth
      </Link>
    </footer>
  );
};

export default Footer;
