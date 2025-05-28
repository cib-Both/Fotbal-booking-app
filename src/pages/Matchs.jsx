import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Matchs = () => {
  const [matches, setMatches] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch JSON from public folder
    fetch('/data/matches.json')
      .then((res) => res.json())
      .then((data) => setMatches(data))
      .catch((err) => console.error('Error fetching matches:', err));
  }, []);

  // Filter matches based on active filter and search term
  const filteredMatches = matches.filter(match => {
    const matchesSearch = match.homeTeam.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         match.awayTeam.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         match.league.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         match.venue.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (activeFilter === 'all') return matchesSearch;
    if (activeFilter === 'available') return match.ticketsAvailable && matchesSearch;
    return match.league.toLowerCase().includes(activeFilter.toLowerCase()) && matchesSearch;
  });

  const filters = [
    { id: 'all', label: 'All Matches' },
    { id: 'available', label: 'Tickets Available' },
    { id: 'premier league', label: 'Premier League' },
    { id: 'la liga', label: 'La Liga' },
    { id: 'Bundesliga', label: 'Bundesliga' },
    { id: 'Serie A', label: 'Serie A' },
    { id: 'Ligue 1', label: 'Ligue 1' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            All Upcoming <span className="text-blue-600">Matches</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse through the most exciting football matches and secure your tickets today
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="w-full md:w-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search matches..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="w-full md:w-auto relative">
            <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === filter.id ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Matches Grid */}
        {filteredMatches.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMatches.map((match) => (
              <div key={match.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {match.league}
                    </span>
                    <span className="text-sm text-gray-500">
                      {new Date(match.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <img className="h-11 w-10  object-contain" src={match.homeLogo} alt={match.homeTeam} />
                      <span className="font-medium text-sm text-gray-900">{match.homeTeam}</span>
                    </div>
                    <div className="px-4 py-1 bg-gray-100 rounded-full text-sm font-medium">
                      {match.time}
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-medium text-gray-900">{match.awayTeam}</span>
                      <img className="h-11 w-10  object-contain" src={match.awayLogo} alt={match.awayTeam} />
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      <svg className="h-4 w-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {match.venue}
                    </div>
                    <Link
                      to={`/booking/${match.id}`}
                      className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium ${match.ticketsAvailable ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
                      disabled={!match.ticketsAvailable}
                    >
                      {match.ticketsAvailable ? 'Book Now' : 'Sold Out'}
                      <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">No matches found</h3>
            <p className="mt-1 text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Matchs;