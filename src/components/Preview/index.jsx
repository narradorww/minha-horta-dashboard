import React , {useEffect} from "react";
import {postCard} from "../../hooks/api";
import { VeggieContext } from "../../providers/veggie";
import "./style.css";

export default function Preview() {
  const {veggie} = React.useContext(VeggieContext);
  const [ item, setItem ] = React.useState(veggie);

  useEffect(() => {
    setItem(veggie);
  }, [item, veggie]);

  const handleButton = async () => {
    postCard( veggie );
    console.log("Clicou");
    console.log(veggie);
  }
  

  return (

   
  <>
  
  <div className="previewcontainer" key={item.name}>
        <div className="card">
        <div className="card-image" />
        <div className="card-content">
          <h3>{item.title}</h3>

          <div className="image-card">
            <img className="image" src={item.imageUrl} alt="vegetable" />
          </div>

          <h3>Descrição</h3>
          <div className="description">{item.description}</div>
          <div className="climate">
            <div className="plantingtime">
              <h3>Época de Plantio</h3>
              <div className="card">
                <div className="planting-time-sse">
                  <h4> Sul/Sudeste</h4>
                  <p>{item.plantingTimeSSE}</p>
                </div>
                <div style={{ marginLeft: 24 }}>
                  <h4>Centro-Oeste/Norte/Nordeste</h4>
                  <p>{item.plantingTimeONNE}</p>
                </div>
              </div>
            </div>

            <div className="temperaturepreview">
              <h3>Temperatura no Plantio</h3>
              <div className="card">
                <div className="min-temperature">
                  <h4>Mínima</h4>
                  <p>{item.minTemperature}</p>
                </div>
                <div className="max-temperature">
                  <h4>Máxima</h4>
                  <p>{item.maxTemperature}</p>
                </div>
              </div>
            </div>
          </div>
          <h3>Ocupação</h3>
          <div className="flex">
            <div className="spacing-x">
              <h4>Horizontal</h4>
              <p>{item.ocupationX}</p>
            </div>
            <div className="spacing-y">
              <h4>Vertical</h4>
              <p>{item.ocupationY}</p>
            </div>
            <div className="spacing-z">
              <h4>Estrato/Altura</h4>
              <p>{item.ocupationZ}</p>
            </div>
          </div>

          <div className="flex">
            <div>
              <h3>Tempo de Colheita</h3>
              <p>{item.timeHarvest}</p>
            </div>

            <div>
              <h3>Sementes por Grama</h3>
              <p>{item.seedsperWeight}</p>
            </div>

            <div>
              <h3>Plantas por Hectare</h3>
              <p>{item.plantsperHectare}</p>
            </div>
          </div>
        </div>
      </div>
     
    </div>
    <button onClick={handleButton}>Confirmar Envio </button>
    </>
    
  );
}
