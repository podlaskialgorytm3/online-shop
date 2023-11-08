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
            validation()
            getPaymentId()
            getDeliveryId()
            endBtn.addEventListener("click",() => {
                checkDelivery()
                checkPayment()
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
        },2000)
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
        },2000)
    }
}
const isEmpty = (text) => {
    text == "" ? true : false
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
}