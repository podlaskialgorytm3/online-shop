function getOrder(){
    $.ajax({
        url: "../admin_pages/getData/get-order.php",
        method: 'POST'
    }).done(function( data ) {
        $('#order-body').html(data);
    })
}
$(document).ready(function(){
    getOrder();
});