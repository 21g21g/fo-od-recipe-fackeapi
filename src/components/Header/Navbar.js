import { Link } from "react-router-dom";
import React from "react";
const Navbar = () => {
  return (
    <nav className="container-fluid">
      <div className="container-fluid m-0">
        <div className="navbar-content text-white bg-dark">
          <Link to="/" className="navbar-brand fw-3 fs-15 flex align-center">
            <h1>Geba food</h1>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
