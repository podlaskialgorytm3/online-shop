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
        <tbody id="product-body">
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
            <th>Edytuj</th>
            <th>Usuń</th>
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
<div class="add-product-panel add-panel">
    
</div>
<div class="add-category-panel add-panel">
    <div class="exit exit-add-category"><img src="../../images/x.png" alt=""></div>
    <form action="" method="POST">
        <h2>Dodaj Kategorię</h2>
        <label for="nazwa_kategorii">
            <input type="text" name="nazwa_kategorii" placeholder="Wpisz nazwę kategorii." class="name-category">
            <span class="name-category-error error-alert"></span>
        </label>
        <label for="opis_kategorii">
            <input type="text" name="opis_kategorii" placeholder="Wpisz opis kategorii." class="description-category">
            <span class="description-category-error error-alert"></span>
        </label>
        <label for="submit">
            <input type="submit" name="submit" value="Dodaj Kategorie" class="category-submit">
        </label>
    </form>
</div>
<div class="add-tag-panel add-panel">
    <div class="exit exit-add-tag"><img src="../../images/x.png" alt=""></div>
    <form action="" method="POST">
        <h2>Dodaj Parametr</h2>
        <label for="nazwa_parametru">
            <input type="text" name="nazwa_parametru" placeholder="Wpisz nazwę paramtetru." class="name-tag">
            <span class="name-tag-error error-alert"></span>
        </label>
        <label for="opis_kategorii">
            <input type="text" name="opis_parametru" placeholder="Wpisz opis parametru." class="description-tag">
            <span class="description-tag-error error-alert"></span>
        </label>
        <label for="submit">
            <input type="submit" name="submit" value="Dodaj Parametr" class="tag-submit">
        </label>
    </form>
</div>
<div class="success-add success-add-category">
    <img src="../../images/checked.png" alt=""><p class="success-text"></p>
</div>
<div class="confirm-delete cf">
    <p>Czy na pewno chcesz usunąc kategorię?</p>
    <div>
        <button class="confirm confirm-category">Tak</button>
        <button class="reject reject-category">Nie</button>
    </div>
</div>
<div class="confirm-delete-tag cf">
    <p>Czy na pewno chcesz usunąc parametr?</p>
    <div>
        <button class="confirm confirm-tag">Tak</button>
        <button class="reject reject-tag">Nie</button>
    </div>
</div>
<div class="edit-category-panel add-panel">
    <div class="exit exit-edit-category"><img src="../../images/x.png" alt=""></div>
    <form action="" method="POST">
        <h2>Edytuj kategorię</h2>
        <label for="nazwa_kategorii">
            <input type="text" name="nazwa_kategorii" placeholder="Wpisz nazwę kategorii." class="name-category-edit">
            <span class="name-category-error-edit error-alert"></span>
        </label>
        <label for="opis_kategorii">
            <input type="text" name="opis_kategorii" placeholder="Wpisz opis kategorii." class="description-category-edit">
            <span class="description-category-error-edit error-alert"></span>
        </label>
        <label for="submit">
            <input type="submit" name="submit" value="Edytuj Kategorie" class="category-edit-submit">
        </label>
    </form>
</div>
<div class="edit-tag-panel add-panel">
    <div class="exit exit-edit-tag"><img src="../../images/x.png" alt=""></div>
    <form action="" method="POST">
        <h2>Edytuj parametr</h2>
        <label for="Nazwa parametru">
            <input type="text" name="nazwa_parametru" placeholder="Wpisz nazwę parametru." class="name-tag-edit">
            <span class="name-tag-error-edit error-alert"></span>
        </label>
        <label for="Opis Parametru">
            <input type="text" name="opis_parametru" placeholder="Wpisz opis parametru." class="description-tag-edit">
            <span class="description-tag-error-edit error-alert"></span>
        </label>
        <label for="submit">
            <input type="submit" name="submit" value="Edytuj Parametr" class="tag-edit-submit">
        </label>
    </form>
</div>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="../../js/ChangesProductTable.js"></script>
<script src="../../js/GetDataToTables.js" type="module"></script>
<script src="../../js/AddCategoryToDatabase.js"></script>
<script src="../../js/GetDataToTags.js"></script>
<script src="../../js/AddTagToDatabase.js"></script>