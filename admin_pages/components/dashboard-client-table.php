<head>
 <link rel="stylesheet" href="../../css/dashboard.css">
 <link rel="stylesheet" href="../../css/product-tables.css">
</head>
<div class="dashboard">
<table class="user-table table">
    <thead>
            <th>Nazwa użytkownika</th>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Adres</th>
            <th>Email</th>
            <th>Typ</th>
            <th>Notatka</th>
            <th>Edytuj</th>
    </thead>
        <tbody id="user-body">
    </tbody>
</table>
</div>

<div class="edit-user-panel add-panel">
    <div class="exit exit-edit-user"><img src="../../images/x.png" alt=""></div>
    <form action="" method="POST">
        <h2>Edytuj Użytkownika</h2>
        <label for="Nazwa Użytkownika">
            <input type="text" name="username" placeholder="Wpisz nazwę użytkownika." class="username-edit">
            <span class="username-error-edit error-alert"></span>
        </label>
        <label for="Imię">
            <input type="text" name="imie" placeholder="Wpisz imię." class="name-edit">
            <span class="name-error-edit error-alert"></span>
        </label>
        <label for="Nazwisko">
            <input type="text" name="nazwisko" placeholder="Wpisz nazwisko." class="lastname-edit">
            <span class="lastname-error-edit error-alert"></span>
        </label>
        <label for="adres">
            <input type="text" name="adres" placeholder="Wpisz adres zamieszkania." class="address-edit">
            <span class="address-error-edit error-alert"></span>
        </label>
        <label for="email">
            <input type="text" name="email" placeholder="Wpisz email." class="email-edit">
            <span class="email-error-edit error-alert"></span>
        </label>
        <label for="typ">
            <select name="typ" class="type-edit">
                <option value="admin">Admin</option>
                <option value="user">Klient</option>
            </select>
        </label>
        <label for="notatka">
            <input type="text" name="notatka" placeholder="Wpisz notatkę użytkownikowi." class="note-edit">
            <span class="note-error-edit error-alert"></span>
        </label>
        <label for="submit">
            <input type="submit" name="submit" value="Edytuj Użytkownika" class="user-submit-edit">
        </label>
    </form>
</div>

<div class="add-user-panel add-panel">
    <div class="exit exit-add-user"><img src="../../images/x.png" alt=""></div>
    <form action="" method="POST">
        <h2>Dodaj Użytkownika</h2>
        <label for="Nazwa Użytkownika">
            <input type="text" name="username" placeholder="Wpisz nazwę użytkownika." class="username-add">
            <span class="username-error-add error-alert"></span>
        </label>
        <label for="Imię">
            <input type="text" name="imie" placeholder="Wpisz imię." class="name-add">
            <span class="name-error-add error-alert"></span>
        </label>
        <label for="Nazwisko">
            <input type="text" name="nazwisko" placeholder="Wpisz nazwisko." class="lastname-add">
            <span class="lastname-error-add error-alert"></span>
        </label>
        <label for="adres">
            <input type="text" name="adres" placeholder="Wpisz adres zamieszkania." class="address-add">
            <span class="address-error-add error-alert"></span>
        </label>
        <label for="haslo">
            <input type="password" name="haslo" placeholder="Wpisz hasło." class="password-add">
            <span class="password-error-add error-alert"></span>
        </label>
        <label for="email">
            <input type="text" name="email" placeholder="Wpisz email." class="email-add">
            <span class="email-error-add error-alert"></span>
        </label>
        <label for="typ">
            <select name="typ" class="type-add">
                <option value="worker">Pracownik</option>
            </select>
        </label>
        <label for="notatka">
            <input type="text" name="notatka" placeholder="Wpisz notatkę użytkownikowi." class="note-add">
        </label>
        <label for="submit">
            <input type="submit" name="submit" value="Dodaj użytkownika" class="user-submit-add">
        </label>
    </form>
</div>
<div class="add-element add-worker" style="display: flex; position:absolute; right: 5px; bottom: 40px;">
        +
</div>
<div class="success-add success-add-category">
    <img src="../../images/checked.png" alt=""><p class="success-text"></p>
</div>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="../../js/GetDataToClients.js"></script>
<script src="../../js/AddUsersToDatabase.js"></script>