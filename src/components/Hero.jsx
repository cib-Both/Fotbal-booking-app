import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen flex items-center justify-center text-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white animate-float1"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 rounded-full bg-white animate-float2"></div>
        <div className="absolute bottom-1/4 right-1/4 w-28 h-28 rounded-full bg-white animate-float3"></div>
      </div>
      
      <div className="relative z-10 text-white px-4 max-w-4xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500">
            Live Football
          </span>
        </h1>
        
        <p className="text-lg md:text-2xl mb-10 max-w-2xl mx-auto opacity-90">
          Secure your seats for the most thrilling matches of the season. Feel the energy of the crowd like never before.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/matches')}
            className="relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Book Tickets Now
            <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-100 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-200"></span>
            </span>
          </button>
        </div>
        
        <div className="mt-16 flex justify-center">
          <div 
            onClick={() => window.scrollBy({ top: window.innerHeight - 100, behavior: 'smooth' })}
            className="w-10 h-16 border-4 border-white rounded-full cursor-pointer flex justify-center"
          >
            <div className="w-2 h-2 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
      
      {/* Add these animations to your Tailwind config */}
      <style jsx global>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-20px, -20px) rotate(5deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(15px, -15px) rotate(-5deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(10px, 20px) rotate(3deg); }
        }
        .animate-float1 { animation: float1 8s ease-in-out infinite; }
        .animate-float2 { animation: float2 10s ease-in-out infinite; }
        .animate-float3 { animation: float3 12s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Hero;