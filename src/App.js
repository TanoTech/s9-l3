import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import DisplayBooks from './components/DisplayBooks';
import FantasyBook from './components/FantasyBook';
import HistoryBook from './components/HistoryBook';
import HorrorBook from './components/HorrorBooks';
import RomanceBook from './components/RomanceBook';
import Footer from './components/Footer';
import ScifiBook from './components/ScifiBook';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<DisplayBooks />} />
          <Route path="/fantasy" element={<FantasyBook />} />
          <Route path="/history" element={<HistoryBook />} />
          <Route path="/horror" element={<HorrorBook />} />
          <Route path="/romance" element={<RomanceBook />} />
          <Route path="/scifi" element={<ScifiBook />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
