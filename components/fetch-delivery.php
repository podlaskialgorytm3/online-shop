<?php
require_once '../config.php';

$result = mysqli_query($conn, "SELECT * FROM dostawcy");

$data = array();
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}

echo json_encode($data);
exit();