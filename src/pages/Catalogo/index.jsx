import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./style.css";
import CardVegetal from "../../components/CardVegetal";

const Catalogo = () => {



  return (
    <>
      <Header />

      <div className="App">
        <div className="container">
          <CardVegetal />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Catalogo;
