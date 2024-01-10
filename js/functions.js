const validate = (name , price , type , description , color , picture) =>{
     
    if(!name.value){
        name.focus();
        confirm("Nom kiritilishi kerak !!!")
        name.value = ""
        return false
    }
    if(name.value.trim().length <= 2){
        name.focus();
        alert("Belgilar soni 2 tadan ko'p bo'lishi kerak")
        name.value = "";
        return false
    }

    if(!price.value){
        price.focus();
        confirm("Narx kiritilishi zarur !!!")
        price.value = "";

        return false
    }

    if(!color.value){
        color.focus();
        confirm("Rang kiritilishi kerak !!!")
        color.value = "";


        return false
    }

    if(!type.value){
        type.focus();
        confirm(" telefon turini kiritish kerak !!!")
        type.value = "";


        return false
    }

    if(price.value <= 10 || price.value > 10000000000000000){
        price.focus();
        alert("Narx bunday katta bolmaydi")
        price.value = "";

    }

    if(!picture.value){
        picture.focus();
        confirm("Rang kiritilishi kerak !!!")
        picture.value = "";

        return false
    }

    if(!isHttpValid(picture.value)){
        picture.focus();
        confirm("Surat url manzilda kiritilishi kerak edi !!!")
        picture .value = "";

        return false
    }

    return true
}

function isHttpValid(str) {
    try {
      const newUrl = new URL(str);
      return newUrl.protocol === 'http:' || newUrl.protocol === 'https:';
    } catch (err) {
      return false;
    }
   }
 

   function  getDataFromLocalStorage(){
    let data = [];
    if(localStorage.getItem('phones')){
        data = JSON.parse(localStorage.getItem('phones'))
    }
    return data
   }

   function createCard(phone){
    return `
    <div  class="card mb-3 col-6" >
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${phone.picture}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title fs-3">${phone.name}</h5>
            <div class="d-flex justify-content-between">
                <p class="card-text fs-4"><small class="text-danger">${phone.price}</small></p>
                <p class="card-text fs-4"><small class="text-primary">${phone.type}</small></p>
            </div>
            <p class="card-text fs-4"><small class="text-success">${phone.color}</small></p>

          <p class="card-text">${phone.description}</p>

        </div>
      </div>
    </div>
  </div>
    `
}


   export{isHttpValid , validate , getDataFromLocalStorage , createCard}