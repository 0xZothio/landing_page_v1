import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export const PaymentPopup = () => {
  const [success, setSuccess] = useState(true);
  const [loader, setLoader] = useState(false);
  let { order_id, customer_id, order_amount } = useParams();

  useEffect(() => {
    setLoader(true);

    axios
      .get(
        `http://localhost:8080/payment/cashfreeCallback?order_id=${order_id}&customer_id=${customer_id}&order_amount=${order_amount}&payment_gateway=cashfree`
      )
      .then((res) => {
        console.log("pay res", res);
        const order_status = res.data.order_status;
        if (order_status === "PAID") {
          setSuccess(true);
          setLoader(false);
        } else {
          setSuccess(false);
          setLoader(false);
        }
      })
      .catch((err) => {
        console.log("Payment Error: ", err);
      });
  }, []);

  return (
    <>
      {loader ? (
        <div class="flex items-center justify-center h-screen">
         <img src="/loader.gif" alt="loading" />
         
        </div>
      ) : (
        <div className="fixed top-0 left-0 right-0 bg-[#171717]/80 flex justify-center items-center backdrop-blur z-50 w-full h-full  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
          <div className="relative sm:w-1/2 sm:h-full h-full md:h-auto bg-[#171717] rounded-xl shadow">
            <div className="relative  rounded shadow ">
              <Link to="/">
                <button
                  type="button"
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white"
                  // onClick={() => setIsVisible(false)}
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
              </Link>

              {success ? (
                <div className="flex flex-col justify-center items-center">
                  <div className="flex justify-center">
                    <img
                      src="/success.png"
                      alt="coupon"
                      className="w-72 h-72"
                    />
                  </div>
                  <div className="font-bold p-2 text-4xl tracking-wide text-[#007AFF]">
                    Congrats!
                  </div>
                  <div className="p-4 text-lg">
                    Coupon Code :{" "}
                    <span className="text-[#007AFF] font-bold border border-1 border-primary px-3 py-2 rounded">
                      EZ0TH1423K
                    </span>
                  </div>
                  <div className="p-4 text-lg m-4">
                    You Have Successfully Joined The Waitlist.
                  </div>
                </div>
              ) : (
                <div className="flex flex-col justify-center items-center ">
                  <div className="flex justify-center m-8">
                    <img
                      src="/failure.png"
                      alt="coupon"
                      className=" w-52 h-52"
                    />
                  </div>
                  <div className="font-bold p-2 text-4xl tracking-wide text-[#007AFF]">
                    Payment Failed!
                  </div>

                  <div className="p-4 text-lg mb-2">Please Try Again.</div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
