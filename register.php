<!DOCTYPE html>
<html lang="en">
<head>
    <?php include 'components/meta.php' ?>
    <title>SKLEP M&D | REJESTRACJA</title>
    <link rel="stylesheet" href="css/register-form.css">
</head>
<body>
<div class="container">
        <h2>Zarejestruj się!</h2>
        <form action="#" method="post">
            <div class="form-group">
                <input type="text" id="username" name="username" placeholder="Wpisz swoją nazwę użytkownika!">
            </div>
            <div class="form-group">
                <input type="text" id="firstName" name="firstName" placeholder="Wpisz swoje imię!">
            </div>
            <div class="form-group">
                <input type="text" id="lastName" name="lastName" placeholder="Wpisz swoje nazwisko!">
            </div>
            <div class="form-group">
                <input type="text" id="address" name="address" placeholder="Wpisz swój adres zamieszkania!">
            </div>
            <div class="form-group">
                <input type="email" id="email" name="email" placeholder="Wpisz swój email!">
            </div>
            <div class="form-group">
                <input type="password" id="password" name="password" placeholder="Wpisz swoje hasło!">
            </div>
            <div class="form-group">
                <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Powtórz hasło!">
            </div>
            <div class="form-group">
                <input type="submit" value="Zarejestruj się" style="font-size: 18px;">
            </div>
            <div class="form-group">
                <p>Masz już konto? <a href="login.php">Zaloguj się!</a></p>
            </div>
        </form>
    </div>


</body>
</html>