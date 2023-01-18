import axios from "axios";
import React, { useState } from "react";
import { toast } from 'react-toastify';
export default function Invite({ setIsVisible }) {
  
  const [inviteData, setInviteData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
  });

  const onChangeData = async (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setInviteData({ ...inviteData, [name]: value });
  };

  const invite = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(
        `https://script.google.com/macros/s/AKfycbzx9JNec48UWX2QQr25I5WkLr7WnyszdcLq0nMaTFLe4-lmjeIv25AUS3T6B3YN30Gb/exec?first_name=${inviteData.first_name}&last_name=${inviteData.last_name}&mobile=${inviteData.mobile}&email=${inviteData.email}&function=subscribe`
      );
      if (res.status === 200) {
        console.log("invite success");
        console.log(res);
        toast.success("Go Ahead !!! Sucess",{
           theme:"dark"
        });
        setIsVisible(false);
        return;
      }else{
        toast.error("Go Ahead !!! Error",{
          theme:"dark"
       });
      }
    } catch (error) {
      console.log("error", error);
      toast.error("Go Ahead !!! Error",{
        theme:"dark"
     });
    }
  };

  return (
    <div
      id="authentication-modal"
      className="fixed top-0 left-0 right-0 flex justify-center items-center bg-white/50 z-50 w-full  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
    >
      <div className="relative w-full h-full max-w-md md:h-auto">
        <div className="relative  rounded-lg shadow bg-gray-700">
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

          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-2xl font-semibold  text-white">
              Get Your Exclusive Invite
            </h3>
            <form className="space-y-6">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium  text-white"
                  >
                    Your First Name
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    className=" border  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                    placeholder="First name"
                    required=""
                    value={inviteData.first_name}
                    onChange={(e) => onChangeData(e)}
                  />
                </div>

                <div>
                  <label
                    htmlFor="last_name"
                    className="block mb-2 text-sm font-medium  text-white"
                  >
                    Your Last Name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    className=" border  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                    placeholder="Last name"
                    required=""
                    value={inviteData.last_name}
                    onChange={(e) => onChangeData(e)}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className=" border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                  placeholder="name@company.com"
                  required=""
                  value={inviteData.email}
                  onChange={(e) => onChangeData(e)}
                />
              </div>

              <div>
                <label
                  htmlFor="mobile"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Your Mobile Number
                </label>
                <input
                  type="number"
                  name="mobile"
                  id="mobile"
                  placeholder="Enter mobile"
                  className=" border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                  required=""
                  max="10"
                  min="10"
                  value={inviteData.mobile}
                  onChange={(e) => onChangeData(e)}
                />
              </div>

              <button
                type="button"
                onClick={invite}
                className="w-full text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              >
                Get Invite
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
