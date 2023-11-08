function getDeliveryOptions(){
    $.ajax({
        url: "",
        method: 'POST'
    }).done(function( data ) {
        $('').html(data);
    })
}
$(document).ready(function(){
    getDeliveryOptions();
});