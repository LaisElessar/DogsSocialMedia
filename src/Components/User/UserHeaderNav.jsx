import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import MyPhotosIcon from '../../Assets/feed.svg?react';
import AddIcon from '../../Assets/adicionar.svg?react';
import StatisticsIcon from '../../Assets/estatisticas.svg?react';
import LogoutIcon from '../../Assets/sair.svg?react';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
    const { userLogout } = React.useContext(UserContext);
    const { mobile, setMobile } = React.useState(null);
    const navigate = useNavigate();
    
    function handleLogout(){
        userLogout();
        navigate('/login');
    }

    return (
    <nav className={styles.nav}>
        <NavLink to="/conta" end>
            <MyPhotosIcon/>{mobile && 'Minhas fotos'}
        </NavLink>
        <NavLink to="/conta/postar">
            <AddIcon/>{mobile && 'Adicionar nova foto'}
        </NavLink>
        <NavLink to="/conta/estatisticas">
            <StatisticsIcon/>{mobile && 'Estatisticas'}
        </NavLink>
        <button onClick={handleLogout}><LogoutIcon/>Sair</button>
    </nav>
    );
}

export default UserHeaderNav;
