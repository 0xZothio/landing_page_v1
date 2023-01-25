import logo from "../assets/images/newlogo.png";
import { FaInstagramSquare, FaLinkedin, FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import { footerVariants } from "../utils/motion";

const Footer = () => {
  return (
    <motion.footer
      id="contact"
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      aria-label="Site Footer"
      className="relative bg-black text-white"
    >
      <div className="container px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="flex flex-wrap text-center lg:text-left">
          <div className="w-full lg:w-5/12 px-4 ">
            <div className="flex justify-center items-center">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Zoth.io</span>
                <img className="h-8" src="logo.png" alt="" />
              </a>
            </div>
            <p className=" mt-4 text-center">Connect with us</p>
            <ul className="flex gap-2 mt-2 mx-auto lg:mx-0 justify-center items-center lg:justify-start w-6/12 lg:w-full">
              <li>
                <a
                  href="https://twitter.com/zothio"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75 rounded-full"
                >
                  <span className="sr-only">Twitter</span>
                  <AiFillTwitterCircle size={20} color="white" />
                </a>
              </li>
              {/* <li>
                <a
                  href="https://twitter.com/zothio"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75 rounded-full"
                >
                  <span className="sr-only">Instagram</span>
                  <FaInstagramSquare size={20} color="white" />
                </a>
              </li> */}
              <li>
                <a
                  href="https://www.linkedin.com/company/zoth-io/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75 rounded-full"
                >
                  <span className="sr-only">LinkeldIn</span>
                  <FaLinkedin size={20} color="white" />
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
          </div>
          <div className="w-full lg:w-7/12 px-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3 mt-8 lg:mt-0">
            <div className="pr-4">
              <p className="font-medium">Office Address</p>
              <nav aria-label="Footer Navigation - Company" className="mt-5">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a href="#" className=" transition hover:opacity-75">
                      119, 4th Cross, 2nd Main Rd, NGEF Layout, Sadanandanagar,
                      Bennigana Halli, Bengaluru, Karnataka 560038
                    </a>
                  </li>

                  {/* <li>
                    <a href="#" className="transition hover:opacity-75">
                      Meet the Team
                    </a>
                  </li>
                  <li>
                    <a href="#" className=" transition hover:opacity-75">
                      Accounts Review
                    </a>
                  </li> */}
                </ul>
              </nav>
              <p className="font-medium mt-8">Contact</p>
              <nav aria-label="Footer Navigation - Company" className="mt-5">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a href="mailto:contact@zoth.io" className=" transition hover:opacity-75">
                      Email: contact@zoth.io
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <p className="font-medium">Resources</p>
              <nav aria-label="Footer Navigation - Company" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a href="#howItWorks" className=" transition hover:opacity-75">
                      How it works?
                    </a>
                  </li>
                  <li>
                    <a href="https://zoth.notion.site/Risk-Disclosure-09fda36daa224ea286b3b96c2a735da4" target="_blank" className=" transition hover:opacity-75">
                      Risk Disclosure
                    </a>
                  </li>
                  <li>
                    <a href="#" className=" transition hover:opacity-75">
                      Lite Paper (Coming soon)
                    </a>
                  </li>
                  <li>
                    <a href="#" className=" transition hover:opacity-75">
                      Blog (Coming soon)
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <p className="font-medium">Company</p>
              <nav aria-label="Footer Navigation - Legal" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a href="https://zoth.notion.site/Work-at-Zoth-io-f4a20295a7564b619aab50624d798b0b" target="_blank" className=" transition hover:opacity-75">
                      Work with us
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div>
          <hr className="my-4 border-blueGray-300" />
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm">
              <a
                className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                href="https://zoth.notion.site/Privacy-Policy-256a0366ab6748a0bed9b0f336ecc6ef" target="_blank"
              >
                Privacy Policy
              </a>
              <span>{" | "}</span>
              <a
                className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                href="https://zoth.notion.site/Terms-of-Use-a4023cc1e3c14a6ebf905499fe3bb24e" target="_blank"
              >
                Terms of use
              </a>
            </p>
            <p className="mt-4 text-sm sm:order-first sm:mt-0">
              © 2023. Metaco. Pvt. Ltd.. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
