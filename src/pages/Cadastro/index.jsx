import React from "react";
import Footer from "../../components/Footer";
import Formulary from "../../components/Formulary";
import Header from "../../components/Header";
import Preview from "../../components/Preview";
import style from "./cadastro.module.css";

export default function Cadastro() {
  return (
    <div className={style.App}>
     <Header/>
        <div className={style.container}>
        <div className={style.cadastro}>
          <Formulary />
        </div>
        <div className={style.preview}>
          <Preview />
        </div>
      </div>
      <Footer/>
    </div>
  );
}
