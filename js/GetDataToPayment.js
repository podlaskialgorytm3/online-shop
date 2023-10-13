function getPayment(){
    $.ajax({
        url: "../admin_pages/getData/get-payment.php",
        method: 'POST'
    }).done(function( data ) {
        $('#payment-body').html(data);
    })
}
$(document).ready(function(){
    getPayment();
});