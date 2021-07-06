import React, { Fragment } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import classNames from "../utils/classNames";
import {
  MenuIcon,
  XIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/outline";
import { useState } from "react";
import { useRef } from "react";
import { IS_PRODUCTION } from "../constants";

const navigation = [
  {
    name: "yr.no - Været nå",
    href: "https://www.yr.no/nb/v%C3%A6rvarsel/daglig-tabell/1-114806/Norge/Innlandet/S%C3%B8r-Aurdal/Hedalen%20stavkirke",
  },
  {
    name: "yr.no - Time for time",
    href: "https://www.yr.no/nb/v%C3%A6rvarsel/timetabell/1-114806/Norge/Innlandet/S%C3%B8r-Aurdal/Hedalen%20stavkirke?i=0",
  },
  { name: "Været på Søbekkseter", href: IS_PRODUCTION ? "/sobekkseter" : "/" },
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
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  const handleModalIsOpen = () => {
    setModalIsOpen(!modalIsOpen);
  };

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
                  <a href={IS_PRODUCTION ? '/sobekkseter' : '/'}>
                    <img
                      src={`${IS_PRODUCTION ? '/sobekkseter' : ''}/img/logo.png`}
                      alt="Logo"
                      className={classNames(
                        "w-10 transition duration-500 ease-in-out transform",
                        "hover:-translate-y-1 hover:scale-101"
                      )}
                    />
                  </a>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex items-center space-x-4">
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
                    <QuestionMarkCircleIcon
                      className={classNames(
                        "w-8 h-8 text-blue-400",
                        "transition duration-500 ease-in-out transform",
                        "hover:-translate-y-1 cursor-pointer"
                      )}
                      onClick={handleModalIsOpen}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 flex flex-col justify-center items-center space-y-1">
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
              <QuestionMarkCircleIcon
                className={classNames(
                  "w-8 h-8 text-blue-400",
                  "transition duration-500 ease-in-out transform",
                  "hover:-translate-y-1 cursor-pointer"
                )}
                onClick={handleModalIsOpen}
              />
            </div>
          </Disclosure.Panel>

          {/* Information modal */}
          <Transition.Root show={modalIsOpen} as={Fragment}>
            <Dialog
              as="div"
              static
              className="fixed z-10 inset-0 overflow-y-auto"
              initialFocus={cancelButtonRef}
              open={modalIsOpen}
              onClose={setModalIsOpen}
            >
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                {/* This element is to trick the browser into centering the modal contents. */}
                <span
                  className="hidden sm:inline-block sm:align-middle sm:h-screen"
                  aria-hidden="true"
                >
                  &#8203;
                </span>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                          <Dialog.Title
                            as="h2"
                            className="text-4xl py-6 leading-6 font-medium text-gray-900"
                          >
                            Mer informasjon
                          </Dialog.Title>
                          <div className="mt-2 p-4 text-left">
                            <ul className="text-md text-gray-700 list-disc tracking-wide leading-8">
                              <li className={classNames("my-4")}>
                                Værdata oppdateres hvert 15. minutt hele døgnet.
                                Webkamera oppdateres hvert 15. minutt ved
                                dagslys.
                              </li>
                              <li className={classNames("my-4")}>
                                Værprognosen er kalkulert ut fra forandringen i
                                lufttrykket pr. time <u>lokalt</u> og gir en
                                antydning om kommende værforhold de neste 24
                                timene.
                              </li>
                              <li className={classNames("my-4")}>
                                Duggpunktet gir informasjon om faren for tåke og
                                kondensering / ising. Når duggpunktet er lik
                                utetemperaturen, får vi tåke.
                              </li>
                              <li className={classNames("my-4")}>
                                Lufttrykkforandringen er svært viktig for å
                                bedømme kommende vind. Jo større og raskere
                                forandring (særlig fallende), desto mer vind har
                                vi i vente.
                              </li>
                              <li className={classNames("my-4")}>
                                Nedbørsmåler registrerer bare regn (ikke snø).
                              </li>
                              <li className={classNames("my-4")}>
                                Minimums- og Maksimumsresultater nullstilles
                                hver dag kl. 00:00.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                      <button
                        type="button"
                        className={classNames(
                          "w-full inline-flex justify-center rounded-md border border-transparent",
                          "shadow-sm px-4 py-2 bg-green-500 text-base font-medium",
                          "text-white hover:bg-green-700 focus:outline-none focus:ring-2",
                          "focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm",
                          "transition duration-500 ease-in-out transform"
                        )}
                        onClick={() => setModalIsOpen(false)}
                      >
                        OK
                      </button>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
