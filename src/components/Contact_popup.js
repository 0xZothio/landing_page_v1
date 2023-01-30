import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function Contact_popup({ setIsVisible }) {
    const [inviteData, setInviteData] = useState({
      first_name: "",
      email: "",
      mobile: "",
    });

  const [formErrors, setFormErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, showMessage] = useState(false);

  const onChangeData = async (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setInviteData({ ...inviteData, [name]: value });
  };

  const invite = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFormErrors(validate(inviteData));

    try {
      let res = await axios.post(
        `https://script.google.com/macros/s/AKfycbz1wTUy2M-ChUqGgSVfAapfFT_ZXoreUU1N_PwWkSPaciNf0-sKK3FPjKDaRULNYG-Y1Q/exec?first_name=${inviteData.first_name}&last_name=${inviteData.last_name}&mobile=${inviteData.mobile}&email=${inviteData.email}&function=subscribe`
      );

      if (res.data.result === "success") {
        console.log("invite success");
        toast.success("Go Ahead !!! Sucess", {
          theme: "dark",
        });
        setIsLoading(false);
        // setIsVisible(false);
        showMessage(true);
        return;
      } else {
        setIsLoading(false);

        toast.error("Go Ahead !!! Error", {
          theme: "dark",
        });
      }
    } catch (error) {
      console.log("error", error);
      toast.error("Go Ahead !!! Error", {
        theme: "dark",
      });
    }
  };

  // validation
  const validate = (values) => {
    const errors = {};

      if (!values.first_name) {
        errors.name = "* Name is required";
      }

    if (!values.email) {
      errors.email = "* Email is required";
    }

    if (!values.mobile) {
      errors.mobile = "* Mobile no. is required";
    }

    return errors;
  };

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center items-center backdrop-blur z-50 w-full  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
      <div className="relative w-3/3 h-full  md:h-auto">
        <div className="relative  rounded shadow bg-[#171717]">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white"
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

          <div className="flex flex-col sm:flex-row justify-center items-center">
            <img
              src="invite.png"
              alt="invite"
              className="hidden sm:flex w-[485px] h-[585px]"
            />

            {message ? (
              <div className="flex flex-col justify-center items-center ">
                <div className="text-4xl font-codec text-[#F3C74E]">
                  Thank you!
                </div>
                <div className="text-xl p-4 font-roobert">
                  Our Team Will Contact You soon.
                </div>
              </div>
            ) : (
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-3xl font-semibold  text-white">
                  Contact Us
                </h3>

                <h3 className="text-1xl text-gray-300">
                  Our Team Will Contact You soon 🙂
                </h3>

                <form className="space-y-6 mt-10">
                  <div>
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-sm   text-gray-300"
                    >
                      Enter Your Name
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      className=" border  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#202020] border-gray-700 placeholder-gray-400 text-white"
                      placeholder=""
                      required={true}
                      value={inviteData.first_name}
                      onChange={(e) => onChangeData(e)}
                    />
                    <p className="text-sm text-red-500 ">{formErrors.name}</p>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm text-gray-300"
                    >
                      Enter Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className=" border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#202020] border-gray-700 placeholder-gray-400 text-white"
                      placeholder=""
                      required={true}
                      value={inviteData.email}
                      onChange={(e) => onChangeData(e)}
                    />
                    <p className="text-sm text-red-500 ">{formErrors.email}</p>
                  </div>

                  <div>
                    <label
                      htmlFor="mobile"
                      className="block mb-2 text-sm text-gray-300"
                    >
                      Enter Your Phone No.
                    </label>
                    <input
                      type="number"
                      name="mobile"
                      id="mobile"
                      placeholder=""
                      className=" border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#202020] border-gray-700 placeholder-gray-400 text-white"
                      required={true}
                      max="10"
                      min="10"
                      value={inviteData.mobile}
                      onChange={(e) => onChangeData(e)}
                    />
                    <p className="text-sm text-red-500 ">{formErrors.mobile}</p>
                  </div>

                  {isLoading ? (
                    <button
                      type="button"
                      className="w-full bg-white rounded-full px-4 py-4 mt-12 z-100 text-black font-bold focus:ring-4 focus:outline-none   text-lg text-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
                    >
                      <div class="flex items-center justify-center ">
                        <div class="w-4 h-4 border-b-2 border-gray-900 rounded-full animate-spin"></div>
                      </div>
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={invite}
                      className="w-full rounded-full px-4 py-4 mt-12 z-100 text-black font-bold focus:ring-4 focus:outline-none   text-lg text-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
                    >
                      Submit
                    </button>
                  )}
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
