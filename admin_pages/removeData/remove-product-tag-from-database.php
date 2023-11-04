<?php
require_once '../../config.php';

$id = $_POST['id'];


$sql = "DELETE FROM produkty_parametry WHERE Id_produktu = '".$id."'"; 

echo $sql;

$conn->query($sql);

$conn->close();
