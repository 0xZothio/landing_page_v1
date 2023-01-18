import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import logo from "../assets/images/newlogo.png";
import { FiAlignJustify } from "react-icons/fi";
import {motion} from 'framer-motion';
import { navVariants } from "../utils/motion";
import Scroll from "react-scroll";
// const navigation = [
//   { name: "About", href: "#" },
//   { name: "How it works", href: "#" },
//   { name: "Blog", href: "#" },
//   { name: "Contact", href: "#" },
// ];

const Navbar = ({setIsVisible}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  

  return (
    <div className="bg-black text-white z-50 relative">
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className="flex h-9 items-center justify-between"
        aria-label="Global"
      >
        <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Zoth.io</span>
            <img className="h-8" src={logo} alt="" />
          </a>
        </div>
        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <FiAlignJustify className="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden md:flex md:justify-center md:gap-x-12 md:px-8">
          {/* {navigation.map((item) => ( */}
          <a href="#about"
            className="font-semibold hover:text-gray-100"
          >
            About
          </a>
          <a href="#" className="font-semibold hover:text-gray-100">
            How it Works
          </a>
          <a href="#" className="font-semibold hover:text-gray-100">
            Blog
          </a>
          <a href="#contact" className="font-semibold hover:text-gray-100">
            Contact
          </a>
          {/* ))} */}
        </div>
        <div className="hidden md:flex md:min-w-0 md:flex-1 md:justify-end md:gap-x-6 px-20">
          {/* <a href="#" className="font-semibold hover:text-gray-400">
            Log in
          </a> */}
          <button
            className="inline-block rounded-full px-3 text-base font-semibold text-white shadow-sm ring-1 ring-white hover:ring-white"
            onClick={() => setIsVisible(true)}
          >
            Get Exclusive Invite{" "}
          </button>
        </div>
      </motion.nav>
      {/* <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
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
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <FiAlignJustify className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 hover:bg-white hover:text-black"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6 space-y-2">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 hover:bg-white hover:text-black"
                >
                  Log in
                </a>
                <a
                  href="#"
                  className="inline-block rounded-full px-3 text-base font-semibold text-white shadow-sm ring-1 ring-white hover:ring-white"
                >
                  Get Exclusive Invite{" "}
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog> */}
    </div>
  );
};

export default Navbar;
