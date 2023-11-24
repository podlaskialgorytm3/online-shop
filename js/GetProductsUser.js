const selectCategory = document.querySelector(".category")
const priceFrom = document.querySelector(".price-from")
const priceTo = document.querySelector(".price-to")
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
                    search: $('#search').val(),
                    category: selectCategory.value,
                    price_from: priceFrom.value || 0,
                    price_to: priceTo.value || 10000
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
                url: "../user_pages/get_data/get-products-filter.php",
                method: 'POST',
                data: {
                    category: selectCategory.value,
                    search: $('#search').val(),
                    price_from: priceFrom.value || 0,
                    price_to: priceTo.value || 10000
                }
            }).done(function( data ) {
                $('#product-container').html(data);
            });
    })
}
function getPriceFrom(){
    $(".price-from").keyup(function(e){
        e.preventDefault();
        $('#product-container').html('<div> </div>');
        $.ajax({
                url: "../user_pages/get_data/get-products-filter.php",
                method: 'POST',
                data: {
                    search: $('#search').val(),
                    category: selectCategory.value,
                    price_from: priceFrom.value || 0,
                    price_to: priceTo.value || 10000
                }
            }).done(function( data ) {
                $('#product-container').html(data);
            });
    });

}
function getPriceTo(){
    $(".price-to").keyup(function(e){
        e.preventDefault();
        $('#product-container').html('<div> </div>');
        $.ajax({
                url: "../user_pages/get_data/get-products-filter.php",
                method: 'POST',
                data: {
                    search: $('#search').val(),
                    category: selectCategory.value,
                    price_from: priceFrom.value || 0,
                    price_to: priceTo.value || 10000
                }
            }).done(function( data ) {
                $('#product-container').html(data);
            });
    });

}
$(document).ready(function(){
    getProducts();
    getProductsFilter()
    getCategoryFilter()
    getPriceFrom()
    getPriceTo()
});