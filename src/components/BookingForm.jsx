import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaTicketAlt, FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const BookingForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [match, setMatch] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sample match data - in a real app, you'd fetch this based on the ID
useEffect(() => {
    fetch('/data/matches.json')
      .then((res) => res.json())
      .then((data) => {
        const foundMatch = data.find((m) => m.id === parseInt(id));
        setMatch(foundMatch);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load match data', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="p-6 text-center">Loading match info...</div>;
  if (!match) return <div className="p-6 text-center text-red-500">Match not found.</div>;


  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!phone.trim()) newErrors.phone = 'Phone number is required';
    if (ticketQuantity < 1 || ticketQuantity > 6) newErrors.ticketQuantity = 'Must book 1-6 tickets';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setBookingSuccess(true);
    }, 1500);
  };

  const totalPrice = ticketQuantity * match.ticketPrice;

  if (bookingSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaTicketAlt className="text-green-500 text-2xl" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Booking Confirmed!</h2>
          <p className="text-gray-600 mb-6">
            Your tickets for {match.homeTeam} vs {match.awayTeam} have been booked successfully.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Match:</span>
              <span className="font-medium">
                {match.homeTeam} vs {match.awayTeam}
              </span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Date:</span>
              <span className="font-medium">
                {new Date(match.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
              </span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Tickets:</span>
              <span className="font-medium">{ticketQuantity} x £{match.ticketPrice}</span>
            </div>
            <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-200">
              <span>Total:</span>
              <span>£{totalPrice}</span>
            </div>
          </div>
          <button
            onClick={() => navigate('/matches')}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            Back to Matches
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-white bg-blue-600 hover:bg-blue-700 rounded-lg mb-6 px-4 py-2 font-semibold"
        >
          <FaArrowLeft className="mr-2" />
          Back
        </button>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Match Header */}
          <div className="bg-blue-900 text-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-600">
                {match.league}
              </span>
              <span className="text-sm bg-blue-600 py-1 px-3 rounded-full font-medium">
                {new Date(match.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
              </span>
            </div>

            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <img className="h-16 w-15 mx-auto mb-2 object-contain" src={match.homeLogo} alt={match.homeTeam} />
                <h3 className="text-xl font-bold ">{match.homeTeam}</h3>
              </div>
              <div className="text-2xl font-bold px-4 ">vs</div>
              <div className="text-center">
                <img className="h-16 w-15 mx-auto mb-2 object-contain" src={match.awayLogo} alt={match.awayTeam} />
                <h3 className="text-xl font-bold ">{match.awayTeam}</h3>
              </div>
            </div>
          </div>

          {/* Match Details */}
          <div className="p-6 border-b border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center">
                <FaCalendarAlt className="text-gray-400 mr-2" />
                <span>{new Date(match.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center">
                <FaClock className="text-gray-400 mr-2" />
                <span>{match.time}</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-gray-400 mr-2" />
                <span>{match.venue}</span>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-6">Book Your Tickets</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Ticket Quantity */}
                <div>
                  <label htmlFor="ticketQuantity" className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Tickets (Max 6)
                  </label>
                  <select
                    id="ticketQuantity"
                    value={ticketQuantity}
                    onChange={(e) => setTicketQuantity(parseInt(e.target.value))}
                    className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                      errors.ticketQuantity ? 'border-red-300' : 'border-gray-300'
                    }`}
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} ticket{num !== 1 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                  {errors.ticketQuantity && (
                    <p className="mt-1 text-sm text-red-500">{errors.ticketQuantity}</p>
                  )}
                </div>

                {/* Price Summary */}
                <div className="bg-gray-50 p-4 rounded-md">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Price per ticket:</span>
                    <span className="font-medium">£{match.ticketPrice}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-200">
                    <span>Total:</span>
                    <span>£{totalPrice}</span>
                  </div>
                </div>

                {/* Personal Info */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                      errors.name ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                      errors.email ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                      errors.phone ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                </div>

                {/* Payment Method */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Payment Method
                  </label>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        id="credit-card"
                        name="paymentMethod"
                        type="radio"
                        value="credit-card"
                        checked={paymentMethod === 'credit-card'}
                        onChange={() => setPaymentMethod('credit-card')}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <label htmlFor="credit-card" className="ml-3 block text-sm font-medium text-gray-700">
                        Credit Card
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="paypal"
                        name="paymentMethod"
                        type="radio"
                        value="paypal"
                        checked={paymentMethod === 'paypal'}
                        onChange={() => setPaymentMethod('paypal')}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <label htmlFor="paypal" className="ml-3 block text-sm font-medium text-gray-700">
                        PayPal
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Processing...' : 'Confirm Booking'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;