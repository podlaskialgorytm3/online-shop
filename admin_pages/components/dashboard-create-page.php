<head>
 <link rel="stylesheet" href="../../css/dashboard.css">
 <link rel="stylesheet" href="../../css/product-tables.css">
 <link href='https://cdn.jsdelivr.net/npm/froala-editor@latest/css/froala_editor.pkgd.min.css' rel='stylesheet' type='text/css' />
</head>
<div class="dashboard">
<table class="page-table table">
    <thead>
            <th>Id_strony</th>
            <th>Tytuł</th>
            <th>Opis</th>
            <th>Status</th>
            <th>Edytuj</th>
            <th>Usuń</th>
    </thead>
    <tbody id="page-body">
    </tbody>
</table>
<div class="add-element add-page" style="display: flex;">
        +
</div>
</div>


<div class="add-page-panel add-panel">
    <div class="exit exit-add-page"><img src="../../images/x.png" alt=""></div>
    <form action="" method="POST">
        <h2>Dodaj Stronę</h2>
        <label for="Tytuł">
            <input type="text" name="tytul_strony" placeholder="Wpisz tytuł strony." class="title-page">
            <span class="title-page-error error-alert"></span>
        </label>
        <label for="Opis">
            <textarea name="opis_strony" class="description-page" cols="30" rows="10" placeholder="Wpisz opis strony"></textarea>
            <span class="description-page-error error-alert"></span>
        </label>
        <label for="Status">
            <select name="" class="status-page">
                <option value="widoczny">widoczny</option>
                <option value="ukryty">ukryty</option>
            </select>
        </label>
        <label for="submit">
            <input type="submit" name="submit" value="Dodaj Stronę" class="page-submit">
        </label>
    </form>
</div>
<div class="success-add">
    <img src="../../images/checked.png" alt=""><p class="success-text"></p>
</div>
<div class="confirm-delete-page cf">
    <p>Czy na pewno chcesz usunąc stronę?</p>
    <div>
        <button class="confirm confirm-page">Tak</button>
        <button class="reject reject-page">Nie</button>
    </div>
</div>
<div class="edit-page-panel add-panel">
    <div class="exit exit-edit-page"><img src="../../images/x.png" alt=""></div>
    <form action="" method="POST">
        <h2>Edytuj Stronę</h2>
        <label for="Tytuł">
            <input type="text" name="tytul_strony" placeholder="Wpisz tytuł strony." class="title-page-edit">
            <span class="title-page-error-edit error-alert"></span>
        </label>
        <label for="Opis">
            <textarea name="opis_strony" class="description-page-edit" cols="30" rows="10" placeholder="Wpisz opis strony"></textarea>
            <span class="description-page-error-edit error-alert"></span>
        </label>
        <label for="Status">
            <select name="" class="status-page-edit">
                <option value="widoczny">widoczny</option>
                <option value="ukryty">ukryty</option>
            </select>
        </label>
        <label for="submit">
            <input type="submit" name="submit" value="Edytuj Stronę" class="page-submit-edit">
        </label>
    </form>
</div>


<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="../../js/GetPage.js"></script>
<script src="../../js/AddPageToDatabase.js"></script>
<script type='text/javascript' src='https://cdn.jsdelivr.net/npm/froala-editor@latest/js/froala_editor.pkgd.min.js'></script>  	
<script>
	let editor = new FroalaEditor('.description-page');	
    let editorToEdit = new FroalaEditor('.description-page-edit');	
</script>	