import React , {useEffect} from "react";
import {postCard} from "../../hooks/api";
import { VeggieContext } from "../../providers/veggie";
//material -ui
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {  Button } from "@mui/material";
//style
import './style.css'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));




export default function Preview() {
  const {veggie} = React.useContext(VeggieContext);
  const [ item, setItem ] = React.useState(veggie);
  const [expanded, setExpanded ] = React.useState (false)
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    setItem(veggie);
  }, [item, veggie]);

  const handleButton = async () => {
    postCard( veggie );
  }

  return (
    <Card sx={{maxWidth: '60%' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500]}} arial-label="vegetal">
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
        sx={{maxHeight: 200, minWidth: 720 }}
        image={item.imageUrl}
        alt={item.title}
      /> 
  <CardContent>
        <Typography variant="body1" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent> 
  
      <CardActions disableSpacing>
        <Button onClick={handleButton} variante="outlined"  >
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
      
      <CardContent>
      <div className="card">
        <Card sx={{maxWidth: "48%"}}>
          <CardContent>
            <Typography variant="h4" sx={{marginBottom: 2}} color="text.secondary" gutterBotton>
              Época de Plantio
            </Typography>
            <Typography variant="h5" component="div">
            Sul/Sudeste
            </Typography>
            <Typography sx={{ mb: 1.5, fontSize:22 }} color="text.secondary">
          {item.plantingTimeSSE}
        </Typography>
          </CardContent>
          <CardContent>
           <Typography variant="h5" component="div">
            Centro-Oeste/Norte/Nordeste
            </Typography>
            <Typography sx={{ mb: 1.5, fontSize:22 }} color="text.secondary">
          {item.plantingTimeONNE}
        </Typography>
          </CardContent>
        </Card>

        <Card sx={{maxWidth: "48%", mt: 1.5}}>
          <CardContent>
            <Typography variant="h4" sx={{marginBottom: 2}} color="text.secondary" gutterBotton>
              Temperatura
            </Typography>
            <Typography variant="h5" component="div">
            Mínima
            </Typography>
            <Typography sx={{ mb: 1.5, fontSize:22 }} color="text.secondary">
          {item.minTemperature}
        </Typography>
          </CardContent>
          <CardContent>
           
            <Typography variant="h5" component="div">
            Máxima
            </Typography>
            <Typography sx={{ mb: 1.5, fontSize:22 }} color="text.secondary">
          {item.maxTemperature}
        </Typography>
          </CardContent>
        </Card>
</div>
<div className="card">
<Card sx={{maxWidth: "48%", mt: 1.5}}>
          <CardContent>
            <Typography variant="h4" sx={{marginBottom: 2}} color="text.secondary" gutterBotton>
              Produção
            </Typography>
            <Typography variant="h5" component="div">
           Tempo de Colheita
            </Typography>
            <Typography sx={{ mb: 0.5, fontSize:22 }} color="text.secondary">
          {item.timeHarvest}
        </Typography>
          </CardContent>
          <CardContent>
           
            <Typography variant="h5" component="div">
            Sementes por Peso (sementes/g)
            </Typography>
            <Typography sx={{ mb: 0.5, fontSize:22 }} color="text.secondary">
          {item.seedsperWeight}
        </Typography>
        <Typography variant="h5" component="div">
            Espécime por hectare
            </Typography>
            <Typography sx={{ mb: 0.5, fontSize:22 }} color="text.secondary">
          {item.plantsperHectare}
        </Typography>

          </CardContent>
        </Card>
        <Card sx={{maxWidth: "48%", mt: 1.5}}>
          <CardContent>
            <Typography variant="h4" sx={{marginBottom: 2}} color="text.secondary" gutterBotton>
              Ocupação
            </Typography>
            <Typography variant="h5" component="div">
           Horizontal (X)
            </Typography>
            <Typography sx={{ mb: 0.5, fontSize:22 }} color="text.secondary">
          {item.ocupationX}
        </Typography>
          </CardContent>
          <CardContent>
           
            <Typography variant="h5" component="div">
            Vertical(Y)
            </Typography>
            <Typography sx={{ mb: 0.5, fontSize:22 }} color="text.secondary">
          {item.ocupationY}
        </Typography>
        <Typography variant="h5" component="div">
            Altura/Estrato(Z)
            </Typography>
            <Typography sx={{ mb: 0.5, fontSize:22 }} color="text.secondary">
          {item.ocupationZ}
        </Typography>

          </CardContent>
        </Card>


</div> 



      
   
      </CardContent>
      </Collapse>


    </Card>
  )
      }
  

  

   

    

