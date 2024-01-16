import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='container'>
        <Link to="/">Home</Link>
        <Link to="Login">Login / Criar</Link>
    </nav>
  );
}

export default Header;
