const name = document.querySelector(".name")
const address = document.querySelector(".address")
const email = document.querySelector(".email")
const number = document.querySelector(".number")

const nameError = document.querySelector(".name-error")
const addressError = document.querySelector(".address-error")
const emailError = document.querySelector(".email-error")
const numberError = document.querySelector(".number-error")

const errorPopup = document.querySelector(".error-add")
const errorText = document.querySelector(".error-text")

const endBtn = document.querySelector(".end-btn")

let userData = JSON.parse(localStorage.getItem('user-data')) || {
    name: "",
    address: "",
    email: "",
    number: "",
    idDelivery: 0,
    idPayment: 0
};

function getDeliveryOptions(){
    $.ajax({
        url: "/guest_pages/get_data/get-delivery-option.php",
        method: 'POST'
    }).done(function( data ) {
        $('.delivery-option').html(data);
        $.ajax({
            url: "/guest_pages/get_data/get-payment-option.php",
            method: 'POST'
        }).done(function( data ) {
            $('.payment-option').html(data);
            getPaymentId()
            getDeliveryId()
            endBtn.addEventListener("click",() => {
                checkDelivery()
                checkPayment()
                if(validation() && checkDelivery() && checkPayment()){
                    console.log(userData)
                    window.location.href = '../user_pages/summary-page.php'
                }
            })
        })
    })
}
$(document).ready(function(){
    getDeliveryOptions();
    suplmenetingUserData()
});
const getID = () => {
    return new Promise((resolve, reject) => {
        let xmlhttp = new XMLHttpRequest();
        let url = "../user_pages/get_data/get-id.php";
        
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    let data = JSON.parse(this.responseText);
                    resolve(data);
                } else {
                    reject(new Error('Request failed with status ' + this.status));
                }
            }
        };

        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    });
}
const suplmenetingUserData = async () =>{
    let id = await getID()
    const ajax = new XMLHttpRequest();
    ajax.open("GET","../components/fetch-user-data.php" , true);
    ajax.send();
    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let database = JSON.parse(this.responseText);
            for(let i = 0; i < database.length; i++){
                if(database[i].ID_USER == id){
                    name.value = `${database[i].imie_nazwisko}`
                    address.value = `${database[i].adres}`
                    email.value = `${database[i].email}`
                    number.value = `${database[i].numer_telefonu}`
                } 
            }
    }}
}


const getDeliveryId = () =>{
    const deliveryInputs = document.querySelectorAll("input[name=delivery]")
    deliveryInputs.forEach(input => {
        input.addEventListener("click",() => {
            console.log(input.value)
            userData.idDelivery = input.value
            localStorage.setItem('user-data', JSON.stringify(userData));
        })
    })
}
const checkDelivery = () => {
    const deliveryInputs = document.querySelectorAll("input[name=delivery]")
    let amount = 0
    deliveryInputs.forEach(input => {
        if(input.checked){
            amount++
        }
    })
    if(amount == 0){
        errorPopup.style.opacity = "1"
        errorText.textContent = "Nie zanzaczyłeś dostawcy!"
        setInterval(() => {
            errorPopup.style.opacity = "0"
        },3500)
        return false
    }
    else{
        return true
    }
}
const getPaymentId = () => {
    const paymentInputs = document.querySelectorAll("input[name=payment]")
    paymentInputs.forEach(input => {
        input.addEventListener("click",() => {
            console.log(input.value)
            userData.idPayment = input.value
            localStorage.setItem('user-data', JSON.stringify(userData));
        })
    })
}
const checkPayment = () => {
    const paymentInputs = document.querySelectorAll("input[name=payment]")
    let amount = 0
    paymentInputs.forEach(input => {
        if(input.checked){
            amount++
        }
    })
    if(amount == 0){
        errorPopup.style.opacity = "1"
        errorText.textContent = "Nie zanzaczyłeś płatności!"
        setInterval(() => {
            errorPopup.style.opacity = "0"
        },3500)
        return false
    }
    else{
        return true
    }
}
const isEmpty = (text) => {
    if(text == ""){
        return false
    }
    else{
        return true
    }
}
const isEmail = (text) => {
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if(regex.test(text)){
        return true
    }
    else{
        return false
    }
}
const isPhoneNumber = (text) => {
    let regex = /^[0-9]{9}$/;
    if(regex.test(text)){
        return true
    }
    else{
        return false
    }
    
}

const validation = () => {
    let stepValidation =  0
    if(isEmpty(name.value)){
        nameError.textContent = ""
        stepValidation++
    }
    else{
        nameError.textContent = "Puste pole!"
    }
    if(isEmpty(address.value)){
        addressError.textContent = ""
        stepValidation++
    }
    else{
        addressError.textContent = "Puste pole!"
    }
    if(isEmpty(email.value)){
        if(isEmail(email.value)){
            emailError.textContent = ""
            stepValidation++
        }
        else{
            emailError.textContent = "Niepoprawny format e-mail!"
        }
    }
    else{
        emailError.textContent = "Puste pole!"
    }
    if(isEmpty(number.value)){
        if(isPhoneNumber(number.value)){
            numberError.textContent = ""
            stepValidation++
        }
        else{
            numberError.textContent = "Niepoprawny format numeru telefonu!"
        }
    }
    else{
        numberError.textContent = "Puste pole!"
    }
    if(stepValidation == 4){
        userData.name = name.value
        userData.address = address.value
        userData.email = email.value
        userData.number = number.value
        localStorage.setItem('user-data', JSON.stringify(userData));
        return true
    }
}