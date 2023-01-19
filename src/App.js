import "./App.css";
import LandingPage from "./pages/LandingPage";
import { ToastContainer, toast } from "react-toastify";
function App() {
  return (
    
    <div className="bg-black text-white w-full h-full overflow-hidden">
      <ToastContainer/>
        <LandingPage />
      </div>
    
  );
}

export default App;
