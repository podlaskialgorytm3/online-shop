<?php
require_once '../../config.php';

$id = $_POST['id'];


$sql = "DELETE FROM ulubione_produkty WHERE Id_ulubiony_produkt = '".$id."'"; 

echo $sql;

$conn->query($sql);

$conn->close();
