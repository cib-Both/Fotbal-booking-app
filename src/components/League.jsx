import { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp} from 'react-icons/fa';

const LeagueTable = () => {
  const [activeLeague, setActiveLeague] = useState('premier-league');
  const [expandedView, setExpandedView] = useState(false);
  const [leagues, setLeagues] = useState(null);

  useEffect(() => {
    fetch('/data/leagues.json')
      .then((res) => res.ok ? res.json() : Promise.reject('Failed to load'))
      .then(setLeagues)
      .catch(console.error);
  }, []);

  if (!leagues) return <div className="text-center py-10">Loading standings...</div>;

  const league = leagues[activeLeague];

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
      {/* League Tabs */}
      <div className="flex border-b border-gray-200 bg-gray-50">
        {Object.entries(leagues).map(([key, l]) => (
          <button
            key={key}
            onClick={() => setActiveLeague(key)}
            className={`flex-1 py-3 px-2 font-medium transition-all duration-200 ${
              activeLeague === key
                ? 'bg-white text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <img src={l.logo} alt={l.name} className="h-5 w-5 object-contain" />
              <span className="hidden sm:inline">{l.name}</span>
            </div>
          </button>
        ))}
      </div>

      <div className="p-4">
        {/* Header Row */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-600 flex items-center gap-3">
            <img src={league.logo} alt={league.name} className="h-14 w-14 object-contain" />
            {league.name}
          </h2>
          <button
            onClick={() => setExpandedView(!expandedView)}
            className="text-sm text-white font-medium bg-blue-600 flex items-center py-2 px-4 rounded-lg"
          >
            {expandedView ? (
              <>
                Compact view <FaChevronUp className="ml-1" />
              </>
            ) : (
              <>
                Full view <FaChevronDown className="ml-1" />
              </>
            )}
          </button>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-12 text-xs sm:text-sm font-semibold text-gray-600 bg-gray-100 px-3 py-2 rounded-md">
          <div className="col-span-1">#</div>
          <div className="col-span-5 sm:col-span-4">Team</div>
          <div className="col-span-1 text-center ">PL</div>
          {expandedView && (
            <>
              <div className="col-span-1 text-center hidden sm:block">W</div>
              <div className="col-span-1 text-center hidden sm:block">D</div>
              <div className="col-span-1 text-center hidden sm:block">L</div>
            </>
          )}
          <div className="col-span-2 text-center">GD</div>
          <div className="col-span-2 sm:col-span-1 text-center">PTS</div>
        </div>

        {/* Table Rows */}
        <div className="divide-y divide-gray-100">
          {league.teams.map((team) => (
            <div
              key={team.name}
              className={`grid grid-cols-12 px-3 py-2 items-center text-sm ${
                team.position <= 5 ? 'font-medium' : ''
              } hover:bg-gray-50`}
            >
              <div className="col-span-1 flex items-center">
                {team.position}
              </div>
              <div className="col-span-5 sm:col-span-4 flex items-center gap-2 truncate">
                {team.position <= 5 && (
                  <span className="w-0.5 h-4 bg-blue-500" title="Champions League"></span>
                )}
                {team.position === 6 && (
                  <span className="w-0.5 h-5 bg-orange-500" title="Europa League"></span>
                )}
                {team.position === 7 && (
                  <span className="w-0.5 h-5 rounded-full bg-green-500" title="Conference League qualification"></span>
                )}
                {team.position >= league.teams.length - 2 && (
                  <span className="w-0.5 h-5 rounded-full bg-red-500" title="Relegation"></span>
                )}
                <span className="truncate">{team.name}</span>
              </div>
              <div className="col-span-1 text-center ">{team.played}</div>
              {expandedView && (
                <>
                  <div className="col-span-1 text-center hidden sm:block">{team.won}</div>
                  <div className="col-span-1 text-center hidden sm:block">{team.drawn}</div>
                  <div className="col-span-1 text-center hidden sm:block">{team.lost}</div>
                </>
              )}
              <div className="col-span-2 text-center">{team.gd}</div>
              <div
                className={`col-span-2 sm:col-span-1 text-center ${
                  team.position <= 5 ? 'text-blue-600 font-semibold' : ''
                }`}
              >
                {team.points}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap gap-4 text-xs sm:text-sm text-gray-600">
          <Legend color="blue" label="Champions League" />
          <Legend color="orange" label="Europa League" />
          <Legend color="green" label="Conference League qualification" />
          <Legend color="red" label="Relegation" />
        </div>
      </div>
    </div>
  );
};

const Legend = ({ color, label }) => (
  <div className="flex items-center">
    <div className={`w-4 h-3 rounded-md border mr-2 bg-${color}-500`} />
    <span>{label}</span>
  </div>
);

export default LeagueTable;
