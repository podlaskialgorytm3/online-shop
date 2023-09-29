<?php

@include "config.php";

$token = $_GET["token"];

$token_hash = hash("sha256",$token);

$mysqli = new mysqli(hostname: $hostname,username: $login,password: $password,database: $database);

$sql = "SELECT * FROM user WHERE reset_token_hash = ?";

$stmt = $mysqli->prepare($sql);

$stmt->bind_param("s",$token_hash);

$stmt->execute();

$result = $stmt->get_result();

$user = $result->fetch_assoc();

if($user === null){
    die("Token nie został odnaleziony!");
}

if(strtotime($user["reset_token_expires_at"]) <= time()){
    die("Token wygasł");
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php include 'components/meta.php' ?>
    <title>SKLEP M&D | Resetowanie Hasła</title>
    <link rel="stylesheet" href="css/register-form.css">
</head>
<body>
<?php include 'components/bookmark.php'; ?>
<div class="container">
    <h2>Zresetuj hasło!</h2>
    <form action="process-reset-password.php" method="post">

        <input type="hidden" name="token" value="<?php echo htmlspecialchars($token); ?>">

        <div class="form-group">
            <input type="password" id="password" name="password" placeholder="Wpisz nowe hasło!">
            <span class="password-error error-alert"></span>
        </div>
        <div class="form-group">
            <input type="password" id="password_confirmation" name="password_confirmation" placeholder="Wpisz ponownie nowe hasło!">
            <span class="confirm-password-error error-alert"></span>
        </div>
        <div class="form-group">
                <span class="not-matching error-alert"></span>
                <button class="send-code">Zmień hasło!</button>
        </div>
    </form>
</div>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="js/ResetPasswordValidation.js"></script>
</body>
</html>