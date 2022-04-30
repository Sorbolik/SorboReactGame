import React from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { InstanceSelectionPage } from './pages/instanceSelection/InstanceSelectionPage';
import { GamePage } from './pages/game/GamePage';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<InstanceSelectionPage />} />
          <Route path="/game" element={<GamePage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
