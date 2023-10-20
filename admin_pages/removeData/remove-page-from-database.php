<?php
require_once '../../config.php';

$id = $_POST['id'];


$sql = "DELETE FROM strony WHERE id_strony = '".$id."'"; 

echo $sql;

$conn->query($sql);

$conn->close();
