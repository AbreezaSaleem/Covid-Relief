import React from 'react';

function Navbar() {
  return (
    <nav className="w-100 navbar navbar-expand-lg navbar-light navbar-container">
      <a className="navbar-brand" href="/">Covid Relief</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav w-100 justify-content-around">
          <a className="nav-item nav-link" href="#">About</a>
          <a className="nav-item nav-link" href="#">Charities</a>
          <a className="nav-item nav-link" href="#">Map</a>
          <a className="nav-item nav-link " href="/donate">Donate Now!</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;