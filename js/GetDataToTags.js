function getTags(){
    $.ajax({
        url: "../admin_pages/getData/get-tags.php",
        method: 'POST'
    }).done(function( data ) {
        $('#tag-body').html(data);
    })
}
$(document).ready(function(){
    getTags();
});