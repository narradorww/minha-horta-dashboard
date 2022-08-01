import React from "react";
import Footer from "../../components/Footer";
import Formulary from "../../components/Formulary";
import Header from "../../components/Header";
import Preview from "../../components/Preview";
import "./style.css";

export default function Cadastro() {
  return (
    <div className="App">
     <Header/>
      <nav className="navigator"></nav>
      <div className="container">
        <div className="cadastro">
          <Formulary />
        </div>
        <div className="preview">
          <Preview />
        </div>
      </div>
      <Footer/>
    </div>
  );
}
