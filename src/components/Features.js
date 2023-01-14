import React from "react";

function Features() {
  return (
    <div className="my-[80px]">
      <div className="flex flex-col justify-center items-center">
        <div className="text-[80px] text-center sm:text-[100px] font-codec font-bold">
          Welcome to the
        </div>
        <img src="/club.png" alt="Zoth Club" />
      </div>

      <div className=" bg-white/10 grid grid-row-4 sm:grid-cols-4 gap-2 justify-items-center content-center p-8">
        <div className="col-span-2">
          <img src="/frame.png" alt="frame" className="w-[300px] h-[600px]"/>
        </div>
        <div className="col-span-2 self-center mt-2 p-8 ">
          <div className="sm:text-6xl text-4xl font-extrabold font-codec mb-4">Guarantee transparency and Easy exit mechanism</div>
          <div className="text-lg leading-loose ">
            On the blockchain, transactions are transparent and verifiable.
            Users can monitor real-time market conditions for simple exit
            mechanisms. 
            <br />
            Simple Liquidity using deFi pools On our 24/7 open
            market, you can buy and sell at any time.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
