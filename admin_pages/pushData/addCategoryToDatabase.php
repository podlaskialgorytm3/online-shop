<?php

@include '../../config.php';


$pdo = new PDO("mysql:host=$hostname;dbname=$database", $login, $password);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$name_category = mysqli_real_escape_string($conn,$_POST['nazwa_kategorii']);
$description_category = mysqli_real_escape_string($conn,$_POST['opis_kategorii']);


$sql = "INSERT INTO kategorie (nazwa_kategorii,opis_kategorii) 
VALUES ('$name_category','$description_category')";
$conn = mysqli_connect($hostname, $login, $password,$database);

if (mysqli_query($conn, $sql)) {
 	echo json_encode(array("statusCode"=>200));
} 
else {
	echo json_encode(array("statusCode"=>201));
}
mysqli_close($conn);

?>