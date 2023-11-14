<head>
    <link rel="stylesheet" href="../css/header.css">
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<div id="header">
    <div class="header-left-side">
        <a href="../../user_pages/user.php"><img src="../images/shop_icon.png" alt="Icon our shop!" style="width: 80px">  </a>          
    </div>
    <div class="header-right-side">
        <div class="left">
        <div id="simple-pages">

        </div>
        <div class="user-pages">
            <a href="../../user_pages/products.php">Produkty</a>
        </div>
        </div>
        <div class="accounts" style="width: 200px;">
            <a href="../../user_pages/shopping-cart-page.php" style="background-color: transparent;"><img src="../images/shopping_cart.png" alt="" class="entry-shop-cart"></a>
            <a href="../../user_pages/my-account.php" style="background-color: transparent;"><img src="../../images/my-account-5.png" alt="Moje konto!"></a>
            <a href="../../logout.php" title="Wyloguj się!" style="background-color: transparent;"><img src="../../images/logout.png" style="" alt="Wyloguj się"></a>
        </div>
        <h1>
    </div>
</div>
<?php include '../components/shopping-cart.php'; ?>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="../js/GetLinks.js"></script>
<script src="../js/ShowAccountPanel.js"></script>