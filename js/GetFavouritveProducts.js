function getFavouriteProducts(){
    $.ajax({
        url: "../user_pages/get_data/get-favourite-products.php",
        method: 'POST'
    }).done(function( data ) {
        $('.favourite-content').html(data);
    })
}
$(document).ready(function(){
    getFavouriteProducts();
});