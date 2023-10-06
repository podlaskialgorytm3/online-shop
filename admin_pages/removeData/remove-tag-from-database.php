<?php
require_once '../../config.php';

$id = $_POST['id'];


$sql = "DELETE FROM parametry WHERE id_parametru = '".$id."'"; 

echo $sql;

$conn->query($sql);

$conn->close();
