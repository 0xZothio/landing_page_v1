import Navbar from "./Navbar";
import { FaTelegramPlane, FaDiscord } from "react-icons/fa";

const Hero=()=> {

  return (
    <div className="isolate bg-black text-white">
      <div className="px-6 pt-6 lg:px-8">
        <Navbar />
      </div>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-0 pb-32 sm:pt-32 sm:pb-40">
            <div>
              <div>
                <h1 className="text-4xl font-codec font-bold leading-8 sm:text-center sm:text-6xl">
                  A Revolutionary New Age Investment Platform
                </h1>
                <p className="mt-6 text-lg leading-8 sm:text-center">
                  Join the Zoth Club and let your investments work for you
                </p>
                <div className="flex gap-x-4 mt-8 sm:justify-center">
                  <a
                    href="#"
                    className="inline-block rounded-full px-4 py-2 text-base font-semibold leading-7 text-black shadow-sm bg-black h-8/12"
                  >
                    <div className="bg-white rounded-full px-4 py-2 mt-2">
                      Get Exclusive Invite{" "}
                    </div>
                  </a>

                  <div class=" eft-1/2 -ml-0.5 w-0.5 h-100 bg-gray-600"></div>
                  <div>
                    <p className=" text-md mx-4 sm:text-center">
                      Join Our Community
                    </p>
                    <ul className="flex gap-6 mx-8 mt-2">
                      <li>
                        <a
                          href="/"
                          rel="noreferrer"
                          target="_blank"
                          className="text-gray-700 transition hover:opacity-75"
                        >
                          <span className="sr-only">Telegram</span>
                          <FaTelegramPlane size={40} color="white" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          rel="noreferrer"
                          target="_blank"
                          className="text-gray-700 transition hover:opacity-75"
                        >
                          <span className="sr-only">Linkeldin</span>
                          <FaDiscord size={40} color="white" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-8 sm:text-center">
                  Accept your invite to earn exclusive Zoth Coins
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Hero;