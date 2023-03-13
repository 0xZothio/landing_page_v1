import axios from "axios";
import React, { useState } from "react";
// import { toast } from "react-toastify";
// import PhoneInput from "react-phone-input-2";
// import waitlist from "../assets/images/waitlist.png";
import { useAccount, useDisconnect } from "wagmi";
import { ConnectKitButton } from "connectkit";
import { cashfreeOrder } from "../utils/cashfree.js";
import { FcInfo } from "react-icons/fc";

export default function Invite({ setIsVisible }) {
  const { address, isDisconnected, status } = useAccount();
  const { disconnect } = useDisconnect();
  const [inviteData, setInviteData] = useState({
    first_name: "",
    email: "",
    mobile: "",
    amount: 0,
    linkedin: "",
    address: address ? address : "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, showMessage] = useState(0);

  const onChangeData = async (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setInviteData({ ...inviteData, [name]: value });
  };

  const changeAmount = (num) => {
    setInviteData({ ...inviteData, amount: num });
  };

  const invite = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    let errorData = await validate(inviteData);
    console.log("errorData", errorData);
    setFormErrors({ ...errorData });

    console.log("invite form errors", formErrors);
    console.log("errorData length", Object.keys(errorData).length);

    try {
      // if (
      //   formErrors.first_name ||
      //   formErrors.email ||
      //   formErrors.mobile ||
      //   Object.keys(errorData).length !== 0
      // ) {
      //   console.log("form errors", formErrors);
      //   return;
      // }

      if (
        Object.keys(errorData).length === 0 &&
        inviteData.email &&
        inviteData.mobile &&
        inviteData.first_name
      ) {
        let data = await axios.post(
          `https://backend.zoth.io/waitlist/createUser`,
          {
            name: inviteData.first_name,
            email: inviteData.email,
            phone: inviteData.mobile.toString(),
            amount: inviteData.amount.toString(),
            walletAddress: inviteData.address,
          },
          {
            headers: {
              authorization: "eogneqonre398432985823bn5kj32n5",
            },
          }
        );

        console.log("res data", data);

        if (data.status === 200) {
          showMessage(1);
          disconnect();
        }
      }
      // if (inviteData.email && inviteData.mobile) {
      //   await axios.post(
      //     `https://backend.zoth.io/api/v1/waitlist/sendEmail`,
      //     {
      //       headers: {
      //         authorization: "eogneqonre398432985823bn5kj32n5",
      //       },
      //     },
      //     {
      //       email: inviteData.email,
      //     }
      //   );
      //   await axios.post(
      //     `https://backend.zoth.io/api/v1/waitlist/sendSMS`,
      //     {
      //       headers: {
      //         authorization: "eogneqonre398432985823bn5kj32n5",
      //       },
      //     },
      //     {
      //       phone: "+91" + inviteData.mobile,
      //     }
      //   );
      //   // showMessage(3);
      //   // showMessage(4);
      //   // showMessage(5);
      //   setIsLoading(false);
      // }
    } catch (error) {
      console.log("res error", error);
      if (error.response.status === 303) {
        setFormErrors({ email: "Email Already Exist" });
      }

      if (error.response.status === 304) {
        setFormErrors({ mobile: "Mobile Already Exist" });
      }
      setIsLoading(false);

      // showMessage(2);
    }
  };

  // validation
  const validate = (values) => {
    const errors = {};
    var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    var numFormat = /[0-9]/g;
    if (!values.first_name) {
      errors.first_name = "* Name is required";
    }

    if (values.first_name && values.first_name.match(format) ? true : false) {
      errors.first_name = "* Special characters are not allowed ";
    }

    if (
      values.first_name && values.first_name.match(numFormat) ? true : false
    ) {
      errors.first_name = "* Numbers are not allowed ";
    }

    if (!values.email) {
      errors.email = "* Email is required";
    }

    if (!values.mobile) {
      errors.mobile = "* Phone is required";
    }
    if (values.mobile && values.mobile.match(format) ? true : false) {
      errors.mobile = "* Special characters are not allowed ";
    }

    if (values.mobile && values.mobile.length !== 10) {
      errors.mobile = "* Phone should be 10 digits";
    }

    console.log("errors", errors);
    setIsLoading(false);
    return errors;
  };

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center items-center backdrop-blur z-50 w-full  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal h-full">
      <div className="relative w-full justify-center flex   h-full  md:h-auto">
        <div className="relative sm:w-1/2 flex justify-center rounded shadow bg-[#171717]">
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

          {message == 1 ? (
            <div className="flex flex-col sm:flex-row justify-center items-center ">
              <img
                src="invite.png"
                alt="invite"
                className="hidden sm:flex sm:w-1/2 "
              />
              <div className="flex flex-col justify-center items-center w-1/2 sm:w-full  py-4">
                <div className="text-4xl font-codec text-[#F3C74E] p-2">
                  Thank you!
                </div>
                <div className="text-xl p-1 sm:mx-4 font-roobert ">
                  Congratulations! You have been added to waitlist
                </div>
              </div>
            </div>
          ) : message == 2 ? (
            <div className="flex flex-col justify-center items-center w-full">
              <img
                src="invite.png"
                alt="invite"
                className="hidden sm:flex w-[485px] h-[585px]"
              />
              <div className="text-4xl font-codec text-[#F3C74E] p-2">
                Thank you!
              </div>
              <div className="text-xl sm:p-4 font-roobert">
                You have already waitlisted!
              </div>
            </div>
          ) : message == 3 ? (
            <div className="flex flex-col w-full">
              <div className="flex justify-center">
                <img
                  src="coupon.png"
                  alt="coupon"
                  className="sm:flex p-8 sm:w-[700px] sm:h-[400px] sm:px-10 sm:py-10"
                />
              </div>
              <div className="flex flex-row justify-center items-center mb-10">
                {/* <div className="underline mr-14 sm:mr-24 text-gray-200 cursor-pointer">
                 <p onClick={()=>{showMessage(4)}}>No Thanks</p> 
                </div> */}
                <button
                  type="button"
                  onClick={cashfreeOrder}
                  className="bg-[#007AFF] rounded-lg px-10 py-2 z-100 text-white font-bold  focus:outline-none   text-lg text-center ring-gray-300"
                >
                  Pay Now
                </button>
              </div>
            </div>
          ) : message == 4 ? (
            <div className="flex flex-col justify-center items-center">
              <div className="flex justify-center">
                <img src="success.png" alt="coupon" className="w-72 h-72" />
              </div>
              <div className="font-bold p-2 text-4xl tracking-wide text-[#007AFF]">
                Congrats!
              </div>
              <div className="p-8 text-lg">
                You Have Successfully Joined The Waitlist.
              </div>
            </div>
          ) : message == 5 ? (
            <div className="flex flex-col justify-center items-center">
              <div className="flex justify-center">
                <img src="success.png" alt="coupon" className="w-72 h-72" />
              </div>
              <div className="font-bold p-2 text-4xl tracking-wide text-[#007AFF]">
                Congrats!
              </div>
              <div className="p-4 text-lg">
                You Have Successfully Joined The Waitlist.
              </div>
              <div className="p-4 text-lg">
                Coupon Code :{" "}
                <span className="text-[#007AFF] font-bold">EZ0TH1423K</span>
              </div>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row justify-center items-center ">
              <div className="px-6 py-6 lg:px-8 w-full sm:w-full mt-4 h-full">
                <h3 className="mb-4 text-3xl font-bold  text-white leading-normal text-[#007AFF]">
                  Join The Waitlist To Earn An IRR Of Upto 22%
                </h3>

                <p className="my-2 mt-4">
                  <span className="bg-white">
                    {/* <svg
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
                    </svg> */}
                  </span>
                  <span> ✅ Secure asset-backed investment</span>
                </p>
                <p className="my-2"> ✅ 100% higher returns than FD</p>
                <p className="my-2">
                  ✅ Generate passive income with monthly repayments
                </p>
                <div className="space-y-6" style={{ marginTop: "30px" }}>
                  <div className="grid sm:grid-cols-2 gap-4">
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
                        className=" border  text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#202020] border-gray-700 placeholder-gray-400 text-white"
                        placeholder=""
                        required={true}
                        value={inviteData.first_name}
                        onChange={(e) => onChangeData(e)}
                      />
                      {formErrors.first_name ? (
                        <p className="text-sm text-red-500 ">
                          {formErrors.first_name}
                        </p>
                      ) : null}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm text-gray-300"
                      >
                        Enter Your Mobile no.
                      </label>
                      <input
                        type="mobile"
                        name="mobile"
                        id="mobile"
                        className=" border text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#202020] border-gray-700 placeholder-gray-400 text-white"
                        placeholder=""
                        required
                        value={inviteData.mobile}
                        onChange={(e) => onChangeData(e)}
                      />
                      {/* <PhoneInput
                        enableSearch={true}
                        type="number"
                        name="mobile"
                        id="mobile"
                        placeholder=""
                        country="in"
                        inputclassName="bg-[#202020] text-white w-full"
                        // dropdownclassName="bg-[#202020] text-white"
                        // style={{backgroundColor:"#202020"}}
                        inputStyle={{
                          color: "white ",
                          background: "#202020",
                          width: "100%",
                          border: "none",
                          hover: "none",
                          
                        }}
                        buttonStyle={{
                          color: "white !important",
                          background: "#202020",
                        }}
                        searchStyle={{
                          color: "white",
                          background: "#202020",
                        }}
                        containerStyle={{ background: "#202020" }}
                        dropdownStyle={{
                          background: "#202020",
                          color: "white !important",
                          hover: "none",
                        }}
                        // className="bg-[#202020] text-white"
                        required={true}
                        value={inviteData.mobile}
                        // handleOnChange={(value, data, e, formatted)=>{setInviteData({...inviteData, mobile:value})}}
                        onChange={(value) => {
                          setInviteData({ ...inviteData, mobile: value });
                        }}
                      /> */}
                      {/* {formErrors.mobile ? (
                        <p className="text-sm text-red-500 ">
                          {formErrors.mobile}
                        </p>
                      ) : null} */}
                      <p className="text-sm text-red-500 ">
                        {formErrors.mobile}
                      </p>
                    </div>
                  </div>
                  {/* <div>
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
                  </div> */}

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
                      className=" border text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#202020] border-gray-700 placeholder-gray-400 text-white"
                      placeholder=""
                      required
                      value={inviteData.email}
                      onChange={(e) => onChangeData(e)}
                    />
                    {formErrors.email ? (
                      <p className="text-sm text-red-500 ">
                        {formErrors.email}
                      </p>
                    ) : null}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm text-gray-300"
                    >
                      Enter Your Linkedin
                    </label>
                    <input
                      type="url"
                      name="linkedin"
                      id="linkedin"
                      className=" border text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#202020] border-gray-700 placeholder-gray-400 text-white"
                      placeholder=""
                      value={inviteData.linkedin}
                      onChange={(e) => onChangeData(e)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor=""
                      className="relative group w-full flex items-center mb-3 text-sm text-gray-300 capitalize w-full"
                    >
                      Enter the amount you would want to invest
                      {/* <span
                        className="m-2 text-lg w-full"
                        // data-te-toggle="tooltip"
                        // data-te-placement="top"
                        // title="This amount will not be charged or dedcuted from your account. This is only to collect your investment preference."
                      > */}
                      <span class=" mx-2 ">
                        <FcInfo />
                        <div class="absolute bottom-0 flex flex-col items-center hidden mb-6 group-hover:flex ">
                          <span class="relative z-10 p-2 text-xs leading-relaxed text-white whitespace-no-wrap bg-black shadow-lg">
                            This amount will not be charged or dedcuted from
                            your account. This is only to collect your
                            investment preference.
                          </span>
                          {/* <div class="w-3 h-3 -mt-2 rotate-45 bg-black"></div> */}
                        </div>
                      </span>
                      {/* </span> */}
                    </label>
                    <div className="flex space-x-2 mb-6">
                      <button
                        type="button"
                        onClick={() => {
                          changeAmount(10000);
                        }}
                        className=" bg-white rounded-full px-4 py-1  text-[#007AFF] ring-2 focus:outline-none font-semibold  text-sm text-center hover:bg-gray-200 select:bg-[#007AFF] ring-[#007AFF] focus:bg-[#007AFF] focus:text-white"
                      >
                        10000
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          changeAmount(15000);
                        }}
                        className=" bg-white rounded-full px-4 py-1  text-[#007AFF] ring-2 focus:outline-none font-semibold  text-sm text-center hover:bg-gray-200 select:bg-[#007AFF] ring-[#007AFF] focus:bg-[#007AFF] focus:text-white"
                      >
                        15000
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          changeAmount(20000);
                        }}
                        className=" bg-white rounded-full px-4 py-1  text-[#007AFF] ring-2 focus:outline-none font-semibold  text-sm text-center hover:bg-gray-200 select:bg-[#007AFF] ring-[#007AFF] focus:bg-[#007AFF] focus:text-white"
                      >
                        20000
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          changeAmount(25000);
                        }}
                        className=" bg-white rounded-full px-4 py-1 text-[#007AFF] ring-2 focus:outline-none font-semibold  text-sm text-center hover:bg-gray-200 select:bg-[#007AFF] ring-[#007AFF] focus:bg-[#007AFF] focus:text-white"
                      >
                        25000+
                      </button>
                    </div>
                    <div className="mb-3">
                      <ConnectKitButton />
                    </div>
                  </div>

                  <div className="flex justify-center items-center flex-col">
                    {isLoading ? (
                      <button
                        type="button"
                        className="w-full bg-white rounded-full px-4 py-4 mt-2 z-100 text-black font-bold focus:ring-4 focus:outline-none   text-lg text-center hover:bg-gray-200 focus:ring-gary-500"
                      >
                        <div className="flex items-center justify-center ">
                          <div className="w-4 h-4 border-b-2 border-gray-900 rounded-full animate-spin"></div>
                        </div>
                      </button>
                    ) : (
                      <>
                        <button
                          type="button"
                          onClick={invite}
                          className="w-1/2 mt-4 bg-[#007AFF] rounded-lg px-2 py-2 z-100 text-white font-bold ring-[1px] focus:outline-none   text-lg text-center hover:bg-gray-200 hover:text-black ring-gray-300"
                        >
                          Submit Form
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
