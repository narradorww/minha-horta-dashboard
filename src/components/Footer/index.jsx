import React from 'react';
import style from './Footer.module.css';

const Footer = () => {
return (
    <footer className={style.footer}>
        <p>Minha Horta- Gerenciador de Sementes</p>
        <p>Desenvolvido por: <a href="github.com/narradorww">Rodrigo Alexandre</a></p>
        <address> Atibaia- SP </address>
    </footer>
)

}

export default Footer;