<head>
 <link rel="stylesheet" href="../../css/dashboard.css">
 <link rel="stylesheet" href="../../css/product-tables.css">
</head>
<div class="dashboard">
    <div class="select-tables">
        <div class="select-table product">Produkty</div>
        <div class="select-table tag">Parametry</div>
        <div class="select-table category">Kategoria</div>
    </div>
    <table class="product-table table">
    <thead>
            <th>Id_Produktu</th>
            <th>Nazwa Produktu</th>
            <th>Kategorie</th>
            <th>Parametry</th>
            <th>Cena</th>
            <th>Stan magazynowy</th>
            <th>Opis Produktu</th>
            <th>Usuń</th>
            <th>Edytuj</th>
        </thead>
        <tbody id="tag-body">
        </tbody>
    </table>
    <table class="tag-table table">
        <thead>
            <th>Id_parametru</th>
            <th>Nazwa Parametru</th>
            <th>Opis Parametru</th>
            <th>Usuń</th>
            <th>Edytuj</th>
        </thead>
        <tbody id="tag-body">
        </tbody>
    <table class="category-table table">
        <thead>
            <th>Id_kategorii</th>
            <th>Nazwa Kategorii</th>
            <th>Opis Kategorii</th>
            <th>Usuń</th>
            <th>Edytuj</th>
        </thead>
        <tbody id="category-body">
        </tbody>
    </table>
    <div class="add-element add-product">
        +
    </div>
    <div class="add-element add-tag">
        +
    </div>
    <div class="add-element add-category">
        +
    </div>
</div>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="../../js/ChangesProductTable.js"></script>
<script src="../../js/GetDataToTables.js"></script>