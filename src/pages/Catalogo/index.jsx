import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import style from "./Catalogo.module.css";
import CardVegetal from "../../components/CardVegetal";

const Catalogo = () => {



  return (
    <div className={style.App}>
      <Header />

     <div  className={style.container}>
        
          <CardVegetal />
       
    </div>
      <Footer />
    </div>
  );
};

export default Catalogo;
