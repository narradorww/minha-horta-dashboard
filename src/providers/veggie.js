import React, { useState, useEffect }from 'react'
import axios from "axios";
import { baseUrl } from '../hooks/api';

export const VeggieContext = React.createContext({})

export const VeggieProvider = (props) => {

  const [veggie, setVeggie] = useState({title: "Abóbora Moranga",
  description:
    "A Moranga de Mesa possui com formato globular achatado e com gomos. Essas morangas possuem cor da casca e polpa laranja, atingem de 20 a 35 cm de diâmetro, de 10 a 15 cm de altura e pesam de 2 a 5 quilos. Essa moranga é ideal para rechear com camarões ou carne seca ou qualquer outro recheio. Seu nome científico é Cucurbita maxima.",
  imageUrl:
    "https://raw.githubusercontent.com/narradorww/catalogo-sementes-figuras/main/abobora-moranga.png",
  plantingTimeSSE: "Agosto, Dezembro",
  plantingTimeONNE: "Janeiro, Dezembro",
  minTemperature: 35,
  maxTemperature: 35,
  ocupationX: 300,
  ocupationY: 300,
  ocupationZ: 60,
  timeHarvest: 100,
  seedsperWeight: 8,
  plantsperHectare: 1100,
})
const [vegetais, setVegetais] = useState([])



console.log("veggie", veggie)
console.log("vegetais no contexto", vegetais)

    return (
        <VeggieContext.Provider value={{veggie, setVeggie, vegetais, setVegetais}}>
            {props.children}
        </VeggieContext.Provider>

    )
}