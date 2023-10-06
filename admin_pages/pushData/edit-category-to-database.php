<?php

@include '../../config.php';


$pdo = new PDO("mysql:host=$hostname;dbname=$database", $login, $password);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$id = $_POST['id'];
$name_category = mysqli_real_escape_string($conn,$_POST['nazwa_kategorii']);
$description_category = mysqli_real_escape_string($conn,$_POST['opis_kategorii']);


$sql = "UPDATE kategorie SET
        nazwa_kategorii = '$name_category',
        opis_kategorii = '$description_category'
        WHERE id_kategorii = $id";
$conn = mysqli_connect($hostname, $login, $password,$database);

if (mysqli_query($conn, $sql)) {
 	echo json_encode(array("statusCode"=>200));
} 
else {
	echo json_encode(array("statusCode"=>201));
}
mysqli_close($conn);

?>