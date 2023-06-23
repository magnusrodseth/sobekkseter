import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mb-8 flex flex-col items-center justify-center space-y-4 p-4">
      <Link
        href="https://www.weatherlink.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-grass-700 transition-colors duration-200 hover:text-grass-600"
      >
        Data levert av WeatherLink
      </Link>

      <Link
        href="https://github.com/magnusrodseth"
        target="_blank"
        rel="noopener noreferrer"
        className="text-grass-700 transition-colors duration-200 hover:text-grass-600"
      >
        Utviklet av Magnus Rødseth med 🫶🏼
      </Link>
    </footer>
  );
};

export default Footer;
