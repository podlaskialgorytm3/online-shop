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
                validation()
            })
        })
    })
}
$(document).ready(function(){
    getDeliveryOptions();
});
const getDeliveryId = () =>{
    const deliveryInputs = document.querySelectorAll("input[name=delivery]")
    deliveryInputs.forEach(input => {
        input.addEventListener("click",() => {
            console.log(input.value)
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
    regex.test(text) ? true : false
}
const isPhoneNumber = (text) => {
    let regex = /^[0-9]{9}$/;
    regex.test(text) ? true : false
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
        console.log("Poprawnio zwalidowano!")
        return true
    }
}