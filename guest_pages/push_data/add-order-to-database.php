<?php

@include '../../config.php';


$pdo = new PDO("mysql:host=$hostname;dbname=$database", $login, $password);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$id_order = $_POST["id_order"];
$email = $_POST["email"];
$id_delivery = $_POST["id_delivery"];


$sql = "INSERT INTO zamowienia (Id_zamowienia,email,Id_dostawcy) 
VALUES ($id_order,'$email',$id_delivery)";
$conn = mysqli_connect($hostname, $login, $password,$database);

if (mysqli_query($conn, $sql)) {
 	echo json_encode(array("statusCode"=>200));
} 
else {
	echo json_encode(array("statusCode"=>201));
}
mysqli_close($conn);

?>