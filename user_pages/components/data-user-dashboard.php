<head>
<link rel="stylesheet" href="../../css/client-dashboard.css">
<link rel="stylesheet" href="../../css/data-user.css">
</head>
<div class="client-dashboard">
    <div class="user-data-option">
            <h2>Podaj swoje dane do wysłyki</h2>
            <input type="text" placeholder="Podaj imię i nazwisko." class="name">
            <span class="name-error error"></span>
            <input type="text" placeholder="Podaj swój adres zamieszkania." class="address">
            <span class="address-error error"></span>
            <input type="email" placeholder="Podaj swój adres e-mail." class="email">
            <span class="email-error error"></span>
            <input type="number" placeholder="Podaj swój numer telefonu." class="number">
            <span class="number-error error"></span>
            <button class="submit-data">Zatwierdź dane</button>
    </div>
</div>
<script src="../../js/HandleDataUser.js"></script>