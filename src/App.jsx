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
import Photo from './Components/Photo/Photo';
import UserProfile from './Components/User/UserProfile';
import NotFound from './Components/NotFound';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <UserStorage>
        <Header/>
        <main className="AppBody">
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='login/*' element={<Login />}/>
            <Route path='conta/*' element={<ProtectedRouter> <User/> </ProtectedRouter>}/>
            <Route path='foto/:id' element={<Photo />}/>
            <Route path='perfil/:user' element={<UserProfile />}/>
            <Route path='*' element={<NotFound />}/>
          </Routes>
        </main>
        <Footer/>
      </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
