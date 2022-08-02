import axios from 'axios';


export const baseUrl = "https://minha-horta-api.herokuapp.com/vegetais"


export function postCard(data) {

   
    axios.post(baseUrl, data)
    .then(res => {
        console.log("resposta do server", res)
    })


    return {data};
};

export function getCard() {
    axios.get(baseUrl).then(res=>{
        return res.data


    })
}
  






