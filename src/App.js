import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Institutions from "./components/Institutions";

function App() {
  return (
    <div className="bg-black text-white w-full h-full overflow-hidden">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route exact path="/institutions" element={<Institutions />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
