const MatchDetails = () => {
  const matches = [
    { title: 'Visakha vs Ministry FA', date: 'Jun 14, 6:00PM', venue: 'Prince Stadium' },
    { title: 'Angkor Tiger vs Life FC', date: 'Jun 15, 7:00 pm', venue: 'AIA Stadium' },
    { title: 'Phnom Penh Crown vs Nagaworld', date: 'Jun 20, 6:00PM', venue: 'Smart RSN Stadium' },
    { title: 'Boeung Ket vs ISI Dangkor Senchey', date: 'Jun 22, 5:00PM', venue: 'Olympic Stadium' },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Upcoming Matches</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {matches.map((match, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-2">{match.title}</h3>
              <p className="text-gray-600 mb-2">Date: {match.date}</p>
              <p className="text-gray-600">Venue: {match.venue}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MatchDetails;
