import React from "react";
import Avatar from "../../assets/images/avatar.png";
import { Link } from "react-router-dom";
import styles from "./container.module.css";

const Container = () => {
  return (
    <main className={styles.container}>
       
      <div className={styles.buttonGroup}>
        <div className={styles.button}>
        <Link to="/cadastro"> Cadastro</Link>
        </div>
        <div className={styles.button}>
        <Link to="/catalogo"> Catálogo </Link>
        </div>
      </div>
      <aside>
            <img src={Avatar} alt="avatar" />
        </aside>
    </main>
  );
};
export default Container;
