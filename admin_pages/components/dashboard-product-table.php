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
            <th>Kategoria</th>
            <th>Parametry</th>
            <th>Cena</th>
            <th>Stan magazynowy</th>
            <th>Opis Produktu</th>
            <th>Edytuj</th>
            <th>Usuń</th>
        </thead>
        <tbody id="product-body">
        </tbody>
    </table>
    <table class="tag-table table">
        <thead>
            <th>Id_parametru</th>
            <th>Typ Parametru</th>
            <th>Wartość Parametru</th>
            <th>Edytuj</th>
            <th>Usuń</th>
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
    <div class="add-element add-product" style="display: flex;">
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
            <select name="typ_parametru" placeholder="Wpisz ." class="name-tag">
                <option value="kolor">Kolor</option>
                <option value="rozmiar">Rozmiar</option>
            </select>
        </label>
        <label for="wartosc_parametru">
            <input type="text" name="wartosc_parametru" placeholder="Wpisz wartość parametru." class="description-tag">
            <span class="description-tag-error error-alert"></span>
        </label>
        <label for="submit">
            <input type="submit" name="submit" value="Dodaj Parametr" class="tag-submit">
        </label>
    </form>
</div>
<div class="add-pro-panel add-panel">
    <div class="exit exit-add-product"><img src="../../images/x.png" alt=""></div>
    <form action="" method="POST">
        <h2>Dodaj Produkt</h2>
        <label for="nazwa_produktu">
            <input type="text" name="nazwa_produktu" placeholder="Wpisz nazwę produktu." class="name-product">
            <span class="name-product-error error-alert"></span>
        </label>
        <label for="Kategoria">
            <select name="kategoria" class="category-to-product" multiple></select>
        </label>
        <label for="Parametr">
            <select name="parametr" class="tag-to-product"></select>
        </label>
        <label for="Cena">
            <input type="number" name="cena" placeholder="Wpisz cenę produktu." class="price-product">
            <span class="price-product-error error-alert"></span>
        </label>
        <label for="Stan Magazynowy">
            <input type="number" name="stan_magazynowy" placeholder="Wpisz stan magazynowy." class="stock-product">
            <span class="stock-product-error error-alert"></span>
        </label>
        <label for="URL">
            <input type="text" name="URL" placeholder="Wpisz URL zdjęcia produktu." class="URL-product">
            <span class="URL-product-error error-alert"></span>
        </label>
        <label for="opis_produktu">
            <input type="text" name="opis_produktu" placeholder="Wpisz opis produktu." class="description-product">
            <span class="description-product-error error-alert"></span>
        </label>
        <label for="submit">
            <input type="submit" name="submit" value="Dodaj Produkt" class="product-submit">
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
<div class="confirm-delete-product cf">
    <p>Czy na pewno chcesz usunąc produkt?</p>
    <div>
        <button class="confirm confirm-product">Tak</button>
        <button class="reject reject-product">Nie</button>
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
        <h2>Edytuj Parametr</h2>
        <label for="Nazwa parametru">
            <select name="typ_parametru" class="name-tag-edit">
                <option value="kolor">Kolor</option>
                <option value="rozmiar">Rozmiar</option>
            </select>
        </label>
        <label for="Opis Parametru">
            <input type="text" name="wartość_parametru" placeholder="Wpisz wartość parametru." class="description-tag-edit">
            <span class="description-tag-error-edit error-alert"></span>
        </label>
        <label for="submit">
            <input type="submit" name="submit" value="Edytuj Parametr" class="tag-edit-submit">
        </label>
    </form>
</div>
<div class="edit-pro-panel add-panel">
    <div class="exit exit-edit-product"><img src="../../images/x.png" alt=""></div>
    <form action="" method="POST">
        <h2>Edytuj Produkt</h2>
        <label for="nazwa_produktu">
            <input type="text" name="nazwa_produktu" placeholder="Wpisz nazwę produktu." class="name-product-edit">
            <span class="name-product-error-edit error-alert"></span>
        </label>
        <label for="Kategoria">
            <select name="kategoria" class="category-to-product-edit" multiple></select>
        </label>
        <label for="Parametr">
            <select name="parametr" class="tag-to-product-edit"></select>
        </label>
        <label for="Cena">
            <input type="number" name="cena" placeholder="Wpisz cenę produktu." class="price-product-edit">
            <span class="price-product-error-edit error-alert"></span>
        </label>
        <label for="Stan Magazynowy">
            <input type="number" name="stan_magazynowy" placeholder="Wpisz stan magazynowy." class="stock-product-edit">
            <span class="stock-product-error-edit error-alert"></span>
        </label>
        <label for="URL">
            <input type="text" name="URL" placeholder="Wpisz URL zdjęcia produktu." class="URL-product-edit">
            <span class="URL-product-error-edit error-alert"></span>
        </label>
        <label for="opis_produktu">
            <input type="text" name="opis_produktu" placeholder="Wpisz opis produktu." class="description-product-edit">
            <span class="description-product-error-edit error-alert"></span>
        </label>
        <label for="submit">
            <input type="submit" name="submit" value="Edytuj Produkt" class="product-submit-edit">
        </label>
    </form>
</div>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="../../js/ChangesProductTable.js"></script>
<script src="../../js/GetDataToTables.js"></script>
<script src="../../js/AddCategoryToDatabase.js"></script>
<script src="../../js/GetDataToTags.js"></script>
<script src="../../js/AddTagToDatabase.js"></script>
<script src="../../js/GetDataToProduct.js"></script>
<script src="../../js/AddProductToDatabase.js"></script>