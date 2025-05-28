import { FaPhone, FaTelegramPlane, FaFacebookF, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

const ConnectWithUs = () => {
  const contactMethods = [
    {
      icon: <FaPhone className="text-xl" />,
      method: 'Phone',
      contact: '+1 (123) 456-7890',
      link: '#',
      color: 'bg-green-100 text-green-600',
      action: 'Call Now'
    },
    {
      icon: <FaWhatsapp className="text-xl" />,
      method: 'WhatsApp',
      contact: '+1 (123) 456-7890',
      link: '#',
      color: 'bg-green-100 text-green-600',
      action: 'Message Us'
    },
    {
      icon: <FaTelegramPlane className="text-xl" />,
      method: 'Telegram',
      contact: '@FootballBooking',
      link: '#',
      color: 'bg-blue-100 text-blue-600',
      action: 'Join Channel'
    },
    {
      icon: <FaFacebookF className="text-xl" />,
      method: 'Facebook',
      contact: 'Football Booking',
      link: '#',
      color: 'bg-blue-100 text-blue-600',
      action: 'Follow Us'
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      method: 'Email',
      contact: 'info@footballbooking.com',
      link: '#',
      color: 'bg-red-100 text-red-600',
      action: 'Send Email'
    },
    {
      icon: <FaMapMarkerAlt className="text-xl" />,
      method: 'Office',
      contact: '123 Stadium Ave, Sports City',
      link: '#',
      color: 'bg-purple-100 text-purple-600',
      action: 'Get Directions'
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Connect With Us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're here to help! Choose your preferred way to get in touch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactMethods.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-blue-500 transition-colors"
            >
              <div className="p-6">
                <div className="flex items-start">
                  <div className={`p-3 rounded-lg ${item.color} mr-4`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      {item.method}
                    </h3>
                    <p className="text-gray-600 mb-4">{item.contact}</p>
                    <span className={`inline-block px-3 py-1 text-sm font-medium rounded-md ${item.color}`}>
                      {item.action}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg border border-gray-200 p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-center mb-4 text-gray-800">
            Send Us a Message
          </h3>
          <p className="text-center text-gray-600 mb-6">
            Have questions? Fill out our contact form and we'll respond promptly.
          </p>
          <div className="text-center">
           <>
           <ContactForm/>
           </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithUs;