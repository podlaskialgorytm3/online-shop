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
            <input type="text" placeholder="Podaj imię i nazwisko.">
            <input type="text" placeholder="Podaj swój adres zamieszkania.">
            <input type="email" placeholder="Podaj swój adres e-mail.">
            <input type="number" placeholder="Podaj swój numer telefonu.">
        </div>
        <div class="payment-option">

        </div>
    </div>
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="/js/GetDeliveryOptions.js"></script>
</body>
</html>
