import React from 'react'
import style from './Header.module.css'
import Logominhahorta from '../../assets/images/logominhahorta.png'
import { CardHeader } from '@mui/material/CardHeader';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className={style.header}>
        <div className={style.header__logo}>
           <img src={Logominhahorta} alt="logo"/>
        </div>
           <nav className={style.nav}>
                <ul className={style.navList}>
                    <li className={style.navItem}>
                        <Link to={"/"} className={style.navLink}>Home</Link>
                    </li>
                    <li className={style.navItem}>
                        <Link to={"/cadastro"} className={style.navLink}>Cadastro</Link>
                    </li>
                    <li className={style.navItem}>
                        <Link to={"/catalogo"} className={style.navLink}>Catálogo</Link>
                    </li>
                    <li className={style.navItem}>
                        <Link to={"/canteiro"} className={style.navLink}>Canteiro</Link>
                    </li>
                </ul>
              </nav>
        </header>
    );
}

export default Header;