import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import AboutUsPage from "./pages/AboutUsPage";
import Donate from "./components/Donate";
import DonationPage from "./pages/DonationPage";
import Education from "./pages/Education";
import Support from "./pages/Support";
import LearningCenters from "./pages/LearningCenters";

function App() {
  return (
    <Routes>
      {/* Main Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/donation" element={<DonationPage />} />

      {/* Program Pages */}
      <Route path="/programs/education" element={<Education />} />
      <Route path="/programs/support" element={<Support />} />
      <Route path="/programs/learning-centers" element={<LearningCenters />} />
    </Routes>
  );
}

export default App;
