const name = document.querySelector(".name")
const address = document.querySelector(".address")
const email = document.querySelector(".email")
const number = document.querySelector(".number")

const nameError = document.querySelector(".name-error")
const addressError = document.querySelector(".address-error")
const emailError = document.querySelector(".email-error")
const numberError = document.querySelector(".number-error")



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
const getPaymentId = () => {
    const paymentInputs = document.querySelectorAll("input[name=payment]")
    paymentInputs.forEach(input => {
        input.addEventListener("click",() => {
            console.log(input.value)
        })
    })
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

}