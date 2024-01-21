import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import MyPhotosIcon from '../../Assets/feed.svg?react';
import AddIcon from '../../Assets/adicionar.svg?react';
import StatisticsIcon from '../../Assets/estatisticas.svg?react';
import LogoutIcon from '../../Assets/sair.svg?react';
import styles from './UserHeaderNav.module.css';
import useMedia from '../../Hooks/useMedia';

const UserHeaderNav = () => {
    const { userLogout } = React.useContext(UserContext);
    const navigate = useNavigate();
    const [mobileMenu, setMobileMenu] = React.useState(false);
    const mobile = useMedia('(max-width: 40rem)');
    const { pathname } = useLocation();

    React.useEffect(()=>{
        setMobileMenu(false);
    }, [pathname]);
    
    function handleLogout(){
        userLogout();
        navigate('/login');
    }

    return (
    <>
        {mobile && (
            <button 
            aria-label="Menu"
            className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`} 
            onClick={()=> setMobileMenu(!mobileMenu)}
            ></button>
        )}
        <nav className={`${mobile ? styles.navMobile: styles.nav} ${mobileMenu && styles.navMobileActive}`}>
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
    </>
    );
}

export default UserHeaderNav;
