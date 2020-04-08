import React from 'react';

function Navbar() {
  return (
    <nav class="w-100 navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Covid Relief</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav w-100 justify-content-around">
          <a class="nav-item nav-link" href="#">About</a>
          <a class="nav-item nav-link" href="#">Charities</a>
          <a class="nav-item nav-link" href="#">Map</a>
          <a class="nav-item nav-link " href="#">Donate Now!</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;