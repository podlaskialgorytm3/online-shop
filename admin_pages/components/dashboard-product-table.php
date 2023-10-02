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
            <tr>
                <td>1</td>
                <td>Nike</td>
                <td>Buty</td>
                <td>DADDY SHOES</td>
                <td>1000</td>
                <td>32</td>
                <td>Bardzo zwyczajne buty do chodzenia.</td>
                <td>USUŃ</td>
                <td>EDYTUj</td>
            </tr>
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
            <tr>
                <td>1</td>
                <td>Nike</td>
                <td>Bardzo zwyczajne zdanie mające na celu uzupełnić opis.</td>
                <td>USUŃ</td>
                <td>EDYTUj</td>
            </tr>
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
            <tr>
                <td>1</td>
                <td>Nike</td>
                <td>Bardzo zwyczajne zdanie mające na celu uzupełnić opis.</td>
                <td>USUŃ</td>
                <td>EDYTUj</td>
            </tr>
        </tbody>
    </table>
    <div class="add-element">
        +
    </div>
</div>
<script src="../../js/ChangesProductTable.js"></script>