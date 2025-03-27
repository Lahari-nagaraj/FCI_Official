import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import AboutUsPage from "./pages/AboutUspage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/about" element={<AboutUsPage />} />
    </Routes>
  );
}

export default App;
