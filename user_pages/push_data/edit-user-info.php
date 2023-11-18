<?php

@include '../../config.php';


$pdo = new PDO("mysql:host=$hostname;dbname=$database", $login, $password);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$id = $_POST['id'];
$username = $_POST['username'];
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$address = $_POST['address'];

$sql = "UPDATE user SET
        imie = '$first_name',
        adres = '$address',
        nazwisko = '$last_name',
        username =  '$username'
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