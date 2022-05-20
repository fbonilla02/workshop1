import DeleteData from "../helpers/deleteData.js";
import getData from "../helpers/getData.js";
import ShowCard from "../module/showMay.js";
const cardsContainer = document.getElementById('cardsContainer')


document.addEventListener('DOMContentLoaded', async ()=>{
    const productos = await getData()

    ShowCard(cardsContainer, productos)
    

})

document.addEventListener('click', ({target})=>{
    if(target.classList.contains('text-danger')){
       let id = target.id;
       const url = `http://localhost:4000/productos/${id}`
       console.log(url);
       DeleteData(url)
    }
})