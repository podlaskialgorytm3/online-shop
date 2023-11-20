function getCategoryToFind(){
    $.ajax({
        url: "../guest_pages/get_data/get-category-to-find.php",
        method: 'POST'
    }).done(function( data ) {
        $('.category').html(data);
    })
}
$(document).ready(function(){
    getCategoryToFind();
});