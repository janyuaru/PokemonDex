import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokemonDex from './pages/PokemonDex.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PokemonDex/>} />
      </Routes>
    </Router>
  );
}

export default App;