import React from "react";
import { useNavigate } from "react-router-dom";

import Map from "./Map";

function Dashboard() {
  // const navigate = useNavigate();

  return (
    <div className="container">
      <div className="dashboard-container">
        <div className="mission-statement">
          <p>
            We're collecting data on charities working on raising funds and
            distribution of ration among Covid-19 affectees in Pakistan. If you
            would like to donate, find a charity operating in a particular city
            or nationwide below.{" "}
          </p>
        </div>
        <a
          href="https://forms.gle/XairQb6U5mdkAUWs9"
          className="charity-button"
          role="button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Add Charity
        </a>
        <div className="map">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
