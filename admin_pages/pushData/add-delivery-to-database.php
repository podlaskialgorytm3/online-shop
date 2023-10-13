<?php

@include '../../config.php';


$pdo = new PDO("mysql:host=$hostname;dbname=$database", $login, $password);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$name = $_POST['nazwa'];
$address = $_POST['adres'];
$email = $_POST['email'];
$price = $_POST['cena'];


$sql = "INSERT INTO dostawcy (Nazwa,Adres,Email,Cena) VALUES ('$name','$address','$email',$price)";
$conn = mysqli_connect($hostname, $login, $password,$database);

if (mysqli_query($conn, $sql)) {
 	echo json_encode(array("statusCode"=>200));
} 
else {
	echo json_encode(array("statusCode"=>201));
}
mysqli_close($conn);

?>