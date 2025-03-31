import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Education = () => {
  // Gallery Images
  const galleryImages = [
    "/education1.jpg",
    "/education2.jpg",
    "/education3.jpg",
    "/education4.jpg",
    "/education5.jpg",
    "/education6.jpg",
    "/education7.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  // Auto-scroll images every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#f0f4f8] p-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Education Section */}
        <h2 className="text-4xl font-bold text-blue-900">Education</h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          FCI, being an education initiative, runs and envisages programs and
          projects in the area of academics, talent development, and
          importantly, after-school child development programs in the form of
          skills training and workshops for primary and secondary education
          students. For higher education students, FCI provides soft & hard
          skills training, workshops, and field visits besides academics and
          talent development.
        </p>
        <p className="mt-3 text-lg text-gray-700 leading-relaxed">
          FCI supports girl children from its primary target communities,
          encouraging girl child education, employable skills, and imparting
          special useful courses for their career growth.
        </p>

        {/* Gallery Section */}
        <section className="mt-10">
          <h3 className="text-3xl font-semibold text-gray-800">Gallery</h3>
          <div className="relative w-full max-w-lg mx-auto mt-6 overflow-hidden rounded-lg shadow-lg">
            <div className="w-full h-64 flex justify-center items-center relative">
              {/* Left Arrow */}
              <button
                onClick={prevImage}
                className="absolute left-2 bg-gray-800 text-white p-2 rounded-full opacity-75 hover:opacity-100 transition-all"
              >
                <FaArrowLeft size={20} />
              </button>

              {/* Image Display */}
              <img
                src={galleryImages[currentIndex]}
                alt="Gallery Image"
                className="w-full h-full object-cover transition-all duration-500"
              />

              {/* Right Arrow */}
              <button
                onClick={nextImage}
                className="absolute right-2 bg-gray-800 text-white p-2 rounded-full opacity-75 hover:opacity-100 transition-all"
              >
                <FaArrowRight size={20} />
              </button>
            </div>
          </div>
        </section>

        {/* Girls in Tech Section with Border */}
        <section className="mt-12 bg-[#f0f4f8]] shadow-lg rounded-lg p-6 border border-gray-600">
          <h3 className="text-3xl font-semibold text-gray-900">
            Girls in Tech
          </h3>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            <span className="font-bold">
              "Empowering Engineering Girl Students through Skill Enhancement,
              STEM/Digital Learning & Educational Assistance"
            </span>
          </p>
          <p className="mt-3 text-lg text-gray-700 leading-relaxed">
            This project aims at supporting young women, first-generation
            engineers, to complete their engineering studies and land their
            dream jobs. It provides an enabling environment to enhance their
            employability.
          </p>
          <p className="mt-3 text-lg text-gray-700 leading-relaxed">
            Participants receive industry-specific employability skills,
            including soft, technical, and professional training. Opportunities
            such as technology festivals, hackathons, and seminars on trending
            topics are provided. Additionally, students are paired with working
            professionals as mentors and receive a monthly stipend to help cover
            essential expenses.
          </p>
        </section>

        {/* Draw Your Dreams Section with Border */}
        <section className="mt-12 bg-[#f0f4f8] shadow-lg rounded-lg p-6 border border-gray-600">
          <h3 className="text-3xl font-semibold text-gray-900">
            Draw Your Dreams
          </h3>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            <span className="font-bold">
              "Creating Dreams and Aspirations through Creative Art"
            </span>
          </p>
          <p className="mt-3 text-lg text-gray-700 leading-relaxed">
            The "Drawing Competition" is a platform for children to exhibit
            their artistic talents, express their dreams, and gain competition
            experience. It is open to underprivileged school-going children from
            grades 1 to 9, regardless of their region, religion, or caste.
          </p>
          <p className="mt-3 text-lg text-gray-700 leading-relaxed">
            This event helps children build self-confidence, shifting their
            mindset from "I can't draw" to "I can enter this contest... and I
            might win!"
          </p>
        </section>
      </div>
    </div>
  );
};

export default Education;
