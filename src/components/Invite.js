import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import waitlist from "../assets/images/waitlist2.png";
export default function Invite({ setIsVisible }) {
  const [inviteData, setInviteData] = useState({
    first_name: "",
    email: "",
    mobile: "",
    amount: 0,
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
    setFormErrors(validate(inviteData));
    try {
      
      if(inviteData.email && inviteData.mobile && inviteData.first_name){
        await axios.post(`https://testing.zoth.in/api/v1/waitlist/addUser`, {
          name:inviteData.first_name,
          email:inviteData.email,
          phone:inviteData.mobile
        });
      }
      if (inviteData.email && inviteData.mobile) {
        await axios.post(`https://testing.zoth.in/api/v1/waitlist/sendEmail`, {
          email: inviteData.email,
        });
        await axios.post(`https://testing.zoth.in/api/v1/waitlist/sendSMS`, {
          phone : "+" + inviteData.mobile,
        });
        showMessage(1);
        setIsLoading(false);
        return;
      }else {
        setIsLoading(false);
        showMessage(2);
        
      }
    } catch (error) {
      console.log("error", error);
      showMessage(2);
      
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
    <div className="fixed top-0 left-0 right-0 flex justify-center items-center backdrop-blur z-50 w-full  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal h-full">
      <div className="relative w-full sm:w-2/3 h-full  md:h-auto">
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

          <div className="flex flex-col sm:flex-row justify-center items-center ">
            <div className="m-hidden" style={{ position: "relative" }}>
              <h3
                className="text-overlay p-6 text-center py-16"
                style={{ fontWeight: "500" }}
              >
                Invest in pre-leased Commercial <br /> Real Estate starting with{" "}
                <br />
                <span className="font-bold mt-4" style={{ fontSize: "40px" }}>
                  just 1 Lakh
                </span>
              </h3>
              <img
                src={waitlist}
                alt="invite"
                width="100"
                className="hidden sm:flex w-full h-full"
              />
            </div>

            {message == 1 ? (
              <div className="flex flex-col justify-center items-center w-1/2">
                <div className="text-4xl font-codec text-[#F3C74E]">
                  Thank you!
                </div>
                <div className="text-xl p-4 font-roobert">
                  Congratulations! You have been added to waitlist
                </div>
              </div>
            ) : message == 2 ? (
              <div className="flex flex-col justify-center items-center w-1/2">
                <div className="text-4xl font-codec text-[#F3C74E] p-2">
                Thank you!
                </div>
                <div className="text-xl p-4 font-roobert">
                Congratulations! You have been added to waitlist
                </div>
              </div>
            ) : (
              <div className="px-6 py-6 lg:px-8 w-full sm:w-1/2 mt-4">
                <h3 className="mb-4 text-3xl font-semibold  text-white leading-normal text-[#007AFF]">
                  Join the Waitlist to earn an IRR of 12%.
                </h3>

                <p className="my-4 mt-4">
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
                <p className="my-4"> ✅ 100% higher returns than FD</p>
                <p className="my-4">
                  ✅ Generate passive income with monthly repayments
                </p>
                <form className="space-y-6" style={{ marginTop: "30px" }}>
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
                        Enter Your Phone no
                      </label>
                      {/* <input
                        type="mobile"
                        name="mobile"
                        id="mobile"
                        className=" border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#202020] border-gray-700 placeholder-gray-400 text-white"
                        placeholder=""
                        required={true}
                        value={inviteData.mobile}
                        onChange={(e) => onChangeData(e)}
                      /> */}
                      <PhoneInput
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
                      />
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
                      Enter Amount you want to Invest
                    </label>
                    <div className="flex space-x-2">
                      <button
                        type="button"
                        onClick={() => {
                          changeAmount(100);
                        }}
                        className=" h-[20px] bg-white rounded-full px-4 sm:px-6  text-[#007AFF] ring-2 focus:outline-none font-semibold  text-sm text-center hover:bg-gray-200 select:bg-[#007AFF] ring-[#007AFF] focus:bg-[#007AFF] focus:text-white"
                      >
                        1000
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          changeAmount(200);
                        }}
                        className=" h-[20px] bg-white rounded-full px-4 sm:px-6  text-[#007AFF] ring-2 focus:outline-none font-semibold  text-sm text-center hover:bg-gray-200 select:bg-[#007AFF] ring-[#007AFF] focus:bg-[#007AFF] focus:text-white"
                      >
                        3000
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          changeAmount(300);
                        }}
                        className=" h-[20px] bg-white rounded-full px-4 sm:px-6  text-[#007AFF] ring-2 focus:outline-none font-semibold  text-sm text-center hover:bg-gray-200 select:bg-[#007AFF] ring-[#007AFF] focus:bg-[#007AFF] focus:text-white"
                      >
                        5000
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          changeAmount(400);
                        }}
                        className=" h-[20px] bg-white rounded-full px-4 sm:px-6 text-[#007AFF] ring-2 focus:outline-none font-semibold  text-sm text-center hover:bg-gray-200 select:bg-[#007AFF] ring-[#007AFF] focus:bg-[#007AFF] focus:text-white"
                      >
                        10000+
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-center items-center">
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
                      <button
                        type="button"
                        onClick={invite}
                        className="w-1/2 bg-[#007AFF] rounded-sm px-4 py-4 mt-2 z-100 text-black font-bold ring-[1px] focus:outline-none   text-lg text-center hover:bg-gray-200 ring-white"
                      >
                        Submit
                      </button>
                    )}
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
