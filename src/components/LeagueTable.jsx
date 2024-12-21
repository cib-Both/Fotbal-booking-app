import React from "react";

const teams = [
  {
    id: 1,
    name: "Preah Khan Reach Svay Rieng FC",
    played: 5,
    won: 5,
    drawn: 0,
    lost: 0,
    goalsFor: 12,
    goalsAgainst: 4,
    goalDiff: 8,
    points: 15,
    logo: "https://via.placeholder.com/40",
  },
  {
    id: 2,
    name: "Phnom Penh Crown FC",
    played: 5,
    won: 4,
    drawn: 0,
    lost: 1,
    goalsFor: 8,
    goalsAgainst: 5,
    goalDiff: 3,
    points: 12,
    logo: "https://via.placeholder.com/40",
  },
  {
    id: 3,
    name: "Boeungket FC",
    played: 5,
    won: 3,
    drawn: 1,
    lost: 1,
    goalsFor: 12,
    goalsAgainst: 6,
    goalDiff: 6,
    points: 10,
    logo: "https://via.placeholder.com/40",
  },

];

const LeagueTable = () => {
  return (
    <div className="container mx-auto my-12 p-4 md:p-8 bg-white rounded-lg shadow-lg">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800 uppercase">
          Cambodian Premier League
        </h1>
        <h2 className="text-2xl font-bold text-blue-600 mt-5 ">Season 2024-25</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm md:text-base border-collapse">
          {/* Table Header */}
          <thead>
            <tr className="bg-blue-600 text-white uppercase text-center">
              <th className="p-3">#</th>
              <th className="p-3 text-left">Club</th>
              <th className="p-3">P</th>
              <th className="p-3">W</th>
              <th className="p-3">D</th>
              <th className="p-3">L</th>
              <th className="p-3">F</th>
              <th className="p-3">A</th>
              <th className="p-3">GD</th>
              <th className="p-3">PNT</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {teams.map((team, index) => (
              <tr
                key={team.id}
                className={`text-center ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100 transition`}
              >
                <td className="p-3 font-bold">{index + 1}</td>
                <td className="p-3 flex items-center gap-3 text-left">
                  <img
                    src={team.logo}
                    alt={team.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="font-semibold text-gray-800">{team.name}</span>
                </td>
                <td className="p-3">{team.played}</td>
                <td className="p-3">{team.won}</td>
                <td className="p-3">{team.drawn}</td>
                <td className="p-3">{team.lost}</td>
                <td className="p-3">{team.goalsFor}</td>
                <td className="p-3">{team.goalsAgainst}</td>
                <td className="p-3 font-bold">{team.goalDiff}</td>
                <td className="p-3 font-bold text-blue-600">{team.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeagueTable;
