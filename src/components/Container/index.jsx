import React from "react";
import ButtonBox from "../ButtonBox";
import Avatar from "../../assets/images/avatar.png";
import "./style.css";

const Container = () => {
  return (
    <main className="container">
       
      <div className="buttonGroup">
        <ButtonBox> Cadastro </ButtonBox>
        <ButtonBox> Catálogo </ButtonBox>
      </div>
      <aside>
            <img src={Avatar} alt="avatar" />
        </aside>
    </main>
  );
};
export default Container;
