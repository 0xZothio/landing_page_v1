import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Institutions from "./components/Institutions";
import ReactGA from "react-ga";
import { useEffect } from "react";
import { PaymentPopup } from "./components/PaymentPopup";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ExpInvoice from "./components/ExpInvoice";
import ExpLeasing from "./components/ExpLeasing";
const TRACKING_ID = "UA-256346841-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
function App() {
  
  
  useEffect(() => {
   
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);


  return (
    <>
     
        <div className="bg-black text-white w-full h-full">
          <Router>
            <Routes>
              <Route exact path="/" element={<LandingPage />}></Route>
              <Route
                exact
                path="/institutions"
                element={<Institutions />}
              ></Route>
              <Route
                exact
                path="/payment/status"
                element={<PaymentPopup />}
              ></Route>
              <Route
                exact
                path="/privacy-policy"
                element={<PrivacyPolicy />}
              ></Route>
               <Route
                exact
                path="/invoice-discounting"
                element={<ExpInvoice />}
              ></Route>
               <Route
                exact
                path="/asset-leasing"
                element={<ExpLeasing />}
              ></Route>
            </Routes>
          </Router>
        </div>
    

      
    </>
  );
}

export default App;
