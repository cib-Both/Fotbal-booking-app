import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navi = useNavigate();

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:space-x-12 px-6 lg:px-12">
       
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">About Us</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Welcome to <span className="font-semibold text-blue-600">FOTBAL</span> — your ultimate destination 
            for live football action. Whether you're a die-hard fan or a casual enthusiast, our platform is designed to 
            make attending matches as seamless as possible.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            We believe football is more than a sport; it's a way to connect people. From roaring stadiums to heart-racing 
            moments on the field, our mission is to bring fans closer to their favorite games and unforgettable memories.
          </p>
          <ul className="list-disc text-lg text-gray-600 leading-relaxed mb-6 pl-6">
            <li>Effortless ticket booking for all major matches.</li>
            <li>Exclusive insights and updates on upcoming games.</li>
            <li>A community for football lovers across the globe.</li>
          </ul>
          <button 
            onClick={() => navi('/connect')}
            className="mt-4 px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg shadow-lg hover:bg-blue-700 transition">
            Contect Us
          </button>
        </div>

        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <div className="relative group">
            <img
              src="https://stadiumdb.com/pic-projects/cambodia_national_stadium/cambodia_national_stadium08.jpg"
              alt="Stadium"
              className="rounded-lg shadow-lg object-cover w-full h-96"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
