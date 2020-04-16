import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// components
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Donate from './pages/Donate';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
