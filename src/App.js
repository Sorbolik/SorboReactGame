import React from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { RoomSelectionPage } from './pages/RoomSelection/RoomSelectionPage';
import { GamePage } from './pages/game/GamePage';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<RoomSelectionPage />} />
          <Route path="/game" element={<GamePage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
