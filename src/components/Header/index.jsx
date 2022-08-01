import React from 'react'
import './style.css'
import Logominhahorta from '../../assets/images/logominhahorta.png'


const Header = () => {
    return (
        <header className="App-header">
           <img src={Logominhahorta} alt="logo"/>
        </header>
    );
}

export default Header;