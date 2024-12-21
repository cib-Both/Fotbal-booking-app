import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className=" bg-blue-600 h-screen flex items-center justify-center text-center">
      <div className="text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Experience Live Football</h1>
        <p className="text-lg md:text-xl mb-8">
          Book your tickets now and witness the thrill of live matches!
        </p>
        <button
          onClick={() => navigate('/booking')}
          className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold shadow hover:bg-gray-100 transition"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
