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
                <span class="register-username-error error-alert"></span>
            </div>
            <div class="form-group">
                <input type="text" id="firstName" name="firstName" placeholder="Wpisz swoje imię!">
                <span class="register-firstName-error error-alert"></span>
            </div>
            <div class="form-group">
                <input type="text" id="lastName" name="lastName" placeholder="Wpisz swoje nazwisko!">
                <span class="register-lastName-error error-alert"></span>
            </div>
            <div class="form-group">
                <input type="text" id="address" name="address" placeholder="Wpisz swój adres zamieszkania!">
                <span class="register-address-error error-alert"></span>
            </div>
            <div class="form-group">
                <input type="email" id="email" name="email" placeholder="Wpisz swój email!">
                <span class="register-email-error error-alert"></span>
            </div>
            <div class="form-group">
                <input type="password" id="password" name="password" placeholder="Wpisz swoje hasło!">
                <span class="register-password-error error-alert"></span>
            </div>
            <div class="form-group">
                <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Powtórz hasło!">
                <span class="register-confirmPassword-error error-alert"></span>
            </div>
            <div class="form-group">
                <input type="submit" value="Zarejestruj się" style="font-size: 18px;">
            </div>
            <div class="form-group">
                <p>Masz już konto? <a href="login.php">Zaloguj się!</a></p>
            </div>
        </form>
    </div>

    <script src="js/RegisterDateValidation.js"></script>
</body>
</html>