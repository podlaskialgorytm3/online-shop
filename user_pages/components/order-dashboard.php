<head>
    <link rel="stylesheet" href="../../css/client-dashboard.css">
    <link rel="stylesheet" href="../../css/product-tables.css">
</head>
<div class="client-dashboard">
    <table class="table">
        <thead>
            <th>ID</th>
            <th>Data Zamówienia</th>
            <th>Status</th>
            <th>Dostawca</th>
            <th>Kwota</th>
            <th>Szczegóły</th>
        </thead>
        <tbody class="order">

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
            <th>Cena całkowita</th>
    </thead>
        <tbody id="detail-body">
        </tbody>
</table>
</div>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="../../js/GetOrderToUser.js"></script>