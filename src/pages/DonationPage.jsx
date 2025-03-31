import { useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const DonationPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-[url('/donation-bg.jpg')]">
      {/* Light Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Donation Card */}
      <div className="relative bg-white p-8 rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">
          Scan to Donate
        </h2>
        <p className="text-gray-700 mb-4">
          Your small contribution can change lives. Thank you for your support!
        </p>
        <div className="flex justify-center">
          <img
            src="/qr-code.png"
            alt="QR Code"
            className="w-48 h-48 rounded-md shadow-md"
          />
        </div>

        <div className="mt-6 space-x-4 flex justify-center">
          <a
            href="https://www.facebook.com/groups/325405297611892/user/100004226688582"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook className="text-blue-600 text-2xl hover:text-blue-800" />
          </a>
          <a
            href="https://www.instagram.com/fundachildinindia"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="text-pink-500 text-2xl hover:text-pink-700" />
          </a>
          <a
            href="https://www.linkedin.com/groups/10483541"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="text-blue-800 text-2xl hover:text-blue-900" />
          </a>
          <a
            href="https://www.youtube.com/@fundachildinindia5030"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube className="text-red-600 text-2xl hover:text-red-800" />
          </a>
        </div>

        <button
          onClick={() => navigate("/landing")}
          className="mt-6 bg-blue-900 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default DonationPage;
