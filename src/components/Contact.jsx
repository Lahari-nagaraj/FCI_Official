import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const serviceID = "service_jlsgsyg";
    const templateID = "template_gqekb24";
    const publicKey = "8a1ZfM8jiAlyWEF41";

    try {
      await emailjs.send(serviceID, templateID, formData, publicKey);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Failed to send. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-16 px-6 bg-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-blue-900">Get in Touch</h2>
        <p className="text-lg text-gray-600 mt-3">
          We'd love to hear from you! Fill out the form below and we'll get back
          to you as soon as possible.
        </p>
      </div>

      <div className="flex justify-center mt-10">
        <form
          className="w-full max-w-2xl bg-white p-10 shadow-md rounded-xl border border-gray-200"
          onSubmit={handleSubmit}
        >
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="johndoe@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Your Message
            </label>
            <textarea
              name="message"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold transition-all duration-300"
          >
            Send Message
          </button>
          {status && <p className="text-center text-gray-700 mt-4">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
