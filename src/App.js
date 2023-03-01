import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import LandingPage from "./pages/LandingPage";
import TermsOfUse from "./pages/TermsOfUse";
import Institutions from "./components/Institutions";
import ReactGA from "react-ga";
import { useEffect } from "react";
import Disclaimer from "./pages/Disclaimer";
import RiskDisclosure from "./pages/RiskDisclosure";
  const TRACKING_ID = "UA-256346841-1"; // OUR_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);
function App() {
  
  
  useEffect(() => {
   
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);


  return (
    <div className="bg-black text-white w-full h-full">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route exact path="/institutions" element={<Institutions />}></Route>
          <Route exact path="/privacy-policy" element={<PrivacyPolicy />}></Route>
          <Route exact path="/terms-of-use" element={<TermsOfUse />}></Route>
          <Route exact path="/disclaimer" element={<Disclaimer />}></Route>
          <Route exact path="/risk-disclosure" element={<RiskDisclosure />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
