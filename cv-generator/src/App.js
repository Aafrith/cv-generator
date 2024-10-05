import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import CvUpload from './pages/CvUpload';
import TemplateSelection from './pages/TemplateSelection';

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
      </Routes>
    </Router>
  );
}

export default App;
