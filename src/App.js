import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// components
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
