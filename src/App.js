import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
// import Bottombar from './components/Bottombar';
import Main from './pages/Main';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      {/* <Bottombar /> */}
    </BrowserRouter>
  );
}

export default App;
