import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutUsPage = () => {
  const navigate = useNavigate();

  // Programs Section
  const programs = [
    {
      id: "education",
      title: "Education",
      image: "/education.jpg",
      description:
        "The Education Program of FCI focuses on competence building, intellectual and perspective learning processes of children and youth.",
    },
    {
      id: "support",
      title: "Relevant Support to the Poor",
      image: "/support.jpg",
      description:
        "Through this program, FCI provides school materials for school students such as notebooks, school bags, school uniforms, belts, and ties.",
    },
    {
      id: "learning-centers",
      title: "Learning Centers",
      image: "/learning-centers.jpg",
      description:
        "It focuses on equipping the poor deserving children & youth through establishing, running and maintaining Learning Centres.",
    },
  ];

  // Journey Timeline
  const milestones = [
    { year: 2014, title: "🎨 Drawing Competition for Slum Children" },
    { year: 2015, title: "📚 Educational Assistance Launched" },
    { year: 2016, title: "🏢 Training Wing Established" },
    { year: 2017, title: "🛠️ Skill Development Training" },
    { year: 2020, title: "🚀 TECH Fest & Career Weavers Initiative" },
    { year: 2022, title: "📖 Expanded Learning Centers Nationwide" },
    { year: 2023, title: "💻 Launched Digital Learning Platforms" },
    { year: 2024, title: "🤖 AI-Powered Personalized Education System" },
    { year: 2025, title: "🎯 Target: 1 Million Educated Children" },
  ];

  // Impact Stats
  const impactStats = [
    { emoji: "🎓", number: "3,000", text: "School students reached." },
    { emoji: "👩‍🎓", number: "60", text: "University girl students benefited." },
    { emoji: "📦", number: "500", text: "Students received school supplies." },
    { emoji: "🌍", number: "14,000", text: "People reached indirectly." },
  ];

  return (
    <div>
      <Header />

      <div className="bg-gradient-to-b from-gray-50 to-gray-200 min-h-screen px-6 py-12">
        <h2 className="text-4xl font-bold text-center mb-10 text-blue-900">
          More About Us
        </h2>

        {/* Programs Section */}
        <section className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Programs
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div
                key={program.id}
                className="bg-white border border-gray-300 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-lg overflow-hidden"
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-center">
                  <h4 className="text-xl font-semibold text-blue-900">
                    {program.title}
                  </h4>
                  <p className="text-gray-700 text-sm mt-2">
                    {program.description}
                  </p>
                  <button
                    onClick={() => navigate(`/programs/${program.id}`)}
                    className="mt-4 px-4 py-2 bg-blue-900 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="max-w-6xl mx-auto mt-12 bg-white shadow-lg rounded-lg border border-gray-300 p-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Our Journey
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow"
              >
                <div className="text-3xl">{milestone.title.split(" ")[0]}</div>
                <div>
                  <span className="block text-lg font-semibold text-blue-900">
                    {milestone.year}
                  </span>
                  <p className="text-gray-700 text-sm">
                    {milestone.title.slice(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Impact Section */}
        <section className="w-full max-w-5xl mx-auto mt-12 bg-white shadow-lg rounded-lg border border-gray-300 p-10">
          <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Our Impact
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className="p-6 bg-white border border-gray-300 shadow-lg rounded-lg transform hover:scale-105 transition-all duration-300"
              >
                <span className="block text-5xl">{stat.emoji}</span>
                <span className="block text-2xl sm:text-3xl font-bold text-blue-900 mt-2">
                  {stat.number}
                </span>
                <p className="text-gray-700 text-sm mt-2">{stat.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Partners Section */}
        <section className="max-w-6xl mx-auto mt-12 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            Our Partners
          </h3>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
            <div className="bg-white shadow-lg p-6 rounded-lg border border-gray-300 w-64 flex flex-col items-center hover:shadow-xl transition-all duration-300">
              <img
                src="/training-partner-logo.png"
                alt="Training Partner"
                className="h-16 sm:h-20 object-contain mb-4"
              />
              <p className="text-blue-900 font-bold text-lg">
                Training Partner
              </p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg border border-gray-300 w-64 flex flex-col items-center hover:shadow-xl transition-all duration-300">
              <img
                src="/corporate-partner-logo.png"
                alt="Corporate Partner"
                className="h-16 sm:h-20 object-contain mb-4"
              />
              <p className="text-blue-900 font-bold text-lg">
                Corporate Partner
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUsPage;
