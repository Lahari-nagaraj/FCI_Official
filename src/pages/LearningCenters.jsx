import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const LearningCenters = () => {
  // Gallery Images
  const galleryImages = [
    "/learning1.jpg",
    "/learning2.jpg",
    "/learning3.jpg",
    "/learning4.jpg",
    "/learning5.jpg",
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
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-blue-900">Learning Centres</h2>

        {/* Description */}
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          It focuses on equipping the poor deserving children & youth through
          establishing, running, and maintaining Training Centres; Community
          Learning/Enrichment/Tuition Centres; Community Libraries, etc. for the
          sole use of the public good benefiting the students of weaker sections
          of society.
        </p>
        <p className="mt-3 text-lg text-gray-700 leading-relaxed">
          FCI launched its training wing{" "}
          <span className="font-bold">“FCI Training Centre”</span> in Bangalore
          in the year 2016. Training in Skill Enhancement was conducted for
          several batches of girl students pursuing engineering courses. The
          training was offered in soft skills, technical skills, and
          professional skills, mainly focusing on preparing them for jobs.
        </p>
        <p className="mt-3 text-lg text-gray-700 leading-relaxed">
          <span className="font-bold">IVT-India</span> was the training partner
          of Find a Child in India to conduct these training sessions. The
          training centre was closed in 2020 when COVID-19 crept in as the
          sessions were moved online.
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
      </div>
    </div>
  );
};

export default LearningCenters;
