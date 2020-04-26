import React from "react";
import { useNavigate } from "react-router-dom";

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
          add a charity or individual/organisation working to mitigate the pain
          of the common people, please click on the Add Charity button and fill
          the Google Form.
        </div>
        <a
          href="https://forms.gle/XairQb6U5mdkAUWs9"
          class="charity-button"
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
