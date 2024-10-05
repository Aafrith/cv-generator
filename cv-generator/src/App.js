import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import CvUpload from './pages/CvUpload';
import TemplateSelection from './pages/TemplateSelection';
import Register from './pages/Register'; // Import the Register component

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route for Login */}
        <Route path="/" element={<Login />} />

        {/* Route for uploading CV after login */}
        <Route path="/upload" element={<CvUpload />} />

        {/* Route for selecting a CV template */}
        <Route path="/templates" element={<TemplateSelection />} />

        {/* Route for registration */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
