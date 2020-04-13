import React from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../images/logo.svg'

// components
import Map from './Map';
import Navbar from '../components/Navbar';

function Dashboard() {
  // const navigate = useNavigate();

  return (
    <div className="container">
      <Navbar />
      <div className="dashboard-container">
        <img className="logo" src={logo} />
        <div className="mission-statement">
          Covid Relief is a platform for various charity groups to get together and collaborate on the collection of funds and distribution of ration among needy. There is a need for a consolidated effort and platform rather than various groups working independently, this ensures maximal output and efficiency. We would know no one is getting ration multiple times. And no one is not getting any supplies. All in all just a streamlined process for collaborating on distribution of funds and ration. 
        </div>
        <data className="donate">
          <div>Help us save lives</div>
          <button type="button">Donate Now!</button>
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
