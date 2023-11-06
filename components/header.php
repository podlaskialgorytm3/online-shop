<head>
    <link rel="stylesheet" href="../css/header.css">
    <script src="https://cdn.tailwindcss.com"></script> 
</head>
<div id="header">
    <div class="header-left-side">
        <a href="index.php"><img src="../images/shop_icon.png" alt="Icon our shop!" style="width: 80px">  </a>          
    </div>
    <div class="header-right-side">
        <div class="left">
        <div id="simple-pages">

        </div>
        <div class="user-pages">
            <a href="../produtcs.php">Produkty</a>
        </div>
        </div>
        <div class="accounts">
            <img src="../images/my-account-5.png" alt="" class="account">
            <div class="login--wrapper">
                    <a href="login.php">Zaloguj się!</a>
                    <p>Nie masz konta?</p>
                    <a href="register.php">Zarejestruj się!</a>
                </div>
            <img src="../images/shopping_cart.png" alt="" class="entry-shop-cart">
        </div>
    </div>
</div>
<?php include 'shopping-cart.php'; ?>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="../js/GetLinks.js"></script>
<script src="../js/ShowAccountPanel.js"></script>