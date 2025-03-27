import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-center">
      <img
        src="/background1.jpg"
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-blue-900 opacity-50"></div>
      <h1 className="text-5xl font-extrabold text-white drop-shadow-lg z-10">
        FUND A CHILD IN INDIA
      </h1>
      <p className="text-2xl mt-4 text-gray-200 font-medium z-10">
        Educate and Empower a CHILD
      </p>
      <p className="text-lg mt-4 text-gray-400 z-10 px-6">
        Fund a Child in India empowers underprivileged youth <br />
        through education, with a primary focus on the girl child.
      </p>
      <button
        className="mt-6 px-6 py-3 bg-white text-blue-900 font-semibold rounded-md shadow-lg hover:bg-gray-200 transition z-10"
        onClick={() => navigate("/landing")}
      >
        Know More
      </button>
    </div>
  );
};

export default Home;
