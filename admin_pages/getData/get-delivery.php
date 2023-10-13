<?php

require_once '../../config.php';
try {
    $pdo = new PDO('mysql:host='.$hostname.';dbname='.$database, $login, $password);
    $pdo->query('SET NAMES utf8');
} catch (PDOException $e) {
    echo 'Połączenie nie mogło zostać utworzone: ' . $e->getMessage();
    exit();
}

$stmt = $pdo->query('SELECT * FROM dostawcy');



$html = '';
foreach ($stmt as $row){
    $html .=  '<tr>';
    $html .=  '<td>' . $row['Id_dostawcy'] . '</td>';
    $html .=  '<td>' . $row['Nazwa'] . '</td>';
    $html .=  '<td>' . $row['Adres'] . '</td>';
    $html .=  '<td>' . $row['Email'] . '</td>';
    $html .=  '<td>' . $row['Cena'] . '</td>';
    $html .=  '<td><button class="edit edit-deliver" data-id="'.$row['Id_dostawcy'].'"><img src="../../images/edit.png" style="width: 30px" alt=""></button></td>';
    $html .=  '<td><button class="delete delete-delivery" data-id="'.$row['Id_dostawcy'].'"><img src="../../images/delete.png" style="width: 30px"  alt=""></button></td>';
    $html .=  '</tr>';
}

sleep(1);

echo $html;
?>
<!DOCTYPE html>
<html lang="en">
<head>
</head>
<body>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

</body>
</html>