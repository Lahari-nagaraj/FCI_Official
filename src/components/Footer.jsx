import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-12">
      <div className="container mx-auto grid grid-cols-3 gap-8 items-center text-center md:text-left">
        {/* Office Address - Left */}
        <div>
          <h2 className="text-lg font-semibold tracking-wide">
            Office Address
          </h2>
          <p className="text-gray-300 mt-2">
            #21, 3rd Cross, Ashraya Layout, Stage 1, <br />
            Mahadevpura, Bangalore 560 048
          </p>
        </div>

        {/* Contact Info - Center */}
        <div className="text-center">
          <h2 className="text-lg font-semibold tracking-wide">Get in Touch</h2>
          <p className="text-gray-300 mt-2">
            Phone:{" "}
            <a href="tel:+919845277768" className="hover:underline">
              +91 98452 77768
            </a>{" "}
            <br />
            Landline:{" "}
            <a href="tel:+918035839490" className="hover:underline">
              +91 80 3583 9490
            </a>{" "}
            <br />
            Email:{" "}
            <a
              href="mailto:fundachildinindia@gmail.com"
              className="hover:underline"
            >
              fundachildinindia@gmail.com
            </a>
          </p>
        </div>

        {/* Social Media - Right */}
        <div className="text-right">
          <h2 className="text-lg font-semibold tracking-wide">Follow Us</h2>
          <div className="flex justify-end space-x-4 mt-3">
            <a
              href="https://www.facebook.com/groups/325405297611892/user/100004226688582"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-white text-2xl hover:text-gray-400 transition" />
            </a>
            <a
              href="https://www.linkedin.com/groups/10483541"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-white text-2xl hover:text-gray-400 transition" />
            </a>
            <a
              href="https://www.instagram.com/fundachildinindia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-white text-2xl hover:text-gray-400 transition" />
            </a>
            <a
              href="https://www.youtube.com/@fundachildinindia5030"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-white text-2xl hover:text-gray-400 transition" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
