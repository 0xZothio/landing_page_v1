import React, { useState } from "react";
import "./mobileScroll.css";
import ScreenText from "./ScreenText";

const scrollData = [
  {
    mobile_img: "https://resources.zoth.in/landingpage/reward.gif",
    heading: "Earn Zoth Coins for investing in your assets",
    description:
      "Every time you invest on Zoth, you receive Zoth coins. You can use these to win exclusive rewards or get special access to curated products and experiences.",
  },

  {
    mobile_img: "https://resources.zoth.in/landingpage/etherium.gif",
    heading: "Guaranteed transparency and Easy exit mechanism",
    description:
      "On the blockchain, transactions are transparent and verifiable. Zoth provides liquidity for on chain assets through its unique real-time market based exit mechanism.",
  },

  {
    mobile_img: "https://resources.zoth.in/landingpage/loyalty.gif",
    heading: "Governance model for, of and by the users ",
    description:
      "Zoth Governance and Loyalty program gives you exclusive access to premium asset classes, special offers on upcoming launches, stay-cations in opulent villas, and more.",
  },
  {
    mobile_img: "https://resources.zoth.in/landingpage/high.gif",
    heading: "High Yield, Returns and Portfolio Diversification",
    description:
      "Data-driven insights to diversify your portfolio and invest in stable asset classes accessible only to the top 0.1%, to earn lifetime passive income.",
  },
  {
    mobile_img: "https://resources.zoth.in/landingpage/return.gif",
    heading: "Compliant and Strict Due Diligence",
    description:
      "All our assets are listed after a strict process of due diligence and are compliant with local and other global regulatory bodies.",
  },
];

// const scrollData = [
//   {
//     heading: "we’ve got your back.",
//     description:
//       "gain complete control over your credit card with CRED Protect. receive category-based analysis of your spends, detect hidden charges, and track your credit limit in real-time.",
//     mobile_img:
//       "https://web-images.credcdn.in/_next/assets/images/home-page/features/fold1.png",
//   },
//   {
//     heading: "begin your winning streak.",
//     description:
//       "use your CRED coins to participate in games and raffles to win the most exclusive rewards and cashbacks on CRED. good luck.",
//     mobile_img:
//       "https://web-images.credcdn.in/_next/assets/images/home-page/features/fold2.png",
//   },
//   {
//     heading: "for your eclectic taste.",
//     description:
//       "get access to the CRED Store, a member-exclusive selection of products and experiences at special prices that complement your taste. this is the good life they speak of.",
//     mobile_img:
//       "https://web-images.credcdn.in/_next/assets/images/home-page/features/fold3.png",
//   },
//   {
//     heading: "more cash in your pockets.",
//     description:
//       "switch to CRED RentPay and start paying rent with your credit card. this way you get up to 45 days of credit free period, more reward points and a happy landlord.",
//     mobile_img:
//       "https://web-images.credcdn.in/_next/assets/images/home-page/features/fold4.png",
//   },
// ];

const MobileScroll = () => {
  const [currentImg, setCurrentImg] = useState(0);
  return (
    <div className="relative py-80 lg:pt-32 sm:flex max-width_mobilescrolling my-auto hidden">
      <div className="w-1/2">
        {scrollData.map((screen, i) => (
          <div className="flex justify-center items-center flex-col min-h-screen">
            <ScreenText screen={screen} setCurrentImg={setCurrentImg} i={i} />
          </div>
        ))}
      </div>
      <div className="mx-auto non-mobile">
        <div className="mobile-mockup_mobilescrolling ">
          <div className="mobile-mockup-screen flex absolute-center">
            <img
              src={scrollData[currentImg].mobile_img}
              className="mobile-screen-img slide-in-right "
              key={scrollData[currentImg].mobile_img}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileScroll;
