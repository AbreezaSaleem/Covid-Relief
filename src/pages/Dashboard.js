import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.scss';

// components
import Navbar from '../components/Navbar';

function Dashboard() {
  // const navigate = useNavigate();

  return (
    <div className="container">
      <Navbar />
      <div className="mission-statement">
        mission statement
      </div>
      <div className="charities">
        charities
      </div>
      <div className="map">
        map
      </div>
      <data className="donate">
        donate
      </data>
    </div>
  );
}

export default Dashboard;
