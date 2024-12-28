const MatchDetails = () => {
  const matches = [
    { title: 'Team A vs Team B', date: '10th Dec', venue: 'Stadium X' },
    { title: 'Team C vs Team D', date: '15th Dec', venue: 'Stadium Y' },
    { title: 'Team C vs Team D', date: '15th Dec', venue: 'Stadium Y' },
    { title: 'Team C vs Team D', date: '15th Dec', venue: 'Stadium Y' },
    { title: 'Team C vs Team D', date: '15th Dec', venue: 'Stadium Y' },
    { title: 'Team C vs Team D', date: '15th Dec', venue: 'Stadium Y' },
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
