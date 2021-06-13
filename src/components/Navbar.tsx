import React from "react";
import { Disclosure, Menu } from "@headlessui/react";
import classNames from "../utils/classNames";
import MenuIcon from "./icons/MenuIcon";
import XIcon from "./icons/XIcon";

const navigation = [
  {
    name: "yr.no - Været nå",
    href: "https://www.yr.no/nb/v%C3%A6rvarsel/daglig-tabell/1-114806/Norge/Innlandet/S%C3%B8r-Aurdal/Hedalen%20stavkirke",
  },
  {
    name: "yr.no - Time for time",
    href: "https://www.yr.no/nb/v%C3%A6rvarsel/timetabell/1-114806/Norge/Innlandet/S%C3%B8r-Aurdal/Hedalen%20stavkirke?i=0",
  },
  { name: "Været på Søbekkseter", href: "/" },
  {
    name: "yr.no - 10 dager",
    href: "https://www.yr.no/nb/v%C3%A6rvarsel/daglig-tabell/1-114806/Norge/Innlandet/S%C3%B8r-Aurdal/Hedalen%20stavkirke",
  },
  {
    name: "Hedalen Løypelag",
    href: "http://hedalen.no/loypelag/",
  },
];

const Navbar = () => {
  return (
    <Disclosure as="nav" className="font-mono text-center">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-evenly mt-2 mb-2">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-evenly p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-evenly sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  {/* Logo goes here */}
                  <a href="/">
                    <img
                      src="/img/logo.png"
                      alt="Logo"
                      className={classNames(
                        "w-10 transition duration-500 ease-in-out transform",
                        "hover:-translate-y-1 hover:scale-101"
                      )}
                    />
                  </a>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        className={classNames(
                          "hover:bg-gray-200",
                          "px-3 py-2 rounded-md text-sm font-medium",
                          "transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-101",
                          "hover:shadow-md"
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  className={classNames(
                    "hover:bg-gray-200",
                    "block px-3 py-2 rounded-md text-base font-medium",
                    "transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-101",
                    "hover:shadow-md"
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
