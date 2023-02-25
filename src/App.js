import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";

import { Web3Modal } from "@web3modal/react";

import { configureChains, createClient, WagmiConfig } from "wagmi";

import { arbitrum, mainnet, polygon } from "wagmi/chains";
import LandingPage from "./pages/LandingPage";
import Institutions from "./components/Institutions";
import ReactGA from 'react-ga';
import { useEffect } from "react";
import { PaymentPopup } from "./components/PaymentPopup";
  const TRACKING_ID = "UA-256346841-1"; // OUR_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);
function App() {
  const chains = [arbitrum, mainnet, polygon];

  // Wagmi client
  const { provider } = configureChains(chains, [
    walletConnectProvider({ projectId: "53159e36e3a1471d98d38fff0c58a181" }),
  ]);
  const wagmiClient = createClient({
    autoConnect: true,
    connectors: modalConnectors({
      projectId: "53159e36e3a1471d98d38fff0c58a181",
      version: "1", // or "2"
      appName: "web3Modal",
      chains,
    }),
    provider,
  });
  
  // Web3Modal Ethereum Client
  const ethereumClient = new EthereumClient(wagmiClient, chains);
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
   <>
    <WagmiConfig client={wagmiClient}>
    <div className="bg-black text-white w-full h-full">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route exact path="/institutions" element={<Institutions />}></Route>
          <Route exact path="/payment/status" element={<PaymentPopup />}></Route>
        </Routes>
      </Router>
    </div>
    </WagmiConfig>

    <Web3Modal
        projectId="53159e36e3a1471d98d38fff0c58a181"
        ethereumClient={ethereumClient}
      />
   </>
  );
}

export default App;
