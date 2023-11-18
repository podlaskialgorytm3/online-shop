<head>
<link rel="stylesheet" href="../../css/client-dashboard.css">
<link rel="stylesheet" href="../../css/data-user.css">
<link rel="stylesheet" href="../../css/settings-user.css">
</head>
<div class="client-dashboard">
    <div class="settings-container">
    <h2>Dane konta</h2>
    <div class="main-user-data item-content">
        <h4>Twoje dane</h4>
        <div class="main-content">

        </div>
        <button class="main-edit edit">Edytuj</button>
    </div>
    <div class="email-user-data item-content">
        <h4>Email</h4>
        <div class="email-content">

        </div>
        <button class="email-edit edit">Edytuj</button>
    </div>
    <div class="password-user-data item-content">
        <div class="password-content">
            <h4>Hasło</h4>
            <input type="text" value="••••••••" disabled style="display:block; width: 250px;">
        </div>
        <button class="password-edit edit">Edytuj</button>
    </div>
    </div>
</div>
<div class="success-add">
    <img src="../../images/checked.png" alt=""><p class="success-text"></p>
</div>


<div class="edit-panel edit-main-info">
    <h2>Edytuj swoje dane</h2>
    <img src="../../images/x.png" alt="" class="exit exit-main" style="width: 50px;">
    <input type="text" class="username" placeholder="Wpisz swój psudonim">
    <p class="error username-error"></p>
    <input type="text" class="first-name" placeholder="Wpisz swoje imię">
    <p class="error first-name-error"></p>
    <input type="text" class="last-name" placeholder="Wpisz swoje nazwisko">
    <p class="error last-name-error"></p>
    <input type="text" class="address" placeholder="Wpisz swój adres">
    <p class="error address-error"></p>
    <button class="submit-edit-main">Edytuj</button>
</div>
<div class="edit-panel edit-email-info">
    <img src="../../images/x.png" alt="" class="exit exit-email" style="width: 50px;">
    <h2>Edytuj swój email</h2>
    <input type="email" placeholder="Nowy e-mail" class="new-email">
    <p class="error error-new-email"></p>
    <input type="password" placeholder="Potwierdź hasłem" class="confirm-email-password">
    <p class="error erorr-confirm-email-password"></p>
    <button class="submit-edit-email">Edytuj</button>
</div>
<div class="edit-panel edit-password-info">
    <h2>Edytuj swoje hasło</h2>
    <img src="../../images/x.png" alt="" class="exit exit-password" style="width: 50px;">
    <input type="password" placeholder="Stare hasło" class="old-password">
    <p class="error error-old-password"></p>
    <input type="password" placeholder="Nowe hasło" class="new-password">
    <p class="error error-new-password"></p>
    <input type="password" placeholder="Potwierdź hasło" class="confirm-new-password">
    <p class="error error-confirm-new-password"></p>
    <p class="error does-not-match"></p>
    <button class="submit-edit-password">Edytuj</button>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js"></script>
<script src="../../js/HandleAccountSettings.js"></script>
