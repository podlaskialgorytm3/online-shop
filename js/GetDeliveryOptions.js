function getDeliveryOptions(){
    $.ajax({
        url: "/guest_pages/get_data/get-delivery-option.php",
        method: 'POST'
    }).done(function( data ) {
        $('.delivery-option').html(data);
    })
}
$(document).ready(function(){
    getDeliveryOptions();
});

document.addEventListener('DOMContentLoaded', function() {
    // Pobranie wszystkich radiobuttonów
    var radioButtons = document.querySelectorAll('input[name="delivery"]');
    console.log(radioButtons)
    // Nasłuchuj zdarzenia zmiany dla każdego radiobuttona
    radioButtons.forEach(function(radioButton) {
        radioButton.addEventListener('change', function() {
            if (this.checked) {
                var selectedValue = this.value;
                console.log('Wybrana wartość:', selectedValue);
                
                // Tutaj możesz wykonać odpowiednie akcje na podstawie wybranej wartości
            }
        });
    });
});