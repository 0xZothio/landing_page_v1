import "../styles/styles.css";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';

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
    try {
      let res = await axios.post(
        `https://script.google.com/macros/s/AKfycbz1wTUy2M-ChUqGgSVfAapfFT_ZXoreUU1N_PwWkSPaciNf0-sKK3FPjKDaRULNYG-Y1Q/exec?email=${subscribeData.email}`
      );
      if (res.data.result === 'success') {
        console.log("subscribe success");
        console.log(res);
        toast.success("Go Ahead !!! Sucess",{
           theme:"dark"
        });
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
    <div className="py-6 px-6 mx-auto bg-black justify-center items-center ">
      <motion.section
        variants={fadeIn("up", "tween", 0.3, 1)}
        initial="hidden"
        whileInView="show"
        className="mb-12 text-gray-800 text-center lg:text-left w-3/4 mx-auto border-solid border-2 rounded-xl"
      >
        <div className="flex flex-wrap justify-center p-6 rounded-xl shadow text-white grad items-center">
          <div className="w-full px-3 justify-center items-center">
            <div className="grid lg:grid-cols-2 gap-x-2 justify-center items-center">
              <div className="mb-10 lg:mb-0 justify-center items-center">
                <p className="text-2xl font-semibold tracking-tight sm:text-2xl">
                  Join our mailing list
                </p>
                <p className="max-w-3xl mt-2 text-base">
                  Be the first to hear about news offerings, relevant updates
                  and other news from zoth
                </p>
              </div>
              <div className="mb-6 md:mb-0 ">
                <div className="flex flex-col sm:flex-row border-red-700 justify-center items-center">
                  <input
                    type="text"
                    className="form-control block p-2 text-base sm:mr-5 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Enter your email"
                    name="email"
                    onChange={(e) => onChangeData(e)}
                    value={subscribeData.email}
                  />
                
                  <button className="px-10 sm:px-4 py-1 sm:m-0 mt-3 z-100 btn text-white cursor-pointer border border-gray-50" onClick={subscribe}>
                  Submit
                  </button>

                  {/* lg:left-96 */}

                  
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
