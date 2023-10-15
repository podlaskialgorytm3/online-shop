editDeliveryPanel = document.querySelector(".edit-delivery-panel")

nameDeliveryEdit = document.querySelector(".name-delivery-edit")
addressDeliveryEdit = document.querySelector(".address-delivery-edit")
emailDeliveryEdit = document.querySelector(".email-delivery-edit")
priceDeliveryEdit = document.querySelector(".price-delivery-edit")

nameDeliveryErrorEdit = document.querySelector(".name-delivery-error-edit")
addressDeliveryErrorEdit = document.querySelector(".address-delivery-error-edit")
emailDeliveryErrorEdit = document.querySelector(".email-delivery-error-edit")
priceDeliveryErrorEdit = document.querySelector(".price-delivery-error-edit")

deliverySubmitEdit = document.querySelector(".delivery-submit-edit")
exitBtnEdit = document.querySelector(".exit-delivery-edit")


editDeliveryBtns = document.querySelectorAll(".edit-delivery")


getDelivery = () =>{
    $.ajax({
        url: "../admin_pages/getData/get-delivery.php",
        method: 'POST'
    }).done(function( data ) {
        $('#delivery-body').html(data);
    })
}
exitHandleEdit = () => {
    dashboard.style.display = "block"
    sideBar.style.display = "block"
    editDeliveryPanel.style.display = "none"
}
ingoingHandleEdit = () => {
    dashboard.style.display = "none"
    sideBar.style.display = "none"
    editDeliveryPanel.style.display = "flex"
}
validationDataEdit = (id) => {
    i = 0
    deliverySubmitEdit.addEventListener("click", (e) => {
        if(i == 0){
        e.preventDefault()
        stepValidation = 0
        if(isEmpty(nameDeliveryEdit.value)){
            nameDeliveryErrorEdit.textContent = "Podano puste pole!"
        }
        else{
            nameDeliveryErrorEdit.textContent = ""
            stepValidation++
        }
        if(isEmpty(addressDeliveryEdit.value)){
            addressDeliveryErrorEdit.textContent = "Podano puste pole!"
        }
        else{
            addressDeliveryErrorEdit.textContent = ""
            stepValidation++
        }
        if(isEmpty(emailDeliveryEdit.value)){
            emailDeliveryErrorEdit.textContent = "Podano puste pole!"
        }
        else{
            if(isMail(emailDeliveryEdit.value)){
                emailDeliveryErrorEdit.textContent = ""
                stepValidation++    
            }
            else{
                emailDeliveryErrorEdit.textContent = "Niepoprawny format email!"
            }
        }
        if(isEmpty(priceDeliveryEdit.value)){
            priceDeliveryErrorEdit.textContent = "Podano puste pole!"
        }
        else{
            if(lessThanZero(priceDeliveryEdit.value)){
                priceDeliveryErrorEdit.textContent = "Cena dostawy poniżej zera!"
            }
            else{
                stepValidation++
                priceDeliveryErrorEdit.textContent = ""
            }
        }
        if(stepValidation == 4)
            editDeliveryToDatabase(id)
        }i++
    })
    
}

sumplementingInput = (id) => {
    const ajax = new XMLHttpRequest();
    ajax.open("GET","../components/fetch-delivery.php" , true);
    ajax.send();
    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let database = JSON.parse(this.responseText);
            for(let i = 0; i < database.length; i++){
                if(database[i].Id_dostawcy == id){
                   nameDeliveryEdit.value = database[i].Nazwa
                   addressDeliveryEdit.value = database[i].Adres
                   emailDeliveryEdit.value = database[i].Email
                   priceDeliveryEdit.value = database[i].Cena
                } 
            }
    }}
}

editDeliveryToDatabase = (id) => {
    $.ajax({
        url: "../admin_pages/pushData/edit-delivery-to-database.php",
        type: "POST",
        data: {
            id: id,
            nazwa: nameDeliveryEdit.value,
            adres: addressDeliveryEdit.value,
            email: emailDeliveryEdit.value,
            cena: priceDeliveryEdit.value
        },
        cache: false,
        success: function(){
            exitHandleEdit()
            getDelivery()
            successAdd.style.opacity = "1"
            successText.textContent = "Udało się edytować dostawce!"
            setInterval(() => {
                successAdd.style.opacity = "0"
            },5000)
            }
        })   
}

editDeliveryBtns.forEach(button => {
    button.addEventListener("click",() => {
        ingoingHandleEdit()
        sumplementingInput(button.dataset.id)
        validationDataEdit(button.dataset.id)
    
    })
})


exitBtnEdit.addEventListener("click",() => {
    exitHandleEdit()
})
