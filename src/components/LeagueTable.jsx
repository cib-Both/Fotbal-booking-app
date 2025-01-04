import React, { useEffect, useState } from "react";

const LeagueTable = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = "http://localhost:3000/teams";

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data from API");
        }
        return response.json();
      })
      .then((data) => {
        setTeams(data); 
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading league table...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-600">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto my-12 p-4 md:p-8 bg-gray-50 rounded-lg shadow-xl">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800 uppercase">
          Cambodian Premier League
        </h1>
        <h2 className="text-2xl font-bold text-blue-600 mt-5">Season 2024-25</h2>
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
                    className="w-8 h-9 object-cover"
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
