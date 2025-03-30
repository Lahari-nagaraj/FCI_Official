const Donate = () => {
  return (
    <section id="donate" className="py-16 px-6 bg-blue-50">
      {/* Full Width Section */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-900">Support Our Cause</h2>
        <p className="text-gray-700 mt-4 text-lg max-w-4xl mx-auto">
          Fund a Child in India, as an education initiative, runs various
          programs in academics, talent development, and child development. Your
          donation helps provide soft skills, technical skills, mentorship,
          and training programs for students in primary, secondary, and
          higher education. Your contribution will make a real impact in
          their lives.
        </p>
      </div>

      {/* Donation Section */}
      <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Donation Details */}
        <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-blue-600">
          <h2 className="text-2xl font-bold text-blue-900">
            What Can I Donate For?
          </h2>
          <div className="mt-6 space-y-4">
            {/* Student Educational Assistance */}
            <div className="bg-blue-100 p-4 rounded-lg flex justify-between items-center">
              <span className="text-blue-800 font-semibold">
                📘 Student Educational Assistance
              </span>
              <div className="text-blue-900 font-bold">
                ₹1,000 <span className="text-sm text-gray-600">/School</span>{" "}
                &nbsp; | &nbsp; ₹2,000{" "}
                <span className="text-sm text-gray-600">/University</span>
              </div>
            </div>

            {/* Skill Enhancement Training */}
            <div className="bg-green-100 p-4 rounded-lg flex justify-between items-center">
              <span className="text-green-800 font-semibold">
                🛠️ Skill Enhancement Training
              </span>
              <div className="text-green-900 font-bold">
                ₹700 <span className="text-sm text-gray-600">/School</span>{" "}
                &nbsp; | &nbsp; ₹1,500{" "}
                <span className="text-sm text-gray-600">/University</span>
              </div>
            </div>

            {/* STEM/Digital Learning */}
            <div className="bg-yellow-100 p-4 rounded-lg flex justify-between items-center">
              <span className="text-yellow-800 font-semibold">
                💻 STEM/Digital Learning
              </span>
              <div className="text-yellow-900 font-bold">
                ₹600 <span className="text-sm text-gray-600">/School</span>{" "}
                &nbsp; | &nbsp; ₹1,250{" "}
                <span className="text-sm text-gray-600">/University</span>
              </div>
            </div>

            {/* Skill Formation Training */}
            <div className="bg-purple-100 p-4 rounded-lg flex justify-between items-center">
              <span className="text-purple-800 font-semibold">
                🎓 Skill Formation Training
              </span>
              <div className="text-purple-900 font-bold">₹700</div>
            </div>

            {/* Drawing Competition */}
            <div className="bg-red-100 p-4 rounded-lg flex justify-between items-center">
              <span className="text-red-800 font-semibold">
                🎨 Drawing Competition
              </span>
              <div className="text-red-900 font-bold">₹500</div>
            </div>
          </div>
        </div>

        {/* Right Side - Call to Action */}
        <div className="flex flex-col justify-center items-center text-center">
          <h2 className="text-3xl font-bold text-blue-900">
            Make a Donation Today
          </h2>
          <p className="text-gray-700 mt-4">
            Your support can change a child's future. Help us empower young
            minds and create a better tomorrow.
          </p>
          <button className="mt-6 bg-blue-900 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md transition transform hover:scale-105 hover:bg-blue-800">
            Donate Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Donate;
