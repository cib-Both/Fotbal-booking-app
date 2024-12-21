import { FaPhone, FaTelegramPlane, FaFacebookF, FaEnvelope } from 'react-icons/fa';

const ConnectWithUs = () => {
  const contactMethods = [
    {
      icon: <FaPhone />,
      method: 'Phone',
      contact: '123-456-7890',
      link: 'tel:123-456-7890',
      color: 'bg-green-500',
    },
    {
      icon: <FaTelegramPlane />,
      method: 'Telegram',
      contact: '@FootballBooking',
      link: 'https://t.me/FootballBooking',
      color: 'bg-blue-400',
    },
    {
      icon: <FaFacebookF />,
      method: 'Facebook',
      contact: 'Football Booking',
      link: 'https://facebook.com/FootballBooking',
      color: 'bg-blue-600',
    },
    {
      icon: <FaEnvelope />,
      method: 'Email',
      contact: 'info@footballbooking.com',
      link: 'mailto:info@footballbooking.com',
      color: 'bg-red-500',
    },
  ];

  return (
    <div className="pt-16 pb-64 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
          Connect With Us
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
          Have questions or need assistance? Reach out to us through any of the following channels. 
          We're here to help!
        </p>


        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactMethods.map((item, index) => (
            <a
              key={index}
              href={item.link}
              aria-label={item.method}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
            >
              <div
                className={`w-16 h-16 mx-auto flex items-center justify-center text-white text-3xl rounded-full mb-4 ${item.color} group-hover:brightness-110`}
              >
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600">
                {item.method}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-800">{item.contact}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConnectWithUs;
