import React from "react";
import zoth from "../assets/images/zoth.png";
const Disclaimer = () => {
  return (
    <>
      <div className="p-4 flex flex-col bg-white text-black sm:px-80 px-8 py-12 ">
        <h2 className="text-5xl font-extrabold mb-2">Disclaimer</h2>
        <div className="flex justify-center items-center">
          <img width="50%" className="w-[90%] sm:w-[50%]" src={zoth} />
        </div>
        <h4 className="mt-4 font-extrabold text-2xl">Disclaimer</h4>
        <p className="mt-4">
          This website [https://zoth.io/](https://zoth.io/) is a web portal
          owned by the{" "}
          <span className="font-bold">Metaco Intelligence Private Limited</span>
          (CIN: *U72900KA2022PTC163828*), (*a private company limited by shares
          incorporated under the provisions of Companies Act, 2013 (Act No. 18
          of 2013) with corporate identification number (CIN)
          U72900KA2022PTC163828, and having its registered office at B-708, 7TH
          FLOOR, WING-B, ORCHID WHITEFIELD, HAGADUR, WHITEFIELD, BANGALORE,
          KARNATAKA-560066*) (hereinafter referred to as{" "}
          <span className="font-bold">Zoth</span> which includes the
          person(s)/entity(ies) associated/connected with it) to provide
          technology solutions for financial products and alternate investment
          opportunities. Zoth expressly makes following disclaimers:
        </p>{" "}
        <ul className=" space-y-1 mt-3 text-black list-inside list-disc dark:text-balck">
          <li>
            the website is merely an intermediary or facilitator or marketplace
            and Zoth in no manner is engaged in either grant of loan or
            borrowing/fund raising from any participants on the website.
          </li>
          <li>
            the website and/or Zoth is neither an Online Bond Platform and does
            not intend to get recognised as an Online Bond Platform under the
            relevant SEBI Regulation on said matter. The securities/investment
            opportunities offered to participants on the website are not traded
            on any Online Bond Platform recognised by SEBI.
          </li>
          <li>
            the website and/or Zoth is neither a stock exchange and does not
            intend to get recognised as a stock exchange under the Securities
            Contract (Regulation) Act, 1956 by the Securities Exchange Board of
            India (“SEBI”) nor authorized by the SEBI to solicit investments.
            The securities/investment opportunities offered to participants on
            the website are not traded on any stock exchange recognised by SEBI.
          </li>
          <li>
            Any blog, content including FAQs available on the website is merely
            for educational purposes and to disseminate general information
            about the product(s)/service(s) offered through the website. Nothing
            contained in the blog(s), content(s) including FAQs available on the
            website to be construed as legal opinion or investment advice.
            Neither the Zoth nor the entity(ies), person(s) associated to it
            makes any representations, warranties, or guaranties whatsoever as
            to the blog(s), content(s) including FAQs available on website
            wholly or in part, including that of the accuracy or completeness of
            the information provided therein. In no event shall the Zoth and/ or
            its associated entity(ies), person(s) be liable for any direct,
            indirect, punitive, incidental, special or consequential damages
            which may arise as a result of a person acting upon or using the
            statements, informations, ideas, opinions made in the blogs and
            contents including FAQs available on the website.
          </li>
          <li>
            All the transactions facilitated on the website are in compliance of
            applicable laws including:
            <ul class="pl-5 mt-2 space-y-1 list-disc list-inside">
              <li>
                Companies Act, 2013 and Rules framed thereunder, particularly
                Section 42 thereof;
              </li>
              <li>
                Foreign Exchange Management Act, 199 and Rules, Regulations,
                Directions, Circulars framed/issued thereunder;
              </li>
              <li>
                Reserve Bank of India Act, 1934 and Directions, Circulars
                framed/issued thereunder;
              </li>
              <li>
                Securities Contract (Regulation) Act, 1956 and Rules,
                Regulations framed/issued thereunder; and
              </li>
              <li>
                Security Exchange Board of India, 1992 and Rules, Regulations,
                Directions etc. framed thereunder.
              </li>
            </ul>
          </li>

          <li>
            Metaco Intelligence Private Limited (CIN: *U72900KA2022PTC163828*),
            or any of their subsidiary or affiliate may or may not have any
            interest in opportunities listed on the website.
          </li>
          <li>
            Zoth shall not at all be responsible for any claim or damage in case
            either the person who has agreed to participate in opportunities
            listed on website has not finally found place in opportunity.
          </li>
          <li>
            Zoth shall not provide nor arrange any credit enhancement or credit
            guarantee.
          </li>
          <li>
            Though Zoth endeavours to undertake the due diligence of the
            registered users on the website, however, Zoth in no manner warrants
            and guarantees that all the information participants have provided
            on this website is true and correct.
          </li>
          <li>
            All the details of participants on this website and their financial
            status, included in or available through this site are provided for
            use without warranties of any kind, either express or implied. Zoth,
            its shareholders, its subsidiaries, and persons associated with it
            do not warrant that the information or other material which is
            placed on the website is correct including their financial status or
            capability or has not approached the other participants of this
            website with a criminal intent to either cheat or misappropriate or
            deny any other participants of its legitimate claims.
          </li>
          <li>
            Under no circumstances shall, Zoth, its directors, employees,
            officers, shareholders, subsidiaries, affiliates, agents, business
            partners including third-party distributors involved in creating,
            producing, transmitting or distributing products or services on the
            website, facilitating participants to participate in opportunities
            listed on website, be liable for any direct, indirect, punitive,
            incidental, special, or consequential damages that result from
            either misrepresentation, fraud, coercion, breach of trust,
            misappropriation, cheating or for any other such reason of its end
            users or of third parties including but not limited to loss of
            profits and loss of goodwill or loss of interest.
          </li>
          <li>
            This document and disclaimers contained herein are based on the
            applicable laws as on date of upload of this document. Any change in
            law may have impact on the same.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Disclaimer;
