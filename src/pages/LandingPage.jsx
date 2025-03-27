import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import Donate from "../components/Donate";
import Contact from "../components/Contact";

const LandingPage = () => {
  return (
    <>
      <Header />
      <div className="px-4">
        <AboutUs />
        <Donate />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
