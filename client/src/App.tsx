import React from 'react';
// @ts-ignore
import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
import Main from "./pages/main/main";
import News from './pages/news/news';
import {NavBar} from "./components/navBar/navBar";

function App() {
  return (
      <>
          <NavBar/>
          <Routes>
              <Route path='/' element={<Main/>}/>
              <Route path='/news' element={<News/>}/>
          </Routes>
      </>
  );
}

export default App;
