import { getDataFromLocalStorage , createCard } from "./functions.js";
const wrapper = document.getElementById('product-list');
const button = document.getElementById('button');
const maxPrice = document.getElementById('max-price');
const minPrice = document.getElementById('min-price');
const type = document.getElementById('type');
const color = document.getElementById("color");


let data = getDataFromLocalStorage();


document.addEventListener('DOMContentLoaded' , function(){
    if(data.length){
        data.forEach(phone =>{
            let card = createCard(phone);
            wrapper.innerHTML += card 
        })
    }
});


button && button.addEventListener('click' , function(e){
    e.preventDefault(); 
    let filter = {}

    if(color.value){
        filter.color = color.value
    }

    if(type.value){
        filter.type = type.value
    }

    if(minPrice.value){
        minPrice.color = minPrice.value
    }

    if(maxPrice.value){
        maxPrice.color = maxPrice.value
    }

    let filteredData = []
    if(filter.color){
        filteredData = data.filter(el =>{
            return el.color == filter.color
        })
    }
    wrapper.innerHTML = '';
    if(filteredData.length){
        filteredData.forEach(phone =>{
            let card = createCard(phone);
            wrapper.innerHTML += card
        })
    }
})
