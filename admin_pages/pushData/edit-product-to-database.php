<?php

@include '../../config.php';


$pdo = new PDO("mysql:host=$hostname;dbname=$database", $login, $password);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$id = $_POST['id'];
$name_product = mysqli_real_escape_string($conn,$_POST['nazwa_produktu']);
$category = $_POST['id_kategorii'];
$tag = $_POST['id_parametru'];
$price_product = $_POST['cena'];
$stock_product = $_POST['stan_magazynowy'];
$description_product = mysqli_real_escape_string($conn,$_POST['opis_produktu']);
$URL = $_POST['URL'];

$sql = "UPDATE produkty SET 
    nazwa_produktu = '$name_product',
    id_kategorii = $category,
    id_parametru = $tag,
    cena = $price_product,
    stan_magazynowy = $stock_product,
    opis_produktu = '$description_product',
    URL = '$URL'
    WHERE Id_produktu = $id";
$conn = mysqli_connect($hostname, $login, $password,$database);

if (mysqli_query($conn, $sql)) {
 	echo json_encode(array("statusCode"=>200));
} 
else {
	echo json_encode(array("statusCode"=>201));
}
mysqli_close($conn);

?>