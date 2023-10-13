<head>
 <link rel="stylesheet" href="../../css/dashboard.css">
 <link rel="stylesheet" href="../../css/product-tables.css">
</head>
<div class="dashboard">
<table class="delivery-table table">
    <thead>
            <th>Id_dostawcy</th>
            <th>Nazwa</th>
            <th>Adres</th>
            <th>Email</th>
            <th>Cena</th>
            <th>Usuń</th>
            <th>Edytuj</th>
    </thead>
    <tbody id="delivery-body">
    </tbody>
</table>
<div class="add-element add-delivery" style="display: flex;">
        +
</div>
</div>

<div class="add-delivery-panel add-panel">
    <div class="exit exit-add-delivery"><img src="../../images/x.png" alt=""></div>
    <form action="" method="POST">
        <h2>Dodaj Dostawcę</h2>
        <label for="Nazwa Dostawcy">
            <input type="text" name="nazwa_dostawcy" placeholder="Wpisz nazwę dostawcy." class="name-delivery">
            <span class="name-delivery-error error-alert"></span>
        </label>
        <label for="Adres">
            <input type="text" name="adres_dostawcy" placeholder="Wpisz adres dostawcy." class="address-delivery">
            <span class="address-delivery-error error-alert"></span>
        </label>
        <label for="Email">
            <input type="text" name="email_dostawcy" placeholder="Wpisz email dostawcy." class="email-delivery">
            <span class="email-delivery-error error-alert"></span>
        </label>
        <label for="Cena">
            <input type="number" name="cena_dostawy" placeholder="Wpisz cene dostawy." class="price-delivery">
            <span class="price-delivery-error error-alert"></span>
        </label>
        <label for="submit">
            <input type="submit" name="submit" value="Dodaj Dostawcę" class="delivery-submit">
        </label>
    </form>
</div>
<div class="success-add success-add-category">
    <img src="../../images/checked.png" alt=""><p class="success-text"></p>
</div>
<div class="confirm-delete-delivery cf">
    <p>Czy na pewno chcesz usunąc dostawce?</p>
    <div>
        <button class="confirm confirm-delivery">Tak</button>
        <button class="reject reject-delivery">Nie</button>
    </div>
</div>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="../../js/GetDataToDelivery.js"></script>
<script src="../../js/AddDeliveryToDatabase.js"></script>