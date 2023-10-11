function getClients(){
    $.ajax({
        url: "../admin_pages/getData/get-clients.php",
        method: 'POST'
    }).done(function( data ) {
        $('#user-body').html(data);
    })
}
$(document).ready(function(){
    getClients();
});