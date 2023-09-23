<?php
@include 'config.php';

session_start();

$hostname = 'localhost';
$user = 'root';
$password = '';
$database = 'sklep';
if(isset($_POST['submit'])){
    $email = $_POST['email'];
    $haslo = md5($_POST['password']);
    $select = "SELECT * FROM user WHERE email = '$email' && haslo='$haslo'";
    $result = mysqli_query($conn,$select);

    if(mysqli_num_rows($result) > 0){
    $row = mysqli_fetch_array($result);
    if($row['typ'] == 'admin'){
        $_SESSION['admin_name'] = $row['username'];
        header('location:admin_pages/admin.php');
    }
    elseif($row['typ'] == 'user'){
        $_SESSION['user_name'] = $row['username'];
        header('location:user_pages/user.php');
    }}}
    else{
    $error = "Nieprawidłowy e-mail lub hasło!";
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php include 'components/meta.php' ?>
    <title>SKLEP M&D | Logownaie</title>
    <link rel="stylesheet" href="css/register-form.css">
</head>
<body>
<div class="container">
        <h2>Zaloguj się!</h2>
        <form action="#" method="post">
            <div class="form-group">
                <input type="email" id="email" name="email" placeholder="Wpisz swój email!">
            </div>
            <div class="form-group">
                <input type="password" id="password" name="password" placeholder="Wpisz swoje hasło!">
            </div>
            <div class="form-group">
                <?php 
                    if(isset($error)){
                        echo '<span class="error-alert">'.$error.'</span>';
                    }
                ?>
                <input type="submit" name="submit" value="Zaloguj się" style="font-size: 18px;">
            </div>
            <div class="form-group">
                <p>Nie masz jeszcze konta? <a href="register.php">Zarejestruj się!</a></p>
            </div>
        </form>
    </div>


</body>
</html>