import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png"

const Navbar = () => {
  const location = useLocation();
  // Function to check if the link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-blue-950 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
           <img src={logo} alt="Logo"  className="rounded-full h-10 w-10 object-contain"/>
           <h1 className="text-3xl font-bold tracking-wide">FOTBAL</h1>
        </div>
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
            Contact Us
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
