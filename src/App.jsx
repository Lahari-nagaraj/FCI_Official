import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import AboutUsPage from "./pages/AboutUspage";
import Donate from "./components/Donate";
import DonationPage from "./pages/DonationPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/donation" element={<DonationPage />} />
    </Routes>
  );
}

export default App;
