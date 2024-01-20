import React from 'react';
import UserHeader from './UserHeader';
import { Route, Routes } from 'react-router-dom';
import Feed from '../Feed/Feed';
import UserPhotoPost from './UserPhotoPost';
import UserStatistic from './UserStatistic';

const User = () => {
  return (
    <section className="container">
      <UserHeader/>
      <Routes>
        <Route path='/' element={<Feed/>}/>
        <Route path='postar' element={<UserPhotoPost/>}/>
        <Route path='estatisticas' element={<UserStatistic/>}/>
      </Routes>
      srgsrdg
    </section>
  );
}

export default User;