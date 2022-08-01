import axios from 'axios';


const baseUrl = "https://minha-horta-api.herokuapp.com/vegetais"


export function postCard(data) {

   
    axios.post(baseUrl, data)
    .then(res => {
        console.log("resposta do server", res)
    })


    return {data};
};
  






