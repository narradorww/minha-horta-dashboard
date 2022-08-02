import React, { useState } from "react";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { VeggieContext } from "../../providers/veggie";
import './style.css';

const initial = {
  title: "",
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
  plantsperHectare: "",
};

const Formulary = () => {
  const { setVeggie } = React.useContext(VeggieContext);
  // eslint-disable-next-line no-unused-vars
  const [initialValues, setInitialValues] = useState(initial);

  const formik = useFormik({
    initialValues: initial,
    onSubmit: (values) => {
      setVeggie(values);
      setInitialValues(initial);
    },
  });

  return (
    <div>
      <h3>Cadastro de Sementes</h3>
      <form onSubmit={formik.handleSubmit}>
        <div className="text-field">
          <TextField
            fullWidth
            variant="filled"
            margin="normal"
            label="Nome da Planta"
            name="title"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
        </div>
        <div className="text-field">
          <TextField
            fullWidth
            variant="filled"
            margin="normal"
            label="Descrição"
            name="description"
            multiline
            maxRows={4}
            onChange={formik.handleChange}
            value={formik.values.description}
          />
        </div>
        <div className="text-field">
          <TextField
            fullWidth
            variant="filled"
            margin="normal"
            label="URL da Imagem"
            name="imageUrl"
            onChange={formik.handleChange}
            value={formik.values.imageUrl}
          />
        </div>

<div className="time-climate">
<div className="time-planting">
        <h4>Época de Plantio</h4>
        
          <div className="text-field">
            <TextField
            variant="filled"
              margin="normal"
              label="Época de Plantio (SSE)"
              name="plantingTimeSSE"
              onChange={formik.handleChange}
              value={formik.values.plantingTimeSSE}
            />
          </div>
          <div className="text-field">
            <TextField
            variant="filled"
              margin="normal"
              label="Época de Plantio (ONNE)"
              name="plantingTimeONNE"
              onChange={formik.handleChange}
              value={formik.values.plantingTimeONNE}
            />
          </div>
        </div>
        <div className="temperature">
        <h4>Temperatura de Plantio</h4>
        <div className="text-field">
          <TextField
          variant="filled"
            margin="normal"
            className="text-field"
            label="Temperatura Mínima"
            name="minTemperature"
            onChange={formik.handleChange}
            value={formik.values.minTemperature}
          />
        </div>
              
        <div className="text-field">
          <TextField
          variant="filled"
            margin="normal"
            label="Temperatura Máxima"
            name="maxTemperature"
            onChange={formik.handleChange}
            value={formik.values.maxTemperature}
          />
        </div>
        </div> 
        </div>
        
<div className="ocupation">
<h4> Ocupação Espacial (cm) </h4>
  <div className="ocupation-container">

        <div className="text-field">
          <TextField
          variant="filled"
            margin="normal"
            label="Largura"
            name="ocupationX"
            onChange={formik.handleChange}
            value={formik.values.ocupationX}
          />
        </div>
        <div className="text-field">
          <TextField
          variant="filled"
            margin="normal"
            label="Comprimento"
            name="ocupationY"
            onChange={formik.handleChange}
            value={formik.values.ocupationY}
          />
        </div>
        <div className="text-field">
          <TextField
          variant="filled"
            margin="normal"
            className="text-field"
            label="Altura/Estrato"
            name="ocupationZ"
            onChange={formik.handleChange}
            value={formik.values.ocupationZ}
          />
        </div>
        </div>
</div>

<div className="ocupation">
          <h4>Colheita</h4>
<div className="ocupation-container">
          <div className="text-field">
            <TextField
            variant="filled"
              margin="normal"
              label="Tempo de Colheita"
              name="timeHarvest"
              className="text-field"
              onChange={formik.handleChange}
              value={formik.values.timeHarvest}
            />
          </div>
          <div className="text-field">
            <TextField
            variant="filled"
              margin="normal"
              label="Sementes por grama"
              name="seedsperWeight"
              onChange={formik.handleChange}
              value={formik.values.seedsperWeight}
            />
          </div>
          <div className="text-field">
            <TextField
            variant="filled"
              margin="normal"
              label="Quantidade de Plantas por Hectare"
              name="plantsperHectare"
              onChange={formik.handleChange}
              value={formik.values.plantsperHectare}
            />
          </div>
          </div>
          </div>
        <div className="button">
          <Button  type="submit" variant="outlined" color="primary" size="large" >
            Visualizar Prévia
          </Button>
        </div>
        
      </form>
    </div>
  );
};

export default Formulary;
