import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Draggable from "react-draggable";
import Frutos from "../../assets/images/frutos.png";
import Folhosas from "../../assets/images/folhosas.png";
import Rasteiras from "../../assets/images/rasteiras.png";
import Vagens from "../../assets/images/vagens.png";
import Espigas from "../../assets/images/espigas.png";
import Raizes from "../../assets/images/raizes.png";
import "./style.css";

const Canteiro = () => {
  return (
    <>
      <Header />
      <div className="App">
        <div className="container">
          <Draggable>
            <img src={Frutos} alt="frutos" className="vegetais" />
          </Draggable>
            <Draggable>
            <img src={Folhosas} alt="folhosas" className="vegetais" />
            </Draggable>
            <Draggable>
            <img src={Rasteiras} alt="rasteiras" className="vegetais" />
            </Draggable>
            <Draggable>
            <img src={Vagens} alt="vagens" className="vegetais" />
            </Draggable>
            <Draggable>
            <img src={Espigas} alt="espigas" className="vegetais" />
            </Draggable>
            <Draggable>
            <img src={Raizes} alt="raizes" className="vegetais" />
            </Draggable>
        </div>
        
      </div>

      <Footer />
    </>
  );
};

export default Canteiro;
