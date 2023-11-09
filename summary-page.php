<!DOCTYPE html>
<html lang="en">
<head>
    <?php include __DIR__ . '/components/meta.php' ?>
    <link rel="stylesheet" href="style.css">
    <title>Podsumowanie zamówienia.</title>
</head>
<body>
    <?php include __DIR__ . '/components/bookmark.php' ?>
    <h1 class="page-title">Podsumowanie zamówienia.</h1>
    <div class="summary-container">
            <div class="order-value">

            </div>
            <div class="delivery">

            </div>
            <div class="address-data">

            </div>
            <div class="payment">

            </div>
            <div class="shop-cart">

            </div>
            <div class="summary">
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
</body>
</html>