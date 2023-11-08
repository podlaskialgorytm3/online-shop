<!DOCTYPE html>
<html lang="en">
<head>
    <?php include __DIR__ . '/components/meta.php' ?>
    <link rel="stylesheet" href="/css/delivery.css">
    <title>Dostawa i płatność</title>
</head>
<body>
    <?php include __DIR__ . '/components/bookmark.php' ?>
    <div class="title-text"><h1>Dostawa i płatność</h1></div>
    <div class="delivery-container">
        <div class="delivery-option">

        </div>
        <div class="user-data-option">
            <h2>Podaj swoje dane.</h2>
            <input type="text" placeholder="Podaj imię i nazwisko." class="name">
            <span class="name-error error"></span>
            <input type="text" placeholder="Podaj swój adres zamieszkania." class="address">
            <span class="address-error error"></span>
            <input type="email" placeholder="Podaj swój adres e-mail." class="email">
            <span class="email-error error"></span>
            <input type="number" placeholder="Podaj swój numer telefonu." class="number">
            <span class="number-error error"></span>
        </div>
        <div class="payment-option">

        </div>
        <button class="end-btn">Podsumuj zamówienie</button>
        <div class="error-add">
             <img src="/images/x.png" alt=""><p class="error-text"></p>
        </div>
    </div>
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="/js/GetDeliveryOptions.js"></script>
</body>
</html>
