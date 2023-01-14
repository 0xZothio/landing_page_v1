import React from "react";

function Testimonials() {
  return (
    <div className="bg-black text-white w-full flex flex-col items-center justify-center h-full mt-[80px] py-10">
        <div className="text-[55px] text-center sm:text-[100px] font-codec font-extrabold">Testimonials</div>

        <div className="flex flex-col sm:flex-row max-w-7xl mx-auto gap-8 group my-10">
          <div className="bg-white/10 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 cursor-pointer p-8 rounded-xl ">
            <img src="/quote.svg" alt="" />

            <p className="text-sm leading-7 my-3 font-light opacity-50">
              Zoth is the ideal platform for CRE investments because of its
              substantial CAPEX and high entry barrier. The team is very helpful
              in answering all the questions. Zoth has been extremely helpful in
              addressing concerns like liquidity options, processes and
              timelines,etc. The platform is simple to use and makes investing
              in CRE simple. Zoth is a great choice for CRE investments.
            </p>

            <div className="border-t-2 border-gray-500 m-4"></div>

            <div class="inline-flex items-center mt-2">
              <img
                alt="testimonial"
                src="/testimonial.png"
                class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
              />
              <span class="flex-grow flex flex-col pl-4">
                <span class="title-font font-medium text-white">
                  Namrata Rajesh
                </span>
                <span class="text-gray-500 text-sm">
                  FD, RD, Stocks, MF and crypto.
                </span>
              </span>
            </div>
          </div>

          <div className="bg-white/10 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 cursor-pointer p-8 rounded-xl ">
            <img src="/quote.svg" alt="" />

            <p className="text-sm leading-7 my-3 font-light opacity-50">
              Zoth is the ideal platform for CRE investments because of its
              substantial CAPEX and high entry barrier. The team is very helpful
              in answering all the questions. Zoth has been extremely helpful in
              addressing concerns like liquidity options, processes and
              timelines,etc. The platform is simple to use and makes investing
              in CRE simple. Zoth is a great choice for CRE investments.
            </p>

            <div className="border-t-2 border-gray-500 m-4"></div>

            <div class="inline-flex items-center mt-2">
              <img
                alt="testimonial"
                src="/testimonial.png"
                class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
              />
              <span class="flex-grow flex flex-col pl-4">
                <span class="title-font font-medium text-white">
                  Namrata Rajesh
                </span>
                <span class="text-gray-500 text-sm">
                  FD, RD, Stocks, MF and crypto.
                </span>
              </span>
            </div>
            
          </div>

          <div className="bg-white/10 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 cursor-pointer p-8 rounded-xl ">
            <img src="/quote.svg" alt="" />

            <p className="text-sm leading-7 my-3 font-light opacity-50">
              Zoth is the ideal platform for CRE investments because of its
              substantial CAPEX and high entry barrier. The team is very helpful
              in answering all the questions. Zoth has been extremely helpful in
              addressing concerns like liquidity options, processes and
              timelines,etc. The platform is simple to use and makes investing
              in CRE simple. Zoth is a great choice for CRE investments.
            </p>

            <div className="border-t-2 border-gray-500 m-4"></div>

            <div class="inline-flex items-center mt-2">
              <img
                alt="testimonial"
                src="/testimonial.png"
                class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
              />
              <span class="flex-grow flex flex-col pl-4">
                <span class="title-font font-medium text-white">
                  Namrata Rajesh
                </span>
                <span class="text-gray-500 text-sm">
                  FD, RD, Stocks, MF and crypto.
                </span>
              </span>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Testimonials;
