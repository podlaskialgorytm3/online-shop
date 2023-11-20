const selectCategory = document.querySelector(".category")
function getProducts(){
    $.ajax({
        url: "../guest_pages/get_data/get_products.php",
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
                url: "../guest_pages/get_data/get-product-filter.php",
                method: 'POST',
                data: {
                    search: $('#search').val(),
                    category: selectCategory.value
                }
            }).done(function( data ) {
                $('#product-container').html(data);
            });
    });

}
function getCategoryFilter(){
    selectCategory.addEventListener("change",() => {
        $('#product-container').html('<div> </div>');
        $.ajax({
                url: "../guest_pages/get_data/get-product-filter.php",
                method: 'POST',
                data: {
                    category: selectCategory.value,
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
    getCategoryFilter()
});