<?php

@include '../../config.php';


$pdo = new PDO("mysql:host=$hostname;dbname=$database", $login, $password);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$username = $_POST["username"];
$imie = $_POST["imie"];
$nazwisko = $_POST["nazwisko"];
$adres = $_POST["adres"];
$email = $_POST["email"];
$haslo = md5($_POST["haslo"]);
$typ = $_POST["typ"];
$notatka = $_POST["notatka"];


$sql = "INSERT INTO user (username,imie,nazwisko,adres,email,haslo,typ,notatka) 
VALUES ('$username','$imie','$nazwisko','$adres','$email','$haslo','$typ','$notatka')";
$conn = mysqli_connect($hostname, $login, $password,$database);

if (mysqli_query($conn, $sql)) {
 	echo json_encode(array("statusCode"=>200));
} 
else {
	echo json_encode(array("statusCode"=>201));
}
mysqli_close($conn);

?>