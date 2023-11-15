function getOrder(){
    $.ajax({
        url: "../user_pages/get_data/get-order.php",
        method: 'POST'
    }).done(function( data ) {
        $('.order').html(data);
    })
}
$(document).ready(function(){
    getOrder();
});