<head>
 <link rel="stylesheet" href="../../css/dashboard.css">
 <link rel="stylesheet" href="../../css/main-admin.css">
</head>
<div class="dashboard">
    <div class="admin-information">
        <div class="header-info">
            <img src="../../images/admin-img.png" alt="" class="admin-img">
            <h2>nick: <h2 class="nick"></h2></h2>
        </div>
        <p><b>Imię: </b><p class="name"></p></p>
        <p><b>Nazwisko </b><p class="surname"></p></p>
        <p><b>Adres e-mail: </b><p class="email"></p></p>
        <p><b>Adres zamieszaknia: </b><p class="address"></p></p>
        <p><b>Notatka: </b><p class="note"></p></p>
    </div>
</div>
<input type="hidden" value="<?php echo $_SESSION['user_admin']; ?>">
<script src="../../js/GetDataToAdmin.js"></script>