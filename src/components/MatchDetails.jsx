const MatchDetails = () => {
  const matches = [
    { title: 'Visakha vs Ministry FA', date: 'Jun 14, 6:00PM', venue: 'Prince Stadium', image: 'https://pbs.twimg.com/media/FLKehzhVcAIHL8X?format=jpg&name=large' },
    { title: 'Angkor Tiger vs Life FC', date: 'Jun 15, 7:00PM', venue: 'AIA Stadium', image: 'https://cdn.sabay.com/cdn/media.sabay.com/media/sabay-news/Sport-News/Local-Sports/Event/KMH-Champions/636535f27f156_1667577300_medium.jpg' },
    { title: 'Phnom Penh Crown vs Nagaworld', date: 'Jun 20, 6:00PM', venue: 'Smart RSN Stadium' , image: 'https://th.bing.com/th/id/R.e34f6fa40a1490dbab571ee8d2684d3f?rik=yRELsldeGw%2b0Kg&riu=http%3a%2f%2fimage.freshnewsasia.com%2f2019%2fPapa%2ffn-2019-03-25-20-37-06-6.jpg&ehk=V0pamovejYa3FUhLKJIoB0GTVLy9Uy5Z%2fsLgzg0vIwg%3d&risl=&pid=ImgRaw&r=0' },
    { title: 'Boeung Ket vs ISI Dangkor Senchey', date: 'Jun 22, 5:00PM', venue: 'Olympic Stadium' , image: 'https://lareine.com.kh/wp-content/uploads/2019/09/090.jpg' },
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
               <img
                src={match.image}
                alt={match.title}
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-lg font-bold mb-2">{match.title}</h3>
              <p className="text-sm text-gray-600 mt-2">Date: {match.date}</p>
              <p className="text-gray-600 text-sm">Venue: {match.venue}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MatchDetails;
