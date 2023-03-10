import React, { useState, Fragment } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import logo from "../assets/images/newlogo.png";
import { FiAlignJustify } from "react-icons/fi";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import { Link } from "react-router-dom";
import { FaInstagramSquare, FaLinkedin, FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";

const navigation = [
  { name: "About", href: "#about" },
  { name: "How it works", href: "#howItWorks" },
  { name: "Contact", href: "#contact" },
  { name: "Institutions", href: "/institutions" },
];

const Navbar = ({ setIsVisible }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [section, setSection] = useState(false);

  // const windowheight = 1 * window.innerHeight;
  // const element = document.documentElement;
  // const handleScroll = (length) => {
  //   element.scrollTo(0, length);
  // };

  // const handleAboutScroll = (length) => {
  //   element.scrollTo(0, length);
  //   setTimeout(() => {
  //     element.scrollTo(0, length + windowheight);
  //   }, 100);

  // const contactform = document.querySelector("about");
  // contactform.scrollIntoView({ behavior: "smooth" });
  // };
  // const handleContactScroll = (length) => {
  //   element.scrollTo(0, length);
  //   setTimeout(() => {
  //     element.scrollTo(0, length+7.3*windowheight);
  //   }, 100);
  //   // const contactform = document.querySelector("about");
  //   // contactform.scrollIntoView({ behavior: "smooth" });
  // };
  // function classNames(...classes) {
  //   return classes.filter(Boolean).join(" ");
  // }

  return (
    <div className={"bg-black text-white z-50 pt-8 sm:pt-4 relative mt-6"}>
      {console.log(section)}
      <div className="fixed top-0 left-0 shadow-lg bg-gradient-to-r from-[#D44FE9] to-[#3B84D2] z-50 w-full text-center px-4">
        <h5
          className="text-white capitalize text-xs sm:text-[1rem] font-semibold cursor-pointer p-2 z-50"
          onClick={() => setIsVisible(true)}
        >
          {/* Launching soon! An Alternative Investment Opportunity with just ???1 Lakh. <span className="font-semibold"> Join the Waitlist! </span> */}
          Launching Soon! An Alternative Asset Investment Opportunity with just
          ??? 9,999. Join the Waitlist!
        </h5>
      </div>
      {!mobileMenuOpen && (
        <motion.nav
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          className="flex h-9 items-center justify-between"
          aria-label="Global"
        >
          <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Zoth.io</span>
              <img className="h-8" src="/logo.png" alt="" />
            </a>
          </div>
          <div className="flex md:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <FiAlignJustify
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="hidden md:flex md:justify-center md:items-center md:gap-x-12 md:px-8 md:ml-24">
            {/* {navigation.map((item) => ( */}
            <a
              href="#about"
              className="font-semibold hover:text-gray-100"
              onClick={() => setSection(true)}
            >
              About
            </a>
            <a
              href="#howItWorks"
              className="font-semibold hover:text-gray-100"
              onClick={() => setSection(true)}
            >
              How it Works
            </a>

            <Link
              to="/institutions"
              className="font-semibold hover:text-gray-100"
              // onClick={() => setSection(true)}
            >
              Institutions{" "}
              {/* <span className="inline-flex text-sm px-2"> (Coming Soon) </span> */}
            </Link>

            <a href="#contact" className="font-semibold hover:text-gray-100">
              Contact
            </a>

            {/* Solution dropdown */}
            {/* <div className="relative inline-block text-left">
              <div>
                <button className="peer inline-flex w-full justify-center font-semibold hover:text-gray-100">
                  Solutions <span className="inline-flex text-sm px-2"> (Coming Soon) </span>
                </button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                  show={true}
                >
                  <div className="hidden peer-hover:flex absolute right-0 z-10 w-56 mx-auto origin-top-right pt-2 bg-black text-white shadow-lg hover:flex flex-col">
                    <div className="mt-2 rounded-md bg-black text-white ring-1 ring-gray-100 focus:outline-none hover:flex flex-col">
                      <div>
                        <a
                          href="#"
                          className="block rounded-lg py-2 px-3 text-base font-semibold leading-7"
                        >
                          For Institutions{" "}
                        </a>
                      </div>
                      <div>
                        <a
                          href="#"
                          className="block rounded-lg py-2 px-3 text-base font-semibold leading-7"
                        >
                          Zoth Token{" "}
                        </a>
                      </div>
                      <div>
                        <a
                          href="#"
                          className="block rounded-lg py-2 px-3 text-base font-semibold leading-7"
                        >
                          Zoth DeFi{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </Transition>
              </div>
            </div> */}
          </div>
          <div className="hidden md:flex md:min-w-0 md:flex-1 md:justify-end md:gap-x-6 px-20">
            {/* <button
              className="inline-block rounded-full px-6 py-1 text-base font-semibold text-white hover:text-black hover:bg-white shadow-sm ring-1 ring-white hover:ring-white"
              onClick={() => setIsVisible(true)}
            >
              Join Waitlist{" "}
            </button> */}
            {/* <div className="hidden sm:block fixed z-50 bottom-20 right-10 icon-bar  bg-gray-900 rounded-3xl text-black"> */}
            <ul className="flex gap-6 my-2 py-2 mx-auto lg:mx-0 justify-center items-center lg:justify-start px-8">
              <li>
                <a
                  href="https://twitter.com/zothdotio"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75 rounded-full"
                >
                  <span className="sr-only">Twitter</span>
                  <AiFillTwitterCircle
                    size={30}
                    className="icon"
                    color="white"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/zoth.io/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75 rounded-full"
                >
                  <span className="sr-only">Instagram</span>
                  <FaInstagramSquare size={30} className="icon" color="white" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/zoth-io/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75 rounded-full"
                >
                  <span className="sr-only">LinkeldIn</span>
                  <FaLinkedin size={30} className="icon" color="white" />
                </a>
              </li>
              <li>
                <a
                  href="https://telegram.me/+nFUrC_I1hA1iNWU9"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Telegram</span>
                  <FaTelegramPlane size={30} className="icon" color="white" />
                </a>
              </li>
              {/* <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75 rounded-full"
                >
                  <span className="sr-only">Facebook</span>
                  <FaFacebook size={20} color="white" />
                </a>
              </li> */}
            </ul>
            {/* </div> */}
          </div>
        </motion.nav>
      )}
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Dialog.Panel
          focus="true"
          className="fixed inset-0 z-10 overflow-y-auto bg-black text-white px-6 py-6 md:hidden"
        >
          <div className="flex h-9 items-center justify-between">
            <div className="flex">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Zoth</span>
                <img className="h-8" src={logo} alt="" />
              </a>
            </div>
            <div className="flex">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Close menu</span>
                <FiAlignJustify className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white-500/10">
              <div className="space-y-2 py-6 text-center">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => {
                      setMobileMenuOpen(!mobileMenuOpen);
                      setSection(true);
                    }}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 hover:bg-white hover:text-black"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              {/* <div className="py-6 space-y-2 text-center">
                <button
                  className="inline-block rounded-full px-3 py-2 text-base font-semibold text-white hover:text-black hover:bg-white shadow-sm ring-1 ring-white hover:ring-white"
                  onClick={() => setIsVisible(true)}
                >
                 Join Waitlist
                </button>
              </div> */}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default Navbar;
