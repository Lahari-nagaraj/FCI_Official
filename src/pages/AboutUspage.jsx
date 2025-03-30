import { useNavigate } from "react-router-dom";

const AboutUsPage = () => {
  const navigate = useNavigate();

  const programs = [
    {
      id: "education",
      title: "Education",
      image: "/education.jpg", // Replace with actual image
    },
    {
      id: "support",
      title: "Relevant Support to the Poor",
      image: "/support.jpg", // Replace with actual image
    },
    {
      id: "learning-centers",
      title: "Learning Centers",
      image: "/learning-centers.jpg", // Replace with actual image
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6">More About Us</h2>

      {/* Programs Section */}
      <section className="py-8">
        <h3 className="text-2xl font-semibold text-center mb-6">Programs</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {programs.map((program) => (
            <div
              key={program.id}
              onClick={() => navigate(`/programs/${program.id}`)}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer"
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
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-8">
        <h3 className="text-2xl font-semibold">Gallery</h3>
        <p>Interactive scrolling gallery here.</p>
      </section>

      {/* Impact Section */}
      <section className="py-8">
        <h3 className="text-2xl font-semibold">Impact</h3>
        <p>Pie charts and impact numbers.</p>
      </section>

      {/* Partners Section */}
      <section className="py-8">
        <h3 className="text-2xl font-semibold">Partners</h3>
        <p>Logos of supporting organizations.</p>
      </section>
    </div>
  );
};

export default AboutUsPage;
