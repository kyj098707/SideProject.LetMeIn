import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Board from './pages/Board';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/board" element={<Board />}/>
      </Routes>
    </>
  );
}

export default App;