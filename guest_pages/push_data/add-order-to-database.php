<?php

@include '../../config.php';


$pdo = new PDO("mysql:host=$hostname;dbname=$database", $login, $password);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$id_order = $_POST["id_order"];
$email = $_POST["email"];
$id_delivery = $_POST["id_delivery"];
$id_user = 0;
if($_POST['id_user']){
	$id_user = $_POST['id_user'];
	$sql = "INSERT INTO zamowienia (Id_zamowienia,email,Id_dostawcy,ID_USER) 
VALUES ($id_order,'$email',$id_delivery,$id_user)";
$conn = mysqli_connect($hostname, $login, $password,$database);

if (mysqli_query($conn, $sql)) {
 	echo json_encode(array("statusCode"=>200));
} 
else {
	echo json_encode(array("statusCode"=>201));
}
mysqli_close($conn);
}
else{
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
}

?>