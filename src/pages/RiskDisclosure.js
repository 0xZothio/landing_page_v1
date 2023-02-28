import React from "react";
import zoth from "../assets/images/zoth.png";
const RiskDisclosure = () => {
  return (
    <>
      <div className="p-4 flex flex-col bg-white text-black sm:px-80 px-8 py-12 ">
        <h2 className="text-5xl font-extrabold mb-2">Risk Disclosure</h2>
        <div className="flex justify-center items-center">
          <img width="50%" className="w-[90%] sm:w-[50%]" src={zoth} />
        </div>
        <h4 className="mt-4 font-extrabold text-2xl">Risk Disclosure</h4>
        <p className="mt-4">
          Zoth would like to inform that generally there is High Risk involved
          in Alternate Investment opportunities. All investors, prior to making
          an investment decision, should carefully evaluate whether the
          investment is suitable for them considering one’s knowledge/experience
          in investment planning, investment objectives, financial ability, and
          risks appetite. It is necessary that before Investors make any
          investment decision, they should understand the following:{" "}
        </p>
        <p className="mt-4">
          <span className="font-bold">100% Loss of Investment amount</span>:
          Investment in any opportunity does not provide guaranteed returns even
          if invested in high-grade/rated or low credit risk opportunities. The
          investor may lose in whole or in part even the principal amount at the
          time of redemption. Investment is a risky affair and you may not be
          able to recover, on a timely basis or at all, the full value of the
          investment and/or the return accrued thereon and neither the Zoth nor
          the entity(ies), person(s) associated to it makes any representations,
          warranties, or guaranties whatsoever in this regard. Adverse Market
          Conditions: Zoth may have presented certain forward-looking
          information based on past performance and certain assumptions which
          may be relevant for current macro-economic scenarios. However, past
          performance is not a reliable indicator of future performance. You
          should not rely on any past performance as a guarantee of future
          investment performance. Projections may also not be a reliable
          indicator of future performance.{" "}
        </p>{" "}
        <p className="mt-4">
          <span className="font-bold">Lack of Liquidity</span>: The liquidity
          and realizable value of opportunities may vary significantly with
          changes in market and economic conditions. There is no liquidity for
          the opportunities in the secondary market and there is no assurance
          that liquidity will improve. There is no obligation on Zoth to provide
          or maintain a secondary market for this opportunity. You understand
          that there is the possibility for an investor to experience losses due
          to the inability to sell or convert assets into cash immediately or in
          instances where conversion to cash is possible but at a loss. Secured
          investment cannot be considered proxy for guaranteed returns: Although
          most of opportunities on Zoth will be backed by collaterals
          constituting atleast 100% asset cover, however, the realisable value
          of the assets charged as security, when liquidated, may be lower than
          the outstanding pay-outs accrued thereon in connection with any
          opportunity. A failure or delay to recover the expected value from a
          sale or disposition of the assets charged as security in connection
          with the opportunity could expose you to a potential loss.
        </p>{" "}
        <p className="mt-4">
          {" "}
          <span className="font-bold">Delayed pay-outs</span>: There may be
          delay in receipt of payments i.e. payment may come before or after the
          stated payment schedule or maturity period. You completely understand
          that Zoth is not obligated to facilitate timely pay-outs with respect
          to this opportunity.
        </p>{" "}
        <p className="mt-4">
          {" "}
          <span className="font-bold">Past performance and Forecasts</span>:
          Zoth may provide its own assessment of opportunity which is generally
          based on past performance and future forecasts based on the past
          performance. However, investor shall understand that past performance
          is not a reliable indicator of future performance. Investor should not
          rely on any past performance as a guarantee of future investment
          performance. Investor shall not rely on Zoth assessment of investment
          opportunity. Zoth encourages investors to do their own evaluation of
          investment risk parameters and return expectations on case-to-case
          basis.
        </p>
        <p className="mt-4">
          <span className="font-bold">Incomplete Information</span>: Zoth intent
          to provide detailed analysis of investment opportunity listed on its
          platform along with Zoth’s assessment of the investment opportunity.
          However, the information shared thereon may not be complete and
          accurate. Zoth or Investor may not be able to obtain all information
          it would want regarding a particular opportunity, on a timely basis or
          at all. Also, there may be some information related to Issuer or
          underlying security which may not be shared due to confidentiality
          which otherwise may have material adverse impact on Issuer. Zoth is
          not obligated to provide and may not provide all the information as
          required by the investor to take investment decision. It is possible
          that Zoth may not be aware on a timely basis of material adverse
          changes that have occurred with respect to the opportunities. Zoth is
          not liable, and you will not hold Zoth responsible for any delays,
          defaults, frauds, misrepresentations etc. on part of any
          counterparty(ies). Zoth is only a facilitator of this opportunity and
          does not guarantee any repayment or scheduled payment under any
          scenario. The aforesaid list of risk factors is not intended to be
          exhaustive, nor a comprehensive explanation of the risks involved.
        </p>
      </div>
    </>
  );
};

export default RiskDisclosure;
