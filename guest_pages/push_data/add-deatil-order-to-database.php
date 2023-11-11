<?php

@include '../../config.php';


$pdo = new PDO("mysql:host=$hostname;dbname=$database", $login, $password);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$id_order = $_POST["id_order"];
$id_product = $_POST["id_product"];
$quanity = $_POST["quanity"];
$id_color = $_POST["id_color"];
$id_size = $_POST["id_size"];


$sql = "INSERT INTO zamowienia_produkty (Id_zamowienia,Id_produktu,ilość,Id_koloru,Id_rozmiaru) 
VALUES ($id_order,$id_product,$quanity,$id_color,$id_size)";
$conn = mysqli_connect($hostname, $login, $password,$database);

if (mysqli_query($conn, $sql)) {
 	echo json_encode(array("statusCode"=>200));
} 
else {
	echo json_encode(array("statusCode"=>201));
}
mysqli_close($conn);

?>