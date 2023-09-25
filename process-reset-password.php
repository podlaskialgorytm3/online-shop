<?php

$token = $_POST["token"];

$token_hash = hash("sha256",$token);

$mysqli = new mysqli(hostname: "localhost",username: "root",password: "",database: "sklep");

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
if($_POST['password'] !== $_POST['password_confirmation']){
    die("Hasła nie są takie same!");
}

$password = md5($_POST['password']);

$sql = "UPDATE user SET
            haslo = ?,
            reset_token_hash = NULL,
            reset_token_expires_at = NULL
        WHERE ID_USER = ?";

$stmt = $mysqli->prepare($sql);

$stmt->bind_param("ss",$password,$user['ID_USER']);

$stmt->execute();

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>SKLEP M&D</title>
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/register-form.css">
</head>
<body>
<div class="container">
    <div class="form-group">
        <h2>Hasło zostało zmienione!</h2>
        <p>Chcesz się zalogować? <a href="/login.php">Zaloguj się!</a></p>
    </div>
</div>
</body>
</html>