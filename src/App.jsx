import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Transport from './pages/Transport';
import Hotels from './pages/Hotels';
import Food from './pages/Food';
import Places from './pages/Places';
import Tickets from './pages/Tickets';
import Scam from './pages/Scam';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/"           element={<Home />} />
          <Route path="/transport"  element={<Transport />} />
          <Route path="/hotels"     element={<Hotels />} />
          <Route path="/food"       element={<Food />} />
          <Route path="/places"     element={<Places />} />
          <Route path="/tickets"    element={<Tickets />} />
          <Route path="/scam"       element={<Scam />} />
          <Route path="/login"      element={<Login />} />
          <Route path="/signup"     element={<Signup />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
