import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LogIn from './pages/LogIn/LogIn';
import SeekProject from './pages/SeekProject/SeekProject';
import CreateProject from './pages/CreateProject/CreateProject';
import MyProject from './component/MyPage/MyProject';
import ReqApply from './component/MyPage/ReqApply';

// 리덕스 관련
import { Provider } from 'react-redux/es/exports';
import store from './store/store';
// 리덕스 관련

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/" element={<SeekProject />}/>
        <Route path="/login" element={<LogIn />}/>
        <Route path="/createproject" element={<CreateProject />}/>
        <Route path="/myproject" element={<MyProject />}/>
        <Route path="/reqapply" element={<ReqApply />}/>
      </Routes>
    </Provider>
  );
}

export default App;