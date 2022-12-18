import { Fragment } from "react";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import {
  QuestionMarkCircleIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { useRef } from "react";
import Image from "next/image";
import classNames from "@/utils/classNames";

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
    href: "https://hedalen.no/foreninger/hedalen-loypelag/",
  },
];

const Navbar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  const handleModalIsOpen = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <Disclosure as="nav" className="text-center font-mono">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative mt-2 mb-2 flex items-center justify-evenly">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-evenly rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-evenly sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  {/* Logo goes here */}
                  <a href={"/"}>
                    <Image
                      src="/img/logo.png"
                      alt="Logo"
                      width={50}
                      height={50}
                      className={classNames(
                        "w-10 transform transition duration-500 ease-in-out",
                        "hover:scale-101 hover:-translate-y-1"
                      )}
                    />
                  </a>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex items-center space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        rel="noopener noreferrer"
                        target="_blank"
                        className={classNames(
                          "hover:bg-gray-200",
                          "rounded-md px-3 py-2 text-sm font-medium",
                          "hover:scale-101 transform transition duration-500 ease-in-out hover:-translate-y-1",
                          "hover:shadow-md"
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                    <QuestionMarkCircleIcon
                      className={classNames(
                        "h-8 w-8 text-blue-400",
                        "transform transition duration-500 ease-in-out",
                        "cursor-pointer hover:-translate-y-1"
                      )}
                      onClick={handleModalIsOpen}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="flex flex-col items-center justify-center space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  className={classNames(
                    "hover:bg-gray-200",
                    "block rounded-md px-3 py-2 text-base font-medium",
                    "hover:scale-101 transform transition duration-500 ease-in-out hover:-translate-y-1",
                    "hover:shadow-md"
                  )}
                  rel="noreferrer"
                >
                  {item.name}
                </a>
              ))}
              <QuestionMarkCircleIcon
                className={classNames(
                  "h-8 w-8 text-blue-400",
                  "transform transition duration-500 ease-in-out",
                  "cursor-pointer hover:-translate-y-1"
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
              className="fixed inset-0 z-10 overflow-y-auto"
              initialFocus={cancelButtonRef}
              open={modalIsOpen}
              onClose={setModalIsOpen}
            >
              <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
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
                  className="hidden sm:inline-block sm:h-screen sm:align-middle"
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
                  <div className="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                          <Dialog.Title
                            as="h2"
                            className="py-6 text-4xl font-medium leading-6 text-gray-900"
                          >
                            Mer informasjon
                          </Dialog.Title>
                          <div className="mt-2 p-4 text-left">
                            <ul className="text-md list-disc leading-8 tracking-wide text-gray-700">
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
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        className={classNames(
                          "inline-flex w-full justify-center rounded-md border border-transparent",
                          "bg-green-500 px-4 py-2 text-base font-medium shadow-sm",
                          "text-white hover:bg-green-700 focus:outline-none focus:ring-2",
                          "focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm",
                          "transform transition duration-500 ease-in-out"
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
