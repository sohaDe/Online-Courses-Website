import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/images/logor1.png'
import Button from "./Button";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, []);

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="bg-white w-full z-50 shadow-sm backdrop-blur-sm fixed top-0">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">

        <div className="w-[200px] h-[80px] flex items-center">
          <Link to="/">
            <img src={logo} className="w-full h-full object-contain" />
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none cursor-pointer"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        <div className="hidden md:flex gap-8 absolute left-1/2 -translate-x-1/2">
          <Link to="/" className="text-base font-medium text-gray-700 hover:text-blue-600 transition">Home</Link>
          <Link to="/courses" className="text-base font-medium text-gray-700 hover:text-blue-600 transition">Courses</Link>
          <Link to="/cart" className="text-base font-medium text-gray-700 hover:text-blue-600 transition">Cart</Link>
        </div>

        <div className="hidden md:block ml-auto">
          {isLoggedIn ? (
            <Button onClick={handleLogout} variant="primary" size="sm">Logout</Button>
          ) : (
            <Button to="/login" variant="primary" size="sm">Login</Button>
          )}
        </div>

        {isOpen && (
          <div className="absolute top-20 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center py-4 gap-4">
            <Link to="/" className="text-base font-medium text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/courses" className="text-base font-medium text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Courses</Link>
            <Link to="/cart" className="text-base font-medium text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Cart</Link>

            {isLoggedIn ? (
              <Button onClick={() => { handleLogout(); setIsOpen(false); }} variant="primary" size="sm">Logout</Button>
            ) : (
              <Button to="/login" variant="primary" size="sm" onClick={() => setIsOpen(false)}>Login</Button>
            )}
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
