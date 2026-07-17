import { Link } from "react-router-dom";
import { useState } from "react";
import "../css/Navbar.css";

var Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  var [ dropdown1, setCartDropdown ] = useState(false);
  var [ dropdown2, setOrderDropdown ] = useState(false);

    var handleLogout = () => {
        setIsLoggedIn(false);
        setCartDropdown(false);
        setOrderDropdown(false);
    };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <Link to="/" className="li">
            <li>Home</li>
        </Link>
        <Link to="/about" className="li">
            <li>About</li>
        </Link>
        <div
            className="dropdown"
            onMouseEnter={() => setCartDropdown(true)}
            onMouseLeave={() => setCartDropdown(false)}
        >
            <Link to="/cart" className="li">
                Cart
            </Link>

            {dropdown1 && (
                <ul className="dropdown-menu">
                    <li>
                        <Link to="/cart" className="dropdown-link">
                            View Cart
                        </Link>
                    </li>

                    <li>
                        <Link to="/order" className="dropdown-link">
                            Place Order
                        </Link>
                    </li>
                </ul>
             )}
        </div>

        <div
            className="dropdown"
            onMouseEnter={() => setOrderDropdown(true)}
            onMouseLeave={() => setOrderDropdown(false)}
        >
            <a href="/order" className="li">
                Hooks
            </a>

            {dropdown2 && (
                <ul className="dropdown-menu">
                    <li><a href="/use-state" className="dropdown-link">useState hooks</a></li>
                    <li><a href="/use-effect" className="dropdown-link">useEffect hooks</a></li>
                    <li><a href="/use-effect-api" className="dropdown-link">useEffect API</a></li>
                </ul>
            )}
            </div>

            {isLoggedIn ? (
                <li className="li logout-item" onClick={handleLogout}>Logout</li>
            ) : (
                <Link to="/login" className="li">
                   <li>Login</li>
                </Link>
            )}
      </ul>
    </nav>
  );
};

export default Navbar;