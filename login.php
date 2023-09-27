<?php
@include 'config.php';

session_start();

$hostname = 'localhost';
$user = 'root';
$password = '';
$database = 'sklep';

$error = "";

if(isset($_POST['submit'])){
    $email = $_POST['email'];
    $haslo = md5($_POST['password']);
    $select = "SELECT * FROM user WHERE email = '$email' && haslo='$haslo'";
    $result = mysqli_query($conn,$select);

    if(mysqli_num_rows($result) > 0){
    $row = mysqli_fetch_array($result);
    if($row['typ'] == 'admin'){
        $_SESSION['user_admin'] = $row['username'];
        header('location:admin_pages/admin.php');
    }
    elseif($row['typ'] == 'user'){
        $_SESSION['user_name'] = $row['username'];
        header('location:user_pages/user.php');
    }}
    else{
    $error = "Nieprawidłowy e-mail lub hasło!";
    }}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php include 'components/meta.php' ?>
    <title>SKLEP M&D | Logownaie</title>
    <link rel="stylesheet" href="css/register-form.css">
</head>
<body>
    <?php include 'components/bookmark.php'; ?>
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
                <p>Nie masz jeszcze konta? <a href="register.php">Zarejestruj się!</a></p>
                <p>Zapomniałeś hasła? <a href="forgot-password.php">Przypomij hasło!</a></p>
            </div>
        </form>
</div>

</body>
</html>