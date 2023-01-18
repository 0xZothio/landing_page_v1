import React from "react";

export default function Invite({ setIsVisible }) {
  return (
    <div
      id="authentication-modal"
      className="fixed top-0 left-0 right-0 z-50 w-full  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
    >
      <div className="relative w-full h-full max-w-md md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            onClick={() => setIsVisible(false)}
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>

          {/* form */}

          <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
            <form>
              <div class="grid grid-cols-2 gap-4">
                <div class="form-group mb-6">
                  <input
                    type="text"
                    class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none"
                    id="exampleInput123"
                    aria-describedby="emailHelp123"
                    placeholder="First name"
                  />
                </div>

                <div class="form-group mb-6">
                  <input
                    type="text"
                    class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none"
                    id="exampleInput124"
                    aria-describedby="emailHelp124"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div class="form-group mb-6">
                <input
                  type="email"
                  class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none"
                  id="exampleInput125"
                  placeholder="Email address"
                />
              </div>

              <div class="form-group mb-6">
                <input
                  type="text"
                  class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none"
                  id="exampleInput126"
                  placeholder="mobile"
                />
              </div>

              <div class="mx-auto flex justify-center items-center">
                <button
                  type="submit"
                  class="
      w-1/2
      px-6
      py-2.5
      bg-black
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded-lg
      shadow-md
      hover:bg-gray-800 hover:shadow-lg
      focus:bg-gray-800 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-gray-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
                >
                  Get Invite
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
