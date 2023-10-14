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
            <th>Edytuj</th>
    </thead>
        <tbody id="order-body">
    </tbody>
</table>
</div>

<div class="add-panel show-delivery-panel">
<table class="detail-table table">
    <thead>
            <th>Produkt</th>
            <th>Ilość</th>
            <th>Cena</th>
    </thead>
        <tbody id="detail-body">
        </tbody>
</table>
</div>


<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="../../js/GetDataToOrder.js"></script>