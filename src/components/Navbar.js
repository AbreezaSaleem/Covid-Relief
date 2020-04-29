import React from "react";

function Navbar() {
  return (
    <nav className="w-100 navbar navbar-expand-lg navbar-light navbar-container">
      <a className="navbar-brand" href="/">
        Covid Relief Pakistan
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    </nav>
  );
}

export default Navbar;
