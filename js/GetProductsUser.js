function getProducts(){
    $.ajax({
        url: "../user_pages/get_data/get-products.php",
        method: 'POST'
    }).done(function( data ) {
        $('#product-container').html(data);
    })
}
function getProductsFilter(){
    $("#search").keyup(function(e){
        e.preventDefault();
        $('#product-container').html('<div> </div>');
        $.ajax({
                url: "../user_pages/get_data/get-products-filter.php",
                method: 'POST',
                data: {
                    search: $('#search').val()	
                }
            }).done(function( data ) {
                $('#product-container').html(data);
            });
    })
}
$(document).ready(function(){
    getProducts();
    getProductsFilter()
});