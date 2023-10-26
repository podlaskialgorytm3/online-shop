<head>
 <link rel="stylesheet" href="../../css/dashboard.css">
 <link rel="stylesheet" href="../../css/main-admin.css">
</head>
<div class="dashboard admin-dash">
    <div class="admin-information">
        <div class="header-info p-data">
            <img src="../../images/admin-img.png" alt="" class="admin-img">
        </div>
        <p class="p-data"><b>Nick: </b><span class="nick">ada</span></p>
        <p class="p-data"><b>Imię: </b><span class="name"></span></p>
        <p class="p-data"><b>Nazwisko: </b><span class="surname"></span></p>
        <p class="p-data"><b>Adres e-mail: </b><span class="email"></span></p>
        <p class="p-data"><b>Adres zamieszaknia: </b><span class="address"></span></p>
        <p class="p-data"><b>Notatka: </b><span class="note"></span></p>
    </div>
    <div class="revanues-dash">
        <p class="p-data rev">
            <b>Przychody ogólne:</b><span class="revanues"></span>
        </p>
    </div>
</div>
<input type="hidden" value="<?php echo $_SESSION['user_admin']; ?>">
<script src="../../js/GetDataToAdmin.js"></script>