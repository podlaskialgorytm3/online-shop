<?php

include 'config.php';

$hostname = 'localhost';
$user = 'root';
$password = '';
$database = 'sklep';

$pdo = new PDO("mysql:host=$hostname;dbname=$database", $user, $password);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$username = mysqli_real_escape_string($conn,$_POST['username']);
$imie = mysqli_real_escape_string($conn,$_POST['imie']);
$nazwisko = mysqli_real_escape_string($conn,$_POST['nazwisko']);
$adres = mysqli_real_escape_string($conn,$_POST['adres']);
$email = mysqli_real_escape_string($conn,$_POST['email']);
$haslo = md5($_POST['haslo']);

$sql = "INSERT INTO user (username,imie,nazwisko,adres,email,haslo) 
VALUES ('$username','$imie','$nazwisko','$adres','$email','$haslo')";
$conn = mysqli_connect($hostname, $user, $password,$database);

if (mysqli_query($conn, $sql)) {
    ob_start();
    header('location: index.php');
    ob_end();
 	echo json_encode(array("statusCode"=>200));
} 
else {
	echo json_encode(array("statusCode"=>201));
}
mysqli_close($conn);

?>
