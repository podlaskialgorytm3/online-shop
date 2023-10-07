<?php

@include '../../config.php';


$pdo = new PDO("mysql:host=$hostname;dbname=$database", $login, $password);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$name_tag = mysqli_real_escape_string($conn,$_POST['nazwa_parametru']);
$description_tag = mysqli_real_escape_string($conn,$_POST['opis_parametru']);


$sql = "INSERT INTO parametry (nazwa_parametru,opis_parametru) 
VALUES ('$name_tag','$description_tag')";
$conn = mysqli_connect($hostname, $login, $password,$database);

if (mysqli_query($conn, $sql)) {
 	echo json_encode(array("statusCode"=>200));
} 
else {
	echo json_encode(array("statusCode"=>201));
}
mysqli_close($conn);

?>