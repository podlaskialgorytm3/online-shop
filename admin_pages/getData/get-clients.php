<?php

require_once '../../config.php';
try {
    $pdo = new PDO('mysql:host='.$hostname.';dbname='.$database, $login, $password);
    $pdo->query('SET NAMES utf8');
} catch (PDOException $e) {
    echo 'Połączenie nie mogło zostać utworzone: ' . $e->getMessage();
    exit();
}

$stmt = $pdo->query('SELECT * FROM user');

$html = '';
foreach ($stmt as $row){
    $html .=  '<tr>';
    $html .=  '<td>' . $row['ID_USER'] . '</td>';
    $html .=  '<td>' . $row['username'] . '</td>';
    $html .=  '<td>' . $row['imie'] . '</td>';
    $html .=  '<td>' . $row['nazwisko'] . '</td>';
    $html .=  '<td>' . $row['adres'] . '</td>';
    $html .=  '<td>' . $row['email'] . '</td>';
    $html .=  '<td>' . $row['typ'] . '</td>';
    $html .=  '<td><button class="edit edit-category" data-id="'.$row['ID_USER'].'"><img src="../../images/edit.png" style="width: 30px" alt=""></button></td>';
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