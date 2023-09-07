import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SeekProject from './pages/SeekProject/SeekProject';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/" element={<SeekProject />}/>
      </Routes>
    </>
  );
}

export default App;