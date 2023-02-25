import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";

import { Web3Modal,useWeb3ModalTheme } from "@web3modal/react";

import { configureChains, createClient, WagmiConfig } from "wagmi";

import { arbitrum, mainnet, polygon } from "wagmi/chains";
import LandingPage from "./pages/LandingPage";
import Institutions from "./components/Institutions";
import ReactGA from "react-ga";
import { useEffect } from "react";
import { PaymentPopup } from "./components/PaymentPopup";
const TRACKING_ID = "UA-256346841-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
function App() {
  const chains = [arbitrum, mainnet, polygon];
  // Wagmi client
  const { provider } = configureChains(chains, [
    walletConnectProvider({ projectId: "7fd5ec894c1097e2d47165daebf727e3" }),
  ]);
  const wagmiClient = createClient({
    autoConnect: true,
    connectors: modalConnectors({
      projectId: "7fd5ec894c1097e2d47165daebf727e3",
      version: "2", // or "2"
      appName: "Zoth",
      chains,
    }),
    provider,
  });

  // Web3Modal Ethereum Client
  const ethereumClient = new EthereumClient(wagmiClient, chains);
  
  useEffect(() => {
    (async()=>{
      let accounts = await ethereumClient.getAccount();
      console.log(accounts)
    })();
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

const { theme, setTheme } = useWeb3ModalTheme();
setTheme({
  themeMode: "dark",
  themeColor: "blue",
  themeBackground: "gradient",
});
  return (
    <>
      <WagmiConfig client={wagmiClient}>
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
            </Routes>
          </Router>
        </div>
      </WagmiConfig>

      <Web3Modal
        projectId="7fd5ec894c1097e2d47165daebf727e3"
        ethereumClient={ethereumClient}
      />
    </>
  );
}

export default App;
