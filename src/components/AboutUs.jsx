const AboutUs = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:space-x-8">

        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            At Football Booking, we aim to bring football enthusiasts closer to the action. With our easy-to-use
            platform, booking tickets for your favorite matches has never been easier. Join us and be part of the
            electrifying atmosphere of live football!
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our mission is to connect fans with unforgettable moments, making live football more accessible and
            enjoyable for everyone.
          </p>
        </div>

        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <img
            src="https://stadiumdb.com/pic-projects/cambodia_national_stadium/cambodia_national_stadium08.jpg" alt="Football Fans" className="rounded-lg shadow-lg"/>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
