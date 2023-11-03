function getProducts(){
    $.ajax({
        url: "../guest_pages/get_data/get_products.php",
        method: 'POST'
    }).done(function( data ) {
        $('#product-container').html(data);
    })
}
$(document).ready(function(){
    getProducts();
});