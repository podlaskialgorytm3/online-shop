<?php
require_once '../../config.php';

$id = $_POST['id'];


$sql = "DELETE FROM dostawcy WHERE Id_dostawcy = '".$id."'"; 

echo $sql;

$conn->query($sql);

$conn->close();
