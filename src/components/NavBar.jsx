import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-cont">
        <Link to="/" className="navbar-logo">
          {" "}
          TRAVEL{" "}
        </Link>
      </div>
      <div className="navbar-cont">
        <Link to="/" className="navbar-logo">
          {" "}
          Home{" "}
        </Link>
        <div className="navbar-cont">
          <Link to="/" className="navbar-logo">
            {" "}
            About{" "}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
