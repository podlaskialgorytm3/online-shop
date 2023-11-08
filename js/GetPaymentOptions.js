function getPaymentOptions(){
    $.ajax({
        url: "/guest_pages/get_data/get-payment-option.php",
        method: 'POST'
    }).done(function( data ) {
        $('.payment-option').html(data);
    })
}
$(document).ready(function(){
    getPaymentOptions();
});