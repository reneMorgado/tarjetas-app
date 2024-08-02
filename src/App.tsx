import React from 'react';
import './App.scss';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from './pages/Main/Main';
import CardsContextProvider from './context/CardsContext';
import Navbar from './components/Navbar/Navbar';
import Help from './pages/Help/Help';
import NewCard from './pages/NewCard/NewCard';
import AllCards from './pages/AllCards/AllCards';
import Wave from './img/wave.svg'

function App() {
  return (
    <BrowserRouter>
      <CardsContextProvider>
        <Navbar />
        <img className='wave' src={Wave} alt="wave" />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<Help />} />
          <Route path="/add-card" element={<NewCard />} />
          <Route path="/cards" element={<AllCards />} />
        </Routes>
      </CardsContextProvider>
    </BrowserRouter>
  );
}

export default App;
