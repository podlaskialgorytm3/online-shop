function getCategory(){
    $.ajax({
        url: "../admin_pages/getData/getCategory.php",
        method: 'POST'
    }).done(function( data ) {
        $('#category-body').html(data);
    })
}
$(document).ready(function(){
    getCategory();
});