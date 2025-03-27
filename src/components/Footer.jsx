const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-6">
      <p>Office Address: XYZ Street, City, India</p>
      <p>Contact: +91 98765 43210</p>
      <div className="flex justify-center space-x-4 mt-2">
        <img src="/facebook.svg" alt="Facebook" className="h-6" />
        <img src="/twitter.svg" alt="Twitter" className="h-6" />
      </div>
    </footer>
  );
};

export default Footer;
