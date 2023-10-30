import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './view/Navbar/Navbar';
import Footer from './view/Footer/Footer';
import LandingPage from './view/LandingPage/LandingPage';
import Login from './view/Login/Login';
import Review from './view/board/Review';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ minHeight: 'calc(100vh - 95px)' }}>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/board" element={< Review />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
