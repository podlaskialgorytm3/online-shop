<?php

@include '../../config.php';


$pdo = new PDO("mysql:host=$hostname;dbname=$database", $login, $password);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$name_product = mysqli_real_escape_string($conn,$_POST['nazwa_produktu']);
$category = $_POST['id_kategorii'];
$tag = $_POST['id_parametru'];
$price_product = $_POST['cena'];
$stock_product = $_POST['stan_magazynowy'];
$description_product = mysqli_real_escape_string($conn,$_POST['opis_produktu']);
$URL = $_POST['URL'];

$sql = "INSERT INTO produkty (nazwa_produktu, id_kategorii, id_parametru, cena, stan_magazynowy, opis_produktu, URL) VALUES ('$name_product',$category, $tag, $price_product,$stock_product, '$description_product', '$URL')";
$conn = mysqli_connect($hostname, $login, $password,$database);

if (mysqli_query($conn, $sql)) {
 	echo json_encode(array("statusCode"=>200));
} 
else {
	echo json_encode(array("statusCode"=>201));
}
mysqli_close($conn);

?>