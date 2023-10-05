function getCategory(){
    $.ajax({
        url: "../admin_pages/getData/get-category.php",
        method: 'POST'
    }).done(function( data ) {
        $('#category-body').html(data);
    })
}
$(document).ready(function(){
    getCategory();
});