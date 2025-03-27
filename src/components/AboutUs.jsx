import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <section id="about" className="py-12">
      <h2 className="text-3xl font-bold text-center">About Us</h2>
      <p className="text-center mt-4">
        We are dedicated to educating and empowering young girls.
      </p>
      <div className="flex justify-center mt-6">
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-md"
          onClick={() => navigate("/about")}
        >
          Know More
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
