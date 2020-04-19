import React from "react";
import { useNavigate } from "react-router-dom";

import logo from "../images/logo.svg";

import Map from "./Map";

function Dashboard() {
  // const navigate = useNavigate();

  return (
    <div className="container">
      <div className="dashboard-container">
        <div className="mission-statement">
          We're collecting data on charities working on raising funds and
          distribution of ration among needy in Pakistan. If you are looking to
          donate, search the city in the dropdown below. If you would like to
          contribute (i.e add a charity to the list please contribute on GitHub)
        </div>
        <div className="map">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
