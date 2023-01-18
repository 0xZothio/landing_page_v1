import "./App.css";
import LandingPage from "./pages/LandingPage";
import { ToastContainer, toast } from "react-toastify";
function App() {
  return (
    <ToastContainer>
      {" "}
      <div className="bg-black text-white w-full h-full overflow-hidden">
        <LandingPage />
      </div>
    </ToastContainer>
  );
}

export default App;
