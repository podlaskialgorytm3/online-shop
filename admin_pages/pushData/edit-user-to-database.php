<?php

@include '../../config.php';


$pdo = new PDO("mysql:host=$hostname;dbname=$database", $login, $password);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$id = $_POST['id'];
$username = $_POST['username'];
$name = $_POST['imie'];
$lastname = $_POST['nazwisko'];
$address = $_POST['adres'];
$email = $_POST['email'];
$type = $_POST['typ'];
$note = $_POST['notatka'];

$sql = "UPDATE user  SET 
    username = '$username',
    imie = '$name',
    nazwisko = '$lastname',
    adres = '$address',
    email = '$email',
    typ = '$type',
    notatka = '$note'
    WHERE ID_USER = $id";
$conn = mysqli_connect($hostname, $login, $password,$database);

if (mysqli_query($conn, $sql)) {
 	echo json_encode(array("statusCode"=>200));
} 
else {
	echo json_encode(array("statusCode"=>201));
}
mysqli_close($conn);

?>