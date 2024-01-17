import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Login from './Components/Login/Login';
import Home from './Components/Home';
import Footer from './Components/Footer';
import {UserStorage} from './UserContext';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <UserStorage>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Login/*' element={<Login />}/>
        </Routes>
        <Footer/>
      </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
