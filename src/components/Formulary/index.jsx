import React, {useState} from "react";
import "./style.css";
import { Formik, Field, Form } from "formik";
import { VeggieContext } from "../../providers/veggie";

const initial = {title: "",
description: "",
imageUrl: "",
plantingTimeSSE: "",
plantingTimeONNE: "",
minTemperature: "",
maxTemperature: "",
ocupationX: "",
ocupationY: "",
ocupationZ: "",
timeHarvest: "",
seedsperWeight: "",
plantsperHectare: ""}

export default function Formulary() {
const {setVeggie} = React.useContext(VeggieContext);
const [initialValues, setInitialValues] = useState(initial);

  
  return (
    <div className="form">
      <h3>Cadastre sua semente</h3>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 0));
          setVeggie(values);
          setInitialValues(initial);
        }}
      >
        <Form>
          <div className="core">
            <label htmlFor="title">Nome da Planta</label>
            <Field className="field" name="title" type="text" placeholder="Nome da Planta" />
          </div>
          <div className="core">
            <label htmlFor="description">Descrição</label>
            <Field className="field" name="description" type="text" placeholder="Descrição" />
          </div>
          <div className="core">
            <label htmlFor="imageUrl">URL da Imagem</label>
            <Field className="field" name="imageUrl" type="text" placeholder="URL da Imagem" />
          </div>
          <div className="planting-time">
            <div className="planting-time-sse core">
              <label htmlFor="plantingTimeSSE">
                Época de Plantio Sul-Sudeste
              </label>
              <Field
              className="field"
                name="plantingTimeSSE"
                type="text"
                placeholder="Mês Inicial, Mês Final"
              />
            </div>
            <div className="planting-time-onne core">
              <label htmlFor="plantingTimeONNE">
                Época de Plantio Centro-Oeste/Norte/Nordeste
              </label>
              <Field
              className="field"
                name="plantingTimeONNE"
                type="text"
                placeholder="Mês Inicial, Mês Final"
              />
            </div>
          </div>
          <div className="temperature">
            <div className="min-temperature core">
            <label htmlFor="minTemperature">Temperatura Mínima</label>
            <Field
            className="field"
              name="minTemperature"
              type="text"
              placeholder="Temperatura Mínima"
            />
            </div>
            <div className="max-temperature core">

            <label htmlFor="maxTemperature">Temperatura Máxima</label>
            <Field
            className="field"
              name="maxTemperature"
              type="text"
              placeholder="Temperatura Máxima"
            />
            </div>
          </div>

          <div className="harvest">
            <div className="core">
              <label htmlFor="timeHarvest">Tempo de Colheita</label>
              <Field
              className="field"
                name="timeHarvest"
                type="text"
                placeholder="Tempo de Colheita"
              />
            </div>
            <div className="core">
              <label htmlFor="seedsperWeight">Sementes por Peso</label>
              <Field
              className="field"
                name="seedsperWeight"
                type="text"
                placeholder="Sementes por Peso"
              />
            </div>
            <div className="core">
              <label htmlFor="plantsperHectare">Plantas por Hectare</label>
              <Field
              className="field"
                name="plantsperHectare"
                type="text"
                placeholder="Plantas por Hectare"
              />
            </div>
            <div className="ocupation">
            <div >
              <label htmlFor="ocupationX">Espaçamento Horizontal</label>
              <Field
              className="field"
                name="ocupationX"
                type="text"
                placeholder="(cm)"
              />
            </div>
            <div>
              <label htmlFor="ocupationY">Espaçamento Vertical</label>
              <Field
              className="field"
                name="ocupationY"
                type="text"
                placeholder="(cm)"
              />
            </div>
            <div>
              <label htmlFor="ocupationZ">Estrato/Altura</label>
              <Field
              className="field"
                name="ocupationZ"
                type="text"
                placeholder="(cm)"
              />
            </div>
          </div>
          </div>
          <button type="submit">Visualizar Prévia</button>
        </Form>
      </Formik>
    </div>
  );
}
