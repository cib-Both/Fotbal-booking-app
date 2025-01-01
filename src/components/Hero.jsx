import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center text-center bg-gradient-to-br from-blue-500 to-blue-900 ">
      <div className="text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Experience Live Football</h1>
        <p className="text-lg md:text-xl mb-8">
          Book your tickets now and witness the thrill of live matches!
        </p>
        <button
          onClick={() => navigate('/booking')}
          className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-gray-100 transition"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
