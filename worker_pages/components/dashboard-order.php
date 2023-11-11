<head>
 <link rel="stylesheet" href="../../css/dashboard.css">
 <link rel="stylesheet" href="../../css/product-tables.css">
</head>
<div class="dashboard">
<table class="order-table table">
    <thead>
            <th>Id_zamówienia</th>
            <th>Email</th>
            <th>Data Zamówienia</th>
            <th>Status</th>
            <th>Dostawca</th>
            <th>Kwota</th>
            <th>Szczegóły</th>
            <th>Zmień status</th>
    </thead>
        <tbody id="order-body">
    </tbody>
</table>
</div>

<div class="add-panel show-delivery-panel">
<div class="exit exit-showing"><img src="../../images/x.png" alt=""></div>
<table class="detail-table table">
    <thead>
            <th>Produkt</th>
            <th>Rozmiar</th>
            <th>Kolor</th>
            <th>Cena detaliczna</th>
            <th>Ilość</th>
            <th>Cena</th>
    </thead>
        <tbody id="detail-body">
        </tbody>
</table>
</div>
<div class="add-panel change-status">
<div class="exit exit-order-edit"><img src="../../images/x.png" alt=""></div>
    <h2>Zmień status</h2>
    <form action="" method="POST">
        <label for="status">
        <select name="status" id="status-select">
            <option value="W trakcie przygotowywania">W trakcie przygotowywania</option>
            <option value="Wysłana">Wysłana</option>
            <option value="Oczekująca na odbiór">Oczekująca na odbiór</option>
            <option value="Dostarczona">Dostarczona</option>
        </select>
        </label>
        <label for="submit">
            <input type="submit" name="submit" value="Zmień status" class="change-status-btn">
        </label>
    </form>
</div>
<div class="success-add success-add-category">
    <img src="../../images/checked.png" alt=""><p class="success-text"></p>
</div>

<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="../../js/GetDataToOrder.js"></script>