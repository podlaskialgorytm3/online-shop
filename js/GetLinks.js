function getLinks(){
    $.ajax({
        url: "../admin_pages/getData/get-links.php",
        method: 'POST'
    }).done(function( data ) {
        $('#simple-pages').html(data);
    })
}
$(document).ready(function(){
    getLinks();
});