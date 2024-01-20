import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Login from './Components/Login/Login';
import Home from './Components/Home';
import Footer from './Components/Footer';
import { UserStorage } from './UserContext';
import User from './Components/User/User';
import ProtectedRouter from './Components/Helper/ProtectedRouter';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <UserStorage>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='login/*' element={<Login />}/>
          <Route path='conta/*' element={<ProtectedRouter> <User/> </ProtectedRouter>}/>
        </Routes>
        <Footer/>
      </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
