const MatchCard = ({ match, onBook }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
       <img
          src={match.image}
          alt={match.id}
          className="w-full h-40 object-cover rounded-t-lg mb-4"
        />
      <h3 className="text-lg font-bold">{match.title}</h3>
      <p className="mt-2 text-gray-700 text-sm">Date: {match.date}</p>
      <p className=" text-gray-700 text-sm">Venue: {match.venue}</p>
      <button
        onClick={onBook}
        className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Book Now
      </button>
    </div>
  );
};

export default MatchCard;

