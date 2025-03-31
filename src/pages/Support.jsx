import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Support = () => {
  // Gallery Images
  const galleryImages = [
    "/support1.jpg",
    "/support2.jpg",
    "/support3.jpg",
    "/support4.jpg",
    "/support5.jpg",
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
        <h2 className="text-3xl font-bold text-blue-900">
          Relevant Support to the Poor
        </h2>

        {/* Description */}
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          It focuses on the immediate needs of the poor & indigent persons
          through the provision of school material supply and physical
          nourishment to children and youth.
        </p>
        <p className="mt-3 text-lg text-gray-700 leading-relaxed">
          School supplies such as notebooks, sports equipment, school band,
          school uniforms with belt & tie, school shoes, school bags, geometry
          boxes, sketch pens & crayons are distributed to school students from
          Government and NGO-run schools. Besides, cash awards and watches were
          given to the school toppers to encourage and motivate them to pursue
          their higher education. Books & Soft Toys were donated to Libraries in
          Schools & Communities in Karnataka.
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

export default Support;
