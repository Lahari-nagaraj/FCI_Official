import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <section id="about" className="py-16 bg-blue-50">
      

      {/* About Us Heading */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-blue-900">About Us</h2>
        <p className="text-lg text-gray-700 mt-4 leading-relaxed">
          <span className="font-semibold">Fund a Child in India (FCI)</span> is
          a <span className="font-semibold">CHARITABLE TRUST</span> established
          in 2014, having its jurisdiction to design & implement various{" "}
          <span className="font-semibold">
            poverty alleviation programs & schemes
          </span>{" "}
          irrespective of caste, creed, and religion.
        </p>
        <p className="text-lg text-gray-700 mt-4 leading-relaxed">
          FCI has been successfully conducting programs for{" "}
          <span className="font-semibold">
            school & college-going students, students pursuing professional
            courses, school drop-outs, youth
          </span>
          , and{" "}
          <span className="font-semibold">
            rural/semi-urban young women from deprived communities
          </span>{" "}
          in their areas of intervention.
        </p>
      </div>

      {/* Vision, Mission, Areas of Intervention Cards */}
      <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto px-6">
        {/* Vision Card */}
        <div className="bg-white shadow-xl rounded-xl p-6 text-center border-l-4 border-blue-600 transform hover:scale-105 transition">
          <h3 className="text-2xl font-bold text-blue-800">Vision</h3>
          <p className="text-gray-600 mt-3">
            To liberate the oppressed from their{" "}
            <span className="font-semibold">
              socio-economic and mental clutches
            </span>{" "}
            through educating and empowering children.
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-white shadow-xl rounded-xl p-6 text-center border-l-4 border-green-600 transform hover:scale-105 transition">
          <h3 className="text-2xl font-bold text-green-700">Mission</h3>
          <p className="text-gray-600 mt-3">
            To <span className="font-semibold">educate and empower</span> a
            child for a{" "}
            <span className="font-semibold">safe and better tomorrow.</span>
          </p>
        </div>

        {/* Areas of Intervention Card */}
        <div className="bg-white shadow-xl rounded-xl p-6 text-center border-l-4 border-yellow-500 transform hover:scale-105 transition">
          <h3 className="text-2xl font-bold text-yellow-600">
            Areas of Intervention
          </h3>
          <ul className="text-gray-600 mt-3 space-y-2">
            <li>
              📘 <span className="font-semibold">Education</span>
            </li>
            <li>
              🩺 <span className="font-semibold">Quality of Health</span>
            </li>
            <li>
              🤝{" "}
              <span className="font-semibold">
                Relevant Support to the Poor
              </span>
            </li>
            <li>
              🏫{" "}
              <span className="font-semibold">
                Learning Centres/Institutions for the Public
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Know More Button */}
      <div className="flex justify-center mt-12">
        <button
          className="bg-blue-900 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md transition transform hover:scale-105"
          onClick={() => navigate("/about")}
        >
          Know More
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
