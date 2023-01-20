import "../styles/styles.css";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";

const Mynews = () => {
  const [subscribeData, setSubscribeData] = useState({
    email: "",
  });

  const onChangeData = async (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setSubscribeData({ ...subscribeData, [name]: value });
  };

  const subscribe = async (e) => {
    e.preventDefault();
    console.log("news letter", subscribeData);
    // try {
    //   let res = await axios.post(
    //     `https://script.google.com/macros/s/AKfycbzjhVDfu39nvYYrsj0XHnZMkP5qDqDZhDoQtuy_vMpjPZXcry_gfFiT7-xT85I4CL8x/exec?first_name=${subscribeData.first_name}&last_name=${subscribeData.last_name}&mobile=${subscribeData.mobile}&email=${subscribeData.email}&function=subscribe`
    //   );
    //   if (res.status === 200) {
    //     console.log("newsletter success")
    //     return;
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div className="py-6 px-6 mx-auto bg-black">
      <motion.section
        variants={fadeIn("up", "tween", 0.3, 1)}
        initial="hidden"
        whileInView="show"
        className="mb-12 text-gray-800 text-center lg:text-left w-3/4 mx-auto border-solid border-2 rounded-xl"
      >
        <div className="flex flex-wrap justify-center p-6 rounded-xl shadow text-white grad">
          <div className="w-full px-3">
            <div className="grid lg:grid-cols-2 gap-x-2">
              <div className="mb-10 lg:mb-0">
                <p className="text-2xl font-semibold tracking-tight sm:text-2xl">
                  Join our mailing list
                </p>
                <p className="max-w-3xl mt-2 text-base">
                  Be the first to hear about news offerings, relevant updates
                  and other news from zoth
                </p>
              </div>
              <div className="mb-6 md:mb-0">
                <div className="flex flex-row mt-6">
                  <input
                    type="text"
                    className="form-control block w-8/12 p-1 mx-auto text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Enter your email"
                    name="email"
                    onChange={(e) => onChangeData(e)}
                    value={subscribeData.email}
                  />

                  <span className="absolute  mt-1 right-[23%] text-black cursor-pointer" onClick={subscribe}>
                    <AiOutlineArrowRight size={25} />
                  </span>

                  {/* lg:left-96 */}

                  {/* <button
                      type="submit"
                      className="inline-block py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Subscribe
                    </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Mynews;
