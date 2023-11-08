function getDeliveryOptions(){
    $.ajax({
        url: "/guest_pages/get_data/get-delivery-option.php",
        method: 'POST'
    }).done(function( data ) {
        $('.delivery-option').html(data);
        
    })
}
function getPaymentOptions(){
    $.ajax({
        url: "/guest_pages/get_data/get-payment-option.php",
        method: 'POST'
    }).done(function( data ) {
        $('.payment-option').html(data);
        
    })
}
$(document).ready(function(){
    getDeliveryOptions();
    getPaymentOptions();
});

const getDeliveryId = (data) =>{
    const deliveryInputs = document.querySelectorAll("input[name=delivery]")
    deliveryInputs.forEach(input => {
        input.addEventListener("click",() => {
            return input.value
        })
    })
}
const getPaymentId = (data) => {
    const paymentInputs = document.querySelectorAll("input[name=payment]")
    paymentInputs.forEach(input => {
        input.addEventListener("click",() => {
            return input.value
        })
    })
}