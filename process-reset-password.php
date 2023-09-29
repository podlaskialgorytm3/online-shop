<?php
@include 'config.php';

$token = $_POST["token"];

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

$error = "";

//if($_POST['password'] !== $_POST['password_confirmation']){
  //  die("Hasła nie są takie same!");
//}

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
