<?php
@include 'config.php';

session_start();

$error = "";

if(isset($_POST['submit'])){
    $email = $_POST['email'];
    $haslo = md5($_POST['password']);
    $select = "SELECT * FROM user WHERE email = '$email' && haslo='$haslo'";
    $result = mysqli_query($conn,$select);

    if(mysqli_num_rows($result) > 0){
    $row = mysqli_fetch_array($result);
    if($row['typ'] == 'admin'){
        $_SESSION['user_admin'] = $row['ID_USER'];
        header('location:admin_pages/admin.php');
    }
    elseif($row['typ'] == 'user'){
        $_SESSION['user_name'] = $row['ID_USER'];
        header('location:user_pages/delivery-page.php');
    }}
    else{
    $error = "Nieprawidłowy e-mail lub hasło!";
    }}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php include __DIR__ . '/components/meta.php' ?>
    <link rel="stylesheet" href="css/register-form.css">
    <link rel="stylesheet" href="css/waiting.css">
    <title>Logowanie lub Rejestracja</title>
</head>
<body>
    <div class="waiting-container">
        <div class="login-side">
        <div class="container">
        <h2>Zaloguj się!</h2>
        <form action="#" method="post">
            <div class="form-group">
                <input type="email" id="email" name="email" placeholder="Wpisz swój email!">
                <?php
                    if ($_SERVER["REQUEST_METHOD"] == "POST"){
                        if(empty($_POST["email"])){
                            echo  '<span class="error-alert">Podano puste pole!</span>';
                        }
                    }
                ?>
            </div>
            <div class="form-group">
                <input type="password" id="password" name="password" placeholder="Wpisz swoje hasło!">
                <?php
                    if ($_SERVER["REQUEST_METHOD"] == "POST"){
                        if(empty($_POST["password"])){
                            echo  '<span class="error-alert">Podano puste pole!</span>';
                        }
                    }
                    if($error){
                        echo  '<span class="error-alert">'.$error.'</span>';
                    }
                ?>
            </div>
            <div class="form-group">
                <input type="submit" name="submit" value="Zaloguj się" style="font-size: 18px;">
            </div>
            <div class="form-group">
                <p>Zapomniałeś hasła? <a href="forgot-password.php">Przypomij hasło!</a></p>
            </div>
        </form>
</div>
        </div>
        <div class="waiting-right-side">
            <div class="without-login">
                <h1>Kontynuuj bez logowania.</h1>
                <p>Jeśli nie zalogujesz się na swoje konto, nie będziesz mógł przeglądać swojej historii zamówień. Dzięki dostępowi do tej historii, będziesz miał pełen wgląd w swoje wcześniejsze zakupy, co ułatwi śledzenie transakcji i historii zakupów.</p>
                <a href="/delivery-page.php">Kontynuuj jako gość</a>
            </div>
            <div class="register-side">
                <h1>Załóż konto w 30 sekund!</h1>
                <a href="/register.php">Zarejestruj się!</a>
            </div>
        </div>
    </div>
</body>
</html>