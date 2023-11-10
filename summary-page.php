<!DOCTYPE html>
<html lang="en">
<head>
    <?php include __DIR__ . '/components/meta.php' ?>
    <link rel="stylesheet" href="/css/summary-page.css">
    <title>Podsumowanie zamówienia.</title>
</head>
<body>
    <?php include __DIR__ . '/components/bookmark.php' ?>
    <h1 class="page-title">Podsumowanie zamówienia.</h1>
    <div class="summary-container">
            <div class="delivery simple-block">
                <h2>Dostawa</h2>
                <div class="supplier"></div>
            </div>
            <div class="address-data simple-block">
                <h2>Adres dostawy</h2>
                <div class="address-data-element">
                    
                </div>
            </div>
            <div class="payment simple-block">

            </div>
            <div class="shop-cart simple-block">

            </div>
            <div class="summary simple-block">
                <p class="cart-value">
                    <p>Koszyk</p><p class="cart-value-number"></p>
                </p>
                <p class="delivery-value">
                    <p>Dostawa</p><p class="delivery-value-number"></p>
                </p>
                <p><p>Do zapłaty</p><b class="full-price"></b></p>
                <button class="buy-and-pay">Kupuje i płacę!</button>
            </div>
    </div>
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>  
    <script src="/js/SummaryData.js"></script>
</body>
</html>