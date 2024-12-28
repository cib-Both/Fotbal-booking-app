import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  // Function to check if the link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-blue-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-wide">⚽Football Booking</h1>
        <div className="space-x-6 text-lg font-bold">
          <Link
            to="/"
            className={`hover:text-yellow-400 transition duration-300 ${
              isActive("/") ? "text-yellow-400" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/connect"
            className={`hover:text-yellow-400 transition duration-300 ${
              isActive("/connect") ? "text-yellow-400" : ""
            }`}
          >
            Connect
          </Link>
          <Link
            to="/booking"
            className={`hover:text-yellow-400 transition duration-300 ${
              isActive("/booking") ? "text-yellow-400" : ""
            }`}
          >
            Booking
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
