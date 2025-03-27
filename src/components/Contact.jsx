const Contact = () => {
  return (
    <section id="contact" className="py-12">
      <h2 className="text-3xl font-bold text-center">Contact Us</h2>
      <p className="text-center mt-4">
        Reach out to us for any inquiries or support.
      </p>
      <div className="flex justify-center mt-6">
        <form className="w-full max-w-md bg-gray-100 p-6 rounded-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-2 border border-gray-300 rounded mb-4"
            rows="4"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
