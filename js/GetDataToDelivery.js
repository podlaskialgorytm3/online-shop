function getDelivery(){
    $.ajax({
        url: "../admin_pages/getData/get-delivery.php",
        method: 'POST'
    }).done(function( data ) {
        $('#delivery-body').html(data);
    })
}
$(document).ready(function(){
    getDelivery();
});