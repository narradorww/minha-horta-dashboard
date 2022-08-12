import React, { useEffect } from "react";
import { postCard } from "../../hooks/api";
import { VeggieContext } from "../../providers/veggie";
//material -ui
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";

//style
import style from "./Preview.module.css";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Preview() {
  const { veggie } = React.useContext(VeggieContext);
  const [item, setItem] = React.useState(veggie);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    setItem(veggie);
  }, [item, veggie]);

  const handleButton = async () => {
    postCard(veggie);
  };

  return (
    <Card sx={{ maxWidth: "70%", maxHeight: 1200, zIndex: 99 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} arial-label="vegetal">
            {item.title[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={item.title}
        variant="h4"
      />

      <CardMedia
        component="img"
        sx={{ maxHeight: 250, minWidth: 720 }}
        image={item.imageUrl}
        alt={item.title}
      />
      <CardContent>
        <div className={style.textCard}>{item.description}</div>
      </CardContent>

      <CardActions disableSpacing>
        <Button onClick={handleButton} variante="outlined">
          Confirmar Cadastro
        </Button>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ height: 300, padding: 6, marginBottom: 2 }}>
          <div className={style.season}>
            <h4> Época de Plantio </h4>
            <div className={style.seasonText}>
              <div className={style.seasonValue}>
                <h5>Sul/Sudeste</h5>
                {item.plantingTimeSSE}
              </div>
              <div className={style.seasonValue}>
                <h5>Centro-Oeste/Norte Nordeste</h5>
                {item.plantingTimeONNE}
              </div>
            </div>
          </div>

          <div className={style.season}>
            <h4> Temperatura de Plantio</h4>
            <div className={style.seasonText}>
              <div className={style.seasonValue}>
                <h5>Mínima °C</h5>
                {item.minTemperature}
              </div>
              <div className={style.seasonValue}>
                <h5>Máxima °C</h5>
                {item.maxTemperature}
              </div>
            </div>
          </div>

          <div className={style.season}>
            <h4> Ocupação Espacial</h4>
            <div className={style.seasonText}>
              <div className={style.seasonValue}>
                <h5>Largura cm</h5>
                {item.ocupationX}
              </div>
              <div className={style.seasonValue}>
                <h5>Comprimento</h5>
                {item.ocupationY}
              </div>
              <div className={style.seasonValue}>
                <h5>Comprimento</h5>
                {item.ocupationZ}
              </div>
            </div>
          </div>

          <div className={style.season}>
            <h4> Colheita</h4>
            <div className={style.seasonText}>
              <div className={style.seasonValue}>
                <h5>Tempo (dias)</h5>
                {item.timeHarvest}
              </div>
              <div className={style.seasonValue}>
                <h5>Sementes por grama</h5>
                {item.seedsperWeight}
              </div>
              <div className={style.seasonValue}>
                <h5>Unidades/ha</h5>
                {item.plantsperHectare}
              </div>
            </div>
          </div>

          


        </CardContent>
      </Collapse>
    </Card>
  );
}
