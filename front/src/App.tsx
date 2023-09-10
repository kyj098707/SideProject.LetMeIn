import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LogIn from './pages/LogIn/LogIn';
import SeekProject from './pages/SeekProject/SeekProject';
import CreateProject from './pages/CreateProject/CreateProject';
import MyProject from './component/MyProject';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/" element={<SeekProject />}/>
        <Route path="/login" element={<LogIn />}/>
        <Route path="/createproject" element={<CreateProject />}/>
        <Route path="/myproject" element={<MyProject />}/>
      </Routes>
    </>
  );
}

export default App;