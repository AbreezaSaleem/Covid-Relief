import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../images/logo.svg'

import Map from './Map';

function Dashboard() {
  const navigate = useNavigate();

  const handleClick = event => {
    event.preventDefault();
    navigate('donate');
  }

  return (
    <div className="container">
      <div className="dashboard-container">
        <img className="logo" src={logo} />
        <div className="mission-statement">
          Covid Relief is a platform for various charity groups to get together and collaborate on the collection of funds and distribution of ration among needy. There is a need for a consolidated effort and platform rather than various groups working independently, this ensures maximal output and efficiency. We would know no one is getting ration multiple times. And no one is not getting any supplies. All in all just a streamlined process for collaborating on distribution of funds and ration. 
        </div>
        <data className="donate">
          <div>Help us save lives</div>
          <button type="button" onClick={handleClick}>Donate Now!</button>
        </data>
        <div className="map">
          <Map />
        </div>
        <div className="charities">
          charities
        </div>
        
      </div>
    </div>
  );
}

export default Dashboard;
