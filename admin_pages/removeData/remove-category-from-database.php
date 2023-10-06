<?php
require_once '../../config.php';

$id = $_POST['id'];


$sql = "DELETE FROM kategorie WHERE id_kategorii = '".$id."'"; 

echo $sql;

$conn->query($sql);

$conn->close();
