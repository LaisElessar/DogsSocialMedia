import React from 'react';
import { Link } from 'react-router-dom';
import Dogs from "../Assets/dogs.svg?react";
import styles from "./Header.module.css";
import { UserContext } from '../UserContext';


const Header = () => {
  const {data, userLogout} = React.useContext(UserContext);

  return (
    <header className={styles.header}>
        <nav className={` ${styles.nav} container`}>
            <Link to="/" className={styles.logo} aria-label="Dogs - Home">
                <Dogs/>
            </Link>
            {data ? (
            <Link to="Login" className={styles.login}>
              {data.nome}
              <button onClick={userLogout}>Sair</button>
            </Link>) : 
            (<Link to="Login" className={styles.login}>Login / Criar</Link>)}
        </nav>
    </header>
  );
}

export default Header;
